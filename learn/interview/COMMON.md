## Self Intro
Hello, my name is **Prasanth Rudrakshula**. I'm currently working as a **Senior Software Engineer at Nouveau Labs**, with **4+ years of experience in full-stack development**.

~I completed my Graduation from Adikavi Nannaya University and later transitioned into software development by completing a Full Stack Development program at NxtWave.~

I have hands-on experience building enterprise applications using technologies like **React.js, Next.js, React Native, and TypeScript** on the frontend, and **Node.js and Express.js** on the backend. I've also worked with databases like **MySQL, MongoDB, and Redis**, along with AWS, Docker, and real-time communication technologies like WebSockets, XMPP and SSE.

Throughout my experience, I've worked on multiple enterprise applications, focusing on building scalable features, improving application performance, and developing reliable backend services.

One of my key contributions has been developing and maintaining a reusable **Design System Library** that is shared across multiple enterprise applications. I took ownership of the library, including development, NPM package releases, versioning, and documentation.

I also worked on frontend performance optimization using code splitting and lazy loading, which helped reduce initial page load time by approximately **35–40%**. On the backend, I improved API performance through Redis caching and database query optimization.

Apart from development, I actively participate in code reviews and enjoy mentoring junior developers. I've also been recognized with the **Rising Star Award in 2024** and the **Star Award in 2025** at Nouveau Labs.

I'm now looking for an opportunity where I can contribute to large-scale product development, take ownership of challenging engineering initiatives, and continue growing as a full-stack engineer.

Thank you.

```
Your self-introduction framework
1. Introduction
   Name → Current company → Designation → Experience

2. Technical expertise
   Frontend → Backend → Databases → Infrastructure

3. Professional experience
   Enterprise applications → Responsibilities → Contributions

4. Key achievements
   Design System Library → Performance optimization → Measurable impact

5. Additional achievements
   Code reviews → Mentoring → Awards

6. Career objective
   What kind of opportunity are you looking for?
```





```text
// Prompt
Here, dolphincc is contact center application where agents can communicate to end customers uisng this product through chat, call. Agents can talk to other agents through call, chat. Can have groups. Can see reports of their. Admin/supervisor can access everything related agents and can monitor agent's reports and live status and customer reports of both interactions and customer emotions and etc

dolphinvc is a product where contact center configuration are being done and as well as landing page. Admin can create/update/delete users and groups. Can configure cc call and chat flows. Can see recordings and transcriptions. Can control agent's privileges. and more

Sysadmin product: (which is not mentioned in resume)
System administator can onboard/offboard new tenants and its billings
And can manage thier privileges and can manage infra (deployments, services health check, etc)


Provide me brief description for each product
I only mention few points. Add relavent features of those products
These products work together
```


## Project Explanation

### How the Three Products Work Together

It's a **three-tier multi-tenant platform** where control flows top-down and real-time traffic flows across configured routing paths:

* **Sysadmin (Platform Layer):** Provisions new tenants, sets billing/quotas, assigns top-level admin privileges, and monitors service/infrastructure health so tenants run reliably.
* **DolphinVC (Control & Configuration Layer):** Serves as the public landing experience and tenant configuration hub where admins define users, groups, permissions, call/chat routing flows, and review recordings and transcripts.
* **DolphinCC (Execution & Live Operations Layer):** Consumes the tenant’s configuration and real-time events to run live customer calls/chats, internal agent collaboration, AI copilot assistance, and supervisor/agent analytics.

---

### 1. DolphinCC (Web Agent & Supervisor Workspace)

**DolphinCC** is the real-time web application where contact center agents handle live customer interactions and team communication, while supervisors and admins monitor live operations and performance analytics.

* **Customer & Internal Communications**
* **Customer Channels:** Handle inbound/outbound customer calls and real-time chat sessions within a unified agent workspace.
* **Internal Collaboration:** One-on-one agent-to-agent calls and chats, plus group/team channels for quick escalations, handoffs, and announcements.
* **Session & Presence Handling:** Live agent availability/status states (e.g., available, busy, on call, break) and session lifecycle management.


* **Agent Productivity & AI Assistance**
* **AI Copilot:** Context-aware, natural-language assistance integrated into the workspace to help agents draft responses, summarize context, or speed up routine workflows.
* **Personal Reporting:** Individual agent performance views covering handled interactions, response/resolution metrics, and activity summaries.


