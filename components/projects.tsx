import EmblaCarousel from "./embla-carousel/EmblaCarousel";
import ProjectCard from "./project-card";

export default function Projects() {
  const OPTIONS = { dragFree: true };
  const projects = [
    <ProjectCard
      projectName="Envy"
      imagePath="/cards/envy.png"
      link="https://github.com/softmaxer/envy"
      key={1}
    />,
    <ProjectCard
      projectName="Pedal"
      imagePath="/cards/pedal.png"
      link="https://github.com/softmaxer/pedal"
      key={2}
    />,
    <ProjectCard
      projectName="NVD"
      imagePath="/cards/nvd.png"
      link="https://github.com/softmaxer/cve-database-ingestion"
      key={3}
    />,
    <ProjectCard
      projectName="OSAIL"
      imagePath="/cards/osail.png"
      link="https://github.com/softmaxer/osail"
      key={4}
    />,
  ];

  return <EmblaCarousel slides={projects} options={OPTIONS} />;
}
