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
      { name: "Java", level: 3 },
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
      { name: "YOLO", level: 4 },
      { name: "SAM", level: 4 },
      { name: "Whisper", level: 4 },
      { name: "PaddlePaddle", level: 4 },
      { name: "InternVideo2.5", level: 4 },
    ],
  },
  {
    category: "Infra / MLOps",
    items: [
      { name: "Docker", level: 5 },
      { name: "Slurm (Multi-GPU)", level: 4 },
      { name: "MinIO", level: 4 },
      { name: "Linux / Git", level: 5 },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "Pandas / NumPy", level: 5 },
      { name: "Data Pipeline 설계", level: 4 },
      { name: "Blender (합성 데이터)", level: 4 },
      { name: "SAS", level: 3 },
      { name: "ProModel", level: 3 },
    ],
  },
];
