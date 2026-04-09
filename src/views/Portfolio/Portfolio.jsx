import Link from 'next/link'
import styles from './Portfolio.module.css'

const projects = [
  {
    id: 'CASE_01',
    title: 'E-commerce_Redesign',
    description: 'Full-scale digital transformation for a premium lifestyle brand, focusing on conversion and speed.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    stats: [
      { label: 'Focus', value: 'UI/UX + COMMERCE' },
      { label: 'Core_Metric', value: '+42%_CONVERSION', highlight: true },
      { label: 'Launched', value: '2024.11.12' },
      { label: 'Performance', value: '98/100_Lighthouse', pulse: true },
    ],
    wide: true,
  },
]

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <div className={styles.gridOverlay} />

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerBadgeRow}>
            <span className={styles.headerBadge}>CASE_STUDIES_Q4</span>
            <div className={styles.headerLine} />
          </div>
          <h1 className={styles.headerTitle}>Our Recent Work</h1>
          <p className={styles.headerBody}>
            Selected outputs from our production pipeline. High-performance digital
            products engineered for measurable business impact and user retention.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <div className={styles.projectsSection}>
        <div className={styles.projectsInner}>
          {/* Featured: E-commerce */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=900&q=80"
                alt="E-commerce redesign mockup"
                className={styles.featuredImage}
              />
              <div className={styles.featuredOverlay}>
                <div className={styles.featuredOverlayTop}>
                  <span className={styles.caseTag}>CASE_01</span>
                  <span className={`material-symbols-outlined ${styles.iconWhiteLarge}`}>open_in_new</span>
                </div>
                <div className={styles.featuredOverlayBottom}>
                  <h3 className={styles.featuredTitle}>E-commerce_Redesign</h3>
                  <p className={styles.featuredDesc}>
                    Full-scale digital transformation for a premium lifestyle brand, focusing on conversion and speed.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.featuredMeta}>
              <div className={styles.featuredMetaItem}>
                <span className={styles.metaLabel}>Focus</span>
                <span className={styles.metaValue}>UI/UX + COMMERCE</span>
              </div>
              <div className={styles.featuredMetaItem}>
                <span className={styles.metaLabel}>Core_Metric</span>
                <span className={`${styles.metaValue} ${styles.metaHighlight}`}>+42%_CONVERSION</span>
              </div>
              <div className={styles.featuredMetaItem}>
                <span className={styles.metaLabel}>Launched</span>
                <span className={styles.metaValue}>2024.11.12</span>
              </div>
              <div className={styles.featuredMetaItem}>
                <span className={styles.metaLabel}>Performance</span>
                <span className={styles.metaValue}>
                  <span className={styles.pulseDot} />
                  98/100_Lighthouse
                </span>
              </div>
            </div>
          </div>

          {/* SaaS Dashboard */}
          <div className={styles.sideCard}>
            <div className={styles.sideCardInner}>
              <div className={styles.sideCardHeader}>
                <span className={styles.caseTagOrange}>CASE_02</span>
                <span className={`material-symbols-outlined ${styles.iconFilled}`}>dashboard</span>
              </div>
              <h3 className={styles.sideCardTitle}>SaaS_Analytics_Dashboard</h3>
              <p className={styles.sideCardDesc}>
                A centralized data visualization engine for high-growth logistics startups.
              </p>
              <div className={styles.sideCardStats}>
                {[
                  { label: 'Mobile_Friendly', value: 'YES_OPTIMIZED' },
                  { label: 'Load_Time', value: '50%_FASTER' },
                  { label: 'User_Rating', value: '4.9/5.0', highlight: true },
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
                <span className={styles.clientNoteLabel}>Client_Note:</span>
                <p className={styles.clientNoteText}>
                  "The new architecture solved our scaling issues and reduced server costs significantly."
                </p>
                <span className={`material-symbols-outlined ${styles.iconAbsoluteRotated}`}>
                  verified
                </span>
              </div>
              <button className={styles.viewBtn}>View_Case_Study</button>
            </div>
          </div>

          {/* Local Bakery */}
          <div className={styles.smallCard}>
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80"
              alt="Local bakery website"
              className={styles.smallCardImage}
            />
            <div className={styles.smallCardBody}>
              <h3 className={styles.smallCardTitle}>Local_Bakery_Site</h3>
              <p className={styles.smallCardDesc}>
                Custom reservation system and storefront for artisan bakery.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>CMS</span>
                <span className={styles.tag}>SEO_READY</span>
                <span className={styles.tag}>99.9%_UPTIME</span>
              </div>
            </div>
          </div>

          {/* Health Tech */}
          <div className={styles.smallCard}>
            <div className={`${styles.smallCardBody} ${styles.smallCardBodyFullHeight}`}>
              <div>
                <span className={`material-symbols-outlined ${styles.iconLargePrimaryFilled}`}>
                  mobile_friendly
                </span>
                <h3 className={styles.smallCardTitle}>Health_Tech_App</h3>
                <p className={`${styles.smallCardDesc} ${styles.textItalic}`}>
                  "A HIPAA-compliant patient portal that simplifies medical record management for small clinics."
                </p>
              </div>
              <div>
                <div className={styles.progressBar}>
                  <div className={`${styles.progressFill} ${styles.progressFill95}`} />
                </div>
                <div className={styles.progressRow}>
                  <span>ADOPTION_RATE</span>
                  <span>95.4%</span>
                </div>
                <div className={styles.smallCardFooter}>
                  <span>COMPLETED: 2024.10.01</span>
                  <span className={`material-symbols-outlined ${styles.iconSmall}`}>arrow_forward</span>
                </div>
              </div>
            </div>
          </div>

          {/* FinTech */}
          <div className={`${styles.smallCard} ${styles.finTechCard}`}>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80"
              alt="FinTech platform"
              className={styles.finTechImage}
            />
            <div className={styles.finTechOverlay}>
              <span className={styles.archiveLabel}>PROJECT_ARCHIVE</span>
              <h3 className={styles.smallCardTitle}>FinTech_Platform</h3>
              <button className={styles.readBtn}>
                READ_STUDY
                <span className={`material-symbols-outlined ${styles.iconSmall}`}>menu_book</span>
              </button>
            </div>
          </div>
        </div>

        {/* Agency Log */}
        <div className={styles.agencyLog}>
          <span className={styles.agencyLogBadge}>AGENCY_LOG</span>
          <div className={styles.agencyLogInner}>
            <div className={styles.agencyLogLeft}>
              <span className={styles.agencyLogLabel}>Current_Focus</span>
              <h4 className={styles.agencyLogTitle}>High_Performance_Web</h4>
            </div>
            <div className={styles.agencyLogRight}>
              <p className={styles.agencyLogText}>
                Currently optimizing the{' '}
                <span className={styles.inlineCode}>Vercel Edge</span>{' '}
                deployment workflows for sub-100ms global latency. All project architectures
                listed above are proprietary but our{' '}
                <span className={styles.agencyLogLink}>Best Practices Guide</span>{' '}
                is available for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
