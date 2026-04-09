interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-white" : "text-navy-900";
  const descColor = light ? "text-blue-100" : "text-gray-500";
  const labelColor = light ? "text-blue-300 border-blue-400" : "text-blue-700 border-blue-300";

  return (
    <div className={`flex flex-col gap-3 mb-10 md:mb-14 ${alignClass}`}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase border rounded-full px-4 py-1 w-fit ${labelColor}`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-snug ${titleColor}`}
        style={{ color: light ? "#ffffff" : "#0F2744" }}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-sm md:text-base leading-relaxed max-w-2xl ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
