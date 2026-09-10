interface TopicProps {
  id: string;
  label: string;
}

const Topic = ({ id, label }: TopicProps) => {
  return (
    <div className="justfy-center flex items-center gap-2 px-4 pb-4">
      <div className="text-secundary flex items-baseline justify-center gap-2">
        <p className="text-primary">{id}</p>
        <p className="text-2xl whitespace-nowrap">{label}</p>
      </div>
      <div className="bg-primary h-[2px] w-full"></div>
    </div>
  );
};

export default Topic;
