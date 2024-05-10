import Footer from '@/components/Footer/Footer';
import AuthNavigationBar from '@/components/NavigationBar/AuthNavigationBar';
import ReduxProvider from '@/components/Redux/reduxProvider';
import { PoppinsFont, RubikFont } from '@/shared/fonts/fontfamily';

import '@/themes/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${PoppinsFont.variable} ${RubikFont.variable}`}
      >
        <ReduxProvider>
          <AuthNavigationBar />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
