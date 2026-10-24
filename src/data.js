export const config = {
  name: 'Suviksha Viswanath Biranthabail',
  email: 'suvikshavb@gmail.com', // Verify: source resumes may contain a different email.
  github: 'https://github.com/suvi-running-as-root',
  linkedin: 'https://linkedin.com/in/suviksha-v-b-423089298',
  resume: './Suviksha_VB_Resume.pdf'
};

export const projects = [
  { id:'01', name:'Vaani Rekha', type:'INTERCEPTED COMMUNICATION', accent:'red', problem:'AI-generated voice scams can sound convincing across Indian languages.', built:'A near-real-time multilingual call analysis system with wav2vec2 XLS-R classification, speech-to-text, confidence-based risk scoring, suspicious-pattern detection, and audit trails.', tech:['wav2vec2 XLS-R','Speech-to-text','Risk scoring','AI'], evidence:'Top 2% among 40,000+ participants at India AI Buildathon 2026.', visual:'wave' },
  { id:'02', name:'IoT Network Security Dashboard', type:'NETWORK WATCH', accent:'green', problem:'Unknown devices should not disappear into a network’s background noise.', built:'A three-tier monitor: Python ARP discovery, Node.js/Express + MongoDB services, and a React dashboard. It surfaces device changes and supports Windows Firewall quarantine workflows.', tech:['Python','ARP','Node.js','Express','MongoDB','React'], evidence:'Live device, alert, and quarantine status across REST endpoints.', visual:'nodes' },
  { id:'03', name:'MobiPent', type:'FORENSIC APK REPORT', accent:'amber', problem:'Mobile app risks are hard to explain when findings are scattered and technical.', built:'A FastAPI and Expo React Native platform for OWASP MASVS-aligned analysis. Modules use Androguard for permissions, secrets, cryptography review, and structured reports; JWT and SQLite support protected user flows.', tech:['FastAPI','Expo','React Native','Androguard','OWASP MASVS','SQLite'], evidence:'Individual checks and a full compliance scan produce actionable reports.', visual:'apk' },
  { id:'04', name:'Darknet Dataset Anomaly Detection', type:'TRAFFIC INVESTIGATION', accent:'blue', problem:'Threat signals get buried in large, imbalanced traffic datasets.', built:'Exploratory analysis and feature engineering followed by normalization, imbalance handling, dimensionality reduction, and model evaluation.', tech:['Python','EDA','Feature engineering','ML'], evidence:'Evaluation centered on precision, recall, and F1 - no invented benchmark claims.', visual:'chart' },
  { id:'05', name:'VLAN-Based Secure Exam Network', type:'DEFENSE OPERATION', accent:'green', problem:'Exam traffic needs isolation from normal campus activity.', built:'A dual-VLAN Ruckus deployment with a Layer 3 switch, access points, SSIDs, inter-VLAN routing, DHCP pools, and ACLs. Examination clients could reach only their dedicated server.', tech:['Ruckus','VLANs','ACLs','DHCP','Layer 3'], evidence:'Designed to model a secure university examination environment.', visual:'nodes' },
  { id:'06', name:'Handwritten Equation Solver', type:'VISION PIPELINE', accent:'amber', problem:'Scanned handwritten symbols need cleanup before they become solvable expressions.', built:'A CNN recognition pipeline with image normalization, noise reduction, augmentation, structured expression generation, parsing, and calculation.', tech:['CNN','Image processing','Python','Data augmentation'], evidence:'Trained and validated on a labeled handwritten-symbol dataset.', visual:'chart' },
  { id:'07', name:'ApexZone', type:'FITNESS WEB APP', accent:'red', problem:'Workout content is more useful when it adapts cleanly across screens and routines.', built:'A responsive React application with modular workout views, exercise tracking, dynamic content, and personalized modules.', tech:['React','JavaScript','HTML','CSS'], evidence:'Built with reusable components and adaptive layouts.', visual:'apk' },
  { id:'08', name:'Brick Breaker', type:'JAVA MINI PROJECT', accent:'amber', problem:'A small game is a good way to make object-oriented design answer to real interactions.', built:'A multi-level Java Swing/AWT game with OOP architecture, paddle control, ball physics, collision detection, moving bricks, scoring, sound, and win/lose states.', tech:['Java','Swing','AWT','OOP'], evidence:'Showcase only - no browser demo is claimed.', visual:'bricks' }
];

export const experience = [
  {date:'DEC 2025 - JAN 2026',org:'Amar Seva Sangam (USA Chapter)',role:'Web Developer (Freelance)',state:'COMPLETED',text:'Built and deployed a single-page website on Vercel, integrated Zeffy fundraising flows, and improved contact routing, responsiveness, and UI.'},
  {date:'MAY 2024 - DEC 2024',org:'RV University',role:'Cybersecurity Intern',state:'COMPLETED',text:'Performed OWASP-guided assessments across web and mobile systems; built dashboard components and an APK penetration-testing tool for automated reporting.'},
  {date:'JUN 2024 - AUG 2024',org:'RV University',role:'AI for Cybersecurity - Student Research',state:'COMPLETED',text:'Investigated security logs and network data with exploratory analysis, preprocessing, and feature analysis for anomaly-focused insights.'},
  {date:'MAY 2025 - JUL 2025',org:'Fillum - Short Film Platform',role:'Frontend Developer Intern',state:'ON HOLD',text:'Resume lists responsive React, HTML, CSS, and JavaScript interface work; presented as on hold, not completed.'},
  {date:'JUL 2025 - SEP 2025',org:'Arc22 Ventures',role:'Backend & Web Operations Intern',state:'ON HOLD',text:'Resume lists Wix Studio workflows, dynamic datasets, event-registration systems, and dashboard/data-pipeline support; presented as on hold.'}
];

export const skills = {
  'Programming':['Python','Java','C','JavaScript'], 'Frontend & ML':['React.js','React Native','TensorFlow','TensorFlow Lite'],
  'Security':['OWASP','OWASP MASVS','Vulnerability assessment','APK analysis'], 'Network security':['Wireshark','Nmap','Metasploit','Nessus','Kali Linux'],
  'Networking':['VLANs','ACLs','DHCP','ARP','Ruckus hardware','Cisco Packet Tracer'], 'Systems & edge':['ESP32','Raspberry Pi Pico','FreeRTOS','Embedded programming']
};

export const achievements = [
  ['COMPETITION','India AI Buildathon 2026','Top 2% among 40,000+ participants'], ['COURSE','NPTEL Affective Computing','88/100'], ['COURSE','NPTEL Human-Computer Interfaces','64/100'], ['COURSE','NPTEL Programming in Modern C++','55/100'], ['COURSE','Cisco Networking Academy','Getting Started with Cisco Packet Tracer'], ['COURSE','IBM SkillsBuild / Skills Network','Network Security; Big Data 101; Hadoop 101; Spark Fundamentals I; Computer Networking Basics'], ['PREP COURSE','ISC2 CC Cert Prep','Listed as LinkedIn Learning preparation; verify credential status before calling this a certification.']
];
