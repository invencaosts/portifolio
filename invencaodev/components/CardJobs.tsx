interface CardJobsProps {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

const CardJobs = ({
  title,
  company,
  startDate,
  endDate,
  description,
}: CardJobsProps) => {
  // Formata as datas para exibição
  const formatDate = (date: string | undefined) => {
    if (!date) return "Presente";
    const [year, month] = date.split("-");
    return `${month}/${year}`;
  };
  return (
    <div
      className="p-4 h-auto w-full bg-tertiary text-secundary flex flex-col items-start justify-between 
          rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.25),0px_-4px_6px_rgba(0,0,0,0.15)]"
    >
      {/* Título do trabalho */}
      <h3 className="text-lg font-bold text-primary">{title}</h3>

      {/* Nome da empresa */}
      <p className="text-sm mt-1 font-semibold">{company}</p>

      {/* Período do trabalho */}
      <p className="text-xs mt-1 text-gray-500">
        {formatDate(startDate)} - {formatDate(endDate)}
      </p>

      {/* Descrição do trabalho */}
      {description && (
        <p className="text-sm mt-2 line-clamp-3">{description}</p>
      )}
    </div>
  );
};

export default CardJobs;
