import { IconType } from "react-icons";

interface CardTechProps {
  icon: IconType;
  label: string;
  color?: string;
}

const CardTeach = ({ label, icon: Icon, color }: CardTechProps) => {
  return (
    <div
      className="h-[110px] w-[100] p-4 bg-tertiary text-secundary flex flex-col items-center justify-center rounded-lg 
    shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25),0px_-4px_10px_0px_rgba(0,0,0,0.15)]"
    >
      <Icon className="w-[50px] h-[50px]" style={{ color }} />
      <div>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default CardTeach;
