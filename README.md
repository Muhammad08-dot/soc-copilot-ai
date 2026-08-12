# 🛡️ AI-Powered Cybersecurity SOC Copilot

Production-Grade Security Operations Center (SOC) Copilot providing Log Anomaly Detection, MITRE ATT&CK Framework Mapping, CVE Threat Intelligence RAG, and Automated Incident Playbook Execution.

## Architecture

- **Backend:** FastAPI (Python 3.11+) + Autoencoder Anomaly Detector + Qdrant Vector CVE Indexer
- **Frontend:** Next.js 15 + TypeScript + TailwindCSS
- **Infrastructure:** Docker Compose

## Quick Start

```bash
cd soc_copilot_ai
docker compose -f infrastructure/docker/docker-compose.dev.yml up --build
```
