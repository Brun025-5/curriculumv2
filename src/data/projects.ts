import project1 from "@/assets/images/project.png";
import project2 from "@/assets/images/project.png";

export const projects = [
  {
    value: "item-1",
    title: "Proyecto 1: Plataforma de E-commerce",
    image: project1,
    description:
      "Una plataforma de comercio electrónico completa construida con Next.js y Stripe. Permite a los usuarios navegar por productos, añadirlos al carrito y realizar pagos seguros. Incluye un panel de administración para gestionar el inventario.",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "Tailwind CSS"],
    liveLink: "https://link-a-tu-proyecto.com",
    githubLink: "https://github.com/tu-usuario/proyecto-1",
  },
  {
    value: "item-2",
    title: "Proyecto 2: Clon de Trello",
    image: project2,
    description:
      "Una aplicación de gestión de tareas inspirada en Trello con funcionalidad de arrastrar y soltar (drag and drop). Los usuarios pueden crear tableros, listas y tarjetas para organizar sus flujos de trabajo.",
    technologies: ["React", "TypeScript", "React Beautiful DND", "Styled Components"],
    liveLink: "https://link-a-tu-proyecto.com",
    githubLink: "https://github.com/tu-usuario/proyecto-2",
  },
  
];