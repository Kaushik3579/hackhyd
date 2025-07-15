export const tracks = [
  {
    id: 'ai-ml',
    icon: '🤖',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Develop intelligent systems that can learn, reason, and make decisions to solve complex problems.',
    problems: [
      {
        title: 'Continual Learning Framework for Catastrophic Forgetting Prevention',
        description: 'Traditional ML models forget old tasks when learning new ones. This project builds a framework where neural networks can incrementally learn new classes or domains while retaining prior knowledge using techniques like Elastic Weight Consolidation (EWC), replay memory, or dynamic architecture expansion.'
      },
      {
        title: 'Adversarial Defense Generator for Large Language Models',
        description: 'Build a middleware that acts between users and a language model (like GPT) to detect and neutralize harmful or manipulative prompts in real time. Use adversarial training, prompt injection patterns, and LLM auditing to build this defense engine.'
      },
      {
        title: 'Fully Self-Supervised Multimodal Reasoning System',
        description: 'Develop a system that uses contrastive learning on paired image-text datasets (like COCO, CLIP) to answer questions, describe scenes, or infer relationships without labeled data. Focus on multi-head attention and cross-modal encoders.'
      },
      {
        title: 'Neuro-Symbolic Hybrid Reasoning Platform',
        description: 'Combine symbolic AI (rule-based systems) with deep learning models to reason over structured and unstructured data. For example, use logic programming for constraints and neural networks for perception tasks.'
      },
      {
        title: 'Autonomous Dataset Distillation Engine',
        description: 'Create a system that generates a small synthetic dataset from a large one while maintaining model performance. Useful for training models faster with less compute. Use meta-learning or differentiable data selection.'
      },
      {
        title: 'Generalizable Few-Shot Learner across Modalities',
        description: 'Design a learner that can handle text, images, and audio with minimal examples. Base it on meta-learning frameworks like MAML, using modality-agnostic embeddings and transformer backbones.'
      },
      {
        title: 'Large-Scale Knowledge Graph Completion via Transformer-Based Reasoning',
        description: 'Extend knowledge graphs like Wikidata by predicting missing links (triplets) using Graph Attention Networks or Transformer-based graph encoders. Incorporate contextual entity embeddings.'
      },
      {
        title: 'Self-Debugging AI Model Compiler',
        description: 'Build a compiler that automatically detects training pipeline bugs (label leakage, data imbalance, skewed distribution) and suggests corrections. Use static code analysis, heuristics, and AI agents.'
      },
      {
        title: 'Fully AI-Driven Data Labeling Platform with Active Learning',
        description: 'Let a model choose the most informative unlabelled samples and suggest labels. Include model uncertainty estimation and human-in-the-loop mechanisms for scalable, accurate dataset labeling.'
      },
      {
        title: 'Neural Architecture Search-as-a-Service',
        description: 'Provide a cloud-based NAS engine where users upload datasets and constraints, and the backend returns the optimal deep learning model using evolutionary algorithms or reinforcement learning.'
      }
    ]
  },
  {
    id: 'fintech',
    icon: '💻',
    title: 'FinTech & Blockchain',
    description: 'Innovate in financial technology, decentralized finance, and blockchain applications.',
    problems: [
      {
        title: 'Cross-Ledger Transaction Reconciliation Engine',
        description: 'Design a backend service to match, track, and verify transactions across blockchains (e.g., Ethereum, Solana) and traditional banks using APIs, Merkle trees, and timestamped ledgers.'
      },
      {
        title: 'AI Model for Predicting Regulatory Arbitrage in Crypto Markets',
        description: 'Build a predictive model that analyzes global regulatory data, market sentiment, and trading activity to flag when capital is likely to shift due to looser regulations elsewhere.'
      },
      {
        title: 'On-Chain AML Model with Zero-Knowledge Proofs',
        description: 'A privacy-compliant anti-money laundering tool that scans blockchain transactions for suspicious activity while preserving anonymity using zk-SNARKs or zk-STARKs.'
      },
      {
        title: 'Adversarial Robustness Validator for AI Trading Bots',
        description: 'Create a stress-testing environment that injects manipulated or spoofed data into trading bot pipelines to evaluate their robustness to fake signals.'
      },
      {
        title: 'Real-Time Anomaly Detection at Petabyte Scale',
        description: 'Build a stream processing system for huge financial datasets that detects fraud using approximate counting, sketches, and probabilistic ML models.'
      },
      {
        title: 'Decentralized Identity Verification Layer for KYC',
        description: 'Replace centralized KYC by issuing users digital identity proofs they control, stored on blockchain. Institutions can verify without seeing full user data.'
      },
      {
        title: 'Crypto-Lending Risk Analyzer using Multi-Agent Simulations',
        description: 'Model borrowers, lenders, and market volatility as agents in a simulation to understand systemic risks in DeFi lending protocols.'
      },
      {
        title: 'AI-Powered Insider Trading Detector using Social Graphs',
        description: 'Analyze social media, public filings, and trading behavior to build a graph and detect abnormal activity patterns indicative of insider trading.'
      },
      {
        title: 'Dynamic Tokenomics Simulator for DeFi Projects',
        description: 'Simulate token supply, inflation, burn rate, and staking rewards to optimize value sustainability for crypto projects.'
      },
      {
        title: 'Privacy-Preserving Financial ML Framework',
        description: 'Train and infer on encrypted financial data using homomorphic encryption or secure multiparty computation to ensure absolute privacy.'
      }
    ]
  },
  {
    id: 'sustainability',
    icon: '🌍',
    title: 'Sustainability & Environment',
    description: 'Create solutions that promote environmental sustainability and combat climate change.',
    problems: [
      {
        title: 'Carbon-Negative Routing API for Logistics and Mobility Apps',
        description: 'Suggest routes based on fuel consumption, real-time traffic, and carbon offset options. Use emissions databases, routing algorithms, and mapping APIs.'
      },
      {
        title: 'AI Model for Predicting Environmental Policy Impact',
        description: 'Use econometrics and machine learning to predict how policy changes (e.g., plastic bans, carbon taxes) will impact pollution levels, industry output, and emissions.'
      },
      {
        title: 'Smart Climate Contracts using Dynamic NFTs',
        description: 'Create NFT tokens that represent a company\'s environmental commitments, updating dynamically as performance metrics are reported and verified.'
      },
      {
        title: 'Multi-Criteria Optimization for Carbon-Aware Cloud Scheduling',
        description: 'Build a scheduler that runs cloud jobs where renewable energy is available, optimizing for energy cost, latency, and CO2 impact.'
      },
      {
        title: 'Simulated Digital Twin for Urban Carbon Footprint',
        description: 'A virtual model of a city that simulates how urban planning (traffic control, zoning) affects emissions, using simulation software and open GIS data.'
      },
      {
        title: 'Green Investment Recommendation System using ESG Graphs',
        description: 'Recommend portfolios using company ESG scores, financial performance, and controversies. Leverage graph embeddings and multi-objective optimization.'
      },
      {
        title: 'Water Usage Forecasting using Probabilistic Models',
        description: 'Predict daily or weekly usage for households or municipalities using time-series probabilistic models like Prophet, DeepAR, or Bayesian networks.'
      },
      {
        title: 'Open Protocol for Sustainability Scoring in E-Commerce',
        description: 'API standard that lets brands and platforms expose lifecycle emissions, recyclability, and sourcing data in a machine-readable format.'
      },
      {
        title: 'Automated Carbon Reporting Toolchain',
        description: 'A pipeline that ingests energy use, travel logs, and procurement data and generates emission reports in GHG-compliant formats.'
      },
      {
        title: 'AI-Driven Ecosystem Impact Simulator',
        description: 'Simulates the effect of construction or industrial projects on biodiversity by combining land-use maps, historical data, and predictive ecology models.'
      }
    ]
  },
  {
    id: 'healthtech',
    icon: '⚕️',
    title: 'HealthTech & Bioinformatics',
    description: 'Develop technologies that improve healthcare delivery and advance medical research.',
    problems: [
      {
        title: 'Federated Multi-Institutional Disease Prediction Model',
        description: 'Enables hospitals to train shared models without sharing data. Uses federated learning + differential privacy for HIPAA/GDPR compliance.'
      },
      {
        title: 'Generative Medical Report Synthesizer',
        description: 'Create structured reports from radiology images + lab results + vitals using multimodal transformers. Goal: reduce doctor workload.'
      },
      {
        title: 'AI Model for Identifying Drug Resistance Patterns',
        description: 'Analyze EHR data to predict patient-specific antibiotic resistance and tailor prescriptions accordingly using pattern mining.'
      },
      {
        title: 'Health Risk Forecasting via Temporal Graph Networks',
        description: 'Use patient history as a dynamic graph to forecast future illnesses, focusing on comorbidities and lifestyle data.'
      },
      {
        title: 'Zero-Shot Diagnosis Support System',
        description: 'Design a foundational model that generalizes to unseen diseases based on symptom descriptions and past case embeddings.'
      },
      {
        title: 'Digital Clinical Trial Matcher with Explainable AI',
        description: 'Suggest relevant clinical trials for patients using NLP + explainable decision trees or SHAP for transparency.'
      },
      {
        title: 'Causal Inference Model for Medical Effectiveness',
        description: 'Build tools to assess what treatments actually caused improvements (not just correlations) using causal graphs and counterfactuals.'
      },
      {
        title: 'Ethical Risk Score Generator for AI Models',
        description: 'Evaluate AI models for healthcare by scoring them on fairness, bias, population coverage, and interpretability.'
      },
      {
        title: 'Synthetic EHR Generator with Data Drift Simulation',
        description: 'Create synthetic patient records that simulate seasonal, geographic, or demographic shifts for safer model testing.'
      },
      {
        title: 'Healthcare Outcome Optimizer with Reinforcement Learning',
        description: 'An RL system that suggests treatment sequences to optimize long-term patient health outcomes while considering side effects and cost.'
      }
    ]
  },
  {
    id: 'open-innovation',
    icon: '💡',
    title: 'Open Innovation (Wildcard)',
    description: 'Think outside the box and bring your most innovative ideas to solve real-world challenges.',
    problems: [
      {
        title: 'Your Innovative Idea Here!',
        description: 'This is your chance to surprise us with something completely new and innovative. The sky\'s the limit!'
      },
      {
        title: 'No Limits to Creativity',
        description: 'Break the mold and propose a solution that challenges conventional thinking in any domain.'
      },
      {
        title: 'Surprise Us',
        description: 'We\'re excited to see what unique and creative solutions you can come up with!'
      }
    ]
  }
];
