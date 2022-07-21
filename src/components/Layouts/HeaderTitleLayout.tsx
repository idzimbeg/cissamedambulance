interface HeaderTitleProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const HeaderTitleLayout = ({ title, description, children }: HeaderTitleProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-end mb-3 h-32">
        <h1 className="mb-9">{title}</h1>
        {description && <p className="tracking-wide text-light-100">{description}</p>}
      </div>
      {children}
    </>
  );
};
