interface InfoCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export function InfoCard({ title, content, icon, href, className = "" }: InfoCardProps) {
  const CardContent = () => (
    <div className={`card p-6 h-full ${href ? 'group cursor-pointer hover:scale-105' : ''} transition-all duration-200 ${className}`}>
      {icon && (
        <div className="w-12 h-12 bg-[var(--asgc-primary)] bg-opacity-10 rounded-lg flex items-center justify-center text-[var(--asgc-primary)] mb-4 group-hover:bg-[var(--asgc-primary)] group-hover:text-white transition-all duration-200">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-3 group-hover:text-[var(--asgc-primary)] transition-colors duration-200">
        {title}
      </h3>
      <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
        {content}
      </p>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="block focus:outline-none focus:ring-2 focus:ring-[var(--asgc-accent)] focus:ring-offset-2 rounded-lg"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
