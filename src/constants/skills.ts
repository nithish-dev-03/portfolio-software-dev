export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName: string; // Lucide icon name to dynamically render
}

export interface SkillCategory {
  id: string;
  titleKey: string; // Translation key
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    titleKey: "skills.categories.frontend",
    skills: [
      { name: "React", level: 90, iconName: "Code2" },
      { name: "TypeScript", level: 85, iconName: "FileCode" },
      { name: "JavaScript", level: 92, iconName: "FileText" },
      { name: "Redux (Saga/Thunk)", level: 80, iconName: "Layers" },
      { name: "Tailwind CSS", level: 95, iconName: "Palette" },
      { name: "Material UI / Ant Design", level: 85, iconName: "Layout" },
      { name: "SCSS / CSS", level: 88, iconName: "Scissors" },
    ],
  },
  {
    id: "backend",
    titleKey: "skills.categories.backend",
    skills: [
      { name: "Node.js", level: 80, iconName: "Server" },
      { name: "Express.js", level: 82, iconName: "Cpu" },
      { name: "REST APIs", level: 88, iconName: "Link" },
    ],
  },
  {
    id: "mobile",
    titleKey: "skills.categories.mobile",
    skills: [
      { name: "Flutter", level: 85, iconName: "Smartphone" },
      { name: "Dart", level: 80, iconName: "Zap" },
    ],
  },
  {
    id: "database",
    titleKey: "skills.categories.database",
    skills: [
      { name: "MongoDB", level: 78, iconName: "Database" },
      { name: "SQL", level: 75, iconName: "Table" },
    ],
  },
  {
    id: "devTools",
    titleKey: "skills.categories.devTools",
    skills: [
      { name: "Git & GitHub", level: 88, iconName: "GitBranch" },
      { name: "VS Code", level: 92, iconName: "Monitor" },
      { name: "Chrome DevTools", level: 90, iconName: "Settings" },
    ],
  },
  {
    id: "softSkills",
    titleKey: "skills.categories.softSkills",
    skills: [
      { name: "Debugging complex apps", level: 92, iconName: "Bug" },
      { name: "Performance optimization", level: 85, iconName: "TrendingUp" },
      { name: "Clean Architecture", level: 85, iconName: "Boxes" },
      { name: "Team Collaboration", level: 90, iconName: "Users" },
    ],
  },
];
