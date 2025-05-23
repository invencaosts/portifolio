import { IconType } from "react-icons";

interface CardTechProps {
  icon: IconType;
  label: string;
  color?: string;
  className?: string;
}

const CardTeach = ({ label, icon: Icon, color, className }: CardTechProps) => {
  return (
    <div
      className={`p-4 bg-tertiary text-secundary flex flex-col items-center justify-center rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.25),0px_-4px_6px_rgba(0,0,0,0.15)] ${className}`}
    >
      <Icon className="w-[50px] h-[50px]" style={{ color }} />
      <div>
        <p className="whitespace-nowrap text-center">{label}</p>
      </div>
    </div>
  );
};

export default CardTeach;
