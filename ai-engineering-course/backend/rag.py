import os

from dotenv import load_dotenv
from pinecone import Pinecone
from sentence_transformers import SentenceTransformer
from groq import Groq


# --------------------------------
# LOAD ENVIRONMENT VARIABLES
# --------------------------------

load_dotenv()

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
INDEX_NAME = os.getenv("PINECONE_INDEX_NAME")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")


if not PINECONE_API_KEY:
    raise ValueError("PINECONE_API_KEY not found")

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY not found")


# --------------------------------
# CLIENTS
# --------------------------------

client = Groq(
    api_key=GROQ_API_KEY
)

pc = Pinecone(
    api_key=PINECONE_API_KEY
)

index = pc.Index(
    INDEX_NAME
)


# --------------------------------
# EMBEDDING MODEL
# --------------------------------

embedding_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


# --------------------------------
# EXPAND ABBREVIATIONS
# --------------------------------

def expand_question(question):

    abbreviations = {

        "ai": "artificial intelligence",
        "ml": "machine learning",
        "dl": "deep learning",
        "llm": "large language model",
        "nlp": "natural language processing",
        "cv": "computer vision",
        "rag": "retrieval augmented generation",
        "cnn": "convolutional neural network",
        "rnn": "recurrent neural network",
        "ann": "artificial neural network",
        "dnn": "deep neural network",
        "svm": "support vector machine",
        "knn": "k nearest neighbors",
        "pca": "principal component analysis"

    }


    words = question.lower().split()

    expanded_words = []


    for word in words:

        clean_word = word.strip(
            "?,.!:;()[]{}"
        )


        if clean_word in abbreviations:

            expanded_words.append(
                abbreviations[clean_word]
            )

        else:

            expanded_words.append(
                word
            )


    return " ".join(
        expanded_words
    )


# --------------------------------
# CHECK AI ENGINEERING TOPIC
# --------------------------------

