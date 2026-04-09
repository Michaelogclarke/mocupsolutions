import Link from 'next/link'
import NavLinks from './NavLinks'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>
            Moc-up Solutions
          </Link>
          <NavLinks />
        </div>
        <div className={styles.right}>
          <span className={`material-symbols-outlined ${styles.iconButton}`} tabIndex="0" role="button" aria-label="Help">
            help
          </span>
          <span className={`material-symbols-outlined ${styles.iconButton}`} tabIndex="0" role="button" aria-label="Contact">
            mail
          </span>
          <Link href="/contact" className={styles.cta}>
            GET_STARTED
          </Link>
        </div>
      </div>
    </nav>
  )
}
