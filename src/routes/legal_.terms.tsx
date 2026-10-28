import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/legal.terms.css?raw";
import { ImportedPageMenu } from "../components/imported-page-controls";

export const Route = createFileRoute("/legal_/terms")({
  head: () => ({ meta: [{ title: "Terms of Use | Veteran Solutions \u0026 Services" }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS + repairCSS + innerRepairCSS}</style>
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
            <ImportedPageMenu />
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
                <span>Terms of Use</span>
              </div>
              <span className={"eyebrow"}><span className={"label-line"} />USING THE WEBSITE</span>
              <h1>Terms of Use</h1>
              <p>Veteran Solutions and Services LLC · Last updated October 6, 2026</p>
            </div>
          </section>
          <ImportedSectionAboutThisWebsite />
        </main>
        <ImportedFooterYourNeedsOurMission />
      </div>
    </>
  );
}

function ImportedSectionAboutThisWebsite() {
  return (
    <section className={"legal-document section"}>
      <div className={"\x63ontainer legal-document-grid"}>
        <aside className={"legal-sidebar"}>
          <span>ON THIS PAGE</span>
          <nav aria-label="Terms of Use sections">
            <a href="#website">About this website</a>
            <a href="#quotes">Requests, estimates and work</a>
            <a href="#images">Photography and examples</a>
            <a href="#use">Using the site</a>
            <a href="#updates">Changes and contact</a>
          </nav>
          <a className={"legal-back"} href="/legal">View all legal pages</a>
        </aside>
        <div className={"legal-article"}>
          <p className={"legal-lead"}>These terms explain how to use this website and what happens when you request a quote.</p>
          <section className={"legal-article-section"} id="website">
            <span>01</span>
            <div>
              <h2>About this website</h2>
              <p>This website introduces Veteran Solutions and Services LLC and its property services. The descriptions are general information to help you decide what to ask about; they do not promise that a particular service or result is available for every property.</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="quotes">
            <span>02</span>
            <div>
              <h2>Requests, estimates and work</h2>
              <p>Sending a quote request is an invitation to discuss your project. It does not reserve a date, create a service agreement or establish a final price. Scope, materials, site conditions, access, scheduling and any required approvals are reviewed before work is agreed.</p>
              <p>Any estimate or service arrangement is governed by the details agreed directly with you for that project.</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="images">
            <span>03</span>
            <div>
              <h2>Photography and examples</h2>
              <p>The website includes stock imagery and illustrative before-and-after concepts to help explain services and possibilities. Those concepts are not photographs of completed client projects and do not guarantee a specific result.</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="use">
            <span>04</span>
            <div>
              <h2>Using the site</h2>
              <p>Please use the website and quote form for genuine service enquiries. Do not try to disrupt the site, submit misleading requests or access information that is not intended for you.</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="updates">
            <span>05</span>
            <div>
              <h2>Changes and contact</h2>
              <p>Site content and these terms may be updated. For a question about a service, quote or this website, call us using the number below.</p>
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
            <a href="/legal/privacy">Privacy Policy</a>
            <a href="/legal/terms">Terms of Use</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
