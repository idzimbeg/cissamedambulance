import Navbar from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

type MainLayoutProps = {
  children?: React.ReactNode;
  handleOnClick?: (e: unknown) => void;
};

export function MainLayout({ children = <Outlet /> }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto flex flex-col px-10 pt-8 pb-3">{children}</main>
    </>
  );
}
