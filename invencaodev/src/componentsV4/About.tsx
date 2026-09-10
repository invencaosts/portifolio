import { profile } from '@/content/profile';
export default function About() {
  return (
    <section id="sobre" className="px-6 py-20 md:px-12 lg:px-24 xl:px-40">
      <div className="bento-card mx-auto max-w-5xl p-8 md:p-12">
        <p className="section-label">06_SOBRE</p>
        <h2 className="font-headline mt-4 text-3xl font-bold md:text-5xl">
          Produto, engenharia e aprendizado contínuo.
        </h2>
        <p className="text-foreground/70 mt-7 text-lg leading-relaxed md:text-xl">
          {profile.about}
        </p>
      </div>
    </section>
  );
}
