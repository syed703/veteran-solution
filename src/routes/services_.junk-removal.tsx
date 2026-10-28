import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/services.junk-removal.css?raw";
import { ImportedPageMenu, ImportedServiceSelect, useImportedQuoteNotice } from "../components/imported-page-controls";

export const Route = createFileRoute("/services_/junk-removal")({
  head: () => ({ meta: [{ title: "Junk Removal | Veteran Solutions \u0026 Services" }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"site-theme theme-service"} style={{ "--red": "#a6111d" } as CSSProperties}>
        <a className={"skip-link"} href="#main">Skip to content</a>
        <div className={"utility-bar"}>
          <div className={"\x63ontainer utility-inner"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> Proudly veteran owned &amp; operated</span>
            <span className={"utility-right"}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> Available 24/7 <i />{" "}<a href="tel:+18573455076">(857) 345-5076</a></span>
          </div>
        </div>
        <header className={"site-header"}>
          <div className={"\x63ontainer header-inner"}>
            <a aria-label="Veteran Solutions and Services home" className={"brand"} href="/">
              <img width="80" height="44" alt="Veteran eagle and property emblem" src="/site-assets/f0a3c5858a327278.webp" />
              <span>
                <b>VETERAN</b>
                <small>SOLUTIONS &amp; SERVICES LLC</small>
              </span>
            </a>
            <nav className={"desktop-nav"} aria-label="Main navigation">
              <a className={""} href="/">Home</a>
              <a className={""} href="/about">About Us</a>
              <a className={"active"} href="/services">Services</a>
              <a className={""} href="/contact">Contact Us</a>
              <a className={""} href="/legal">Legal Pages</a>
            </nav>
            <a className={"button button-dark header-quote"} href="/contact">Start a project</a>
            <ImportedPageMenu />
          </div>
        </header>
        <main id="main">
          <div className={"service-page"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f0ed" } as CSSProperties}>
            <section className={"service-detail-hero interior-service-hero"}>
              <div className={"\x63ontainer"}>
                <div className={"breadcrumb"}>
                  <a href="/">Home</a>
                  <span>/</span>
                  <a href="/services">Our services</a>
                  <span>/</span>
                  <span>Junk Removal</span>
                </div>
                <div className={"detail-hero-grid"}>
                  <div className={"detail-hero-copy"}>
                    <span className={"eyebrow"}><span className={"label-line"} />01 / CLEAR &amp; CLEAN</span>
                    <h1>Junk Removal</h1>
                    <p className={"detail-tagline"}>Less clutter. More possibility.</p>
                    <p>Make room for what comes next. Furniture, unwanted items and property cleanouts, handled with care.</p>
                    <div className={"service-hero-meta"}>
                      <span>VETERAN OWNED &amp; OPERATED</span>
                      <span>ONE TEAM / NINE SERVICES</span>
                    </div>
                    <a className={"button button-dark"} href="#quote">Request a quote</a>
                  </div>
                  <div className={"detail-hero-image"}>
                    <img alt="Two workers lifting a sofa in a bright living room" fetchPriority="high" src="/site-assets/64b8ea6e19a79d95.webp" style={{ objectPosition: "center center" } as CSSProperties} />
                    <img className={"detail-company-thumb"} alt="Veteran Solutions team member preparing to clear a cluttered space" loading="lazy" src="/site-assets/58a94b431b74715b.webp" />
                    <span className={"detail-image-label"}>YOUR PROPERTY. OUR PURPOSE.</span>
                  </div>
                </div>
                <div className={"service-hero-foot"}>
                  <span>THE WORK STARTS WITH A CLEAR PLAN.</span>
                  <a href="#scope">Explore the scope</a>
                </div>
              </div>
            </section>
            <section className={"detail-overview section"} id="scope">
              <div className={"\x63ontainer detail-overview-grid"}>
                <div className={"detail-overview-title reveal-ready revealed"}>
                  <span className={"eyebrow"}><span className={"label-line"} />THE RIGHT START / 01</span>
                  <h2>Less clutter. More possibility.</h2>
                  <span className={"detail-overview-watermark"} aria-hidden="true">01</span>
                </div>
                <div className={"detail-overview-content reveal-ready revealed"}>
                  <p className={"detail-description"}>From a few bulky items to a full property cleanout, we help remove the things taking up your space. Tell us what needs to go, where it is and how we can access it. We’ll discuss the scope and an estimate before the work starts.</p>
                  <div className={"scope-heading"}>
                    <span>01 / THE SCOPE</span>
                    <h3>What we can help with</h3>
                  </div>
                  <ul className={"scope-list"}>
                    <li>
                      <span>01</span>
                      <p>Household clutter and unwanted furniture</p>
                    </li>
                    <li>
                      <span>02</span>
                      <p>Garage, basement and property cleanouts</p>
                    </li>
                    <li>
                      <span>03</span>
                      <p>Removal planning for bulky items</p>
                    </li>
                    <li>
                      <span>04</span>
                      <p>A cleared space, ready for its next chapter</p>
                    </li>
                  </ul>
                  <div className={"scope-note"}>
                    <span>BEFORE WE GET STARTED</span>
                    <p>Let us know about heavy items, stairs or restricted access. Materials and disposal requirements are reviewed before scheduling.</p>
                  </div>
                </div>
              </div>
            </section>
            <ImportedSectionLetSTakeCareof />
            <ImportedSectionMoreWaysTomoveForward />
          </div>
        </main>
        <ImportedFooterYourNeedsOurMission />
      </div>
      <div hidden>
        <div hidden>
          <title>Junk Removal | Veteran Solutions &amp; Services</title>
        </div>
      </div>
    </>
  );
}

function ImportedSectionLetSTakeCareof() {
  const { onSubmit, notice } = useImportedQuoteNotice();
  return (
    <section id="quote" className={"quote-section section"}>
      <div className={"\x63ontainer quote-layout"}>
        <div className={"quote-intro reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />ONE LESS THING ON YOUR LIST</span>
          <h2>Let’s take care<br />of <em>your next project.</em></h2>
          <p>Something to clear, clean or completely reimagine? Tell us what you have in mind.</p>
          <div className={"contact-detail"}>
            <span className={"contact-icon"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </span>
            <div>
              <small>Prefer to talk it through?</small>
              <a href="tel:+18573455076">(857) 345-5076</a>
            </div>
          </div>
          <div className={"quote-points"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> Veteran owned &amp; operated</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> Available 24/7</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> A clear scope before work begins</span>
          </div>
          <p className={"quote-small"}>Your property. Your priorities.<br />Our mission is to help with both.</p>
        </div>
        <div className={"quote-panel reveal-ready revealed"}>
          <form className={"quote-form"} onSubmit={onSubmit}>
            <div className={"form-heading"}>
              <span className={"eyebrow"}>LET’S GET STARTED</span>
              <h3>Tell us what you need.</h3>
              <p>A few details help us understand your project.</p>
            </div>
            <div className={"form-row"}>
              <label>Full name <span>*</span><input required autoComplete="name" maxLength={120} placeholder="Your full name" defaultValue="" name="name" /></label>
              <label>Phone number <span>*</span><input required autoComplete="tel" maxLength={30} placeholder="(555) 000-0000" type="tel" defaultValue="" name="phone" /></label>
            </div>
            <div className={"form-row"}>
              <label>Email address <span>*</span><input required autoComplete="email" maxLength={180} placeholder="you@example.com" type="email" defaultValue="" name="email" /></label>
              <label>Property ZIP code <span>*</span><input required autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" maxLength={10} placeholder="ZIP code" title="Enter a 5-digit US ZIP code, optionally followed by a 4-digit extension." defaultValue="" name="zip" /></label>
            </div>
            <label className={"service-label"} id="service-label">Which service do you need? <span>*</span></label>
            <ImportedServiceSelect />
            <label className={"message-label"}>A little about your project <span>*</span><textarea name="message" required minLength={10} maxLength={3000} rows={4} placeholder="What needs attention? Include the approximate size, current condition and your preferred timing." /></label>
            <div className={"honeypot"} aria-hidden="true">
              <label>Company website<input tabIndex={-1} autoComplete="off" defaultValue="" name="company" /></label>
            </div>
            <button className={"button button-dark form-submit"} type="submit">Request my quote</button>
            {notice && <p role="status">Online quote requests are not connected yet. Please call (857) 345-5076 to discuss your project.</p>}
            <p className={"form-note"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>We’ll use these details to contact you about your request. <a href="/legal/privacy">Privacy Policy</a></span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionMoreWaysTomoveForward() {
  return (
    <section className={"related-section section"}>
      <div className={"\x63ontainer"}>
        <div className={"section-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />KEEP EXPLORING</span>
            <h2>More ways to<br /><em>move forward.</em></h2>
          </div>
          <a className={"underlined-link"} href="/services">View all services</a>
        </div>
        <div className={"featured-grid"}>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f5f1eb" } as CSSProperties}>
            <a aria-label="Explore Pool Cleaning" className={"service-image"} href="/services/pool-cleaning">
              <img alt="Veteran Solutions worker skimming a swimming pool" loading="lazy" src="/site-assets/268a312bff2a0a69.webp" style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>03</span>
              <span className={"image-category"}>Clear &amp; clean</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/pool-cleaning">
                <h3>Pool Cleaning</h3>
              </a>
              <p>Keep your pool inviting with attentive cleaning that takes everyday maintenance off your list.</p>
              <a className={"underlined-link"} href="/services/pool-cleaning">Explore service</a>
            </div>
          </article>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f1ef" } as CSSProperties}>
            <a aria-label="Explore Power Washing" className={"service-image"} href="/services/power-washing">
              <img alt="Veteran Solutions worker power washing a paved patio" loading="lazy" src="/site-assets/4f8f0842a9551b24.webp" style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>04</span>
              <span className={"image-category"}>Clear &amp; clean</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/power-washing">
                <h3>Power Washing</h3>
              </a>
              <p>Lift built-up dirt from suitable exterior surfaces and give your property a cleaner first impression.</p>
              <a className={"underlined-link"} href="/services/power-washing">Explore service</a>
            </div>
          </article>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ec" } as CSSProperties}>
            <a aria-label="Explore Property Cleaning" className={"service-image"} href="/services/property-cleaning">
              <img alt="Veteran Solutions worker cleaning an outdoor property area" loading="lazy" src="/site-assets/c82ff7ecf9d14bb2.webp" style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>06</span>
              <span className={"image-category"}>Clear &amp; clean</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/property-cleaning">
                <h3>Property Cleaning</h3>
              </a>
              <p>Give your property the attention it deserves, with cleaning tailored to the areas that need it most.</p>
              <a className={"underlined-link"} href="/services/property-cleaning">Explore service</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>VETERAN SOLUTIONS &amp; SERVICES LLC</span>
            <h2>Your needs.<br /><em>Our mission.</em></h2>
            <p>Property care with purpose.<br />One team. Nine ways to make a difference.</p>
            <a className={"footer-phone"} href="tel:+18573455076"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>(857) 345-5076</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> Available 24/7</span>
          </div>
          <div className={"footer-links"}>
            <h3>Explore</h3>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact Us</a>
            <a href="/legal">Legal Pages</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>Our services</h3>
            <a href="/services/junk-removal">Junk Removal</a>
            <a href="/services/painting">Painting</a>
            <a href="/services/pool-cleaning">Pool Cleaning</a>
            <a href="/services/power-washing">Power Washing</a>
            <a href="/services/renovating">Renovating</a>
            <a href="/services/property-cleaning">Property Cleaning</a>
            <a href="/services/tile-replacement-installation">Tile Replacement &amp; Installation</a>
            <a href="/services/floor-renovation">Floor Renovation</a>
            <a href="/services/demolition">Demolition</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">VETERAN<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>© 2026 Veteran Solutions and Services LLC</span>
          <span className={"footer-policy-links"}>
            <a href="/legal/privacy">Privacy Policy</a>
            <a href="/legal/terms">Terms of Use</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
