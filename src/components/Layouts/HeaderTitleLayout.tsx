import { backgroundImage } from 'consts/consts';

interface HeaderTitleProps {
  title?: never;
  description?: never | undefined | string;
  children?: React.ReactNode;
  img?: unknown;
}

export const HeaderTitleLayout = ({ img, title, description, children }: HeaderTitleProps) => {
  return (
    <>
      <div className="bg-primary-light pb-32">
        <header className="pt-10 my-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-end mb-3 h-32">
              <h1 className="mb-1 text-2xl">
                {title}
                <img src={backgroundImage} />
              </h1>
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
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary-main rounded-lg shadow px-5 py-6 sm:px-6 text-primary-light text-md font-karla">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
