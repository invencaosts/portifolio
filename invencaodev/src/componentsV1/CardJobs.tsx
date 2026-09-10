interface CardJobsProps {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

const CardJobs = ({ title, company, startDate, endDate, description }: CardJobsProps) => {
  // Formata as datas para exibição
  const formatDate = (date: string | undefined) => {
    if (!date) return 'Presente';
    const [year, month] = date.split('-');
    return `${month}/${year}`;
  };
  return (
    <div className="bg-tertiary text-secundary flex h-auto w-full flex-col items-start justify-between rounded-lg p-4 shadow-[0px_4px_6px_rgba(0,0,0,0.25),0px_-4px_6px_rgba(0,0,0,0.15)]">
      {/* Título do trabalho */}
      <h3 className="text-primary text-lg font-bold">{title}</h3>

      {/* Nome da empresa */}
      <p className="mt-1 text-sm font-semibold">{company}</p>

      {/* Período do trabalho */}
      <p className="mt-1 text-xs text-gray-500">
        {formatDate(startDate)} - {formatDate(endDate)}
      </p>

      {/* Descrição do trabalho */}
      {description && <p className="mt-2 line-clamp-3 text-sm">{description}</p>}
    </div>
  );
};

export default CardJobs;
