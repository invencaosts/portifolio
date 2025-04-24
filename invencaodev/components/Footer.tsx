const Footer: React.FC = () => {
  return (
    <div className="w-full bg-tertiary flex items-center justify-center flex-col text-secundary mt-12">
      <div className="w-full h-[2px] bg-primary"></div>
      <div className="text-center mt-2 text-md">
        <p className="text-sm md:text-lg">
          &copy; 2025 invencaodev. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
