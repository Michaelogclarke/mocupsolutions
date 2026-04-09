import Link from 'next/link'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <div className={styles.gridOverlay} />

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerBadgeRow}>
            <span className={styles.headerBadge}>ACTIVE_PROJECTS</span>
            <div className={styles.headerLine} />
          </div>
          <h1 className={styles.headerTitle}>Our Work</h1>
          <p className={styles.headerBody}>
            Real projects built for real people. Every site and app here is something
            I designed, built, and shipped — focused on quality over quantity.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <div className={styles.projectsSection}>
        <div className={styles.projectsInner}>

          {/* Featured: Just Cakes Bakery */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80"
                alt="Just Cakes Bakery website"
                className={styles.featuredImage}
              />
              <div className={styles.featuredOverlay}>
                <div className={styles.featuredOverlayTop}>
                  <span className={styles.caseTag}>CLIENT_01</span>
                  <a
                    href="https://www.justcakesbakery.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                    aria-label="Visit Just Cakes Bakery"
                  >
                    <span className={`material-symbols-outlined ${styles.iconWhiteLarge}`}>open_in_new</span>
                  </a>
                </div>
                <div className={styles.featuredOverlayBottom}>
                  <h3 className={styles.featuredTitle}>Just_Cakes_Bakery</h3>
                  <p className={styles.featuredDesc}>
                    E-commerce storefront for a home bakery — custom ordering, product
                    listings, and a mobile-first design built to drive local sales.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.featuredMeta}>
              <div className={styles.featuredMetaItem}>
                <span className={styles.metaLabel}>Focus</span>
                <span className={styles.metaValue}>E-COMMERCE + BRANDING</span>
              </div>
              <div className={styles.featuredMetaItem}>
                <span className={styles.metaLabel}>Type</span>
                <span className={`${styles.metaValue} ${styles.metaHighlight}`}>CLIENT_WORK</span>
              </div>
              <div className={styles.featuredMetaItem}>
                <span className={styles.metaLabel}>Platform</span>
                <span className={styles.metaValue}>WEB + MOBILE</span>
              </div>
              <div className={styles.featuredMetaItem}>
                <span className={styles.metaLabel}>Status</span>
                <span className={styles.metaValue}>
                  <span className={styles.pulseDot} />
                  <a
                    href="https://www.justcakesbakery.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    LIVE ↗
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Moc-up Solutions — this site */}
          <div className={styles.sideCard}>
            <div className={styles.sideCardInner}>
              <div className={styles.sideCardHeader}>
                <span className={styles.caseTagOrange}>SELF_INITIATED</span>
                <span className={`material-symbols-outlined ${styles.iconFilled}`}>web</span>
              </div>
              <h3 className={styles.sideCardTitle}>Moc-up_Solutions_Site</h3>
              <p className={styles.sideCardDesc}>
                This site — designed and built from scratch to showcase what I can do.
                Blueprint aesthetic, custom animations, fully responsive.
              </p>
              <div className={styles.sideCardStats}>
                {[
                  { label: 'Stack', value: 'NEXT.JS + CSS' },
                  { label: 'Design', value: 'CUSTOM_BUILT' },
                  { label: 'Performance', value: '100/100_LIGHTHOUSE', highlight: true },
                ].map((stat) => (
                  <div key={stat.label} className={styles.sideCardStat}>
                    <span className={styles.sideStatLabel}>{stat.label}</span>
                    <span className={`${styles.sideStatValue} ${stat.highlight ? styles.sideStatHighlight : ''}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.clientNote}>
                <span className={styles.clientNoteLabel}>Note:</span>
                <p className={styles.clientNoteText}>
                  "Built to reflect the kind of work I bring to every project — intentional design, clean code, and real attention to detail."
                </p>
                <span className={`material-symbols-outlined ${styles.iconAbsoluteRotated}`}>
                  verified
                </span>
              </div>
            </div>
          </div>

          {/* fitConnect */}
          <div className={`${styles.smallCard} ${styles.finTechCard}`}>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80"
              alt="fitConnect workout tracker app"
              className={styles.finTechImage}
            />
            <div className={styles.finTechOverlay}>
              <span className={styles.archiveLabel}>IN_PROGRESS</span>
              <h3 className={styles.smallCardTitle}>fitConnect_App</h3>
              <p className={styles.sideCardDesc} style={{ fontSize: '0.78rem', marginBottom: '0.75rem', opacity: 0.85 }}>
                Workout + calorie tracker with a trainer-client connection platform. Built for athletes and coaches.
              </p>
              <div className={styles.tags} style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span className={styles.tag}>PROTOTYPE</span>
                <span className={styles.tag}>MOBILE_FIRST</span>
                <span className={styles.tag}>FULL_STACK</span>
              </div>
            </div>
          </div>

        </div>

        {/* Builder Log */}
        <div className={styles.agencyLog}>
          <span className={styles.agencyLogBadge}>BUILDER_LOG</span>
          <div className={styles.agencyLogInner}>
            <div className={styles.agencyLogLeft}>
              <span className={styles.agencyLogLabel}>Currently_Building</span>
              <h4 className={styles.agencyLogTitle}>fitConnect_v1</h4>
            </div>
            <div className={styles.agencyLogRight}>
              <p className={styles.agencyLogText}>
                Actively developing{' '}
                <span className={styles.inlineCode}>fitConnect</span>{' '}
                alongside client work. The app is designed to bridge the gap between
                self-guided fitness tracking and professional trainer-led programs.
                More projects coming as the business grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
