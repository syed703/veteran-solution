import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/about.css?raw";
import { ImportedPageMenu } from "../components/imported-page-controls";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us | Veteran Solutions \u0026 Services" }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"site-theme theme-about"}>
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
              <img src="/site-assets/f0a3c5858a327278.webp" width="80" height="44" alt="Veteran eagle and property emblem" />
              <span>
                <b>VETERAN</b>
                <small>SOLUTIONS &amp; SERVICES LLC</small>
              </span>
            </a>
            <nav className={"desktop-nav"} aria-label="Main navigation">
              <a className={""} href="/">Home</a>
              <a className={"active"} href="/about">About Us</a>
              <a className={""} href="/services">Services</a>
              <a className={""} href="/contact">Contact Us</a>
              <a className={""} href="/legal">Legal Pages</a>
            </nav>
            <a className={"button button-dark header-quote"} href="/contact">Start a project</a>
            <ImportedPageMenu />
          </div>
        </header>
        <main id="main">
          <section className={"page-intro about-intro interior-about-hero"}>
            <div className={"\x63ontainer"}>
              <div className={"breadcrumb"}>
                <a href="/">Home</a>
                <span>/</span>
                <span>About Us</span>
              </div>
              <div className={"interior-about-grid"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />VETERAN OWNED. PURPOSE LED.</span>
                  <h1>Built around<br /><em>your needs.</em></h1>
                </div>
                <div className={"interior-about-aside"}>
                  <span>OUR APPROACH / 01</span>
                  <p>We bring a service mindset to property work, beginning with a conversation about what matters to you.</p>
                </div>
              </div>
              <div className={"interior-hero-foot"}>
                <span>VETERAN SOLUTIONS &amp; SERVICES LLC</span>
                <span>YOUR NEEDS. OUR MISSION.</span>
              </div>
            </div>
          </section>
          <section className={"about-story section"}>
            <div className={"\x63ontainer about-story-grid"}>
              <div className={"about-logo-panel reveal-ready revealed"}>
                <div className={"about-logo-panel-top"}>
                  <span>OUR IDENTITY</span>
                  <span>01 / 09</span>
                </div>
                <img src="/site-assets/8448ccd12888d989.webp" alt="Original Veteran Solutions and Services LLC eagle logo" width="500" height="500" />
                <span>VETERAN OWNED &amp; OPERATED</span>
              </div>
              <div className={"about-story-copy reveal-ready revealed"}>
                <span className={"eyebrow"}><span className={"label-line"} />PROPERTY CARE, WITH PURPOSE</span>
                <h2>One team.<br /><em>A service-first approach.</em></h2>
                <p>Our business is built around a straightforward idea: your property deserves attention, and your needs deserve to be heard.</p>
                <p>As a veteran-owned company, we bring a service mindset to work that makes a difference in your everyday surroundings. Clearing a crowded space. Refreshing a tired room. Taking care of the details outdoors.</p>
                <p>With nine services under one name, we can start with what matters to you and discuss a practical way forward.</p>
                <a className={"button button-dark"} href="/services">Explore our services</a>
              </div>
            </div>
          </section>
          <section className={"about-statement"}>
            <div className={"\x63ontainer reveal-ready revealed"}>
              <span>THE IDEA BEHIND OUR WORK</span>
              <p>Your property. <em>Your priorities.</em><br />A clear way forward.</p>
              <a className={"button button-dark"} href="/contact">Tell us what you need</a>
            </div>
          </section>
          <ImportedSectionPurposeIneveryDetail />
          <section className={"process-section section"}>
            <div className={"\x63ontainer"}>
              <div className={"section-heading reveal-ready revealed"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />A SIMPLE WAY FORWARD</span>
                  <h2>Good service starts<br />with <em>a conversation.</em></h2>
                </div>
                <p>From your first request to the agreed work, we keep the next step clear.</p>
              </div>
              <div className={"process-grid"}>
                <div className={"process-item reveal-ready revealed"}>
                  <span>01</span>
                  <h3>Tell us what you need</h3>
                  <p>Choose a service and share a few details about your property and project.</p>
                </div>
                <div className={"process-item reveal-ready revealed"}>
                  <span>02</span>
                  <h3>Make a clear plan</h3>
                  <p>We review the scope, discuss the estimate and agree a suitable schedule.</p>
                </div>
                <div className={"process-item reveal-ready revealed"}>
                  <span>03</span>
                  <h3>Put your plans in motion</h3>
                  <p>With the details agreed, we get to work on the service your property needs.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <ImportedFooterYourNeedsOurMission />
      </div>
    </>
  );
}

function ImportedSectionPurposeIneveryDetail() {
  return (
    <section className={"values-section section"}>
      <div className={"\x63ontainer"}>
        <div className={"section-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />WHAT GUIDES OUR WORK</span>
            <h2>Purpose in<br /><em>every detail.</em></h2>
          </div>
          <p>The same approach carries through every service we discuss.</p>
        </div>
        <div className={"values-grid"}>
          <article className={"reveal-ready revealed"}>
            <div className={"value-top"}>
              <span>01</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Service with purpose</h3>
            <p>We start by listening to your needs and understanding the result you are looking for.</p>
          </article>
          <article className={"reveal-ready revealed"}>
            <div className={"value-top"}>
              <span>02</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>Care for your space</h3>
            <p>Your property matters. We discuss access, preparation and the scope of work before getting started.</p>
          </article>
          <article className={"reveal-ready revealed"}>
            <div className={"value-top"}>
              <span>03</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </div>
            <h3>A clear conversation</h3>
            <p>Questions, plans and the next step should be easy to understand. We keep the discussion practical.</p>
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
