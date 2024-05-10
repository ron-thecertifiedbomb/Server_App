import Footer from '@/components/Footer/Footer';
import { PoppinsFont, RubikFont } from '@/shared/fonts/fontfamily';

import BackToTop from './components/BackToTop/BackToTop';
import NavBar from './components/NavBar/NavBar';

import '@/themes/globals.css';
import './themes/stuff-site.css';
import styles from './themes/layout.module.css';

export default function StuffLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${PoppinsFont.variable} ${RubikFont.variable}`}
      >
        <div className={`${styles.body} stuff-site`}>
          <NavBar />
          <div className={styles.backtoptop}>
            <BackToTop />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
