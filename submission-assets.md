## Certificates
- Google Cloud Computing Foundations — Google, 2026 — [no link]
- CompTIA Tech Plus — CompTIA, 2025 — [no link]
- Ethical Hacker — Cisco, 2025 — [no link]
- CCNA: Introduction to Networks — Cisco, 2025 — [no link]
- CCNA: Switching, Routing, and Wireless Essentials — Cisco, 2025 — [no link]
- TOEIC, Score 920 — ETS, 2025

## Affiliations
- Cybersecurity Society of the Philippines, Inc. — [member since 2026]

## Seminars / Training Attended
- [title] — [speaker] — [date]
Beyond the Breach: Leadership and Cybersecurity in the Age of Digital Transformation — Mr. Elizalde Javier Duran — June 20, 2026

Head in the Clouds: Exploring How AI Transforms the Cloud Computing Landscape — Mr. Bryl Lim — July 4, 2026

Beyond the Code: Next-Gen Skills for the Cloud-Native Era — Mr. Mark Anthony Hernandez — June 27, 2026

Web Development, Data Analytics, and Emerging Technologies — Engineer Kevin Yu — May 21, 2026

Decode the Data, Defend the Network: Global Cybersecurity Operations — Ms. Grace Verana — May 22, 2026

## Project dates (from CV)
- Bagsik ng Malayan — Jan 2022 — Year 1
- Careby — Mar 2024 — Year 2
- CCIS Event Enlistment — Jul 2024 — Year 3
- R-EaseCite — Jul 2025 — Year 3
- Doorbell Notification System — Nov 2025 — Year 4
- Why-Pii (Capstone) — 2026 — Year 4


## Capstone hardware (fill in)
Hardware Component	Assigned Role	Purpose
Raspberry Pi 5 Model B Rev 1.0	Main hardware unit	"Provides the hardware platform for Raspberry Pi-side passive monitoring, access point operation, captive portal support, and local service operations."
Alfa AWUS036NHA Wireless Adapter 	"
mon0 Interface
"	"Provides the dedicated interface for passive wireless monitoring, vulnerability scanning, and threat detection."
ALFA AWUS036ACM Wireless Adapter	ap0 Interface	Serves as the client-facing access point interface.
Greo USB Antenna Ctrl Fox Wireless Adapter	mgmt0 Interface	Provides dedicated Raspberry Pi management access.
Greo USB Antenna Ctrl Fox Wireless Adapter	uplink0 Interface	Supports network discovery and captive portal-related network services.
SanDisk Ultra MicroSDXC A1	System storage	"Stores the Raspberry Pi OS, system files, and local runtime files "
Official Raspberry Pi 5 USB-C Power Supply	Power source	Supplies stable power to the Raspberry Pi and attached wireless adapters.
52Pi Raspberry Pi 5 Case with Armor Lite V5 Fan	Enclosure and cooling	Provides hardware protection and thermal management.

