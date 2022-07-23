import { backgroundImage } from 'consts/consts';

interface HeaderTitleProps {
  title: never;
  description?: never;
  children?: React.ReactNode;
}

export const HeaderTitleLayout = ({ title, description, children }: HeaderTitleProps) => {
  return (
    <>
      <div className="bg-secondary-light pb-32">
        <header className="pt-10 my-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-end mb-3 h-32 bg-secondary-light">
              <h1 className="mb-1 text-2xl">
                {title}
                <img src={backgroundImage} />
              </h1>
              {description && (
                <p className="lg:mx-56 tracking-wide text-light-100 text-xl text-secondary-main">{description}</p>
              )}
            </div>
          </div>
        </header>
      </div>
      <main className="-mt-32">
        <div className="min-h-full">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-main rounded-lg shadow px-5 py-6 sm:px-6 text-primary-light text-md">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
