export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export const skills: Skill[] = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 5 },
      { name: "SQL", level: 5 },
      { name: "C / C++", level: 3 },
      { name: "Java", level: 3 },
    ],
  },
  {
    category: "ML / DL",
    items: [
      { name: "PyTorch", level: 5 },
      { name: "LoRA / Fine-tuning", level: 5 },
      { name: "vLLM / InternVideo2.5", level: 4 },
      { name: "LLaMA / LLaVA / Vicuna", level: 4 },
      { name: "YOLO / SAM / CLIP", level: 4 },
      { name: "Whisper / PaddlePaddle", level: 4 },
      { name: "Stable Diffusion", level: 3 },
    ],
  },
  {
    category: "Robotics",
    items: [
      { name: "ROS2 / Gazebo", level: 4 },
      { name: "Blender", level: 4 },
      { name: "MuJoCo / RoboCasa", level: 3 },
      { name: "UR5e / Stretch Robot", level: 3 },
    ],
  },
  {
    category: "Infra & Data",
    items: [
      { name: "Docker / FastAPI", level: 5 },
      { name: "Slurm (Multi-GPU)", level: 4 },
      { name: "MinIO / Swagger", level: 4 },
      { name: "Linux / Git", level: 5 },
      { name: "Pandas / NumPy", level: 5 },
      { name: "SAS / ProModel", level: 3 },
    ],
  },
];
