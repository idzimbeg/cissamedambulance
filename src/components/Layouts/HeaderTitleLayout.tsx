import clsx from 'clsx';

type HeaderTitleProps = {
  title?: never;
  description?: never | undefined | string;
  children?: React.ReactNode;
  img?: unknown;
  bg?: unknown;
} & JSX.IntrinsicElements['div'];

export const HeaderTitleLayout = ({
  img,
  title,
  description,
  bg,
  children,
  className: propClassName = '',
}: HeaderTitleProps) => {
  const className = clsx('justify-center items-center text-base', propClassName);
  return (
    <div className={className}>
      <div className="bg-primary-light pb-32">
        <header className="pt-5 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-end mb-3 h-32">
              <h3 className="mb-1 md:text-2xl">{title}</h3>
              <div className="mb-1">
                <>{bg}</>
              </div>
              <>{img}</>
              {description && (
                <p className="lg:mx-56 tracking-wide justify-center text-xl text-primary-main text-center">
                  {description}
                </p>
              )}
            </div>
          </div>
        </header>
      </div>
      <main className="-mt-32">
        <div className="min-h-full">
          <div className="max-w-6xl mx-auto pb-12 px-2 sm:px-6 lg:px-8">
            <div className="bg-secondary-main rounded-lg shadow px-5 py-6 sm:px-6 text-primary-light text-md font-karla">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
