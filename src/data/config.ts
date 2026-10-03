export const CONFIG = {
  name: 'Yuval Mehta',
  title: 'Senior AI Engineer',
  tagline:
    'I build and ship ML and LLM systems that hold up in production, from fine-tuning and inference to agents, for regulated, high-trust environments.',
  location: 'Mumbai, India',
  availableForWork: true,
  statusText: 'Open to research collaborations',
  email: 'yuvalmehta.728@gmail.com',
  github: 'yuval728',
  linkedin: 'yuvalmehta728',
  medium: 'yuvalmehta.728',
  x: 'Yuval728',
  resume: '/YuvalMehta_CV.pdf',
  avatar: 'https://avatars.githubusercontent.com/u/87527560?v=4',
  currentRole: 'Senior AI Engineer @ Nimap Infotech',
  currentRoleNote: 'Deployed at Mirae Asset Sharekhan',
  pinnedRepos: [
    // Must match GitHub repo names exactly. Order here is the display order.
    'Research-Pilot',
    'Qwen-3.5-Scratch-Implementation',
    'AQI_predictor',
    'AI-Therapist',
    'WsBuddy',
    'VerbalVision',
  ],

  education: [
    {
      degree: 'B.Tech in Computer Engineering (Specialization in Artificial Intelligence)',
      school: 'NMIMS Mukesh Patel School of Technology Management and Engineering',
      period: 'Graduated June 2025',
      detail: 'CGPA 3.84/4.0',
    },
  ],

  stats: [
    { value: 'Top 1%', label: 'Amazon ML Challenge 2024' },
    { value: '5x', label: 'Infrastructure cost reduction' },
    { value: '65%', label: 'Workflow coverage expanded' },
    { value: '2', label: 'IEEE publications' },
    { value: '15+', label: 'Technical Articles on Medium' },
  ],

  achievements: [
    {
      label: '4th',
      title: 'GenAI Week 2025 Hackathon',
      description: 'Placed 4th of 250+ teams in Silicon Valley after building a GxP audit chatbot end to end.',
    },
    {
      label: 'Top 1%',
      title: 'Amazon ML Challenge 2024',
      description: 'Ranked 274th of 74,824 participants - Top 1% in India\'s largest ML competition.',
    },
    {
      label: 'IEEE',
      title: 'IEEE InCoWoCo 2025',
      description: 'Published: Estimating Ground-Level AQI from Satellite Imagery using dual-view attention models.',
    },
    {
      label: 'IEEE',
      title: 'IEEE APCIT 2024',
      description: 'Published: Examining ML Approaches for Early Diabetes Prediction.',
    },
    {
      label: 'Research',
      title: 'IIT Kharagpur Research',
      description: 'Built a spatiotemporal video-feature extraction pipeline using autoencoders and graph neural networks.',
    },
    {
      label: 'Platform',
      title: 'Production AI Platform Delivery',
      description: 'Owned cEMS architecture and delivery, including ML pipelines, agents, CI/CD, and GxP-compliant infrastructure.',
    },
  ],

  about: {
    title: "Hi, I'm Yuval Mehta",
    sections: [
      "I'm a Senior AI Engineer from Mumbai. My focus is ML and LLM systems that survive production: fine-tuning and post-training, inference, agents, and the evaluation and observability around them. I build for environments where compliance and reliability matter from day one, not for demos.",
      "At xLM Continuous Intelligence (2025 to Sep 2026) I owned architecture and delivery for GxP-compliant products: cEMS, an environmental-monitoring platform built from the ground up, reusable audit-trail infrastructure, and LangGraph multi-agent systems for intelligent validation. Results: 5x lower infrastructure cost, 30% faster execution, 40% higher task success, 65% wider workflow coverage. Since Sep 2026 I am a Senior AI Engineer at Nimap Infotech, deployed at Mirae Asset Sharekhan.",
      "I combine research depth with product-minded engineering. My background includes machine-learning research at IIT Kharagpur, computer-vision and OCR work at JM Financial, two IEEE publications, and a Top 1% finish in the Amazon ML Challenge. I care equally about model capability, system design, and measurable business impact.",
      "I write about LLM post-training, inference, agent memory, and production failure modes. If you are working on high-trust AI infrastructure or research, get in touch.",
    ],
  },

  skills: [
    {
      name: 'ML/DL',
      color: 'text-accent-blue border-accent-blue/30 bg-accent-blue/5',
      items: [
        'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost',
        'OpenCV', 'Transformers', 'NLTK', 'spaCy', 'LightGBM',
        'CatBoost', 'HuggingFace', 'PEFT', 'LoRA',
      ],
    },
    {
      name: 'Generative AI & LLMs',
      color: 'text-accent-green border-accent-green/30 bg-accent-green/5',
      items: [
        'LangGraph', 'LangChain', 'LiteLLM', 'LlamaIndex', 'CrewAI', 'MCP', 'A2A',
        'RAG', 'Fine-tuning', 'Prompt Engineering', 'Embeddings', 'Function Calling', 'Reranking', 'Agentic Workflows', 'Context Engineering', 'Loop Engineering', 'Memory Management', 'Evaluation & Metrics', 'Harness Engineering', 'LLMOps',
        'OpenAI API', 'Anthropic API', 'Ollama', 'vLLM', 'Langfuse', 
      ],
    },
    {
      name: 'MLOps & Cloud',
      color: 'text-accent-amber border-accent-amber/30 bg-accent-amber/5',
      items: [
        'MLflow', 'Docker', 'W&B', 'DVC', 'AWS', 'GCP', 'Azure',
        'CI/CD', 'ONNX', 'TorchServe', 'GitHub Actions', 'Kubernetes', 'Distributed Systems', 'Arize Phoenix', 'Kafka', 'RabbitMQ'
      ],
    },
    {
      name: 'Languages',
      color: 'text-accent-purple border-accent-purple/30 bg-accent-purple/5',
      items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++', 'Java', 'Bash'],
    },
    {
      name: 'Databases & Vector Stores',
      color: 'text-accent-red border-accent-red/30 bg-accent-red/5',
      items: [
        'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'SQLite',
        'Pinecone', 'ChromaDB', 'FAISS', 'Qdrant', 'Weaviate', 'Cassandra', 'Elasticsearch', 'Neo4j'
      ],
    },
    {
      name: 'Web & APIs',
      color: 'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/5',
      items: ['FastAPI', 'Django', 'Flask', 'Streamlit', 'Node.js', 'Express.js', 'REST', 'GraphQL', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      name: 'Data & Big Data',
      color: 'text-accent-pink border-accent-pink/30 bg-accent-pink/5',
      items: ['PySpark', 'Apache Spark', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
    },
  ],

  experience: [
    {
      role: 'Senior AI Engineer',
      company: 'Nimap Infotech (deployed at Mirae Asset Sharekhan)',
      period: 'Sep 2026 - Present',
      location: 'Mumbai, Maharashtra',
      current: true,
      // Add NDA-cleared, metric-backed highlights here once confirmed.
      highlights: [],
      stack: [],
    },
    {
      role: 'Generative AI Engineer',
      company: 'xLM Continuous Intelligence',
      companyUrl: 'https://www.continuousintelligence.ai/',
      period: 'Jun 2025 - Sep 2026',
      location: 'Mumbai, Maharashtra',
      current: false,
      highlights: [
        'Owned architecture and delivery of cEMS from the ground up, building distributed systems, ML pipelines, AI agents, CI/CD workflows, and GxP-compliant infrastructure',
        'Reduced cTM infrastructure costs 5x through end-to-end pipeline redesign, scalability improvements, and performance optimization',
        'Built a reusable production audit-trail system that captures actor actions and contextual metadata for GxP-compliant traceability across products',
        'Designed LangGraph multi-agent systems and key cIV components, improving execution time 30%, task success 40%, and workflow coverage 65%',
      ],
      stack: ['LangGraph', 'Agentic Workflows', 'Multi-agent Systems', 'Python', 'Distributed Systems', 'CI/CD', 'MLOps', 'Azure', 'GxP'],
    },
    {
      role: 'AI/ML Intern',
      company: 'xLM Continuous Intelligence',
      companyUrl: 'https://www.continuousintelligence.ai/',
      period: 'Jan - May 2025',
      location: 'Mumbai, Maharashtra',
      current: false,
      highlights: [
        'Built a traceability matrix generator that reduced manual overhead 60% and improved workflow consistency 45%',
        'Prototyped three AI-driven document-intelligence solutions, reducing internal validation-cycle time 50%',
      ],
      stack: ['Python', 'MLOps', 'Document Intelligence', 'Agentic Workflows', 'Multi-agent Systems'],
    },
    {
      role: 'Machine Learning Intern',
      company: 'IIT Kharagpur',
      companyUrl: 'https://www.iitkgp.ac.in/',
      period: 'Jul 2024 - May 2025',
      location: 'Kharagpur, West Bengal',
      current: false,
      highlights: [
        'Built a video feature-extraction pipeline using autoencoders and graph neural networks for spatiotemporal representation learning, improving frame-processing efficiency 30%',
      ],
      stack: ['PyTorch', 'GNN', 'Autoencoders'],
    },
    {
      role: 'Data Science Intern',
      company: 'JM Financial Ltd',
      companyUrl: 'https://www.jmfl.com/',
      period: 'Jul - Nov 2024',
      location: 'Mumbai, Maharashtra',
      current: false,
      highlights: [
        'Automated KYC document verification using computer vision and deep learning, reducing processing time 40%',
        'Developed OCR solutions that increased document-verification efficiency 30%',
        'Analysed large datasets to generate actionable insights that improved operational efficiency 15%',
      ],
      stack: ['Computer Vision', 'Deep Learning', 'OCR', 'Python'],
    },
    {
      role: 'Backend Developer Intern',
      company: 'Kenmark ITAN Solutions',
      companyUrl: 'https://www.kenmark.in/',
      period: 'Dec 2022 - Apr 2023',
      location: 'Mumbai, Maharashtra',
      current: false,
      highlights: [
        'Engineered APIs that increased cross-platform integration efficiency 30%',
        'Implemented QA protocols that improved system reliability 20%',
        'Optimised SQL and MySQL queries, reducing average execution time 15%',
      ],
      stack: ['Node.js', 'SQL', 'MySQL', 'REST APIs'],
    },
  ],

  research: [
    {
      title: 'Estimating Ground-Level Air Quality Index from Satellite Imagery',
      conference: 'IEEE InCoWoCo 2025',
      authors: 'Yuval Mehta et al.',
      abstract: 'A dual-view attention model combining satellite and street-view imagery to forecast AQI and six pollutants, reaching an R² of 0.93 with a 35% reduction in cloud training costs.',
      doi: '10.1109/InCoWoCo64440.2025.11407074',
      link: 'https://ieeexplore.ieee.org/document/11407074/',
      year: 2025,
    },
    {
      title: 'Examining ML Approaches for Early Diabetes Prediction',
      conference: 'IEEE APCIT 2024',
      authors: 'Yuval Mehta et al.',
      abstract: 'Explores multiple ML models for early diabetes prediction, highlighting key patterns in patient health data to aid proactive healthcare measures. Demonstrates the effectiveness of ensemble methods and feature engineering in medical diagnostics.',
      doi: '10.1109/APCIT64514.2024.10673680',
      link: 'https://ieeexplore.ieee.org/document/10673680',
      year: 2024,
    },
  ],

  projects: [
    {
      name: 'Research Pilot',
      description: 'AI research copilot that turns papers into structured extractions, summaries, architecture diagrams, and PyTorch code through a 10-stage LangGraph workflow.',
      github: 'https://github.com/yuval728/Research-Pilot',
      demo: '',
      tags: ['LangGraph', 'RAG', 'FastAPI', 'React', 'Supabase', 'LiteLLM'],
      pinned: true,
    },
    {
      name: 'Qwen3.5 from Scratch',
      description: 'PyTorch implementation of core Qwen3.5 architecture components: GQA, SwiGLU, RoPE, and RMSNorm; validated against the official implementation.',
      github: 'https://github.com/yuval728/Qwen-3.5-Scratch-Implementation',
      demo: '',
      tags: ['Python', 'PyTorch', 'Transformers', 'GQA', 'RoPE'],
      pinned: true,
    },
    {
      name: 'AQI Prediction',
      description: 'Dual-view attention model forecasting AQI and 6 pollutants, R² of 0.93. Reduced cloud training cost by 35% via automated sweeps.',
      github: 'https://github.com/yuval728/AQI_predictor',
      demo: '',
      tags: ['PyTorch', 'GCP', 'WandB', 'FastAPI', 'MLOps'],
      pinned: true,
    },
    {
      name: 'AI Therapist',
      description: 'LLM-powered therapy agent with emotion control and persistent memory: 70% session consistency improvement, 52% empathy alignment via feedback-driven tuning.',
      github: 'https://github.com/yuval728/AI-Therapist',
      demo: '',
      tags: ['LangGraph', 'LLMs', 'FastAPI', 'Supabase', 'Vector DB'],
      pinned: true,
    },
    {
      name: 'WS Buddy',
      description: 'Multimodal chatbot integrating voice, image, and context memory: 85% task success rate, 30% engagement boost via dynamic activity updates.',
      github: 'https://github.com/yuval728/WsBuddy',
      demo: '',
      tags: ['LangGraph', 'Whisper', 'Qdrant', 'Diffusion', 'Docker'],
      pinned: true,
    },
    {
      name: 'LipReader AI',
      description: 'Lip-to-text model with 87% character accuracy and 25% faster inference via TorchServe. Streamlined experiment cycles using MLflow.',
      github: 'https://github.com/Yuval728/VerbalVision',
      demo: '',
      tags: ['PyTorch', 'OpenCV', 'TorchServe', 'MLflow', 'Docker'],
      pinned: true,
    },
    {
      name: 'Outreach-Ace',
      description: 'Gen-AI resume analyzer and cold email generator using LangChain and LLMs with a Streamlit interface.',
      github: 'https://github.com/Yuval728/OutreachAce',
      demo: 'https://outreachace.streamlit.app/',
      tags: ['LangChain', 'LLM', 'ChromaDB', 'Streamlit'],
      pinned: true,
    },
    {
      name: 'Image-Lingo',
      description: 'Image captioning with attention mechanism achieving 91% accuracy. Full MLOps integration for model tracking and performance improvements.',
      github: 'https://github.com/Yuval728/ImageLingo',
      demo: '',
      tags: ['PyTorch', 'Attention', 'AWS', 'MLflow'],
      pinned: false,
    },
    {
      name: 'Urban-Echo',
      description: 'Sound classification model trained on 8,000+ audio samples with MLflow experiment tracking.',
      github: 'https://github.com/Yuval728/UrbanEcho',
      demo: '',
      tags: ['PyTorch', 'Audio', 'MLflow', 'Docker'],
      pinned: false,
    },
  ],

  contact: {
    title: "Let's build something.",
    description: 'Open to research collaborations and conversations about ML and LLM systems.',
  },

  blogDisplayCount: 6,
};
