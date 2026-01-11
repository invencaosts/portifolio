import { FiMinus } from "react-icons/fi";
import { IoIosSquareOutline, IoMdClose } from "react-icons/io";

export default function CodeCard() {
  return (
    <div className="relative w-fit">
      {/* Shadow animada (mesmo formato do card) */}
      <div
        className="
          absolute inset-0
          rounded-2xl
          bg-primary
          blur-xl
          -z-10
          animate-[shadow-float_8s_ease-in-out_infinite]
        "
      />

      {/* Card real */}
      <div
        className="
          w-[320px] md:w-[400px] h-[280px]
          rounded-2xl
          bg-surface
          border-2 border-[var(--borderColor)]
          shadow-xl
          overflow-hidden
          font-mono
          text-sm
          relative
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-[var(--borderColor)]">
          <div className="flex gap-2 text-secondary">
            <FiMinus className="w-4 h-4" />
            <IoIosSquareOutline className="w-4 h-4" />
            <IoMdClose className="w-4 h-4" />
          </div>

          <span className="text-sm text-secondary">sobreMim.ts</span>
        </div>

        {/* Código */}
        <div className="px-5 py-4 leading-relaxed text-base">
          <p className="text-secondary">// Desenvoledor Full Stack</p>

          <p>
            <span className="text-primary">const</span>{" "}
            <span className="text-[var(--foreground)]">developer</span>{" "}
            <span className="text-secondary">=</span>{" "}
            <span className="text-secondary">{"{"}</span>
          </p>

          <div className="ml-4">
            <p>
              <span className="text-[var(--foreground)]">nome</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-primary">'Guilherme da Invenção'</span>
              <span className="text-secondary">,</span>
            </p>

            <p>
              <span className="text-[var(--foreground)]">habilidades</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-secondary">[</span>
              <span className="text-primary">
                'ReactJS', 'Node.js', 'Java', ...
              </span>
              <span className="text-secondary">]</span>
              <span className="text-secondary">,</span>
            </p>

            <p>
              <span className="text-[var(--foreground)]">foco</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-secondary">[</span>
              <span className="text-primary">'Full-Stack', 'DevOps'</span>
              <span className="text-secondary">]</span>
              <span className="text-secondary">,</span>
            </p>

            <p>
              <span className="text-[var(--foreground)]">aprendendo</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-primary">'Cyber Security'</span>
            </p>
          </div>

          <p className="text-secondary">{"}"}</p>
        </div>
      </div>
    </div>
  );
}
