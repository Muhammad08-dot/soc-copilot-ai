"""
Pydantic v2 Settings for SOC Copilot AI Platform
"""
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Cybersecurity SOC Copilot"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    SECRET_KEY: str = "soc_copilot_secret_key_22110099"
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:3007", "http://localhost:8007"]
    
    DATABASE_URL: str = "postgresql+asyncpg://soc_user:soc_secret_33@localhost:5439/soc_copilot_db"
    REDIS_URL: str = "redis://localhost:6386/0"
    QDRANT_URL: str = "http://localhost:6339"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()
