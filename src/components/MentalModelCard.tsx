
import Link from "next/link";

interface MentalModelCardProps {
  title: string;
  description: string;
  icon: string;
}

export function MentalModelCard({ title, description, icon }: MentalModelCardProps) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  
  return (
    <Link href={`/mental-models/${slug}`}>
      <div className="group relative bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors">
        <div className="mb-4 text-2xl">{icon}</div>
        <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
}
