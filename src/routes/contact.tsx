import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues, cmsBackgroundCss } from '@/lib/cms';
import { publicSiteQuery } from '@/lib/public-site';
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/contact.css?raw";
import { ImportedFaq, ImportedPageMenu, ImportedServiceSelect, useImportedQuoteNotice } from "../components/imported-page-controls";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us | Veteran Solutions & Services" }, { name: 'description', content: "Contact — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:title', content: "Contact Us | Veteran Solutions & Services" }, { property: 'og:description', content: "Contact — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:contact");
  return (
    <>
      <style>{cmsBackgroundCss(capturedCSS, '/site-assets/0a8023b1ca436a12.webp', cms('intro-background', '/site-assets/0a8023b1ca436a12.webp')) + repairCSS + innerRepairCSS}</style>
      <div className={"site-theme theme-contact"}>
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
              <a className={""} href={cms("f0016", "/services")}>{cms("f0017", "Services")}</a>
              <a className={"active"} href={cms("f0018", "/contact")}>{cms("f0019", "Contact Us")}</a>
              <a className={""} href={cms("f0020", "/legal")}>{cms("f0021", "Legal Pages")}</a>
            </nav>
            <a className={"button button-dark header-quote"} href={cms("f0022", "/contact")}>{cms("f0023", "Start a project")}</a>
            <ImportedPageMenu />
          </div>
        </header>
        <main id="main">
          <section className={"contact-page-intro interior-contact-hero"}>
            <div className={"\x63ontainer"}>
              <div className={"breadcrumb"}>
                <a href="/">{cms("f0024", "Home")}</a>
                <span>/</span>
                <span>{cms("f0025", "Contact Us")}</span>
              </div>
              <div className={"contact-hero-grid"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />{cms("f0026", "LET'S GET STARTED")}</span>
                  <h1>{cms("f0027", "What does your")}<br /><em>{cms("f0028", "property need next?")}</em></h1>
                  <p>{cms("f0029", "Share the project you have in mind. We will review the details and talk through a practical next step.")}</p>
                </div>
                <div className={"contact-hero-card"}>
                  <span>{cms("f0030", "CALL THE TEAM")}</span>
                  <a href={cms("f0031", "tel:+18573455076")}>{cms("f0032", "(857) 345-5076")}</a>
                  <p>{cms("f0033", "Prefer a conversation? We are available 24/7 to hear about your request.")}</p>
                  <span className={"contact-hero-card-foot"}>{cms("f0034", "VETERAN OWNED & OPERATED")}</span>
                </div>
              </div>
            </div>
          </section>
          <ImportedSectionTellUsAboutyourProject />
          <ImportedSectionAFewThingsyouMight />
        </main>
        <ImportedFooterYourNeedsOurMission />
      </div>
    </>
  );
}

