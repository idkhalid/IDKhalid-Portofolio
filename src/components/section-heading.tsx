import { Reveal } from "./reveal";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  headingLevel?: 1 | 2;
  id?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  headingLevel = 2,
  id,
}: SectionHeadingProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <Heading
          id={id}
          className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-3"
        >
          {number} / {title}
        </Heading>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted max-w-xl">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
