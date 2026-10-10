import os
import time

from dotenv import load_dotenv
from pypdf import PdfReader
from sentence_transformers import SentenceTransformer
from pinecone import Pinecone, ServerlessSpec


# Load environment variables
load_dotenv()


PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
INDEX_NAME = os.getenv("PINECONE_INDEX_NAME")


# Check API key
if not PINECONE_API_KEY:
    raise ValueError("PINECONE_API_KEY not found in .env")


# Pinecone connection
pc = Pinecone(
    api_key=PINECONE_API_KEY
)


# Embedding model
embedding_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


# This model produces 384-dimensional vectors
DIMENSION = 384


def extract_text_from_pdf(pdf_path):

    reader = PdfReader(pdf_path)

    text = ""

    for page in reader.pages:

        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    return text


def chunk_text(text, chunk_size=500, overlap=100):

    chunks = []

    start = 0

    while start < len(text):

        end = start + chunk_size

        chunk = text[start:end]

        if chunk.strip():
            chunks.append(chunk)

        start += chunk_size - overlap

    return chunks


# Create Pinecone index if it doesn't exist
if not pc.has_index(INDEX_NAME):

    print("Creating Pinecone index...")

    pc.create_index(

        name=INDEX_NAME,

        dimension=DIMENSION,

        metric="cosine",

        spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1"
        )

    )

    print("Waiting for index to be ready...")

    time.sleep(10)


print("Connecting to Pinecone index...")

index = pc.Index(INDEX_NAME)


def upload_pdf(pdf_path, namespace):

    print("\n-----------------------------")

    print(f"Processing: {pdf_path}")

    # Read PDF
    text = extract_text_from_pdf(pdf_path)

    # Create chunks
    chunks = chunk_text(text)

    print(f"Total chunks: {len(chunks)}")


    vectors = []


    for i, chunk in enumerate(chunks):

        # Create embedding
        embedding = embedding_model.encode(
            chunk
        ).tolist()


        vector = {

            "id": f"{namespace}-{i}",

            "values": embedding,

            "metadata": {

                "text": chunk,

                "source": os.path.basename(
                    pdf_path
                )

            }

        }


        vectors.append(vector)


    # Upload vectors in batches
    batch_size = 50


    for i in range(

        0,

        len(vectors),

        batch_size

    ):

        batch = vectors[
            i:i + batch_size
        ]


        index.upsert(

            vectors=batch,

            namespace=namespace

        )


    print(
        f"Uploaded {len(vectors)} vectors "
        f"to namespace: {namespace}"
    )


# Get current folder
BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)


DATA_DIR = os.path.join(
    BASE_DIR,
    "data"
)


# Upload AI/ML PDF
upload_pdf(

    os.path.join(
        DATA_DIR,
        "ai_ml_notes.pdf"
    ),

    "ai_ml"

)


# Upload LLM/RAG PDF
upload_pdf(

    os.path.join(
        DATA_DIR,
        "llm_rag_notes.pdf"
    ),

    "llm_rag"

)


print("\n================================")

print("All PDFs uploaded successfully!")

print("================================")