function ImportedSectionTellUsAboutyourProject() {
  const cms = useCmsValues("page:contact");
  const { onSubmit, notice } = useImportedQuoteNotice();
  return (
    <section id="quote" className={"quote-section section contact-quote-section"}>
      <div className={"\x63ontainer quote-layout"}>
        <div className={"quote-intro reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />{cms("f0035", "A CLEAR PLACE TO START")}</span>
          <h2>{cms("f0036", "Tell us about")}<br /><em>{cms("f0037", "your project.")}</em></h2>
          <p>{cms("f0038", "Choose the service you need and tell us a little about your property. We’ll review the details and discuss the next step with you.")}</p>
          <div className={"contact-detail"}>
            <span className={"contact-icon"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </span>
            <div>
              <small>{cms("f0039", "Prefer to talk it through?")}</small>
              <a href={cms("f0040", "tel:+18573455076")}>{cms("f0041", "(857) 345-5076")}</a>
            </div>
          </div>
          <div className={"quote-points"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> {cms("f0042", " Veteran owned & operated")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0043", " Available 24/7")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> {cms("f0044", " A clear scope before work begins")}</span>
          </div>
          <p className={"quote-small"}>{cms("f0045", "Your property. Your priorities.")}<br />{cms("f0046", "Our mission is to help with both.")}</p>
        </div>
        <div className={"quote-panel reveal-ready revealed"}>
          <form className={"quote-form"} onSubmit={onSubmit}>
            <div className={"form-heading"}>
              <span className={"eyebrow"}>{cms("f0047", "LET’S GET STARTED")}</span>
              <h3>{cms("f0048", "Tell us what you need.")}</h3>
              <p>{cms("f0049", "A few details help us understand your project.")}</p>
            </div>
            <div className={"form-row"}>
              <label>{cms("f0050", "Full name ")}<span>*</span><input required autoComplete="name" maxLength={120} placeholder={cms("f0051", "Your full name")} defaultValue="" name="name" /></label>
              <label>{cms("f0052", "Phone number ")}<span>*</span><input required autoComplete="tel" maxLength={30} placeholder={cms("f0053", "(555) 000-0000")} type="tel" defaultValue="" name="phone" /></label>
            </div>
            <div className={"form-row"}>
              <label>{cms("f0054", "Email address ")}<span>*</span><input required autoComplete="email" maxLength={180} placeholder={cms("f0055", "you@example.com")} type="email" defaultValue="" name="email" /></label>
              <label>{cms("f0056", "Property ZIP code ")}<span>*</span><input required autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" maxLength={10} placeholder={cms("f0057", "ZIP code")} title={cms("f0058", "Enter a 5-digit US ZIP code, optionally followed by a 4-digit extension.")} defaultValue="" name="zip" /></label>
            </div>
            <label className={"service-label"} id="service-label">{cms("f0059", "Which service do you need? ")}<span>*</span></label>
            <ImportedServiceSelect />
            <label className={"message-label"}>{cms("f0060", "A little about your project ")}<span>*</span><textarea name="message" required minLength={10} maxLength={3000} rows={4} placeholder={cms("f0061", "What needs attention? Include the approximate size, current condition and your preferred timing.")} /></label>
            <div className={"honeypot"} aria-hidden="true">
              <label>{cms("f0062", "Company website")}<input tabIndex={-1} autoComplete="off" defaultValue="" name="company" /></label>
            </div>
            <button className={"button button-dark form-submit"} type="submit">{cms("f0063", "Request my quote")}</button>
            {notice && <p role="status">{cms("f0064", "Online quote requests are not connected yet. Please call (857) 345-5076 to discuss your project.")}</p>}
            <p className={"form-note"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{cms("f0065", "We’ll use these details to contact you about your request. ")}<a href={cms("f0066", "/legal/privacy")}>{cms("f0067", "Privacy Policy")}</a></span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionAFewThingsyouMight() {
  const cms = useCmsValues("page:contact");
  return (
    <section className={"faq-section section"}>
      <div className={"\x63ontainer faq-layout"}>
        <div className={"reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />{cms("f0068", "BEFORE WE BEGIN")}</span>
          <h2>{cms("f0069", "A few things")}<br /><em>{cms("f0070", "you might ask.")}</em></h2>
          <p>{cms("f0071", "Still have something on your mind?")}<br /><a href={cms("f0072", "tel:+18573455076")}>{cms("f0073", "Give us a call.")}</a></p>
        </div>
        <ImportedFaq />
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:contact");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0074", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0075", "Your needs.")}<br /><em>{cms("f0076", "Our mission.")}</em></h2>
            <p>{cms("f0077", "Property care with purpose.")}<br />{cms("f0078", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0079", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0080", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0081", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0082", "Explore")}</h3>
            <a href="/">{cms("f0083", "Home")}</a>
            <a href={cms("f0084", "/about")}>{cms("f0085", "About Us")}</a>
            <a href={cms("f0086", "/services")}>{cms("f0087", "Services")}</a>
            <a href={cms("f0088", "/contact")}>{cms("f0089", "Contact Us")}</a>
            <a href={cms("f0090", "/legal")}>{cms("f0091", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0092", "Our services")}</h3>
            <a href={cms("f0093", "/services/junk-removal")}>{cms("f0094", "Junk Removal")}</a>
            <a href={cms("f0095", "/services/painting")}>{cms("f0096", "Painting")}</a>
            <a href={cms("f0097", "/services/pool-cleaning")}>{cms("f0098", "Pool Cleaning")}</a>
            <a href={cms("f0099", "/services/power-washing")}>{cms("f0100", "Power Washing")}</a>
            <a href={cms("f0101", "/services/renovating")}>{cms("f0102", "Renovating")}</a>
            <a href={cms("f0103", "/services/property-cleaning")}>{cms("f0104", "Property Cleaning")}</a>
            <a href={cms("f0105", "/services/tile-replacement-installation")}>{cms("f0106", "Tile Replacement & Installation")}</a>
            <a href={cms("f0107", "/services/floor-renovation")}>{cms("f0108", "Floor Renovation")}</a>
            <a href={cms("f0109", "/services/demolition")}>{cms("f0110", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0111", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0112", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0113", "/legal/privacy")}>{cms("f0114", "Privacy Policy")}</a>
            <a href={cms("f0115", "/legal/terms")}>{cms("f0116", "Terms of Use")}</a>
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
