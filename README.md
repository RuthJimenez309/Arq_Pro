# Arq_Pro
# ZeroTrust-ZodGuard: Context-Aware IAM Tampering Detection Engine

## 📌 Project Overview
**ZeroTrust-ZodGuard** is an open-source, lightweight Application Security (AppSec) middleware designed to intercept, parse, and mitigate Identity and Access Management (IAM) tampering attacks in real-time. 

By utilizing strict schemas and structural validation typing, the engine implements a **Zero Trust** architecture at the application layer, preventing attackers from executing privilege escalation or parameters manipulation through tools like Burp Suite.

---

## Core Cybersecurity 
*  Uses validation runtime rules to enforce strict data structures on sensitive session items.
*  Actively blocks unauthorized vertical privilege escalation attempts (e.g., forcing an `admin` role parameter).
*  Simulates programmatic mitigation actions, including compromised token revoking and IP threat flagging.
*  Generates audit logs mapped to data integrity compromise vectors.

---

## Architecture Flow

```text
[ Incoming Request ] 
       │
       ▼
┌──────────────────────────────────────────┐
│        ZeroTrust - ZodGuard              │
│  (Runtime Structural Log Inspection)     │
└──────────────────────────────────────────┘
       │
       ├─► Validation Success ──► [ Access Granted to API ]
       │
       └─► Validation Failure ──► [ Trigger Security Alert ]
                                        │
                                        ├─► Log Privilege Escalation Vector
                                        └─► Automated Defense: Revoke Token / Block IP
```

---

##  Technical Stack
* **Language:** TypeScript
* **Validation Engine:** Zod
* **Environment:** Node.js
* **Security Frameworks:** OWASP Top 10 (A01:2021-Broken Access Control / A03:2021-Injection)

---


---

##  Key Learning Outcomes
* Implemented runtime structural security validations using **Zod** schema architectures.
* Developed active defensive mechanisms against **Broken Access Control (OWASP A01)**.
* Designed incident response flows mapping raw payload discrepancies to tactical threat intelligence actions.

