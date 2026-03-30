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
      { name: "C/C++", level: 3 },
      { name: "Java", level: 3 },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", level: 5 },
      { name: "Fine-tuning (LoRA / SFT)", level: 5 },
      { name: "Prompt Engineering", level: 4 },
      { name: "vLLM", level: 4 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", level: 5 },
      { name: "FastAPI", level: 5 },
      { name: "Gradio", level: 4 },
      { name: "LangChain", level: 4 },
      { name: "LangGraph", level: 4 },
      { name: "Blender", level: 4 },
      { name: "Git", level: 5 },
    ],
  },
];
