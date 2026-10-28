import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/legal.privacy.css?raw";

export const Route = createFileRoute("/legal_/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | Veteran Solutions \u0026 Services" }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"site-theme theme-legal"}>
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
              <a className={""} href="/about">About Us</a>
              <a className={""} href="/services">Services</a>
              <a className={""} href="/contact">Contact Us</a>
              <a className={"active"} href="/legal">Legal Pages</a>
            </nav>
            <a className={"button button-dark header-quote"} href="/contact">Start a project</a>
            <button type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" data-slot="sheet-trigger" className={"mobile-menu"} aria-label="Open navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-menu"} aria-hidden="true">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </header>
        <main id="main">
          <section className={"page-intro legal-intro legal-document-intro"}>
            <div className={"\x63ontainer"}>
              <div className={"breadcrumb"}>
                <a href="/">Home</a>
                <span>/</span>
                <a href="/legal">Legal Pages</a>
                <span>/</span>
                <span>Privacy Policy</span>
              </div>
              <span className={"eyebrow"}><span className={"label-line"} />YOUR INFORMATION</span>
              <h1>Privacy Policy</h1>
              <p>Veteran Solutions and Services LLC · Last updated October 6, 2026</p>
            </div>
          </section>
          <ImportedSectionInformationYouSendUs />
        </main>
        <ImportedFooterYourNeedsOurMission />
      </div>
    </>
  );
}

function ImportedSectionInformationYouSendUs() {
  return (
    <section className={"legal-document section"}>
      <div className={"\x63ontainer legal-document-grid"}>
        <aside className={"legal-sidebar"}>
          <span>ON THIS PAGE</span>
          <nav aria-label="Privacy Policy sections">
            <a href="#information">Information you send us</a>
            <a href="#use">How the information is used</a>
            <a href="#storage">Storage and website providers</a>
            <a href="#retention">Records and your questions</a>
            <a href="#updates">Changes to this notice</a>
          </nav>
          <a className={"legal-back"} href="/legal">View all legal pages</a>
        </aside>
        <div className={"legal-article"}>
          <p className={"legal-lead"}>We want you to know what happens to the details you share when you contact us through this website.</p>
          <section className={"legal-article-section"} id="information">
            <span>01</span>
            <div>
              <h2>Information you send us</h2>
              <p>When you submit a quote request, we receive your name, phone number, email address, property ZIP code, selected service and the project details you provide. The website also records a submission time and a reference number so we can identify your request.</p>
              <p>Please avoid sending payment card numbers, government identification or other sensitive information in the project description. The quote form does not ask for those details.</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="use">
            <span>02</span>
            <div>
              <h2>How the information is used</h2>
              <p>We use your enquiry details to respond to you, understand the work you have in mind, discuss an estimate or schedule and keep a record of the conversation. A quote request does not automatically book a service.</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="storage">
            <span>03</span>
            <div>
              <h2>Storage and website providers</h2>
              <p>Quote requests are stored in the website’s enquiry database. The hosting and database providers process information needed to run the site and deliver your request. Basic technical information, such as a browser or network address, may be processed by the hosting infrastructure for site operation and security.</p>
              <p>Information may be made available to people helping us respond to your request or provide the service, and may be disclosed when required by law.</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="retention">
            <span>04</span>
            <div>
              <h2>Records and your questions</h2>
              <p>Enquiry records may be kept as needed to answer requests, manage service discussions and meet recordkeeping obligations. If you have a question about information you submitted or want to request a correction or deletion, contact us using the number below.</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="updates">
            <span>05</span>
            <div>
              <h2>Changes to this notice</h2>
              <p>If the way this website handles enquiries changes, this page may be updated. The date shown above tells you when this notice was last revised.</p>
            </div>
          </section>
          <div className={"legal-contact"}>
            <span>NEED TO SPEAK WITH US?</span>
            <h2>Let’s talk it through.</h2>
            <p>Call Veteran Solutions and Services LLC with any question about this page or your enquiry.</p>
            <a href="tel:+18573455076">(857) 345-5076</a>
          </div>
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
            <a href="#">Privacy Policy</a>
            <a href="/legal/terms">Terms of Use</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
