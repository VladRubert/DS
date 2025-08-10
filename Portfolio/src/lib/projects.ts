// Project data
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'data-science' | 'data-analysis' | 'economics';
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Análisis predictivo de mercados financieros",
    description: "Modelo de machine learning para predecir tendencias en mercados bursátiles utilizando datos históricos y análisis de sentimiento.",
    image: "/assets/projects/finance-prediction.jpg",
    tags: ["Python", "Machine Learning", "Financial Analysis", "Time Series"],
    category: "data-science",
    link: "#"
  },
  {
    id: 2,
    title: "Visualización de indicadores económicos",
    description: "Dashboard interactivo para visualizar indicadores macroeconómicos de Latinoamérica durante los últimos 20 años.",
    image: "/assets/projects/economic-dashboard.jpg",
    tags: ["Tableau", "Data Visualization", "Economics"],
    category: "economics",
    link: "#"
  },
  {
    id: 3,
    title: "Análisis de comportamiento del consumidor",
    description: "Segmentación de clientes y análisis de patrones de compra para una empresa de retail utilizando técnicas de clustering.",
    image: "/assets/projects/consumer-analysis.jpg",
    tags: ["R", "Cluster Analysis", "Customer Segmentation"],
    category: "data-analysis",
    link: "#"
  },
  {
    id: 4,
    title: "Impacto de políticas económicas en el empleo",
    description: "Estudio econométrico sobre el impacto de políticas fiscales en las tasas de empleo regional.",
    image: "/assets/projects/economic-policy.jpg",
    tags: ["STATA", "Econometrics", "Policy Analysis"],
    category: "economics",
    link: "#"
  },
  {
    id: 5,
    title: "Optimización de cadena de suministro",
    description: "Modelo de optimización para mejorar la eficiencia en la cadena de suministro de una multinacional.",
    image: "/assets/projects/supply-chain.jpg",
    tags: ["Python", "Operations Research", "Optimization"],
    category: "data-science",
    link: "#"
  },
  {
    id: 6,
    title: "Análisis de datos públicos de salud",
    description: "Análisis exploratorio de datos de salud pública para identificar tendencias y disparidades en la atención médica.",
    image: "/assets/projects/health-data.jpg",
    tags: ["Python", "Pandas", "Data Visualization"],
    category: "data-analysis",
    link: "#"
  }
];