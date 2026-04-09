import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brand}>
          <div>
            <span className={styles.brandName}>Moc-up Solutions</span>
            <p className={styles.brandTagline}>
              Helping small businesses thrive online.
            </p>
          </div>
          <p className={styles.copyright}>©2024_Moc-up_Solutions_LLC [V.3.1.0]</p>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colHeader}>SERVICES</h4>
          <nav className={styles.colLinks}>
            <Link href="/services" className={styles.footerLink}>WEB_DESIGN</Link>
            <Link href="/services" className={styles.footerLink}>SMART_FEATURES</Link>
            <Link href="/services" className={styles.footerLink}>SUPPORT</Link>
          </nav>
        </div>

        {/* Resources */}
        <div className={styles.col}>
          <h4 className={styles.colHeader}>RESOURCES</h4>
          <nav className={styles.colLinks}>
            <a href="#" className={styles.footerLink}>GUIDES</a>
            <a href="#" className={styles.footerLink}>PRICING</a>
            <a href="#" className={styles.footerLink}>REVIEWS</a>
          </nav>
        </div>

        {/* Social */}
        <div className={styles.social}>
          <div className={styles.socialIcons}>
            <h4 className={styles.colHeader}>SOCIAL</h4>
            <div className={styles.iconRow}>
              <span className={`material-symbols-outlined ${styles.socialIcon}`}>alternate_email</span>
              <span className={`material-symbols-outlined ${styles.socialIcon}`}>location_on</span>
              <span className={`material-symbols-outlined ${styles.socialIcon}`}>thumb_up</span>
            </div>
          </div>
          <p className={styles.copyright}>©2024_Moc-up_Solutions_LLC [V.3.1.0]</p>
        </div>
      </div>
    </footer>
  )
}
