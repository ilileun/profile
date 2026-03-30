interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-text">
        {title}
        {subtitle && (
          <span className="text-muted font-normal text-base ml-2">
            {subtitle}
          </span>
        )}
      </h2>
      <div className="mt-2 w-full h-px bg-divider" />
    </div>
  );
}
