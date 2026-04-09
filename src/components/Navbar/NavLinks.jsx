'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const links = [
  { href: '/services', label: 'SERVICES' },
  { href: '/portfolio', label: 'OUR_WORK' },
  { href: '/contact', label: 'CONTACT' },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <div className={styles.links}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? `${styles.link} ${styles.active}` : styles.link}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
