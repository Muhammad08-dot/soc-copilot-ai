"use client";

import React, { useState } from "react";
import { Shield, AlertOctagon, Terminal, ShieldAlert, Cpu, CheckCircle2, Play } from "lucide-react";

export default function SOCCopilotApp() {
  const [logText, setLogText] = useState("EventID 4625: Failed password for root from 192.168.1.104 via SSH2 (LSASS Dump Attempt)");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any>({
    threatDetected: true,
    severity: "CRITICAL",
    tactic: "T1003.001 - OS Credential Dumping: LSASS Memory",
    confidence: "98.6%",
    playbook: "Isolate Host Endpoint (192.168.1.104) & Revoke Active Kerberos Ticket",
    cves: ["CVE-2024-21412", "CVE-2023-38831"],
  });

  const analyzeLog = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setAnalysis({
        threatDetected: true,
        severity: "CRITICAL",
        tactic: "T1059.001 - Command & Scripting Interpreter: PowerShell Execution",
        confidence: "99.2%",
        playbook: "Block Malicious IP (185.220.101.5) & Terminate Process PID 4092",
        cves: ["CVE-2024-30078"],
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#070e17] text-cyan-100 flex flex-col font-mono">
      <header className="border-b border-cyan-900/60 bg-[#0b1726]/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-cyan-300">AI Cybersecurity SOC Copilot 🛡️</h1>
            <p className="text-xs text-cyan-500">MITRE ATT&CK FRAMEWORK & CVE THREAT RAG INTELLIGENCE</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-red-950 border border-red-800 px-3 py-1.5 rounded-full text-xs text-red-400 font-bold">
          <AlertOctagon className="w-4 h-4 text-red-400 animate-ping" />
          <span>Active Threat Monitoring (10k logs/sec)</span>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-6 space-y-6">
        {/* Terminal Input Form */}
        <section className="bg-[#0b1726] border border-cyan-900/60 rounded-2xl p-6 space-y-4">
          <div className="flex items-center space-x-2 text-cyan-400">
            <Terminal className="w-5 h-5" />
            <h2 className="text-lg font-bold">Security Incident Log Analysis Console</h2>
          </div>

          <form onSubmit={analyzeLog} className="space-y-4">
            <textarea
              rows={3}
              value={logText}
              onChange={(e) => setLogText(e.target.value)}
              className="w-full bg-[#050b12] border border-cyan-800/80 rounded-xl p-4 text-cyan-200 font-mono text-sm focus:outline-none focus:border-cyan-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>{loading ? "Running Neural Anomaly Engine & Vector Search..." : "Execute SOC AI Incident Analysis"}</span>
            </button>
          </form>
        </section>

        {/* Threat Inspection Card */}
        {analysis && (
          <section className="bg-[#0b1726] border border-red-900/80 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-cyan-900 pb-3">
              <div className="flex items-center space-x-2">
                <ShieldAlert className="w-6 h-6 text-red-400" />
                <span className="text-lg font-bold text-red-400">SEVERITY: {analysis.severity} THREAT DETECTED</span>
              </div>
              <span className="bg-red-950 border border-red-700 text-red-400 px-3 py-1 rounded-full text-xs font-bold">
                {analysis.confidence} Confidence
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <p><strong>MITRE ATT&CK Tactic:</strong> <span className="text-cyan-300">{analysis.tactic}</span></p>
              <p><strong>CVE Threat References:</strong> <span className="text-red-300">{analysis.cves.join(", ")}</span></p>
              
              <div className="p-4 bg-red-950/60 border border-red-800 rounded-xl text-red-200 font-bold space-y-1">
                <span className="text-xs uppercase text-red-400 font-mono">Automated SOAR Incident Response Playbook</span>
                <p>{analysis.playbook}</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
