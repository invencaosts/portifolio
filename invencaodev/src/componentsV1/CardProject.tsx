import { IconType } from 'react-icons';

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
      className={`bg-tertiary text-secundary flex h-auto w-full flex-col items-start justify-between rounded-lg p-4 shadow-[0px_4px_6px_rgba(0,0,0,0.25),0px_-4px_6px_rgba(0,0,0,0.15)] ${className}`}
    >
      {/* Nome do repositório */}
      <h3 className="text-primary text-lg font-bold">{repoName}</h3>

      {/* Descrição do repositório */}
      <p className="mt-2 line-clamp-3 text-sm">{description}</p>

      {/* Tecnologias usadas */}
      <div className="mt-4 flex items-center space-x-2">
        {displayedTechnologies.map((tech, index) => (
          <div key={index} className="flex items-center space-x-1">
            <tech.icon className="h-[20px] w-[20px]" style={{ color: '#000000' }} />
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
          className="bg-primary mt-4 flex items-center rounded px-2 py-1 text-sm text-white"
        >
          Ver Repositório
        </a>
      </div>
    </div>
  );
};

export default CardProject;
