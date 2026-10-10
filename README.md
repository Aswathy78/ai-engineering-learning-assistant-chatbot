# AI Engineering Learning Assistant Chatbot

## Project Overview

The AI Engineering Learning Assistant Chatbot is an AI-powered application designed to answer questions related to Artificial Intelligence and Machine Learning. It uses Retrieval-Augmented Generation (RAG) to retrieve relevant information from learning materials and generate contextual responses.

## Features

* AI Engineering learning assistant chatbot
* Retrieval-Augmented Generation (RAG)
* PDF-based learning materials
* Contextual answers to user queries
* Web-based user interface

## Technologies Used

* Python
* React
* Vite
* Retrieval-Augmented Generation (RAG)
* Sentence Transformers
* Pinecone
* Gemini
* Streamlit

## Project Structure

* `ai-engineering-course/backend/` — Backend application and RAG-related code
* `ai-engineering-course/backend/data/` — PDF learning materials
* `ai-engineering-course/src/` — Frontend React components

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Aswathy78/ai-engineering-learning-assistant-chatbot.git
cd ai-engineering-learning-assistant-chatbot
```

### 2. Set up the backend

Create and activate a Python virtual environment, then install the required packages:

```bash
python -m venv .venv
```

Install dependencies using the backend requirements file:

```bash
pip install -r ai-engineering-course/backend/requirements.txt
```

### 3. Set up the frontend

```bash
cd ai-engineering-course
npm install
npm run dev
```

## Configuration

Configure the required API keys and service credentials using environment variables. Keep secrets in a local `.env` file and never commit that file to GitHub.

## Future Improvements

* Improve response accuracy and retrieval quality
* Add more AI Engineering learning materials
* Enhance the chatbot interface and user experience
