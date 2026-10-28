import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/services.css?raw";
import { ImportedPageMenu } from "../components/imported-page-controls";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Our Services | Veteran Solutions \u0026 Services" }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"site-theme theme-services"}>
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
              <a className={"active"} href="/services">Services</a>
              <a className={""} href="/contact">Contact Us</a>
              <a className={""} href="/legal">Legal Pages</a>
            </nav>
            <a className={"button button-dark header-quote"} href="/contact">Start a project</a>
            <ImportedPageMenu />
          </div>
        </header>
        <main id="main">
          <section className={"page-intro interior-services-hero"}>
            <div className={"\x63ontainer"}>
              <div className={"breadcrumb"}>
                <a href="/">Home</a>
                <span>/</span>
                <span>Our services</span>
              </div>
              <div className={"interior-services-hero-grid"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />WHAT WE DO / 01—09</span>
                  <h1>One team for<br /><em>every next step.</em></h1>
                </div>
                <div className={"interior-services-hero-aside"}>
                  <span className={"interior-hero-number"}>09</span>
                  <p>Whether you are clearing a space, caring for a property or planning an upgrade, start with the service that fits your needs.</p>
                  <a className={"button button-dark"} href="#service-directory">Explore our services</a>
                </div>
              </div>
              <div className={"interior-hero-foot"}>
                <span>VETERAN OWNED &amp; OPERATED</span>
                <span>PROPERTY CARE WITH PURPOSE</span>
                <span>AVAILABLE 24/7</span>
              </div>
            </div>
          </section>
          <ImportedSectionFindTheRightplaceTo />
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

function ImportedSectionFindTheRightplaceTo() {
  return (
    <section className={"service-directory section"} id="service-directory">
      <div className={"\x63ontainer"}>
        <div className={"service-directory-top reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />THE FULL LINEUP</span>
            <h2>Find the right<br /><em>place to start.</em></h2>
          </div>
          <nav aria-label="Service categories" className={"service-category-nav"}>
            <a href="#clear-clean"><span>01</span>CLEAR &amp; CLEAN</a>
            <a href="#refresh-renew"><span>02</span>REFRESH &amp; RENEW</a>
            <a href="#clear-prepare"><span>03</span>CLEAR &amp; PREPARE</a>
          </nav>
        </div>
        <div className={"service-group service-group-clear-clean"} id="clear-clean">
          <div className={"service-group-heading reveal-ready revealed"}>
            <span className={"service-group-index"}>01 / 03</span>
            <div>
              <span>CLEAR &amp; CLEAN</span>
              <h2>A fresh start for your space.</h2>
              <p>From removing what no longer belongs to caring for the places you use every day.</p>
            </div>
          </div>
          <div className={"service-group-grid"}>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f0ed" } as CSSProperties}>
              <a aria-label="Explore Junk Removal" className={"service-image"} href="/services/junk-removal">
                <img src="/site-assets/58a94b431b74715b.webp" alt="Veteran Solutions team member preparing to clear a cluttered space" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>01</span>
                <span className={"image-category"}>Clear &amp; clean</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/junk-removal">
                  <h3>Junk Removal</h3>
                </a>
                <p>From a few bulky items to a full property cleanout, we help remove the things taking up your space. Tell us what needs to go, where it is and how we can access it. We’ll discuss the scope and an estimate before the work starts.</p>
                <a className={"underlined-link"} href="/services/junk-removal">Explore service</a>
              </div>
            </article>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f5f1eb" } as CSSProperties}>
              <a aria-label="Explore Pool Cleaning" className={"service-image"} href="/services/pool-cleaning">
                <img src="/site-assets/268a312bff2a0a69.webp" alt="Veteran Solutions worker skimming a swimming pool" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>03</span>
                <span className={"image-category"}>Clear &amp; clean</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/pool-cleaning">
                  <h3>Pool Cleaning</h3>
                </a>
                <p>We help clear debris and clean the pool surfaces so your outdoor space is easier to enjoy. Whether you need a one-time visit or want to discuss ongoing care, we’ll review the size, condition and maintenance needs of your pool first.</p>
                <a className={"underlined-link"} href="/services/pool-cleaning">Explore service</a>
              </div>
            </article>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f1ef" } as CSSProperties}>
              <a aria-label="Explore Power Washing" className={"service-image"} href="/services/power-washing">
                <img src="/site-assets/4f8f0842a9551b24.webp" alt="Veteran Solutions worker power washing a paved patio" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>04</span>
                <span className={"image-category"}>Clear &amp; clean</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/power-washing">
                  <h3>Power Washing</h3>
                </a>
                <p>Driveways, walkways and exterior surfaces can collect dirt and buildup over time. We review the material and its condition before choosing a suitable cleaning approach, with attention to the property and surrounding areas.</p>
                <a className={"underlined-link"} href="/services/power-washing">Explore service</a>
              </div>
            </article>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ec" } as CSSProperties}>
              <a aria-label="Explore Property Cleaning" className={"service-image"} href="/services/property-cleaning">
                <img src="/site-assets/c82ff7ecf9d14bb2.webp" alt="Veteran Solutions worker cleaning an outdoor property area" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>06</span>
                <span className={"image-category"}>Clear &amp; clean</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/property-cleaning">
                  <h3>Property Cleaning</h3>
                </a>
                <p>From getting a space ready for its next occupant to addressing areas that have been overlooked, we plan cleaning around your property’s needs. Tell us which areas require attention and the result you’re looking for so we can agree a clear scope.</p>
                <a className={"underlined-link"} href="/services/property-cleaning">Explore service</a>
              </div>
            </article>
          </div>
        </div>
        <div className={"service-group service-group-refresh-renew"} id="refresh-renew">
          <div className={"service-group-heading reveal-ready revealed"}>
            <span className={"service-group-index"}>02 / 03</span>
            <div>
              <span>REFRESH &amp; RENEW</span>
              <h2>Make the most of what is there.</h2>
              <p>Practical upgrades and carefully considered finishes for the next chapter of your property.</p>
            </div>
          </div>
          <div className={"service-group-grid"}>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4eeea" } as CSSProperties}>
              <a aria-label="Explore Painting" className={"service-image"} href="/services/painting">
                <img src="/site-assets/0695a946ebede19a.webp" alt="Veteran Solutions painter working on a home exterior" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>02</span>
                <span className={"image-category"}>Refresh &amp; renew</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/painting">
                  <h3>Painting</h3>
                </a>
                <p>A good paint job starts before the first coat. We discuss the surfaces, finish and colors you have in mind, then plan preparation and application around the space. From an individual room to an exterior refresh, the goal is a clean, considered result.</p>
                <a className={"underlined-link"} href="/services/painting">Explore service</a>
              </div>
            </article>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ea" } as CSSProperties}>
              <a aria-label="Explore Renovating" className={"service-image"} href="/services/renovating">
                <img src="/site-assets/bf38b010f24207a7.jpg" alt="Bright finished interior with natural wood flooring" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>05</span>
                <span className={"image-category"}>Refresh &amp; renew</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/renovating">
                  <h3>Renovating</h3>
                </a>
                <p>Property improvements are easier with a clear plan. We talk through the changes you want, assess the existing space and define a practical scope of work. Individual upgrades or a coordinated refresh can bring new life to a room without losing sight of how you use it.</p>
                <a className={"underlined-link"} href="/services/renovating">Explore service</a>
              </div>
            </article>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f1f0ec" } as CSSProperties}>
              <a aria-label={"Explore Tile Replacement & Installation"} className={"service-image"} href="/services/tile-replacement-installation">
                <img src="/site-assets/5401e4713d7507d4.webp" alt="Veteran Solutions worker installing tile" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>07</span>
                <span className={"image-category"}>Refresh &amp; renew</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/tile-replacement-installation">
                  <h3>Tile Replacement &amp; Installation</h3>
                </a>
                <p>Well-chosen tile can transform the feel of a space. We discuss the layout, materials and existing surface, then assess the preparation needed for replacement or installation. The plan is shaped around both the appearance and everyday use of your space.</p>
                <a className={"underlined-link"} href="/services/tile-replacement-installation">Explore service</a>
              </div>
            </article>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4eee7" } as CSSProperties}>
              <a aria-label="Explore Floor Renovation" className={"service-image"} href="/services/floor-renovation">
                <img src="/site-assets/bbf6bdeeff5f9e79.webp" alt="Veteran Solutions worker renovating a wood floor" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>08</span>
                <span className={"image-category"}>Refresh &amp; renew</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/floor-renovation">
                  <h3>Floor Renovation</h3>
                </a>
                <p>Floors set the tone for every room. We review the existing flooring and your preferred finish, then discuss renovation or replacement options. Preparation, material choice and the condition beneath the floor all shape the agreed work.</p>
                <a className={"underlined-link"} href="/services/floor-renovation">Explore service</a>
              </div>
            </article>
          </div>
        </div>
        <div className={"service-group service-group-clear-prepare"} id="clear-prepare">
          <div className={"service-group-heading reveal-ready revealed"}>
            <span className={"service-group-index"}>03 / 03</span>
            <div>
              <span>CLEAR &amp; PREPARE</span>
              <h2>Make way for what comes next.</h2>
              <p>A defined demolition scope can create the right starting point for the work ahead.</p>
            </div>
          </div>
          <div className={"service-group-grid"}>
            <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f1eee8" } as CSSProperties}>
              <a aria-label="Explore Demolition" className={"service-image"} href="/services/demolition">
                <img src="/site-assets/73ade72c9b09495f.jpg" alt="Excavator at a demolition site" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
                <span className={"service-number"}>09</span>
                <span className={"image-category"}>Clear &amp; prepare</span>
              </a>
              <div className={"service-copy"}>
                <a href="/services/demolition">
                  <h3>Demolition</h3>
                </a>
                <p>A new beginning sometimes starts with removal. We assess your demolition request, discuss the items or areas to be removed and plan the work around access, the surrounding property and debris handling. Scope, safety requirements and any permits are confirmed before scheduling.</p>
                <a className={"underlined-link"} href="/services/demolition">Explore service</a>
              </div>
            </article>
          </div>
        </div>
        <div className={"directory-outro reveal-ready revealed"}>
          <div>
            <span>NOT SURE WHICH SERVICE FITS?</span>
            <p>Tell us about the property and what you want to accomplish. We can discuss the right starting point.</p>
          </div>
          <a className={"button button-dark"} href="/contact">Start a conversation</a>
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
