import React from 'react';
import {
  FiSend,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiActivity,
  FiTerminal,
  FiExternalLink,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { profile } from '@/content/profile';

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-neutral/5 relative overflow-hidden px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      {/* Background Decor */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-20"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-20">
          <div className="mb-4 flex items-center gap-4">
            <span className="bg-primary h-[1px] w-12"></span>
            <span className="text-primary-text font-mono text-sm tracking-widest uppercase">
              Protocolo_de_Comunicação
            </span>
          </div>
          <h2 className="font-headline text-foreground mb-6 text-5xl font-bold tracking-tighter md:text-7xl">
            Estabelecer <br /> <span className="text-foreground/60 italic">Conexão.</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl font-sans text-xl leading-relaxed">
            Estou buscando oportunidades como Desenvolvedor Full Stack Júnior, em regime CLT ou PJ.
            Tenho disponibilidade para trabalho remoto em todo o Brasil e para oportunidades
            híbridas ou presenciais em Aracaju e Lagarto.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* Contact Form Side */}
          <div className="bento-card group relative flex h-full flex-col p-8 md:p-12 lg:col-span-7">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-foreground/60 font-mono text-[10px] tracking-widest uppercase">
                Form_ID: 0x2A4F
              </span>
            </div>

            {/* Corner Accents */}
            <div className="border-primary/20 absolute top-0 left-0 h-2 w-2 border-t border-l opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="border-primary/20 absolute right-0 bottom-0 h-2 w-2 border-r border-b opacity-0 transition-opacity group-hover:opacity-100"></div>

            <form
              action="https://formsubmit.co/gui.inven@gmail.com"
              method="POST"
              className="flex flex-grow flex-col justify-between space-y-12"
            >
              <div className="space-y-8">
                {/* Name Field */}
                <div className="group/field">
                  <label
                    htmlFor="contact-name"
                    className="text-foreground/60 group-focus-within/field:text-primary-text font-mono text-[10px] tracking-[0.2em] uppercase transition-colors"
                  >
                    01. Identificação
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    className="border-borderColor/30 text-foreground focus:border-primary placeholder:text-foreground/20 w-full border-0 border-b bg-transparent py-4 font-mono transition-all outline-none focus:ring-0"
                    placeholder="Seu nome completo ou organização"
                    type="text"
                  />
                </div>

                {/* Email Field */}
                <div className="group/field">
                  <label
                    htmlFor="contact-email"
                    className="text-foreground/60 group-focus-within/field:text-primary-text font-mono text-[10px] tracking-[0.2em] uppercase transition-colors"
                  >
                    02. Endereço de Retorno (Email)
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    required
                    className="border-borderColor/30 text-foreground focus:border-primary placeholder:text-foreground/20 w-full border-0 border-b bg-transparent py-4 font-mono transition-all outline-none focus:ring-0"
                    placeholder="email@exemplo.com"
                    type="email"
                  />
                </div>

                <div className="group/field">
                  <label
                    htmlFor="contact-subject"
                    className="text-foreground/60 group-focus-within/field:text-primary-text font-mono text-[10px] tracking-[0.2em] uppercase transition-colors"
                  >
                    03. Assunto
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    required
                    className="border-borderColor/30 text-foreground focus:border-primary placeholder:text-foreground/20 w-full border-0 border-b bg-transparent py-4 font-mono transition-all outline-none focus:ring-0"
                    placeholder="Oportunidade, projeto ou conversa técnica"
                    type="text"
                  />
                </div>

                {/* Message Field */}
                <div className="group/field">
                  <label
                    htmlFor="contact-message"
                    className="text-foreground/60 group-focus-within/field:text-primary-text font-mono text-[10px] tracking-[0.2em] uppercase transition-colors"
                  >
                    04. Payload da Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    className="border-borderColor/30 text-foreground focus:border-primary placeholder:text-foreground/20 w-full resize-none border-0 border-b bg-transparent py-4 font-mono transition-all outline-none focus:ring-0"
                    placeholder="Descreva brevemente o escopo do projeto ou dúvida..."
                    rows={6}
                  ></textarea>
                </div>
              </div>

              <div className="pt-8">
                {/* Form Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://invencaodev.com" />
                <p className="text-foreground/60 mb-4 font-mono text-[10px]">
                  O formulário usa um serviço externo para entregar a mensagem ao meu e-mail.
                </p>

                <button
                  className="bg-primary hover:bg-primary/90 font-headline group/btn flex w-full cursor-pointer items-center justify-center gap-3 py-6 font-bold tracking-widest text-white uppercase transition-all active:scale-[0.98]"
                  type="submit"
                >
                  Transmitir Sinal
                  <FiSend className="h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </form>
          </div>

          {/* Channels & Sidebar */}
          <div className="flex h-full flex-col gap-12 lg:col-span-5">
            {/* Direct Channels - ORDERED FIRST ON MOBILE */}
            <div className="order-1 space-y-4 lg:order-2">
              <h3 className="font-headline text-foreground mb-2 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <FiTerminal className="text-primary-text text-sm" />
                Canais Diretos
              </h3>

              {/* Email */}
              <a
                href="mailto:gui.inven@gmail.com"
                className="bento-card hover:bg-neutral/20 group flex items-center justify-between p-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <FiMail className="text-foreground/40 group-hover:text-primary-text transition-colors" />
                  <span className="font-mono text-sm tracking-tight uppercase">Email</span>
                </div>
                <span className="text-foreground/60 font-mono text-[10px]">
                  gui.inven@gmail.com
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/invencaosts"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card hover:bg-neutral/20 group flex items-center justify-between p-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <FiGithub className="text-foreground/40 group-hover:text-primary-text transition-colors" />
                  <span className="font-mono text-sm tracking-tight uppercase">GitHub</span>
                </div>
                <FiExternalLink className="text-foreground/20 group-hover:text-primary-text h-4 w-4 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card hover:bg-neutral/20 group flex items-center justify-between p-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <FiLinkedin className="text-foreground/40 group-hover:text-primary-text transition-colors" />
                  <span className="font-mono text-sm tracking-tight uppercase">LinkedIn</span>
                </div>
                <FiExternalLink className="text-foreground/20 group-hover:text-primary-text h-4 w-4 transition-colors" />
              </a>

              {/* WhatsApp - REPLACED INSTAGRAM */}
              <a
                href="https://api.whatsapp.com/send?phone=5579999684200&text=Oi,%20vim%20pelo%20seu%20portifolio%20e%20gostaria%20de%20conversar%20mais%20sobre."
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card hover:bg-neutral/20 group flex items-center justify-between p-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-foreground/40 transition-colors group-hover:text-[#25D366]" />
                  <span className="font-mono text-sm tracking-tight uppercase">WhatsApp</span>
                </div>
                <FiExternalLink className="text-foreground/20 h-4 w-4 transition-colors group-hover:text-[#25D366]" />
              </a>
            </div>

            {/* Operational Status Panel - ORDERED SECOND ON MOBILE */}
            <div className="bento-card group relative order-2 flex-grow overflow-hidden p-8 lg:order-1">
              <h3 className="font-headline text-foreground mb-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <FiActivity className="text-primary-text text-sm" />
                Status_Operacional
              </h3>

              <div className="relative z-10 space-y-6">
                <div className="border-borderColor/10 flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <span className="text-foreground/60 font-mono text-[10px] uppercase">
                    Localização
                  </span>
                  <span className="text-foreground flex items-center gap-2 font-mono text-xs">
                    <FiMapPin className="text-primary-text" />
                    ARACAJU, SE - BR
                  </span>
                </div>

                <div className="border-borderColor/10 flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <span className="text-foreground/60 font-mono text-[10px] uppercase">
                    Disponibilidade
                  </span>
                  <span className="flex animate-pulse items-center gap-2 font-mono text-xs text-green-500 sm:justify-end">
                    <span className="animate-cursor h-1.5 w-1.5 shrink-0 bg-green-500"></span>
                    BUSCANDO OPORTUNIDADES
                  </span>
                </div>

                <div className="border-borderColor/10 flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <span className="text-foreground/60 font-mono text-[10px] uppercase">
                    Especialidade
                  </span>
                  <span className="text-foreground font-mono text-xs">FULL_STACK_JUNIOR</span>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="via-primary/5 pointer-events-none absolute inset-0 h-1/2 w-full -translate-y-full bg-gradient-to-b from-transparent to-transparent group-hover:animate-[scan_2s_linear_infinite]"></div>

              {/* Corner Accents */}
              <div className="border-primary/40 absolute top-0 right-0 h-4 w-4 border-t border-r"></div>
              <div className="border-primary/40 absolute bottom-0 left-0 h-4 w-4 border-b border-l"></div>

              {/* Background accent for the panel */}
              <div className="bg-primary/5 absolute top-0 right-0 -z-0 h-32 w-32 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
