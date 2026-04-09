'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

const services = [
  { id: 'branding', category: 'Branding', label: 'VISUAL_ID' },
  { id: 'engineering', category: 'Engineering', label: 'FRONT_END' },
  { id: 'logic', category: 'Logic', label: 'API_INT' },
  { id: 'scaling', category: 'Scaling', label: 'CLOUD_OPS' },
]

export default function Contact() {
  const [selected, setSelected] = useState([])

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.gridOverlay} />
      <div className={styles.layout}>
        {/* Left: Form */}
        <section className={styles.formSection}>
          <div className={styles.formHeader}>
            <span className={styles.stateBadge}>STATE: INQUIRY_ACTIVE</span>
            <span className={styles.channelLabel}>CHANNEL: WEB_PORTAL</span>
          </div>
          <h1 className={styles.formTitle}>Let's Build Something Great</h1>
          <p className={styles.formSubtitle}>
            Submit your requirements to our engineering core. All parameters must be
            defined before deployment.
          </p>

          <div className={styles.formCard}>
            {/* Step 1 */}
            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>01/</span>
                <h2 className={styles.stepTitle}>About You</h2>
                <div className={styles.stepDivider} />
              </div>
              <div className={styles.formGrid}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Full_Name</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Satoshi Nakamoto"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Email_Address</label>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="e.g. connect@grid.net"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>02/</span>
                <h2 className={styles.stepTitle}>What do you need help with?</h2>
                <div className={styles.stepDivider} />
              </div>
              <div className={styles.checkboxGrid}>
                {services.map((svc) => (
                  <label
                    key={svc.id}
                    className={`${styles.checkboxCard} ${selected.includes(svc.id) ? styles.checkboxCardActive : ''}`}
                    onClick={() => toggle(svc.id)}
                  >
                    <div className={styles.checkboxTop}>
                      <span className={styles.checkboxCategory}>{svc.category}</span>
                      <div className={`${styles.checkboxBox} ${selected.includes(svc.id) ? styles.checkboxBoxChecked : ''}`}>
                        {selected.includes(svc.id) && (
                          <span className={`material-symbols-outlined ${styles.iconCheckSmallWhite}`}>check</span>
                        )}
                      </div>
                    </div>
                    <span className={styles.checkboxLabel}>{svc.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>03/</span>
                <h2 className={styles.stepTitle}>Project Details</h2>
                <div className={styles.stepDivider} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Project_Brief</label>
                <textarea
                  className={styles.textarea}
                  rows={6}
                  placeholder="Tell us about your project requirements and goals..."
                />
              </div>
            </div>

            {/* Submit */}
            <div className={styles.formFooter}>
              <div className={styles.transmitStatus}>
                <span className={styles.pulseDot} />
                <span className={styles.transmitLabel}>Message_Ready_To_Transmit</span>
              </div>
              <button className={styles.submitBtn}>
                <span>SEND INQUIRY</span>
                <span className={`material-symbols-outlined ${styles.iconSendAnimated}`}>send</span>
              </button>
            </div>
          </div>
        </section>

        {/* Right: Sidebar */}
        <aside className={styles.sidebar}>
          {/* Office location */}
          <div className={styles.sideCard}>
            <div className={styles.sideCardHeader}>
              <span className={styles.sideCardTag}>// Physical_Node</span>
              <span className={`material-symbols-outlined ${styles.iconLocationSmall}`}>location_on</span>
            </div>
            <div className={styles.mapPlaceholder}>
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80"
                alt="City location map"
                className={styles.mapImage}
              />
              <div className={styles.mapOverlay} />
              <div className={styles.mapPin}>
                <div className={styles.mapPingRing} />
                <div className={styles.mapPinInner}>
                  <div className={styles.mapPinDot} />
                </div>
              </div>
            </div>
            <div className={styles.locationInfo}>
              <div>
                <span className={styles.locationLabel}>Coordinates</span>
                <span className={styles.locationValue}>37.7749° N, 122.4194° W</span>
              </div>
              <div>
                <span className={styles.locationLabel}>Base_Operations</span>
                <p className={styles.locationAddress}>
                  Industrial Plaza, Suite 808<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
          </div>

          {/* System status */}
          <div className={styles.statusCard}>
            <div className={styles.statusHeader}>
              <span className={styles.statusTitle}>System_Health</span>
              <span className={styles.statusBadge}>OPERATIONAL</span>
            </div>
            <div className={styles.statusMetrics}>
              {[
                { label: 'Core_Engine', value: '99.98%', width: '99.9%' },
                { label: 'Database_Latency', value: '14ms', width: '15%' },
                { label: 'API_Response', value: '232ms', width: '32%' },
              ].map((m) => (
                <div key={m.label}>
                  <div className={styles.statusMetricRow}>
                    <span className={styles.statusMetricLabel}>{m.label}</span>
                    <span className={styles.statusMetricValue}>{m.value}</span>
                  </div>
                  <div className={styles.statusBar}>
                    <div className={styles.statusBarFill} style={{ width: m.width }} />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.liveLogs}>
              <div className={styles.liveLogsHeader}>
                <span className={`material-symbols-outlined ${styles.iconTerminalSmallPrimary}`}>terminal</span>
                <span className={styles.liveLogsTitle}>Live_Logs</span>
              </div>
              <div className={styles.liveLogsText}>
                <p>&gt; Connection established from 192.168.1.1</p>
                <p>&gt; Handshake successful...</p>
                <p>&gt; Ready for payload...</p>
              </div>
            </div>
          </div>

          {/* Direct line */}
          <div className={styles.directLine}>
            <div className={styles.directLineContent}>
              <h3 className={styles.directLineTitle}>Direct_Line</h3>
              <p className={styles.directLineBody}>
                Urgent technical emergencies or direct collaboration inquiries:
              </p>
              <a href="tel:+18007538246" className={styles.directLinePhone}>
                +1 (800) SKETCH-ENGINE
              </a>
            </div>
            <span className={`material-symbols-outlined ${styles.iconDecorative}`}>
              bolt
            </span>
          </div>
        </aside>
      </div>
    </div>
  )
}
