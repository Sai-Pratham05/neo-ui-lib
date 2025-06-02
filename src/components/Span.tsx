import classNames from "classnames";

type SpanType = {
  text: string;
  style?: "retro" | "pixel" | "brutal" | "handwritten" | "modern";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  className?: string;
};

const Span = ({
  text,
  style = "brutal",
  size = "md",
  color = "violet",
  className,
}: SpanType) => {
  return (
    <span
      className={classNames(
        "inline-block transform transition-transform hover:translate-y-[-2px]",
        {
          "font-mono tracking-tight": style === "pixel",
          "font-serif italic": style === "retro",
          "font-black uppercase tracking-wider": style === "brutal",
          "font-['Permanent_Marker'] leading-relaxed": style === "handwritten",
          "font-sans tracking-wide": style === "modern",
        },
        {
          "text-violet-400": color === "violet",
          "text-pink-400": color === "pink",
          "text-red-400": color === "red",
          "text-orange-400": color === "orange",
          "text-yellow-400": color === "yellow",
          "text-lime-400": color === "lime",
          "text-cyan-400": color === "cyan",
        },
        {
          "text-sm": size === "sm",
          "text-base": size === "md",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
        },
        className
      )}
    >
      {text}
    </span>
  );
};

export default Span; 