## Capstone software
React 19	Renders the SPA interface with reusable components for efficient state management.
React Router DOM 7	Handles client-side navigation and route protection for authenticated access.
Vite 7	Bundles static assets and provides an optimized development server with HMR.
Axios	"Manages API communication, JWT token handling, and automatic request interception."
Supabase Client JS (Frontend)	Facilitates secure client-side authentication while preventing local token persistence.
Recharts 3	"Renders responsive, declarative charts to visualize security scan metrics."
jose (Frontend)	Performs lightweight JWT inspection and verification on the client side.
CSS (Vanilla)	"Controls visual layout, theming, and responsive design without framework overhead."
Node.js	"Provides the scalable, non-blocking runtime for backend API operations."
Express 5	Serves as the minimal framework for REST API routing and middleware management.
Supabase Client JS (Backend)	Executes privileged database operations and RLS bypass for administrative tasks.
Supabase (Platform)	"Serves as the managed PostgreSQL database, authentication service, and real-time data store."
Raspberry Pi Software Component	Purpose
NetworkManager and nmcli 	"Managed selected wireless connections, uplink profiles, and interface status."
hostapd	Enabled the Raspberry Pi to operate as a local wireless access point.
dnsmasq	Provided DHCP and DNS support for client devices connected to the local access point.
openNDS	Managed captive portal enforcement and redirected connected clients to the local portal service.
FAS Captive Portal Application	Displayed the customized captive portal page and supported client interaction after openNDS redirection.
systemd 	"Managed local services, timers, restart behavior, dependencies, and watchdog-related operations."
nftables 	"Supported firewall filtering, forwarding control, NAT behavior, and network boundary enforcement."
Raspberry Pi Software Component	Purpose
Kali GNU/Linux Rolling 2025.4 (ARM64/aarch64)  	"Provided the operating environment for running Raspberry Pi-side tools, services, and system-managed components."
Python	"Served as the main programming language for Raspberry Pi-side modules, service logic, orchestration, and automation."
FastAPI with Uvicorn  	"Provided the API framework and runtime server for Raspberry Pi-side service control, network operations, polling, scanning, detection, and captive portal functions."
Nginx	Acted as the local reverse proxy and API gateway for forwarding approved routes to the local FastAPI backend.
Tailscale	Provided a controlled and encrypted access path for administrative access and web-to-Raspberry Pi communication.
Kismet	"Provided observed Wi-Fi network information, access point details, and WIDS alert data for vulnerability assessment and threat detection support."
fscrypt	Provided selective filesystem-level protection for Kismet-related log storage.


## Doorbell hardware
- Wemos D1 [idk]
- PIR sensor: [idk]
- Sound sensor: [idk]

## Repo links per project
- no need repo links

## Project features (3-5 bullets each, user-facing)
### Why-Pii
- [what can an assessor actually DO in the UI?]
### Careby
- [...]
[etc. — bullet fragments are fine, Claude will polish]

---

# AUTHORITATIVE AMENDMENT — appended per instruction (supersedes conflicting notes above)

## 1. Capstone (Why-Pii)

### Database correction
The system uses BOTH databases — a subsystem split, not a substitution:
- MySQL — local, on the Raspberry Pi probe
- Supabase — on the web application tier
Neither may be dropped.

### Features (user-facing) — authoritative
- Passively observes nearby public Wi-Fi access points from a Raspberry Pi probe deployed in the field, without transmitting to or probing the networks it assesses.
- Detects security weaknesses in observed network configurations.
- Assigns each network a normalized risk score reflecting the severity of the weaknesses found.
- Retains assessment history, so a network's security posture can be reviewed across scans rather than as a single snapshot.
- Serves general users a captive portal on connection, surfacing the network's risk at the moment they join it.
- Gives security, network, and systems professionals a separate web dashboard for tracking risks across assessed networks, with charted breakdowns of security posture.

### Software Used — grouped by subsystem boundary (retain all)
- Probe: Python, Kismet, Kali Linux, Tailscale, MySQL
- Web application: React, Node.js, Tailwind CSS, Chart.js, Supabase
- Interface: REST API design (retained; contribution prose references the REST endpoints)
- Raspberry Pi belongs in Hardware, not Software.

### Hardware Used — grouped (exact models from this file)
- Compute: Raspberry Pi 5 Model B Rev 1.0
- Wireless: Alfa AWUS036NHA Wireless Adapter, ALFA AWUS036ACM Wireless Adapter, Greo USB Antenna Ctrl Fox Wireless Adapter
- Storage: SanDisk Ultra MicroSDXC A1
- Power: Official Raspberry Pi 5 USB-C Power Supply
- Enclosure: 52Pi Raspberry Pi 5 Case with Armor Lite V5 Fan
(No RAM variant stated in this file — omitted.)

## 2. Project screenshots — filename to project mapping (authoritative)
- whypii-captiveportal.jpg — Why-Pii (captive portal screen)
- whypii-dashboard.png — Why-Pii (dashboard screen)
- REASECITE-setround.png — R-EaseCite (Set Round screen)
- careby-homepage.jpg — Careby (home page)
Why-Pii is the only project with two images. Doorbell, CCIS, and Bagsik ng Malayan have none yet.





