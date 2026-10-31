import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues } from '@/lib/cms';
import { publicSiteQuery } from '@/lib/public-site';
import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/services.junk-removal.css?raw";
import { ImportedPageMenu, ImportedServiceSelect, useImportedQuoteNotice } from "../components/imported-page-controls";

export const Route = createFileRoute("/services_/junk-removal")({
  head: () => ({ meta: [{ title: "Junk Removal | Veteran Solutions & Services" }, { name: 'description', content: "Services / Junk Removal — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:title', content: "Junk Removal | Veteran Solutions & Services" }, { property: 'og:description', content: "Services / Junk Removal — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:services/junk-removal");
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
          <div className={"service-page"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f0ed" } as CSSProperties}>
            <section className={"service-detail-hero interior-service-hero"}>
              <div className={"\x63ontainer"}>
                <div className={"breadcrumb"}>
                  <a href="/">{cms("f0024", "Home")}</a>
                  <span>/</span>
                  <a href={cms("f0025", "/services")}>{cms("f0026", "Our services")}</a>
                  <span>/</span>
                  <span>{cms("f0027", "Junk Removal")}</span>
                </div>
                <div className={"detail-hero-grid"}>
                  <div className={"detail-hero-copy"}>
                    <span className={"eyebrow"}><span className={"label-line"} />{cms("f0028", "01 / CLEAR & CLEAN")}</span>
                    <h1>{cms("f0029", "Junk Removal")}</h1>
                    <p className={"detail-tagline"}>{cms("f0030", "Less clutter. More possibility.")}</p>
                    <p>{cms("f0031", "Make room for what comes next. Furniture, unwanted items and property cleanouts, handled with care.")}</p>
                    <div className={"service-hero-meta"}>
                      <span>{cms("f0032", "VETERAN OWNED & OPERATED")}</span>
                      <span>{cms("f0033", "ONE TEAM / NINE SERVICES")}</span>
                    </div>
                    <a className={"button button-dark"} href={cms("f0034", "#quote")}>{cms("f0035", "Request a quote")}</a>
                  </div>
                  <div className={"detail-hero-image"}>
                    <img alt={cms("f0036", "Two workers lifting a sofa in a bright living room")} fetchPriority="high" src={cms("f0037", "/site-assets/64b8ea6e19a79d95.webp")} style={{ objectPosition: "center center" } as CSSProperties} />
                    <img className={"detail-company-thumb"} alt={cms("f0038", "Veteran Solutions team member preparing to clear a cluttered space")} loading="lazy" src={cms("f0039", "/site-assets/58a94b431b74715b.webp")} />
                    <span className={"detail-image-label"}>{cms("f0040", "YOUR PROPERTY. OUR PURPOSE.")}</span>
                  </div>
                </div>
                <div className={"service-hero-foot"}>
                  <span>{cms("f0041", "THE WORK STARTS WITH A CLEAR PLAN.")}</span>
                  <a href={cms("f0042", "#scope")}>{cms("f0043", "Explore the scope")}</a>
                </div>
              </div>
            </section>
            <section className={"detail-overview section"} id="scope">
              <div className={"\x63ontainer detail-overview-grid"}>
                <div className={"detail-overview-title reveal-ready revealed"}>
                  <span className={"eyebrow"}><span className={"label-line"} />{cms("f0044", "THE RIGHT START / 01")}</span>
                  <h2>{cms("f0045", "Less clutter. More possibility.")}</h2>
                  <span className={"detail-overview-watermark"} aria-hidden="true">{cms("f0046", "01")}</span>
                </div>
                <div className={"detail-overview-content reveal-ready revealed"}>
                  <p className={"detail-description"}>{cms("f0047", "From a few bulky items to a full property cleanout, we help remove the things taking up your space. Tell us what needs to go, where it is and how we can access it. We’ll discuss the scope and an estimate before the work starts.")}</p>
                  <div className={"scope-heading"}>
                    <span>{cms("f0048", "01 / THE SCOPE")}</span>
                    <h3>{cms("f0049", "What we can help with")}</h3>
                  </div>
                  <ul className={"scope-list"}>
                    <li>
                      <span>{cms("f0050", "01")}</span>
                      <p>{cms("f0051", "Household clutter and unwanted furniture")}</p>
                    </li>
                    <li>
                      <span>{cms("f0052", "02")}</span>
                      <p>{cms("f0053", "Garage, basement and property cleanouts")}</p>
                    </li>
                    <li>
                      <span>{cms("f0054", "03")}</span>
                      <p>{cms("f0055", "Removal planning for bulky items")}</p>
                    </li>
                    <li>
                      <span>{cms("f0056", "04")}</span>
                      <p>{cms("f0057", "A cleared space, ready for its next chapter")}</p>
                    </li>
                  </ul>
                  <div className={"scope-note"}>
                    <span>{cms("f0058", "BEFORE WE GET STARTED")}</span>
                    <p>{cms("f0059", "Let us know about heavy items, stairs or restricted access. Materials and disposal requirements are reviewed before scheduling.")}</p>
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
  const cms = useCmsValues("page:services/junk-removal");
  const { onSubmit, notice } = useImportedQuoteNotice();
  return (
    <section id="quote" className={"quote-section section"}>
      <div className={"\x63ontainer quote-layout"}>
        <div className={"quote-intro reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />{cms("f0060", "ONE LESS THING ON YOUR LIST")}</span>
          <h2>{cms("f0061", "Let’s take care")}<br />{cms("f0062", "of ")}<em>{cms("f0063", "your next project.")}</em></h2>
          <p>{cms("f0064", "Something to clear, clean or completely reimagine? Tell us what you have in mind.")}</p>
          <div className={"contact-detail"}>
            <span className={"contact-icon"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </span>
            <div>
              <small>{cms("f0065", "Prefer to talk it through?")}</small>
              <a href={cms("f0066", "tel:+18573455076")}>{cms("f0067", "(857) 345-5076")}</a>
            </div>
          </div>
          <div className={"quote-points"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> {cms("f0068", " Veteran owned & operated")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0069", " Available 24/7")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> {cms("f0070", " A clear scope before work begins")}</span>
          </div>
          <p className={"quote-small"}>{cms("f0071", "Your property. Your priorities.")}<br />{cms("f0072", "Our mission is to help with both.")}</p>
        </div>
        <div className={"quote-panel reveal-ready revealed"}>
          <form className={"quote-form"} onSubmit={onSubmit}>
            <div className={"form-heading"}>
              <span className={"eyebrow"}>{cms("f0073", "LET’S GET STARTED")}</span>
              <h3>{cms("f0074", "Tell us what you need.")}</h3>
              <p>{cms("f0075", "A few details help us understand your project.")}</p>
            </div>
            <div className={"form-row"}>
              <label>{cms("f0076", "Full name ")}<span>*</span><input required autoComplete="name" maxLength={120} placeholder={cms("f0077", "Your full name")} defaultValue="" name="name" /></label>
              <label>{cms("f0078", "Phone number ")}<span>*</span><input required autoComplete="tel" maxLength={30} placeholder={cms("f0079", "(555) 000-0000")} type="tel" defaultValue="" name="phone" /></label>
            </div>
            <div className={"form-row"}>
              <label>{cms("f0080", "Email address ")}<span>*</span><input required autoComplete="email" maxLength={180} placeholder={cms("f0081", "you@example.com")} type="email" defaultValue="" name="email" /></label>
              <label>{cms("f0082", "Property ZIP code ")}<span>*</span><input required autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" maxLength={10} placeholder={cms("f0083", "ZIP code")} title={cms("f0084", "Enter a 5-digit US ZIP code, optionally followed by a 4-digit extension.")} defaultValue="" name="zip" /></label>
            </div>
            <label className={"service-label"} id="service-label">{cms("f0085", "Which service do you need? ")}<span>*</span></label>
            <ImportedServiceSelect />
            <label className={"message-label"}>{cms("f0086", "A little about your project ")}<span>*</span><textarea name="message" required minLength={10} maxLength={3000} rows={4} placeholder={cms("f0087", "What needs attention? Include the approximate size, current condition and your preferred timing.")} /></label>
            <div className={"honeypot"} aria-hidden="true">
              <label>{cms("f0088", "Company website")}<input tabIndex={-1} autoComplete="off" defaultValue="" name="company" /></label>
            </div>
            <button className={"button button-dark form-submit"} type="submit">{cms("f0089", "Request my quote")}</button>
            {notice && <p role="status">{cms("f0090", "Online quote requests are not connected yet. Please call (857) 345-5076 to discuss your project.")}</p>}
            <p className={"form-note"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{cms("f0091", "We’ll use these details to contact you about your request. ")}<a href={cms("f0092", "/legal/privacy")}>{cms("f0093", "Privacy Policy")}</a></span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionMoreWaysTomoveForward() {
  const cms = useCmsValues("page:services/junk-removal");
  return (
    <section className={"related-section section"}>
      <div className={"\x63ontainer"}>
        <div className={"section-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />{cms("f0094", "KEEP EXPLORING")}</span>
            <h2>{cms("f0095", "More ways to")}<br /><em>{cms("f0096", "move forward.")}</em></h2>
          </div>
          <a className={"underlined-link"} href={cms("f0097", "/services")}>{cms("f0098", "View all services")}</a>
        </div>
        <div className={"featured-grid"}>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f5f1eb" } as CSSProperties}>
            <a aria-label={cms("f0099", "Explore Pool Cleaning")} className={"service-image"} href={cms("f0100", "/services/pool-cleaning")}>
              <img alt={cms("f0101", "Veteran Solutions worker skimming a swimming pool")} loading="lazy" src={cms("f0102", "/site-assets/268a312bff2a0a69.webp")} style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>{cms("f0103", "03")}</span>
              <span className={"image-category"}>{cms("f0104", "Clear & clean")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0105", "/services/pool-cleaning")}>
                <h3>{cms("f0106", "Pool Cleaning")}</h3>
              </a>
              <p>{cms("f0107", "Keep your pool inviting with attentive cleaning that takes everyday maintenance off your list.")}</p>
              <a className={"underlined-link"} href={cms("f0108", "/services/pool-cleaning")}>{cms("f0109", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f1ef" } as CSSProperties}>
            <a aria-label={cms("f0110", "Explore Power Washing")} className={"service-image"} href={cms("f0111", "/services/power-washing")}>
              <img alt={cms("f0112", "Veteran Solutions worker power washing a paved patio")} loading="lazy" src={cms("f0113", "/site-assets/4f8f0842a9551b24.webp")} style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>{cms("f0114", "04")}</span>
              <span className={"image-category"}>{cms("f0115", "Clear & clean")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0116", "/services/power-washing")}>
                <h3>{cms("f0117", "Power Washing")}</h3>
              </a>
              <p>{cms("f0118", "Lift built-up dirt from suitable exterior surfaces and give your property a cleaner first impression.")}</p>
              <a className={"underlined-link"} href={cms("f0119", "/services/power-washing")}>{cms("f0120", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ec" } as CSSProperties}>
            <a aria-label={cms("f0121", "Explore Property Cleaning")} className={"service-image"} href={cms("f0122", "/services/property-cleaning")}>
              <img alt={cms("f0123", "Veteran Solutions worker cleaning an outdoor property area")} loading="lazy" src={cms("f0124", "/site-assets/c82ff7ecf9d14bb2.webp")} style={{ objectPosition: "center center" } as CSSProperties} />
              <span className={"service-number"}>{cms("f0125", "06")}</span>
              <span className={"image-category"}>{cms("f0126", "Clear & clean")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0127", "/services/property-cleaning")}>
                <h3>{cms("f0128", "Property Cleaning")}</h3>
              </a>
              <p>{cms("f0129", "Give your property the attention it deserves, with cleaning tailored to the areas that need it most.")}</p>
              <a className={"underlined-link"} href={cms("f0130", "/services/property-cleaning")}>{cms("f0131", "Explore service")}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:services/junk-removal");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0132", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0133", "Your needs.")}<br /><em>{cms("f0134", "Our mission.")}</em></h2>
            <p>{cms("f0135", "Property care with purpose.")}<br />{cms("f0136", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0137", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0138", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0139", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0140", "Explore")}</h3>
            <a href="/">{cms("f0141", "Home")}</a>
            <a href={cms("f0142", "/about")}>{cms("f0143", "About Us")}</a>
            <a href={cms("f0144", "/services")}>{cms("f0145", "Services")}</a>
            <a href={cms("f0146", "/contact")}>{cms("f0147", "Contact Us")}</a>
            <a href={cms("f0148", "/legal")}>{cms("f0149", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0150", "Our services")}</h3>
            <a href={cms("f0151", "/services/junk-removal")}>{cms("f0152", "Junk Removal")}</a>
            <a href={cms("f0153", "/services/painting")}>{cms("f0154", "Painting")}</a>
            <a href={cms("f0155", "/services/pool-cleaning")}>{cms("f0156", "Pool Cleaning")}</a>
            <a href={cms("f0157", "/services/power-washing")}>{cms("f0158", "Power Washing")}</a>
            <a href={cms("f0159", "/services/renovating")}>{cms("f0160", "Renovating")}</a>
            <a href={cms("f0161", "/services/property-cleaning")}>{cms("f0162", "Property Cleaning")}</a>
            <a href={cms("f0163", "/services/tile-replacement-installation")}>{cms("f0164", "Tile Replacement & Installation")}</a>
            <a href={cms("f0165", "/services/floor-renovation")}>{cms("f0166", "Floor Renovation")}</a>
            <a href={cms("f0167", "/services/demolition")}>{cms("f0168", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0169", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0170", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0171", "/legal/privacy")}>{cms("f0172", "Privacy Policy")}</a>
            <a href={cms("f0173", "/legal/terms")}>{cms("f0174", "Terms of Use")}</a>
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
