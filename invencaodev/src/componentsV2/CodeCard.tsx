import { FiMinus } from 'react-icons/fi';
import { IoIosSquareOutline, IoMdClose } from 'react-icons/io';

export default function CodeCard() {
  return (
    <div className="relative w-fit">
      {/* Shadow animada (mesmo formato do card) */}
      <div className="bg-primary absolute inset-0 -z-10 animate-[shadow-float_8s_ease-in-out_infinite] rounded-2xl blur-xl" />

      {/* Card real */}
      <div className="bg-surface relative h-[280px] w-[320px] overflow-hidden rounded-2xl border-2 border-[var(--borderColor)] font-mono text-sm shadow-xl md:w-[400px]">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-[var(--borderColor)] px-4 py-2">
          <div className="text-secondary flex gap-2">
            <FiMinus className="h-4 w-4" />
            <IoIosSquareOutline className="h-4 w-4" />
            <IoMdClose className="h-4 w-4" />
          </div>

          <span className="text-secondary text-sm">sobreMim.ts</span>
        </div>

        {/* Código */}
        <div className="px-5 py-4 text-base leading-relaxed">
          <p className="text-secondary">// Desenvoledor Full Stack</p>

          <p>
            <span className="text-primary">const</span>{' '}
            <span className="text-[var(--foreground)]">developer</span>{' '}
            <span className="text-secondary">=</span> <span className="text-secondary">{'{'}</span>
          </p>

          <div className="ml-4">
            <p>
              <span className="text-[var(--foreground)]">nome</span>
              <span className="text-secondary">:</span>{' '}
              <span className="text-primary">'Guilherme da Invenção'</span>
              <span className="text-secondary">,</span>
            </p>

            <p>
              <span className="text-[var(--foreground)]">habilidades</span>
              <span className="text-secondary">:</span> <span className="text-secondary">[</span>
              <span className="text-primary">'ReactJS', 'Node.js', 'Java', ...</span>
              <span className="text-secondary">]</span>
              <span className="text-secondary">,</span>
            </p>

            <p>
              <span className="text-[var(--foreground)]">foco</span>
              <span className="text-secondary">:</span> <span className="text-secondary">[</span>
              <span className="text-primary">'Full-Stack', 'DevOps'</span>
              <span className="text-secondary">]</span>
              <span className="text-secondary">,</span>
            </p>

            <p>
              <span className="text-[var(--foreground)]">aprendendo</span>
              <span className="text-secondary">:</span>{' '}
              <span className="text-primary">'Cyber Security'</span>
            </p>
          </div>

          <p className="text-secondary">{'}'}</p>
        </div>
      </div>
    </div>
  );
}
