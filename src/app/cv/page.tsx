"use client";

const basePath = process.env.NODE_ENV === "production" ? "/profile" : "";

export default function CVPage() {
  return (
    <div className="max-w-[800px] mx-auto px-8 py-12 bg-white text-[#222] print:px-0 print:py-0">
      {/* Print button */}
      <div className="print:hidden mb-6 flex gap-3">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 text-sm rounded-md bg-[#b509ac] text-white hover:bg-[#9a0893] transition-colors"
        >
          Print / Save as PDF
        </button>
        <a
          href={`${basePath}/`}
          className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Back to Portfolio
        </a>
      </div>

      {/* Header */}
      <header className="mb-8 border-b-2 border-[#222] pb-4">
        <div className="flex gap-5 items-start">
          <img
            src={`${basePath}/profile.jpg`}
            alt="Jieun Choi"
            className="w-20 h-20 rounded-full object-cover border border-gray-200 shrink-0 print:w-16 print:h-16"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Jieun Choi</h1>
            <p className="text-base text-gray-600 mt-1">AI Researcher</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span>jichoi0101@gmail.com</span>
              <a href="https://github.com/ilileun" className="underline">GitHub</a>
              <a href="https://scholar.google.com/citations?user=7BHY-McAAAAJ" className="underline">Google Scholar</a>
              <a href="https://ilileun.github.io/profile/" className="underline">Portfolio</a>
            </div>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-7">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#b509ac] mb-2">Summary</h2>
        <p className="text-sm leading-relaxed">
          AI Researcher specializing in Document AI, Video AI, and multimodal models.
          Experienced in end-to-end ML pipelines — from problem definition, data construction,
          model training and evaluation, to production serving.
          M.S. in Computer Science from KAIST with research in spatial reasoning using Large Multimodal Models.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-7">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#b509ac] mb-3">Experience</h2>

        <div className="mb-5">
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-sm font-bold">KT · GenAI LAB</h3>
              <p className="text-sm text-gray-600">Senior Researcher · Seoul</p>
            </div>
            <span className="text-xs text-gray-400 shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Mar 2025 – Present</span>
          </div>
          <ul className="mt-1.5 text-sm space-y-1 list-none">
            <li className="pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-gray-400">
              <strong>Meritz Fire Insurance Joint Research</strong> — Document dewarping (UVDoc + AADD fine-tuning, MS-SSIM 0.52), orientation classification (94% → 99.6%), reading order algorithm (+2.9%p over Greedy baseline)
            </li>
            <li className="pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-gray-400">
              <strong>KT Media Division Tech Support</strong> — Narrative video summarization via SFT on InternVideo2.5, semantic scene title recommendation system (0.3s/scene)
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-sm font-bold">KT · AI2XL LAB</h3>
              <p className="text-sm text-gray-600">Research Intern · Seoul</p>
            </div>
            <span className="text-xs text-gray-400 shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Jul – Aug 2024</span>
          </div>
          <ul className="mt-1.5 text-sm space-y-1 list-none">
            <li className="pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-gray-400">
              Dialogue-based highlight detection pipeline (STT → LLM summarization → temporal grounding), IoU 0.52–0.75
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-sm font-bold">POSCO · Smart Factory Planning Group</h3>
              <p className="text-sm text-gray-600">Staff Engineer · Pohang</p>
            </div>
            <span className="text-xs text-gray-400 shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Jun 2021 – Jan 2023</span>
          </div>
          <ul className="mt-1.5 text-sm space-y-1 list-none">
            <li className="pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-gray-400">
              Manufacturing simulation for crane investment validation (98% accuracy, ProModel)
            </li>
            <li className="pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-gray-400">
              Planned &amp; launched internal AI tech blog — 109 members in 3 months (2× target), adopted as mandatory for certification
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-7">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#b509ac] mb-3">Education</h2>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-sm font-bold">KAIST</h3>
              <p className="text-sm text-gray-600">M.S. in Computer Science · GPA 3.80/4.3</p>
            </div>
            <span className="text-xs text-gray-400 shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Feb 2023 – Feb 2025</span>
          </div>
          <p className="text-sm text-gray-500 mt-0.5">Robust Intelligence and Robotics Lab (Advisor: Prof. Daehyung Park)</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-sm font-bold">Chonnam National University</h3>
              <p className="text-sm text-gray-600">B.S. in Electrical &amp; Computer Engineering · GPA 4.32/4.5</p>
            </div>
            <span className="text-xs text-gray-400 shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Mar 2018 – Jun 2021</span>
          </div>
          <p className="text-sm text-gray-500 mt-0.5">Summa Cum Laude · BMIL Lab (Advisor: Prof. Seonyong Yoo)</p>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-7">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#b509ac] mb-3">Publications</h2>
        <ol className="text-sm space-y-2 list-none">
          <li className="pl-3 relative before:content-['[1]'] before:absolute before:left-[-12px] before:text-gray-400 before:text-xs">
            <strong>&ldquo;A Survey on Integration of Large Language Models with Intelligent Robots&rdquo;</strong>
            <br />
            <span className="text-gray-500">Y. Kim, D. Kim, <u>J. Choi</u>, J. Park, N. Oh, D. Park · <em>Intelligent Service Robotics</em>, 2024 · Cited by 154</span>
          </li>
          <li className="pl-3 relative before:content-['[2]'] before:absolute before:left-[-12px] before:text-gray-400 before:text-xs">
            <strong>&ldquo;Spatial Scene Graph Generation Using Supervised Fine-tuning of a Large Multimodal Model&rdquo;</strong>
            <br />
            <span className="text-gray-500"><u>J. Choi</u>, D. Hwang, D. Park · <em>Unpublished (Master&apos;s thesis research)</em></span>
          </li>
          <li className="pl-3 relative before:content-['[3]'] before:absolute before:left-[-12px] before:text-gray-400 before:text-xs">
            <strong>&ldquo;MGHanD: Multi-modal Guidance for authentic Hand Diffusion&rdquo;</strong>
            <br />
            <span className="text-gray-500">T. Eum, <u>J. Choi</u>, T.-K. Kim · <em>arXiv preprint</em>, Mar 2025</span>
          </li>
        </ol>
      </section>

      {/* Selected Projects */}
      <section className="mb-7">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#b509ac] mb-3">Selected Projects</h2>
        <div className="text-sm space-y-2">
          <div className="flex justify-between items-baseline">
            <p><strong>Spatial Scene Graph Generation</strong> <span className="text-gray-400 text-xs">BECS · IITP</span> — 1st Author. LMM 기반 공간 추론 강화 및 Multi-Agent 장면 그래프 생성</p>
            <span className="text-xs text-gray-400 shrink-0 ml-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>2024–2025</span>
          </div>
          <div className="flex justify-between items-baseline">
            <p><strong>6-DoF Pose Estimation</strong> <span className="text-gray-400 text-xs">SEMES</span> — 비정형 삽입구 자동 이/적재를 위한 비전 기반 포즈 추정</p>
            <span className="text-xs text-gray-400 shrink-0 ml-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>2023–2024</span>
          </div>
          <div className="flex justify-between items-baseline">
            <p><strong>3D Concept Graph</strong> <span className="text-gray-400 text-xs">과기부</span> — 자율행동체를 위한 실시간 3D 장면 그래프 생성 및 환경 인식</p>
            <span className="text-xs text-gray-400 shrink-0 ml-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>2024–2027</span>
          </div>
          <div className="flex justify-between items-baseline">
            <p><strong>Illegal Medical Institution Prediction</strong> <span className="text-gray-400 text-xs">건강보험공단</span> — Attention 기반 신경망을 활용한 사무장 병원 탐지</p>
            <span className="text-xs text-gray-400 shrink-0 ml-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>2020–2021</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-7">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#b509ac] mb-3">Skills</h2>
        <div className="text-sm space-y-1">
          <p><strong>Programming:</strong> Python, SQL, C/C++, Java</p>
          <p><strong>AI / ML:</strong> PyTorch, Fine-tuning (LoRA / SFT), Prompt Engineering, vLLM</p>
          <p><strong>Tools:</strong> Docker, FastAPI, Gradio, LangChain, LangGraph, Blender, Git</p>
        </div>
      </section>

      {/* Awards */}
      <section className="mb-7">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#b509ac] mb-3">Awards</h2>
        <div className="text-sm space-y-1">
          <p><strong>Gold Prize</strong> · Regional Problem-Solving Hackathon · Gwangju-Jeonnam Innovation Platform · 2021</p>
          <p><strong>Award</strong> · Post-COVID AI Challenge · KT &amp; NIA · 2020</p>
          <p><strong>Academic Excellence Award</strong> · Chonnam National University · 2021</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-7">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#b509ac] mb-3">Certifications</h2>
        <div className="text-sm space-y-1">
          <p><strong>Big Data Analyst (빅데이터분석기사)</strong> · Korea Data Agency · 2022</p>
          <p><strong>ADsP</strong> · Korea Data Agency · 2022</p>
          <p><strong>OPIc English</strong> · IH (Intermediate High) · 2025.12</p>
        </div>
      </section>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body { background: white !important; color: #222 !important; -webkit-print-color-adjust: exact; }
          nav, footer { display: none !important; }
          @page { margin: 15mm; size: A4; }
        }
      `}</style>
    </div>
  );
}
