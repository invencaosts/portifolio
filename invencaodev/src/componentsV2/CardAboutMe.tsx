import { SlNotebook } from 'react-icons/sl';
import { LiaSuitcaseSolid } from 'react-icons/lia';

type Experiencia = {
  nomeInstituicao: string;
  titulo: string;
  periodo: string;
};

type CardAboutMeProps = {
  tipoCard: 'Educação' | 'Experiência';
  experiencias: Experiencia[];
};

export default function CardAboutMe({ tipoCard, experiencias }: CardAboutMeProps) {
  return (
    <div className="bg-surface border-borderColor h-auto w-full rounded-lg border-2 p-4 shadow-md transition-transform duration-300 hover:scale-105">
      {/* Header */}
      <div className="flex items-center gap-2 text-lg">
        {tipoCard === 'Educação' ? (
          <SlNotebook className="text-primary h-5 w-5" />
        ) : (
          <LiaSuitcaseSolid className="text-primary h-5 w-5" />
        )}
        <h2 className="font-semibold">{tipoCard}</h2>
      </div>

      {/* Experiências */}
      <div className="mt-4 flex flex-col gap-4">
        {experiencias.map((exp, index) => (
          <div
            key={index}
            className={`text-foreground/60 flex flex-col gap-1 text-base ${index > 0 ? 'border-borderColor border-t pt-4' : ''} `}
          >
            <p className="text-foreground font-medium">{exp.nomeInstituicao}</p>
            <p>{exp.titulo}</p>
            <p className="text-sm opacity-70">{exp.periodo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
