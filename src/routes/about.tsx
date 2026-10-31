import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues } from '@/lib/cms';
import { publicSiteQuery } from '@/lib/public-site';
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/about.css?raw";
import { ImportedPageMenu } from "../components/imported-page-controls";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us | Veteran Solutions & Services" }, { name: 'description', content: "About — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:title', content: "About Us | Veteran Solutions & Services" }, { property: 'og:description', content: "About — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:about");
  return (
    <>
      <style>{capturedCSS + repairCSS + innerRepairCSS}</style>
      <div className={"site-theme theme-about"}>
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
              <img src={cms("f0008", "/site-assets/f0a3c5858a327278.webp")} width="80" height="44" alt={cms("f0009", "Veteran eagle and property emblem")} />
              <span>
                <b>{cms("f0010", "VETERAN")}</b>
                <small>{cms("f0011", "SOLUTIONS & SERVICES LLC")}</small>
              </span>
            </a>
            <nav className={"desktop-nav"} aria-label={cms("f0012", "Main navigation")}>
              <a className={""} href="/">{cms("f0013", "Home")}</a>
              <a className={"active"} href={cms("f0014", "/about")}>{cms("f0015", "About Us")}</a>
              <a className={""} href={cms("f0016", "/services")}>{cms("f0017", "Services")}</a>
              <a className={""} href={cms("f0018", "/contact")}>{cms("f0019", "Contact Us")}</a>
              <a className={""} href={cms("f0020", "/legal")}>{cms("f0021", "Legal Pages")}</a>
            </nav>
            <a className={"button button-dark header-quote"} href={cms("f0022", "/contact")}>{cms("f0023", "Start a project")}</a>
            <ImportedPageMenu />
          </div>
        </header>
        <main id="main">
          <section className={"page-intro about-intro interior-about-hero"}>
            <div className={"\x63ontainer"}>
              <div className={"breadcrumb"}>
                <a href="/">{cms("f0024", "Home")}</a>
                <span>/</span>
                <span>{cms("f0025", "About Us")}</span>
              </div>
              <div className={"interior-about-grid"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />{cms("f0026", "VETERAN OWNED. PURPOSE LED.")}</span>
                  <h1>{cms("f0027", "Built around")}<br /><em>{cms("f0028", "your needs.")}</em></h1>
                </div>
                <div className={"interior-about-aside"}>
                  <span>{cms("f0029", "OUR APPROACH / 01")}</span>
                  <p>{cms("f0030", "We bring a service mindset to property work, beginning with a conversation about what matters to you.")}</p>
                </div>
              </div>
              <div className={"interior-hero-foot"}>
                <span>{cms("f0031", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
                <span>{cms("f0032", "YOUR NEEDS. OUR MISSION.")}</span>
              </div>
            </div>
          </section>
          <section className={"about-story section"}>
            <div className={"\x63ontainer about-story-grid"}>
              <div className={"about-logo-panel reveal-ready revealed"}>
                <div className={"about-logo-panel-top"}>
                  <span>{cms("f0033", "OUR IDENTITY")}</span>
                  <span>{cms("f0034", "01 / 09")}</span>
                </div>
                <img src={cms("f0035", "/site-assets/8448ccd12888d989.webp")} alt={cms("f0036", "Original Veteran Solutions and Services LLC eagle logo")} width="500" height="500" />
                <span>{cms("f0037", "VETERAN OWNED & OPERATED")}</span>
              </div>
              <div className={"about-story-copy reveal-ready revealed"}>
                <span className={"eyebrow"}><span className={"label-line"} />{cms("f0038", "PROPERTY CARE, WITH PURPOSE")}</span>
                <h2>{cms("f0039", "One team.")}<br /><em>{cms("f0040", "A service-first approach.")}</em></h2>
                <p>{cms("f0041", "Our business is built around a straightforward idea: your property deserves attention, and your needs deserve to be heard.")}</p>
                <p>{cms("f0042", "As a veteran-owned company, we bring a service mindset to work that makes a difference in your everyday surroundings. Clearing a crowded space. Refreshing a tired room. Taking care of the details outdoors.")}</p>
                <p>{cms("f0043", "With nine services under one name, we can start with what matters to you and discuss a practical way forward.")}</p>
                <a className={"button button-dark"} href={cms("f0044", "/services")}>{cms("f0045", "Explore our services")}</a>
              </div>
            </div>
          </section>
          <section className={"about-statement"}>
            <div className={"\x63ontainer reveal-ready revealed"}>
              <span>{cms("f0046", "THE IDEA BEHIND OUR WORK")}</span>
              <p>{cms("f0047", "Your property. ")}<em>{cms("f0048", "Your priorities.")}</em><br />{cms("f0049", "A clear way forward.")}</p>
              <a className={"button button-dark"} href={cms("f0050", "/contact")}>{cms("f0051", "Tell us what you need")}</a>
            </div>
          </section>
          <ImportedSectionPurposeIneveryDetail />
          <section className={"process-section section"}>
            <div className={"\x63ontainer"}>
              <div className={"section-heading reveal-ready revealed"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />{cms("f0052", "A SIMPLE WAY FORWARD")}</span>
                  <h2>{cms("f0053", "Good service starts")}<br />{cms("f0054", "with ")}<em>{cms("f0055", "a conversation.")}</em></h2>
                </div>
                <p>{cms("f0056", "From your first request to the agreed work, we keep the next step clear.")}</p>
              </div>
              <div className={"process-grid"}>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0057", "01")}</span>
                  <h3>{cms("f0058", "Tell us what you need")}</h3>
                  <p>{cms("f0059", "Choose a service and share a few details about your property and project.")}</p>
                </div>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0060", "02")}</span>
                  <h3>{cms("f0061", "Make a clear plan")}</h3>
                  <p>{cms("f0062", "We review the scope, discuss the estimate and agree a suitable schedule.")}</p>
                </div>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0063", "03")}</span>
                  <h3>{cms("f0064", "Put your plans in motion")}</h3>
                  <p>{cms("f0065", "With the details agreed, we get to work on the service your property needs.")}</p>
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
  const cms = useCmsValues("page:about");
  return (
    <section className={"values-section section"}>
      <div className={"\x63ontainer"}>
        <div className={"section-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />{cms("f0066", "WHAT GUIDES OUR WORK")}</span>
            <h2>{cms("f0067", "Purpose in")}<br /><em>{cms("f0068", "every detail.")}</em></h2>
          </div>
          <p>{cms("f0069", "The same approach carries through every service we discuss.")}</p>
        </div>
        <div className={"values-grid"}>
          <article className={"reveal-ready revealed"}>
            <div className={"value-top"}>
              <span>{cms("f0070", "01")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>{cms("f0071", "Service with purpose")}</h3>
            <p>{cms("f0072", "We start by listening to your needs and understanding the result you are looking for.")}</p>
          </article>
          <article className={"reveal-ready revealed"}>
            <div className={"value-top"}>
              <span>{cms("f0073", "02")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>{cms("f0074", "Care for your space")}</h3>
            <p>{cms("f0075", "Your property matters. We discuss access, preparation and the scope of work before getting started.")}</p>
          </article>
          <article className={"reveal-ready revealed"}>
            <div className={"value-top"}>
              <span>{cms("f0076", "03")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </div>
            <h3>{cms("f0077", "A clear conversation")}</h3>
            <p>{cms("f0078", "Questions, plans and the next step should be easy to understand. We keep the discussion practical.")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:about");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0079", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0080", "Your needs.")}<br /><em>{cms("f0081", "Our mission.")}</em></h2>
            <p>{cms("f0082", "Property care with purpose.")}<br />{cms("f0083", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0084", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0085", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0086", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0087", "Explore")}</h3>
            <a href="/">{cms("f0088", "Home")}</a>
            <a href={cms("f0089", "/about")}>{cms("f0090", "About Us")}</a>
            <a href={cms("f0091", "/services")}>{cms("f0092", "Services")}</a>
            <a href={cms("f0093", "/contact")}>{cms("f0094", "Contact Us")}</a>
            <a href={cms("f0095", "/legal")}>{cms("f0096", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0097", "Our services")}</h3>
            <a href={cms("f0098", "/services/junk-removal")}>{cms("f0099", "Junk Removal")}</a>
            <a href={cms("f0100", "/services/painting")}>{cms("f0101", "Painting")}</a>
            <a href={cms("f0102", "/services/pool-cleaning")}>{cms("f0103", "Pool Cleaning")}</a>
            <a href={cms("f0104", "/services/power-washing")}>{cms("f0105", "Power Washing")}</a>
            <a href={cms("f0106", "/services/renovating")}>{cms("f0107", "Renovating")}</a>
            <a href={cms("f0108", "/services/property-cleaning")}>{cms("f0109", "Property Cleaning")}</a>
            <a href={cms("f0110", "/services/tile-replacement-installation")}>{cms("f0111", "Tile Replacement & Installation")}</a>
            <a href={cms("f0112", "/services/floor-renovation")}>{cms("f0113", "Floor Renovation")}</a>
            <a href={cms("f0114", "/services/demolition")}>{cms("f0115", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0116", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0117", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0118", "/legal/privacy")}>{cms("f0119", "Privacy Policy")}</a>
            <a href={cms("f0120", "/legal/terms")}>{cms("f0121", "Terms of Use")}</a>
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