def is_ai_related(question):


    expanded_question = expand_question(
        question
    ).lower()


    keywords = [

        # --------------------------------
        # GENERAL AI
        # --------------------------------

        "artificial intelligence",
        "generative ai",
        "ai engineering",
        "agentic ai",
        "ai agent",
        "ai agents",
        "intelligent system",
        "intelligent systems",
        "foundation model",
        "foundation models",


        # --------------------------------
        # MACHINE LEARNING
        # --------------------------------

        "machine learning",
        "supervised learning",
        "unsupervised learning",
        "semi supervised learning",
        "semi-supervised learning",
        "reinforcement learning",
        "classification",
        "regression",
        "clustering",
        "prediction",
        "training data",
        "testing data",
        "test data",
        "validation data",
        "feature engineering",
        "data preprocessing",
        "data cleaning",
        "data augmentation",
        "cross validation",
        "train test split",


        # --------------------------------
        # ML ALGORITHMS
        # --------------------------------

        "linear regression",
        "logistic regression",
        "decision tree",
        "random forest",
        "support vector machine",
        "k nearest neighbors",
        "naive bayes",
        "k means",
        "k-means",
        "hierarchical clustering",
        "principal component analysis",
        "xgboost",
        "gradient boosting",
        "ensemble learning",


        # --------------------------------
        # DEEP LEARNING
        # --------------------------------

        "deep learning",
        "neural network",
        "neural networks",
        "artificial neural network",
        "deep neural network",
        "input layer",
        "hidden layer",
        "output layer",
        "perceptron",
        "neuron",
        "backpropagation",
        "gradient descent",
        "learning rate",
        "activation function",
        "loss function",
        "optimizer",
        "adam optimizer",
        "stochastic gradient descent",
        "epoch",
        "epochs",
        "batch size",
        "dropout",
        "regularization",
        "overfitting",
        "underfitting",
        "relu",
        "sigmoid",
        "softmax",
        "tanh",


        # --------------------------------
        # CNN / COMPUTER VISION
        # --------------------------------

        "computer vision",
        "image processing",
        "image classification",
        "object detection",
        "object recognition",
        "image segmentation",
        "convolutional neural network",
        "convolution",
        "convolution layer",
        "pooling",
        "max pooling",
        "average pooling",
        "feature map",
        "kernel",
        "filter",
        "yolo",
        "yolov8",
        "opencv",
        "bounding box",
        "face detection",
        "pose detection",


        # --------------------------------
        # NLP
        # --------------------------------

        "natural language processing",
        "text processing",
        "text classification",
        "sentiment analysis",
        "tokenization",
        "stemming",
        "lemmatization",
        "named entity recognition",
        "text generation",
        "language model",


        # --------------------------------
        # LLM
        # --------------------------------

        "large language model",
        "large language models",
        "llm",
        "chatbot",
        "chatbots",
        "prompt",
        "prompting",
        "prompt engineering",
        "system prompt",
        "zero shot learning",
        "few shot learning",
        "fine tuning",
        "fine-tuning",
        "instruction tuning",
        "hallucination",
        "context window",
        "temperature",
        "top p",


        # --------------------------------
        # TRANSFORMERS
        # --------------------------------

        "transformer",
        "transformers",
        "attention",
        "attention mechanism",
        "self attention",
        "self-attention",
        "multi head attention",
        "multi-head attention",
        "encoder decoder",
        "positional encoding",
        "feed forward network",
        "feed-forward network",
        "bert",
        "gpt",


        # --------------------------------
        # RAG
        # --------------------------------

        "retrieval augmented generation",
        "retrieval-augmented generation",
        "rag",
        "retriever",
        "document retrieval",
        "semantic search",
        "similarity search",
        "cosine similarity",
        "chunking",
        "document chunking",
        "embedding",
        "embeddings",
        "embedding model",
        "reranking",
        "multi rag",
        "multi-rag",
        "knowledge base",


        # --------------------------------
        # VECTOR DATABASES
        # --------------------------------

        "pinecone",
        "faiss",
        "chroma",
        "chromadb",
        "weaviate",
        "qdrant",
        "milvus",
        "vector database",


        # --------------------------------
        # AI FRAMEWORKS
        # --------------------------------

        "tensorflow",
        "pytorch",
        "keras",
        "scikit learn",
        "scikit-learn",
        "hugging face",
        "huggingface",
        "langchain",
        "llamaindex",
        "llama index",


        # --------------------------------
        # AI PROGRAMMING
        # --------------------------------

        "python",
        "numpy",
        "pandas",
        "matplotlib",
        "jupyter",
        "google colab",
        "fastapi",
        "flask",
        "streamlit",


        # --------------------------------
        # DATA SCIENCE
        # --------------------------------

        "data science",
        "dataset",
        "datasets",
        "data analysis",
        "data visualization",
        "data mining",
        "structured data",
        "unstructured data",
        "big data",


        # --------------------------------
        # MODEL EVALUATION
        # --------------------------------

        "model evaluation",
        "accuracy",
        "precision",
        "recall",
        "f1 score",
        "f1-score",
        "confusion matrix",
        "roc curve",
        "auc",
        "mean squared error",
        "root mean squared error",
        "mse",
        "rmse",


        # --------------------------------
        # MLOPS / DEPLOYMENT
        # --------------------------------

        "mlops",
        "model deployment",
        "model serving",
        "model inference",
        "model monitoring",
        "docker",
        "pipeline",


        # --------------------------------
        # AI ETHICS
        # --------------------------------

        "ai ethics",
        "responsible ai",
        "ai safety",
        "model bias",
        "bias in ai",
        "fairness",
        "explainable ai",
        "privacy in ai"

    ]


    for keyword in keywords:

        if keyword in expanded_question:

            return True


    return False


# --------------------------------
# MULTI-RAG RETRIEVAL
# SEARCH BOTH NAMESPACES
# --------------------------------

