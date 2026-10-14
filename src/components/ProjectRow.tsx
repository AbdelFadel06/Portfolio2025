import Image from 'next/image';

type ProjectRowProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
};

export default function ProjectRow({ title, description, image, technologies, link }: ProjectRowProps) {
  const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <div className="flex flex-col sm:flex-row gap-6 py-8">
      {/* Image à gauche */}
      {link ? (
        <a
          {...linkProps}
          aria-label={title}
          className="group relative w-full sm:w-48 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      ) : (
        <div className="relative w-full sm:w-48 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Contenu */}
      <div className="flex-1">
        <h3 className="text-blue-900 font-semibold text-xl mb-2">
          {link ? (
            <a {...linkProps} className="inline-flex items-center gap-1.5 hover:underline underline-offset-4">
              {title}
              <span aria-hidden="true" className="text-base">↗</span>
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium text-blue-900 bg-blue-50 px-3 py-1 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
