import React from "react";
import {
  FiSend,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiActivity,
  FiTerminal,
  FiExternalLink
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 px-6 md:px-12 lg:px-24 xl:px-40 bg-neutral/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="font-mono text-primary text-sm tracking-widest uppercase">Protocolo_de_Comunicação</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
            Estabelecer <br /> <span className="text-foreground/30 italic">Conexão.</span>
          </h1>
          <p className="font-sans text-xl text-foreground/60 max-w-2xl leading-relaxed">
            Pronto para arquitetar sistemas de alta performance e resolver desafios complexos de engenharia. Envie sua mensagem abaixo.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Form Side */}
          <div className="lg:col-span-7 bento-card p-8 md:p-12 relative flex flex-col h-full group">
            <div className="absolute top-0 right-0 p-4">
              <span className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest">Form_ID: 0x2A4F</span>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <form 
              action="https://formsubmit.co/gui.inven@gmail.com" 
              method="POST"
              className="space-y-12 flex-grow flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Name Field */}
                <div className="group/field">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 group-focus-within/field:text-primary transition-colors">01. Identificação</label>
                  <input 
                    name="name"
                    required
                    className="w-full bg-transparent border-0 border-b border-borderColor/30 py-4 font-mono text-foreground focus:ring-0 focus:border-primary placeholder:text-foreground/20 transition-all outline-none" 
                    placeholder="Seu nome completo ou organização" 
                    type="text"
                  />
                </div>
                
                {/* Email Field */}
                <div className="group/field">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 group-focus-within/field:text-primary transition-colors">02. Endereço de Retorno (Email)</label>
                  <input 
                    name="email"
                    required
                    className="w-full bg-transparent border-0 border-b border-borderColor/30 py-4 font-mono text-foreground focus:ring-0 focus:border-primary placeholder:text-foreground/20 transition-all outline-none" 
                    placeholder="email@exemplo.com" 
                    type="email"
                  />
                </div>
                
                {/* Message Field */}
                <div className="group/field">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 group-focus-within/field:text-primary transition-colors">03. Payload da Mensagem</label>
                  <textarea 
                    name="message"
                    required
                    className="w-full bg-transparent border-0 border-b border-borderColor/30 py-4 font-mono text-foreground focus:ring-0 focus:border-primary placeholder:text-foreground/20 transition-all outline-none resize-none" 
                    placeholder="Descreva brevemente o escopo do projeto ou dúvida..." 
                    rows={6}
                  ></textarea>
                </div>
              </div>

              <div className="pt-8">
                {/* Form Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://invencaodev.com.br" />

                <button 
                  className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-white font-headline font-bold uppercase tracking-widest py-6 transition-all active:scale-[0.98] flex justify-center items-center gap-3 group/btn" 
                  type="submit"
                >
                  Transmitir Sinal
                  <FiSend className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Channels & Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-12 h-full">
            {/* Direct Channels - ORDERED FIRST ON MOBILE */}
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="font-headline font-bold text-foreground uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                <FiTerminal className="text-primary text-sm" />
                Canais Diretos
              </h3>
              
              {/* Email */}
              <a 
                href="mailto:gui.inven@gmail.com" 
                className="flex items-center justify-between p-6 bento-card hover:bg-neutral/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <FiMail className="text-foreground/40 group-hover:text-primary transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-tight">Email</span>
                </div>
                <span className="text-foreground/30 font-mono text-[10px]">gui.inven@gmail.com</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/invencaosts" 
                target="_blank"
                className="flex items-center justify-between p-6 bento-card hover:bg-neutral/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <FiGithub className="text-foreground/40 group-hover:text-primary transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-tight">GitHub</span>
                </div>
                <FiExternalLink className="text-foreground/20 group-hover:text-primary transition-colors w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/guilherme-da-invencao-santos-556497282/" 
                target="_blank"
                className="flex items-center justify-between p-6 bento-card hover:bg-neutral/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <FiLinkedin className="text-foreground/40 group-hover:text-primary transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-tight">LinkedIn</span>
                </div>
                <FiExternalLink className="text-foreground/20 group-hover:text-primary transition-colors w-4 h-4" />
              </a>

              {/* WhatsApp - REPLACED INSTAGRAM */}
              <a 
                href="https://api.whatsapp.com/send?phone=5579999684200&text=Oi,%20vim%20pelo%20seu%20portifolio%20e%20gostaria%20de%20conversar%20mais%20sobre." 
                target="_blank"
                className="flex items-center justify-between p-6 bento-card hover:bg-neutral/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-foreground/40 group-hover:text-[#25D366] transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-tight">WhatsApp</span>
                </div>
                <FiExternalLink className="text-foreground/20 group-hover:text-[#25D366] transition-colors w-4 h-4" />
              </a>
            </div>

            {/* Operational Status Panel - ORDERED SECOND ON MOBILE */}
            <div className="bento-card p-8 relative overflow-hidden group order-2 lg:order-1 flex-grow">
              <h3 className="font-headline font-bold text-foreground uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                <FiActivity className="text-primary text-sm" />
                Status_Operacional
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-borderColor/10 pb-4">
                  <span className="font-mono text-[10px] text-foreground/40 uppercase">Localização</span>
                  <span className="font-mono text-xs text-foreground flex items-center gap-2">
                    <FiMapPin className="text-primary" />
                    ARACAJU, SE - BR
                  </span>
                </div>
                
                <div className="flex items-center justify-between border-b border-borderColor/10 pb-4">
                  <span className="font-mono text-[10px] text-foreground/40 uppercase">Disponibilidade</span>
                  <span className="font-mono text-xs text-green-500 flex items-center gap-2 animate-pulse">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    100% ONLINE
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-borderColor/10 pb-4">
                  <span className="font-mono text-[10px] text-foreground/40 uppercase">Especialidade</span>
                  <span className="font-mono text-xs text-foreground">SISTEMAS_CRITICOS</span>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40"></div>

              {/* Background accent for the panel */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
