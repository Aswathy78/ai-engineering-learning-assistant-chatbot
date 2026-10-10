from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from rag import generate_answer


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


class ChatRequest(BaseModel):

    question: str


@app.get("/")
def home():

    return {
        "message": "AI Engineering Multi-RAG API is running"
    }


@app.post("/chat")
def chat(request: ChatRequest):

    try:

        answer, namespace = generate_answer(
            request.question
        )

        return {
            "answer": answer,
            "namespace": namespace
        }


    except Exception as e:

        print("ERROR:", str(e))

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )