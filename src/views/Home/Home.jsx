import Link from 'next/link'
import styles from './Home.module.css'

const marqueeItems = [
  { text: 'FAST_WEBSITES', icon: 'speed' },
  { text: 'GET_FOUND_ON_GOOGLE', icon: 'search' },
  { text: 'SAVE_TIME', icon: 'schedule' },
  { text: 'EASY_TO_MANAGE', icon: 'touch_app' },
  { text: 'LOCAL_EXPERTS', icon: 'handshake' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Blueprint grid overlay */}
      <div className={styles.gridOverlay} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Left */}
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>READY_FOR_GROWTH // 2025</div>
            <h1 className={styles.heroHeadline}>
              GROWING <br />
              <span className={styles.heroAccent}>YOUR</span> <br />
              BUSINESS.
            </h1>
            <p className={styles.heroBody}>
              Moc-up Solutions builds high-impact websites and automated systems that
              help small businesses save time and attract more customers. Modern tools,
              simplified for you.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.btnPrimary}>FREE_CONSULT</Link>
              <Link href="/services" className={styles.btnSecondary}>VIEW_SERVICES</Link>
            </div>
          </div>

          {/* Right: terminal mockup */}
          <div className={styles.heroRight}>
            <div className={styles.terminal}>
              <div className={styles.terminalBar}>
                <div className={styles.terminalDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <span className={styles.terminalTitle}>
                  business-manager — moc-up@root: ~/growth-hub
                </span>
              </div>
              <div className={styles.terminalBody}>
                <div className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>$</span>
                  <span>site-launch --target success</span>
                </div>
                <div className={styles.terminalComment}>Connecting your domain... [OK]</div>
                <div className={styles.terminalComment}>Syncing customer leads... [OK]</div>
                <div className={styles.terminalStatus}>
                  <span className={styles.terminalStatusLabel}>STATUS:</span>
                  <span>BUSINESS_ONLINE</span>
                </div>
                <div className={styles.terminalBars}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={styles.terminalBar2} />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.heroBubble}>
              <span className="material-symbols-outlined" style={{ color: 'white', marginBottom: '8px', display: 'block' }}>
                trending_up
              </span>
              <p className={styles.heroBubbleText}>
                Smart features designed to increase your sales and lead generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.marqueeGroup}>
              <span className={styles.marqueeText}>{item.text}</span>
              <span className="material-symbols-outlined" style={{ opacity: 0.5 }}>{item.icon}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Section 1: How We Help */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Service_Module / 001</span>
            <h2 className={styles.sectionTitle}>How We Help Your Business</h2>
          </div>
          <div className={styles.helpGrid}>
            {/* Feature card */}
            <div className={styles.helpFeature}>
              <h3 className={styles.helpFeatureTitle}>
                Beautiful Sites That <br />Turn Visitors Into Fans
              </h3>
              <p className={styles.helpFeatureBody}>
                We don't just "make websites"; we create your business's best employee.
                We build sites that load fast, look great on phones, and make it easy
                for customers to find and book you.
              </p>
              <div className={styles.helpStats}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Speed</span>
                  <div className={styles.statValue}>FAST</div>
                  <div className={styles.statDesc}>Instant loading</div>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Visibility</span>
                  <div className={styles.statValue}>SEARCH</div>
                  <div className={styles.statDesc}>Appear on Google</div>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Easy Access</span>
                  <div className={styles.statValue}>100%</div>
                  <div className={styles.statDesc}>Mobile friendly</div>
                </div>
              </div>
            </div>
            {/* Dark side panel */}
            <div className={styles.helpDark}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--color-primary)', marginBottom: '24px', display: 'block' }}>
                insights
              </span>
              <h4 className={styles.helpDarkTitle}>Clear Results <br />You Can See</h4>
              <p className={styles.helpDarkBody}>
                We provide simple reports so you can see exactly how many people are
                visiting your site and contacting your business every month.
              </p>
              <div className={styles.helpChart}>
                <div className={styles.helpChartGrid} />
                <div className={styles.helpChartBar} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Launching Your Site */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={`${styles.sectionHeader} ${styles.sectionHeaderRight}`}>
            <span className={styles.sectionTag}>Service_Module / 002</span>
            <h2 className={styles.sectionTitle}>Launching Your Site</h2>
          </div>
          <div className={styles.launchGrid}>
            {/* Orange card */}
            <div className={styles.launchCard}>
              <span className={styles.launchBadge}>FULL_SUPPORT</span>
              <h3 className={styles.launchTitle}>Worry-Free <br />Updates</h3>
              <p className={styles.launchBody}>
                We handle all the technical details so you don't have to. From security
                patches to content changes, we keep your site running perfectly while
                you run your business.
              </p>
              <ul className={styles.launchList}>
                {['Regular Security Checks', 'Help With Domain & Email', 'Monthly Performance Tuning'].map((item) => (
                  <li key={item} className={styles.launchListItem}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Feature panel */}
            <div className={styles.launchFeature}>
              <div className={styles.launchFeatureTop}>
                <h3 className={styles.launchFeatureTitle}>Smart Features</h3>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>auto_awesome</span>
              </div>
              <p className={styles.launchFeatureBody}>
                Automate the repetitive tasks. We build smart features that automatically
                capture leads, send appointment reminders, and sync your inventory,
                saving you hours of manual work every week.
              </p>
              <div className={styles.codeBlock}>
                <div className={styles.codeBlockHeader}>
                  <span className={styles.codeComment}>SMART_WORKFLOW:</span>
                  <span className={styles.codeHighlight}>customer_followup.run</span>
                </div>
                <div className={styles.codeLines}>
                  1. Customer fills out "Contact" form<br />
                  2. You get an instant text notification<br />
                  3. Customer receives a personalized "Thank You" email<br />
                  4. Lead is saved to your business database
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Smart Solutions */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Service_Module / 003</span>
            <h2 className={styles.sectionTitle}>Smart_Solutions</h2>
          </div>
          <div className={styles.cardsGrid}>
            {[
              { icon: 'shopping_cart', title: 'Easy Online Selling', body: 'Start selling products or services online without the headache. We set up easy-to-use shops and secure payment systems for your brand.' },
              { icon: 'calendar_month', title: 'Online Bookings', body: 'Let your customers book appointments 24/7. Our systems sync with your calendar so you never have to play phone tag again.' },
              { icon: 'campaign', title: 'Customer Loyalty', body: 'Keep your customers coming back with simple email newsletters and loyalty programs that we set up and manage for you.' },
            ].map((card) => (
              <div key={card.title} className={styles.card}>
                <span className="material-symbols-outlined" style={{ fontSize: '36px', color: 'var(--color-primary)', marginBottom: '24px', display: 'block', transition: 'transform 0.2s' }}>
                  {card.icon}
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaGrid} />
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>READY_TO_GROW?</h2>
          <p className={styles.ctaBody}>
            Moc-up Solutions is currently accepting new business partners for spring 2025 projects.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            SAY_HELLO
            <span className="material-symbols-outlined">chat</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
