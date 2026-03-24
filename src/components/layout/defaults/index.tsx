import { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Defaults = ({ children, className }: LayoutProps) => {
  return (
    <>
      <Header />
      <main id='main-content' className={className ?? ''}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Defaults;
