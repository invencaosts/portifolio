interface TopicProps {
  id: string;
  label: string;
}

const Topic = ({ id, label }: TopicProps) => {
  return (
    <div className="px-4 pb-4 flex items-center justfy-center gap-2">
      <div className="flex items-baseline justify-center text-secundary gap-2">
        <p className="text-primary">{id}</p>
        <p className="text-2xl whitespace-nowrap">{label}</p>
      </div>
      <div className="h-[2px] w-full bg-primary"></div>
    </div>
  );
};

export default Topic;
