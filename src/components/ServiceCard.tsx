type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="py-8">
      <h3 className="text-blue-900 font-semibold text-xl mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>
    </div>
  );
}
