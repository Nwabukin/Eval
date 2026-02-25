interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-10">
      <div>
        <h2 className="font-serif text-3xl text-foreground leading-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground font-light mt-2 tracking-wide">
            {description}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
