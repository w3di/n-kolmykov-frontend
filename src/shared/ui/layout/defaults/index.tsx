import { ReactNode } from 'react';
import Header from '../header';
import Footer from '../footer';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Defaults({ children, className }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={className ?? ''}>{children}</main>
      <Footer />
    </>
  );
}
