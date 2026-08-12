"""
FastAPI Entrypoint for Cybersecurity SOC Copilot
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator
from app.core.config import settings
from app.api.v1.endpoints import threats

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url="/docs"
)

if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

Instrumentator().instrument(app).expose(app)

app.include_router(threats.router, prefix=f"{settings.API_V1_STR}/threats", tags=["threats"])


@app.get("/health", tags=["health"])
async def health_check():
    return {"status": "healthy", "service": settings.PROJECT_NAME}
