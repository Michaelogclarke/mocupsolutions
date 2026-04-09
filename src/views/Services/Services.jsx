import Link from 'next/link'
import styles from './Services.module.css'

export default function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.gridOverlay} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.heroTag}>[ NOW LOADING: SERVICES ]</span>
            <h1 className={styles.heroTitle}>
              OUR <span className={styles.heroAccent}>EXPERTISE</span>
            </h1>
            <p className={styles.heroBody}>
              We don't just build websites; we create powerful digital systems designed
              to help your small business grow, compete, and win.
            </p>
            <div className={styles.heroPill}>
              High-Performance Tools for Your Business
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImageInner}>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="Technical blueprint style digital interface"
                className={styles.heroImg}
              />
              <div className={styles.heroImageBadge}>STATUS: READY TO BUILD</div>
            </div>
            <div className={styles.heroPip}>
              <span className={styles.heroPipLabel}>PROJECT_TRACTION</span>
              <div className={styles.heroPipBars}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={styles.heroPipBar} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section className={styles.bento}>
        <div className={styles.bentoInner}>
          {/* Product Design — wide */}
          <div className={`${styles.bentoCell} ${styles.bentoCellWide} ${styles.bentoCellRight}`}>
            <span className={styles.cellTag}>01_DESIGN_EXPERIENCE</span>
            <h2 className={styles.cellTitle}>Product Design</h2>
            <p className={styles.cellBody}>
              We design digital experiences that look professional and work perfectly.
              Our process ensures your customers can find what they need quickly and easily.
            </p>
            <ul className={styles.cellList}>
              {[
                { icon: 'polyline', label: 'Clear Site Architecture' },
                { icon: 'draw', label: 'Unique Brand Identity' },
                { icon: 'touch_app', label: 'User-Friendly Interfaces' },
              ].map((item) => (
                <li key={item.label} className={styles.cellListItem}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '18px' }}>
                    {item.icon}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
            <div className={styles.cellCallout}>
              <span className={styles.cellCalloutLabel}>// OUR_PROMISE</span>
              <p className={styles.cellCalloutText}>
                "Functional beauty that makes your business look like the industry leader you are."
              </p>
            </div>
          </div>

          {/* Metrics — dark */}
          <div className={`${styles.bentoCell} ${styles.bentoCellDark}`}>
            <span className={styles.cellTagLight}>LIVE_PERFORMANCE_METRICS</span>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <div className={styles.metricRow}>
                  <span>CUSTOMER_BOOKINGS</span>
                  <span className={styles.metricPositive}>+14.8%</span>
                </div>
                <div className={styles.metricBar}>
                  <div className={styles.metricFill} style={{ width: '78%', backgroundColor: 'var(--color-primary-container)' }} />
                  <div className={styles.metricLabel}>REVENUE_TARGET: REACHED</div>
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricRow}>
                  <span>PAGE_LOAD_SPEED</span>
                  <span className={styles.metricPositive}>-120ms</span>
                </div>
                <div className={styles.metricBar}>
                  <div className={styles.metricFill} style={{ width: '92%', backgroundColor: 'var(--color-secondary)' }} />
                  <div className={styles.metricLabel}>SITE_SPEED: OPTIMIZED</div>
                </div>
              </div>
            </div>
            <div className={styles.metricFooter}>
              <div>
                <span className={styles.metricFooterLabel}>UPTIME</span>
                <span className={styles.metricFooterValue}>100%</span>
              </div>
              <div>
                <span className={styles.metricFooterLabel}>STATUS</span>
                <span className={styles.metricFooterStatus}>MONITORED_24/7</span>
              </div>
            </div>
          </div>

          {/* Custom Business Tools */}
          <div className={`${styles.bentoCell} ${styles.bentoCellBorder}`}>
            <span className={styles.cellTag}>02_TAILORED_TOOLS</span>
            <h2 className={styles.cellTitle}>Custom Business Tools</h2>
            <div className={styles.codeSnippet}>
              <div className={styles.codeComment}>// Automate your daily tasks</div>
              <div>
                <span className={styles.codeKeyword}>const </span>
                <span className={styles.codeVar}>workflow </span>
                = <span className={styles.codeKeyword}>new </span>
                <span className={styles.codeVar}>BusinessEngine</span>({'{'}
              </div>
              <div className={styles.codeIndent}>
                growth: <span className={styles.codeString}>'automated'</span>,<br />
                support: <span className={styles.codeString}>'always_on'</span>,<br />
                tools: [<span className={styles.codeString}>'CRM'</span>, <span className={styles.codeString}>'Payments'</span>, <span className={styles.codeString}>'Inventory'</span>]
              </div>
              <div>{'}'});</div>
            </div>
            <p className={styles.cellBody}>
              Stop wasting time on manual entry. We build custom software that automates
              your workflows, tracks your sales, and manages your inventory automatically.
            </p>
            <Link href="/portfolio" className={styles.cellLink}>
              SEE_CASE_STUDIES
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </Link>
          </div>

          {/* Getting You More Customers */}
          <div className={`${styles.bentoCell} ${styles.bentoCellBorderLeft}`}>
            <span className={styles.cellTag}>03_GROWTH_STRATEGY</span>
            <h2 className={styles.cellTitle}>Getting You More Customers</h2>
            <div className={styles.barChart}>
              {[25, 33, 50, 66, 75, 100, 25, 33, 50, 66, 75, 110].map((h, i) => (
                <div
                  key={i}
                  className={styles.barChartBar}
                  style={{
                    height: `${h}%`,
                    backgroundColor: h >= 75 ? (h === 110 ? 'var(--color-primary-container)' : 'var(--color-primary)') : (h >= 50 ? 'var(--color-zinc-400)' : 'var(--color-zinc-300)'),
                    maxHeight: '100%',
                    overflow: 'visible',
                  }}
                />
              ))}
            </div>
            <p className={styles.cellBody}>
              We use data to understand your audience and find more people like them.
              We track what works so you can spend your marketing budget where it counts.
            </p>
            <div className={styles.metricCards}>
              <div className={styles.metricCard}>
                <span className={styles.metricCardLabel}>Repeat_Customers</span>
                <span className={styles.metricCardValue} style={{ color: 'var(--color-secondary)' }}>62.4%</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricCardLabel}>Acquisition_Cost</span>
                <span className={styles.metricCardValue} style={{ color: 'var(--color-error)' }}>REDUCED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaDecorTR} />
        <div className={styles.ctaDecorBL} />
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            READY TO <span className={styles.ctaUnderline}>START</span>?
          </h2>
          <p className={styles.ctaBody}>
            Let's discuss how we can solve your business challenges with the right
            technology. Simple solutions for real growth.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaBtnPrimary}>BOOK_A_CONSULT</Link>
            <Link href="/portfolio" className={styles.ctaBtnSecondary}>VIEW_OUR_WORK</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
