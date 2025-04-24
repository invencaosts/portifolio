import { IconType } from "react-icons";

interface CardProjectProps {
  repoName: string;
  description: string;
  technologies: { icon: IconType; label: string }[];
  className?: string;
}

const CardProject = ({
  repoName,
  description,
  technologies,
  className,
  repoUrl,
}: CardProjectProps & { repoUrl: string }) => {
  const displayedTechnologies = technologies.slice(0, 3);

  return (
    <div
      className={`p-4 h-auto w-full bg-tertiary text-secundary flex flex-col items-start justify-between 
        rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.25),0px_-4px_6px_rgba(0,0,0,0.15)] ${className}`}
    >
      {/* Nome do repositório */}
      <h3 className="text-lg font-bold text-primary">{repoName}</h3>

      {/* Descrição do repositório */}
      <p className="text-sm mt-2 line-clamp-3">{description}</p>

      {/* Tecnologias usadas */}
      <div className="flex items-center mt-4 space-x-2">
        {displayedTechnologies.map((tech, index) => (
          <div key={index} className="flex items-center space-x-1">
            <tech.icon
              className="w-[20px] h-[20px]"
              style={{ color: "#000000" }}
            />
            <span className="text-xs">{tech.label}</span>
          </div>
        ))}
      </div>

      {/* Botão para o repositório */}
      <div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mt-4 px-2 py-1 bg-primary text-white text-sm rounded"
        >
          Ver Repositório
        </a>
      </div>
    </div>
  );
};

export default CardProject;
