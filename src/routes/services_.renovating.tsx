import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues } from '@/lib/cms';
import { publicSiteQuery } from '@/lib/public-site';
import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/services.renovating.css?raw";
import { ImportedPageMenu, ImportedServiceSelect, useImportedQuoteNotice } from "../components/imported-page-controls";

export const Route = createFileRoute("/services_/renovating")({
  head: () => ({ meta: [{ title: "Renovating | Veteran Solutions & Services" }, { name: 'description', content: "Services / Renovating — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:title', content: "Renovating | Veteran Solutions & Services" }, { property: 'og:description', content: "Services / Renovating — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:services/renovating");
  return (
    <>
      <style>{capturedCSS + repairCSS + innerRepairCSS}</style>
      <div className={"site-theme theme-service"} style={{ "--red": "#a6111d" } as CSSProperties}>
        <a className={"skip-link"} href={cms("f0001", "#main")}>{cms("f0002", "Skip to content")}</a>
        <div className={"utility-bar"}>
          <div className={"\x63ontainer utility-inner"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> {cms("f0003", " Proudly veteran owned & operated")}</span>
            <span className={"utility-right"}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0004", " Available 24/7 ")}<i />{" "}<a href={cms("f0005", "tel:+18573455076")}>{cms("f0006", "(857) 345-5076")}</a></span>
          </div>
        </div>
        <header className={"site-header"}>
          <div className={"\x63ontainer header-inner"}>
            <a aria-label={cms("f0007", "Veteran Solutions and Services home")} className={"brand"} href="/">
              <img width="80" height="44" alt={cms("f0008", "Veteran eagle and property emblem")} src={cms("f0009", "/site-assets/f0a3c5858a327278.webp")} />
              <span>
                <b>{cms("f0010", "VETERAN")}</b>
                <small>{cms("f0011", "SOLUTIONS & SERVICES LLC")}</small>
              </span>
            </a>
            <nav className={"desktop-nav"} aria-label={cms("f0012", "Main navigation")}>
              <a className={""} href="/">{cms("f0013", "Home")}</a>
              <a className={""} href={cms("f0014", "/about")}>{cms("f0015", "About Us")}</a>
              <a className={"active"} href={cms("f0016", "/services")}>{cms("f0017", "Services")}</a>
              <a className={""} href={cms("f0018", "/contact")}>{cms("f0019", "Contact Us")}</a>
              <a className={""} href={cms("f0020", "/legal")}>{cms("f0021", "Legal Pages")}</a>
            </nav>
            <a className={"button button-dark header-quote"} href={cms("f0022", "/contact")}>{cms("f0023", "Start a project")}</a>
            <ImportedPageMenu />
          </div>
        </header>
        <main id="main">
          <div className={"service-page"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ea" } as CSSProperties}>
            <section className={"service-detail-hero interior-service-hero"}>
              <div className={"\x63ontainer"}>
                <div className={"breadcrumb"}>
                  <a href="/">{cms("f0024", "Home")}</a>
                  <span>/</span>
                  <a href={cms("f0025", "/services")}>{cms("f0026", "Our services")}</a>
                  <span>/</span>
                  <span>{cms("f0027", "Renovating")}</span>
                </div>
                <div className={"detail-hero-grid"}>
                  <div className={"detail-hero-copy"}>
                    <span className={"eyebrow"}><span className={"label-line"} />{cms("f0028", "05 / REFRESH & RENEW")}</span>
                    <h1>{cms("f0029", "Renovating")}</h1>
                    <p className={"detail-tagline"}>{cms("f0030", "Make your space work for you.")}</p>
                    <p>{cms("f0031", "Turn a space that needs attention into one that feels considered, practical and ready for everyday life.")}</p>
                    <div className={"service-hero-meta"}>
                      <span>{cms("f0032", "VETERAN OWNED & OPERATED")}</span>
                      <span>{cms("f0033", "ONE TEAM / NINE SERVICES")}</span>
                    </div>
                    <a className={"button button-dark"} href={cms("f0034", "#quote")}>{cms("f0035", "Request a quote")}</a>
                  </div>
                  <div className={"detail-hero-image"}>
                    <img alt={cms("f0036", "A light-filled renovated interior with natural wood flooring")} fetchPriority="high" src={cms("f0037", "/site-assets/bf38b010f24207a7.jpg")} style={{ objectPosition: "center center" } as CSSProperties} />
                    <span className={"detail-image-label"}>{cms("f0038", "YOUR PROPERTY. OUR PURPOSE.")}</span>
                  </div>
                </div>
                <div className={"service-hero-foot"}>
                  <span>{cms("f0039", "THE WORK STARTS WITH A CLEAR PLAN.")}</span>
                  <a href={cms("f0040", "#scope")}>{cms("f0041", "Explore the scope")}</a>
                </div>
              </div>
            </section>
            <section className={"detail-overview section"} id="scope">
              <div className={"\x63ontainer detail-overview-grid"}>
                <div className={"detail-overview-title reveal-ready revealed"}>
                  <span className={"eyebrow"}><span className={"label-line"} />{cms("f0042", "THE RIGHT START / 05")}</span>
                  <h2>{cms("f0043", "Make your space work for you.")}</h2>
                  <span className={"detail-overview-watermark"} aria-hidden="true">{cms("f0044", "05")}</span>
                </div>
                <div className={"detail-overview-content reveal-ready revealed"}>
                  <p className={"detail-description"}>{cms("f0045", "Property improvements are easier with a clear plan. We talk through the changes you want, assess the existing space and define a practical scope of work. Individual upgrades or a coordinated refresh can bring new life to a room without losing sight of how you use it.")}</p>
                  <div className={"scope-heading"}>
                    <span>{cms("f0046", "01 / THE SCOPE")}</span>
                    <h3>{cms("f0047", "What we can help with")}</h3>
                  </div>
                  <ul className={"scope-list"}>
                    <li>
                      <span>{cms("f0048", "01")}</span>
                      <p>{cms("f0049", "Room and property improvement projects")}</p>
                    </li>
                    <li>
                      <span>{cms("f0050", "02")}</span>
                      <p>{cms("f0051", "Interior refreshes and repairs")}</p>
                    </li>
                    <li>
                      <span>{cms("f0052", "03")}</span>
                      <p>{cms("f0053", "Coordinated surface and finish updates")}</p>
                    </li>
                    <li>
                      <span>{cms("f0054", "04")}</span>
                      <p>{cms("f0055", "Project scope and scheduling discussions")}</p>
                    </li>
                  </ul>
                  <div className={"scope-note"}>
                    <span>{cms("f0056", "BEFORE WE GET STARTED")}</span>
                    <p>{cms("f0057", "Every renovation is assessed individually. Structural, electrical, plumbing and permit requirements are confirmed before a scope is agreed.")}</p>
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
          <title>Renovating | Veteran Solutions &amp; Services</title>
        </div>
      </div>
    </>
  );
}

function ImportedSectionLetSTakeCareof() {
  const cms = useCmsValues("page:services/renovating");
  const { onSubmit, notice } = useImportedQuoteNotice();
  return (
    <section id="quote" className={"quote-section section"}>
      <div className={"\x63ontainer quote-layout"}>
        <div className={"quote-intro reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />{cms("f0058", "ONE LESS THING ON YOUR LIST")}</span>
          <h2>{cms("f0059", "Let’s take care")}<br />{cms("f0060", "of ")}<em>{cms("f0061", "your next project.")}</em></h2>
          <p>{cms("f0062", "Something to clear, clean or completely reimagine? Tell us what you have in mind.")}</p>
          <div className={"contact-detail"}>
            <span className={"contact-icon"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </span>
            <div>
              <small>{cms("f0063", "Prefer to talk it through?")}</small>
              <a href={cms("f0064", "tel:+18573455076")}>{cms("f0065", "(857) 345-5076")}</a>
            </div>
          </div>
          <div className={"quote-points"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> {cms("f0066", " Veteran owned & operated")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0067", " Available 24/7")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> {cms("f0068", " A clear scope before work begins")}</span>
          </div>
          <p className={"quote-small"}>{cms("f0069", "Your property. Your priorities.")}<br />{cms("f0070", "Our mission is to help with both.")}</p>
        </div>
        <div className={"quote-panel reveal-ready revealed"}>
          <form className={"quote-form"} onSubmit={onSubmit}>
            <div className={"form-heading"}>
              <span className={"eyebrow"}>{cms("f0071", "LET’S GET STARTED")}</span>
              <h3>{cms("f0072", "Tell us what you need.")}</h3>
              <p>{cms("f0073", "A few details help us understand your project.")}</p>
            </div>
            <div className={"form-row"}>
              <label>{cms("f0074", "Full name ")}<span>*</span><input required autoComplete="name" maxLength={120} placeholder={cms("f0075", "Your full name")} defaultValue="" name="name" /></label>
              <label>{cms("f0076", "Phone number ")}<span>*</span><input required autoComplete="tel" maxLength={30} placeholder={cms("f0077", "(555) 000-0000")} type="tel" defaultValue="" name="phone" /></label>
            </div>
            <div className={"form-row"}>
              <label>{cms("f0078", "Email address ")}<span>*</span><input required autoComplete="email" maxLength={180} placeholder={cms("f0079", "you@example.com")} type="email" defaultValue="" name="email" /></label>
              <label>{cms("f0080", "Property ZIP code ")}<span>*</span><input required autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" maxLength={10} placeholder={cms("f0081", "ZIP code")} title={cms("f0082", "Enter a 5-digit US ZIP code, optionally followed by a 4-digit extension.")} defaultValue="" name="zip" /></label>
            </div>
            <label className={"service-label"} id="service-label">{cms("f0083", "Which service do you need? ")}<span>*</span></label>
            <ImportedServiceSelect />
            <label className={"message-label"}>{cms("f0084", "A little about your project ")}<span>*</span><textarea name="message" required minLength={10} maxLength={3000} rows={4} placeholder={cms("f0085", "What needs attention? Include the approximate size, current condition and your preferred timing.")} /></label>
            <div className={"honeypot"} aria-hidden="true">
              <label>{cms("f0086", "Company website")}<input tabIndex={-1} autoComplete="off" defaultValue="" name="company" /></label>
            </div>
            <button className={"button button-dark form-submit"} type="submit">{cms("f0087", "Request my quote")}</button>
            {notice && <p role="status">{cms("f0088", "Online quote requests are not connected yet. Please call (857) 345-5076 to discuss your project.")}</p>}
            <p className={"form-note"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{cms("f0089", "We’ll use these details to contact you about your request. ")}<a href={cms("f0090", "/legal/privacy")}>{cms("f0091", "Privacy Policy")}</a></span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionMoreWaysTomoveForward() {
  const cms = useCmsValues("page:services/renovating");
  return (
    <section className={"related-section section"}>
      <div className={"\x63ontainer"}>
        <div className={"section-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />{cms("f0092", "KEEP EXPLORING")}</span>
            <h2>{cms("f0093", "More ways to")}<br /><em>{cms("f0094", "move forward.")}</em></h2>
          </div>
          <a className={"underlined-link"} href={cms("f0095", "/services")}>{cms("f0096", "View all services")}</a>
        </div>
        <div className={"featured-grid"}>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4eeea" } as CSSProperties}>
            <a aria-label={cms("f0097", "Explore Painting")} className={"service-image"} href={cms("f0098", "/services/painting")}>
              <img alt={cms("f0099", "Veteran Solutions painter working on a home exterior")} loading="lazy" src={cms("f0100", "/site-assets/0695a946ebede19a.webp")} style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>{cms("f0101", "02")}</span>
              <span className={"image-category"}>{cms("f0102", "Refresh & renew")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0103", "/services/painting")}>
                <h3>{cms("f0104", "Painting")}</h3>
              </a>
              <p>{cms("f0105", "Bring a fresh perspective to your property with thoughtfully prepared interior and exterior painting.")}</p>
              <a className={"underlined-link"} href={cms("f0106", "/services/painting")}>{cms("f0107", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f1f0ec" } as CSSProperties}>
            <a aria-label={cms("f0108", "Explore Tile Replacement & Installation")} className={"service-image"} href={cms("f0109", "/services/tile-replacement-installation")}>
              <img alt={cms("f0110", "Veteran Solutions worker installing tile")} loading="lazy" src={cms("f0111", "/site-assets/5401e4713d7507d4.webp")} style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>{cms("f0112", "07")}</span>
              <span className={"image-category"}>{cms("f0113", "Refresh & renew")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0114", "/services/tile-replacement-installation")}>
                <h3>{cms("f0115", "Tile Replacement & Installation")}</h3>
              </a>
              <p>{cms("f0116", "Refresh worn tile or finish a new space with carefully planned replacement and installation.")}</p>
              <a className={"underlined-link"} href={cms("f0117", "/services/tile-replacement-installation")}>{cms("f0118", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4eee7" } as CSSProperties}>
            <a aria-label={cms("f0119", "Explore Floor Renovation")} className={"service-image"} href={cms("f0120", "/services/floor-renovation")}>
              <img alt={cms("f0121", "Veteran Solutions worker renovating a wood floor")} loading="lazy" src={cms("f0122", "/site-assets/bbf6bdeeff5f9e79.webp")} style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>{cms("f0123", "08")}</span>
              <span className={"image-category"}>{cms("f0124", "Refresh & renew")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0125", "/services/floor-renovation")}>
                <h3>{cms("f0126", "Floor Renovation")}</h3>
              </a>
              <p>{cms("f0127", "Restore the feel of your rooms with flooring improvements planned around your home and the way you live.")}</p>
              <a className={"underlined-link"} href={cms("f0128", "/services/floor-renovation")}>{cms("f0129", "Explore service")}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:services/renovating");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0130", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0131", "Your needs.")}<br /><em>{cms("f0132", "Our mission.")}</em></h2>
            <p>{cms("f0133", "Property care with purpose.")}<br />{cms("f0134", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0135", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0136", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0137", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0138", "Explore")}</h3>
            <a href="/">{cms("f0139", "Home")}</a>
            <a href={cms("f0140", "/about")}>{cms("f0141", "About Us")}</a>
            <a href={cms("f0142", "/services")}>{cms("f0143", "Services")}</a>
            <a href={cms("f0144", "/contact")}>{cms("f0145", "Contact Us")}</a>
            <a href={cms("f0146", "/legal")}>{cms("f0147", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0148", "Our services")}</h3>
            <a href={cms("f0149", "/services/junk-removal")}>{cms("f0150", "Junk Removal")}</a>
            <a href={cms("f0151", "/services/painting")}>{cms("f0152", "Painting")}</a>
            <a href={cms("f0153", "/services/pool-cleaning")}>{cms("f0154", "Pool Cleaning")}</a>
            <a href={cms("f0155", "/services/power-washing")}>{cms("f0156", "Power Washing")}</a>
            <a href={cms("f0157", "/services/renovating")}>{cms("f0158", "Renovating")}</a>
            <a href={cms("f0159", "/services/property-cleaning")}>{cms("f0160", "Property Cleaning")}</a>
            <a href={cms("f0161", "/services/tile-replacement-installation")}>{cms("f0162", "Tile Replacement & Installation")}</a>
            <a href={cms("f0163", "/services/floor-renovation")}>{cms("f0164", "Floor Renovation")}</a>
            <a href={cms("f0165", "/services/demolition")}>{cms("f0166", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0167", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0168", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0169", "/legal/privacy")}>{cms("f0170", "Privacy Policy")}</a>
            <a href={cms("f0171", "/legal/terms")}>{cms("f0172", "Terms of Use")}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function CmsIndex() {
  const { data } = useSuspenseQuery(publicSiteQuery);
  return <CmsProvider content={data.content}><Index /></CmsProvider>;
}
