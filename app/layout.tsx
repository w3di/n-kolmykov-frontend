import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../public/styles/main.scss';
import { ToastContainer } from 'react-toastify';

const involve = localFont({
  src: [
    {
      path: '../public/font/Involve/Involve-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/font/Involve/Involve-Oblique.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/font/Involve/Involve-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/font/Involve/Involve-MediumOblique.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../public/font/Involve/Involve-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/font/Involve/Involve-SemiBoldOblique.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../public/font/Involve/Involve-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/font/Involve/Involve-BoldOblique.ttf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-involve'
});

export const metadata: Metadata = {
  title: 'nKolmykov',
  description: 'My portfolio',
  icons: {
    icon: [
      {
        url: '/images/myLogo.png',
        sizes: '15x24',
        type: 'image/png'
      },
      {
        url: '/images/myLogo.png',
        sizes: '30x48',
        type: 'image/png'
      }
    ],
    apple: '/images/myLogo.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={involve.variable}>
      <body>
        {children}

        <ToastContainer
          position='top-right'
          autoClose={3000}
          closeButton={false}
          hideProgressBar={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          limit={3}
        />
      </body>
    </html>
  );
}
