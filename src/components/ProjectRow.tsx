import Image from 'next/image';

type ProjectRowProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

export default function ProjectRow({ title, description, image, technologies }: ProjectRowProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 py-8">
      {/* Image à gauche */}
      <div className="relative w-full sm:w-48 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="flex-1">
        <h3 className="text-blue-900 font-semibold text-xl mb-2">{title}</h3>
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