def retrieve_context(question):


    expanded_question = expand_question(
        question
    )


    print(
        "\nOriginal Question:",
        question
    )

    print(
        "Search Question:",
        expanded_question
    )


    namespaces = [

        "ai_ml",
        "llm_rag"

    ]


    query_vector = embedding_model.encode(
        expanded_question
    ).tolist()


    all_matches = []


    # Search both namespaces
    for namespace in namespaces:


        results = index.query(

            vector=query_vector,

            top_k=3,

            include_metadata=True,

            namespace=namespace

        )


        for match in results.matches:


            if (

                match.metadata

                and

                "text" in match.metadata

            ):

                all_matches.append({

                    "score": match.score,

                    "text": match.metadata["text"],

                    "namespace": namespace

                })


    # Sort by similarity score
    all_matches = sorted(

        all_matches,

        key=lambda x: x["score"],

        reverse=True

    )


    # Select best results
    best_matches = all_matches[:4]


    if not best_matches:

        return "", "general"


    best_score = best_matches[0]["score"]


    print(
        "Best Similarity Score:",
        best_score
    )


    # Similarity threshold
    if best_score < 0.30:

        return "", "general"


    # Create context
    context_parts = []


    for match in best_matches:

        context_parts.append(
            match["text"]
        )


    context = "\n\n".join(
        context_parts
    )


    best_namespace = best_matches[0][
        "namespace"
    ]


    return context, best_namespace


# --------------------------------
# GENERATE ANSWER
# --------------------------------

def generate_answer(question):


    # Check if question is AI-related
    if not is_ai_related(question):

        return (

            "I am an AI Engineering Learning Assistant. "
            "I can help you with Artificial Intelligence, Machine Learning, "
            "Deep Learning, Neural Networks, LLMs, RAG, NLP, Computer Vision, "
            "AI frameworks, Python, and other AI Engineering topics.",

            "general"

        )


    # Search Pinecone
    context, namespace = retrieve_context(
        question
    )


    # --------------------------------
    # GENERAL AI ANSWER
    # AI RELATED BUT NOT FOUND
    # --------------------------------

    if not context:


        prompt = f"""
You are a professional AI Engineering Learning Assistant.

Answer the student's question accurately and professionally.

Student Question:

{question}

Rules:

1. Answer only AI Engineering related questions.
2. Use simple language suitable for students.
3. Explain the concept clearly.
4. Give an example when useful.
5. Do not mention the knowledge base.
6. Do not say information was not found.
7. Do not use Markdown formatting.
8. Do not use asterisks, hashes, or bullet symbols.
9. Write clean plain text.
10. Keep the answer concise but informative.
"""


        chat_completion = client.chat.completions.create(

            model="openai/gpt-oss-20b",

            messages=[

                {

                    "role": "system",

                    "content":
                    "You are a professional AI Engineering Learning Assistant. "
                    "Answer only AI Engineering related questions."

                },

                {

                    "role": "user",

                    "content": prompt

                }

            ],

            temperature=0.3

        )


        answer = (

            chat_completion
            .choices[0]
            .message
            .content

        )


        return answer, "general"


    # --------------------------------
    # RAG ANSWER
    # --------------------------------

    prompt = f"""
You are a professional AI Engineering Learning Assistant for students.

Answer the student's question using the retrieved context below.

Retrieved Context:

{context}

Student Question:

{question}

Rules:

1. Give a clear and simple explanation.
2. Make the answer suitable for students.
3. Base the answer mainly on the retrieved context.
4. Do not invent unsupported information.
5. Explain important concepts clearly.
6. Give an example when useful.
7. Do not mention the retrieved context.
8. Do not mention the knowledge base.
9. Do not use Markdown formatting.
10. Do not use asterisks, hashes, or bullet symbols.
11. Write clean plain text.
12. Keep the answer professional and informative.
"""


    chat_completion = client.chat.completions.create(

        model="openai/gpt-oss-20b",

        messages=[

            {

                "role": "system",

                "content":
                "You are a professional AI Engineering Learning Assistant."

            },

            {

                "role": "user",

                "content": prompt

            }

        ],

        temperature=0.3

    )


    answer = (

        chat_completion
        .choices[0]
        .message
        .content

    )


    return answer, namespace