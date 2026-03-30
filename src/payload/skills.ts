export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export const skills: Skill[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 5 },
      { name: "SQL", level: 5 },
      { name: "C/C++", level: 3 },
    ],
  },
  {
    category: "ML / DL",
    items: [
      { name: "PyTorch", level: 5 },
      { name: "Fine-tuning (LoRA)", level: 5 },
      { name: "Computer Vision", level: 5 },
      { name: "LLM / VLM", level: 4 },
      { name: "Model Serving (vLLM)", level: 4 },
    ],
  },
  {
    category: "Infra / MLOps",
    items: [
      { name: "Docker", level: 5 },
      { name: "FastAPI", level: 5 },
      { name: "Multi-GPU (Slurm)", level: 4 },
      { name: "Linux / Git", level: 5 },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "Pandas / NumPy", level: 5 },
      { name: "Data Pipeline 설계", level: 4 },
      { name: "Blender (합성 데이터)", level: 4 },
    ],
  },
];
