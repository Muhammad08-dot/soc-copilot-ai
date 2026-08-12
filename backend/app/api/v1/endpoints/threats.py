"""
Cybersecurity Threat Analysis API Endpoints
"""
from fastapi import APIRouter
from pydantic import BaseModel
from app.services.soc_engine import soc_engine

router = APIRouter()


class LogPayload(BaseModel):
    log_text: str = "EventID 4625: Failed password for root from 192.168.1.104 via SSH2 (LSASS Dump Attempt)"


@router.post("/analyze-log")
async def analyze_security_log(payload: LogPayload):
    return soc_engine.analyze_log_stream(payload.log_text)