* **Supervisor & Admin Oversight**
* **Live Monitoring:** Real-time visibility into agent statuses, active workloads, and ongoing queue/interaction activity.
* **Analytics & Sentiment:** Access to agent reports alongside customer interaction reports and customer emotion/sentiment insights to spot friction or escalation trends early.


* **Frontend, Real-Time & Security Stack**
* **UI & State:** React.js, AntD, Redux, and render optimizations (memoization, careful state updates) to keep high-frequency live UIs responsive.
* **Real-Time Transport:** XMPP and WebSockets for low-latency messaging/events, supplemented by SSE, long polling, and short polling as fallback/streaming mechanisms.
* **Security Controls:** Secure session handling, safe storage practices, CAPTCHA, account lockout policies, and strict CORS origin whitelisting.





---

### 2. DolphinVC (Dolphin Virtual Control) (Configuration Portal & Landing Page)

**DolphinVC** is the administrative web portal and public-facing landing site where contact center rules, team structures, access controls, and interaction records are configured and managed.

* **Public Landing Experience**
* **Acquisition & Positioning:** Public landing page presenting the contact center offering, built with SEO and fast initial load performance in mind.


* **User, Group & Privilege Management**
* **Directory & Teams:** Create, update, and delete user accounts and organize agents/supervisors into functional groups or queues.
* **Granular Privileges:** Control what agents, supervisors, and admins can access or perform across workflows, channels, and data.


* **Call & Chat Flow Configuration**
* **Routing & Automation:** Configure call and chat flows—such as entry points, greeting/prompt logic, queue assignment, group routing, and fallback/escalation rules.
* **Live Sync to Operations:** Changes made in configuration propagate to govern how incoming chats and calls are routed and handled in DolphinCC.


* **Recordings, Transcripts & Backend Stack**
* **QA & Review:** View and access call recordings and transcriptions for quality assurance, training, dispute review, and compliance checks.
* **Tech Stack:** React.js and Next.js (including SSR and metadata optimization for the landing page) backed by Node.js, Express.js, MySQL, and REST APIs.
* **Auth & Access Control:** JWT, OAuth 2.0, API keys, SDK keys, SSO, and RBAC.





---

### 3. Sysadmin (Platform & Infrastructure Control Plane)

**Sysadmin** is the internal platform-level console used by system administrators to manage multi-tenant lifecycle, billing, elevated privileges, and underlying infrastructure health.

* **Tenant Lifecycle & Billing**
* **Onboarding & Offboarding:** Provision new tenant organizations, configure initial environments/limits, and suspend or offboard tenants cleanly.
* **Billing & Plans:** Manage subscription tiers, usage/billing records, seat or capacity limits, and account status.


* **Privilege & Access Governance**
* **Platform & Tenant Admin Controls:** Manage administrative privileges, tenant-owner access, and cross-account permission boundaries.


* **Infrastructure & Operations**
* **Deployments & Release Control:** Trigger, track, or manage service deployments and environment configurations.
* **Health Checks & Observability:** Monitor service health checks, uptime, resource utilization, and operational alerts across platform components so issues can be isolated and resolved quickly.


* **Typical Stack & Platform Alignment**
* **Application & Data:** React/TypeScript frontend paired with Node.js/Express services, MySQL, and Redis (for caching, sessions, or rate/state tracking).
* **Infra & Delivery:** Docker, AWS (EC2, S3, CloudFront), and CI/CD pipelines supporting containerized deployments, static/media asset delivery, and environment management.





---

### Quick Interview Talking Points

* **Why split DolphinCC, DolphinVC, and Sysadmin?** Separation of concerns: keeps high-frequency real-time agent UIs decoupled from administrative flow/user configuration and platform-wide tenant/infra operations.
* **How data flows during an interaction:** Sysadmin ensures the tenant is active and provisioned → DolphinVC defines who is in which group, what permissions they have, and how calls/chats route → DolphinCC executes the live call/chat over real-time channels, assists the agent with Copilot, and surfaces reports/emotions.

Would you like to practice answering specific interview questions—such as system design trade-offs, state/real-time synchronization challenges, or how you describe your ownership on these products?