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
      <main className="max-w-screen-2xl mx-auto flex flex-col pl-10 pr-10 pb-10">{children}</main>
    </>
  );
}
