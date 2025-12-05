from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import os

from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
from langchain_core.messages import HumanMessage  

load_dotenv()

api_key = os.getenv("HUGGINGFACEHUB_ACCESS_TOKEN")

llm = HuggingFaceEndpoint(
    repo_id="openai/gpt-oss-20b",
    task="text-generation"
)

model = ChatHuggingFace(
    llm = llm,
    api_key=api_key
)

app = FastAPI()

class Query(BaseModel):
    message: str

@app.post("/chat")
def chat_with_bot(query: Query):
    response = model([HumanMessage(content=query.message)])
    return {"reply": response.content}
