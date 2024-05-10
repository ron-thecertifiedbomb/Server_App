import Footer from '@/components/Footer/Footer';
import ConsumerNav from '@/components/NavigationBar/ConsumerNav';
import ReduxProvider from '@/components/Redux/reduxProvider';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { PoppinsFont, RubikFont } from '@/shared/fonts/fontfamily';

import '@/themes/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${PoppinsFont.variable} ${RubikFont.variable} overflow-hidden`}
      >
        <ReduxProvider>
          <ConsumerNav />
          <main className="relative h-[calc(100vh_-_80px)] overflow-y-auto" id="main-content">
            {children}
            <ScrollToTop target="main-content" />
            <Footer />
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
