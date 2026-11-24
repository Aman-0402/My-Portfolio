export const profile = {
  name: 'Aman Raj',
  role: 'Full-stack developer & AI trainer',
  location: 'Vadodara, Gujarat, India',
  email: 'think.like.ai.aman@gmail.com',
  phone: '+91 9852104967',
  links: {
    github: 'https://github.com/Aman-0402',
    linkedin: 'https://www.linkedin.com/in/aman-raj-081905211/',
    twitter: 'https://twitter.com/Code_Like_Aman',
  },
  intro:
    'I build web products end to end and teach others to do the same. Currently training students in AI and generative AI at CodedevH, and shipping full-stack projects on the side.',
  about: [
    'I work across React, Next.js, TypeScript, Django, Node.js and PostgreSQL, with real-time features, queues and AWS when a project needs them. My focus is increasingly AI/ML and generative AI.',
    'Alongside building, I teach. I have trained thousands of students at universities and training companies, and I like turning hard topics into hands-on projects.',
    'I also take freelance work: business websites, SaaS platforms and internal tools.',
  ],
  facts: [
    ['3+ yrs', 'Teaching & mentoring'],
    ['5', 'Training partners'],
    ['1000+', 'Students mentored at one institute'],
  ],
};

export const experience = [
  {
    role: 'AI Trainer',
    org: 'CodedevH',
    place: 'Allenhouse Institute of Technology & Business School',
    period: 'Aug 2026 – Present',
    points: [
      'Teaching AI and generative AI to engineering and BBA students',
      'Developing AI models alongside the training programme',
    ],
  },
  {
    role: 'Senior IT Trainer',
    org: 'Ethnotech Academy',
    place: 'Vadodara, Gujarat',
    period: 'Jul 2025 – Jun 2026',
    points: [
      'Trained in web development, Django, Flask, Cisco networking, Python and data science',
      'Mentored 1000+ students through lectures, labs and assessments, including at Parul University',
      'Designed learning paths aligned with industry requirements',
    ],
  },
  {
    role: 'Senior IT Instructor',
    org: 'W3Grads',
    place: 'GITA University',
    period: 'Feb 2025 – Mar 2025',
    points: ['Trained and mentored 450+ students in web development, running lectures and labs independently'],
  },
  {
    role: 'IT Instructor',
    org: 'Databits Technologies',
    place: 'GLA University',
    period: 'Aug 2024 – Dec 2024',
    points: ['Taught machine learning, deep learning, model evaluation and feature engineering'],
  },
  {
    role: 'IT Instructor',
    org: 'Gyeint',
    place: 'Sarala Birla University',
    period: 'May 2024 – Jul 2024',
    points: ['Trained 350+ students in core Python, data structures and algorithms'],
  },
  {
    role: 'IT Instructor',
    org: 'Coding Blocks',
    place: 'Shri Nath University',
    period: 'Jan 2024 – Apr 2024',
    points: ['Trained 550+ students in the full MERN stack with production-style projects'],
  },
];

// Links are only set where I could confirm them. Add `demo` / `code` to the rest.
export const projects = [
  {
    title: 'Certibyt',
    kind: 'SaaS',
    year: 'Live',
    text: 'Multi-tenant exam and proctoring platform, formerly CertiVerse.',
    stack: ['Django', 'React', 'PostgreSQL'],
    demo: 'https://certibyt.com',
  },
  {
    title: 'ConsultMe',
    kind: 'Marketplace',
    year: 'Live',
    text: 'Real-time consultancy marketplace with WebSocket chat and escrow payments.',
    stack: ['WebSockets', 'Django', 'Redis'],
    demo: 'https://consultmee.in',
  },
  {
    title: 'ClassPulse',
    kind: 'Web app',
    year: '2026',
    text: 'Smart QR-based real-time attendance system for classrooms.',
    stack: ['React', 'WebSockets', 'QR'],
  },
  {
    title: 'HireSignal',
    kind: 'AI',
    year: '2026',
    text: 'Hiring tool built on the NVIDIA NIM API.',
    stack: ['NVIDIA NIM', 'Python', 'React'],
  },
  {
    title: 'NUSKAA',
    kind: 'Website',
    year: '2026',
    text: 'Storefront website for a herbal hair-care brand.',
    stack: ['React', 'CSS'],
    code: 'https://github.com/Aman-0402/nuskaa',
  },
  {
    title: 'Tekvora Infotech',
    kind: 'Website',
    year: '2026',
    text: 'Company website with a Node.js backend, deployed on cPanel.',
    stack: ['Node.js', 'Express', 'cPanel'],
    demo: 'https://tekvorainfotech.com',
  },
  {
    title: 'ARX Infotech',
    kind: 'Website',
    year: '2026',
    text: 'Corporate website rebuilt in Next.js.',
    stack: ['Next.js', 'TypeScript'],
  },
  {
    title: 'GATE 2027 Prep',
    kind: 'Open source',
    year: '2026',
    text: 'Study repository for GATE 2027, Data Science & AI paper.',
    stack: ['Python', 'Notes'],
    code: 'https://github.com/Aman-0402/GATE2027',
  },
];

const s = (name, image) => ({ name, image });
export const skills = [
  { group: 'Frontend', items: [s('React', 'react.png'), s('Next.js', 'Nextjs.png'), s('TypeScript', 'TypeScript.png'), s('JavaScript', 'JavaScript.png'), s('Tailwind', 'Tailwind.png'), s('HTML', 'html.png'), s('CSS', 'css.png'), s('Bootstrap', 'Bootstrap.png')] },
  { group: 'Backend', items: [s('Node.js', 'node.png'), s('Express', 'express.png'), s('Django', 'Django.png'), s('Flask', 'Flask.png'), s('FastAPI', 'FastAPI.png'), s('PHP', 'PHP.png')] },
  { group: 'Data & AI', items: [s('Python', 'Python.png'), s('NumPy', 'NumPy.png'), s('Pandas', 'Pandas.png'), s('scikit-learn', 'sklearn.png'), s('TensorFlow', 'TensorFlow.png')] },
  { group: 'Databases & cloud', items: [s('PostgreSQL', 'PostgresSQL.png'), s('MySQL', 'MySQL.png'), s('MongoDB', 'mongodb.png'), s('AWS', 'AWS.png')] },
  { group: 'Tools', items: [s('Git', 'Git.png'), s('GitHub', 'GitHub.png'), s('VS Code', 'vscode.png'), s('Postman', 'Postman.png'), s('Figma', 'figma.png')] },
];
