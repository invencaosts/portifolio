import { SlNotebook } from "react-icons/sl";
import { LiaSuitcaseSolid } from "react-icons/lia";

type Experiencia = {
  nomeInstituicao: string;
  titulo: string;
  periodo: string;
};

type CardAboutMeProps = {
  tipoCard: "Educação" | "Experiência";
  experiencias: Experiencia[];
};

export default function CardAboutMe({
  tipoCard,
  experiencias,
}: CardAboutMeProps) {
  return (
    <div
      className="
        bg-surface
        w-full
        h-auto
        rounded-lg
        p-4
        border-2 border-borderColor
        shadow-md
        transition-transform duration-300
        hover:scale-105
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 text-lg">
        {tipoCard === "Educação" ? (
          <SlNotebook className="text-primary w-5 h-5" />
        ) : (
          <LiaSuitcaseSolid className="text-primary w-5 h-5" />
        )}
        <h2 className="font-semibold">{tipoCard}</h2>
      </div>

      {/* Experiências */}
      <div className="mt-4 flex flex-col gap-4">
        {experiencias.map((exp, index) => (
          <div
            key={index}
            className={`
        text-base text-foreground/60
        flex flex-col gap-1
        ${index > 0 ? "pt-4 border-t border-borderColor" : ""}
      `}
          >
            <p className="font-medium text-foreground">{exp.nomeInstituicao}</p>
            <p>{exp.titulo}</p>
            <p className="text-sm opacity-70">{exp.periodo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
