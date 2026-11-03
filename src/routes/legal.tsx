import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues, cmsBackgroundCss } from '@/lib/cms';
import { publicSiteQuery } from '@/lib/public-site';
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/legal.css?raw";
import { ImportedPageMenu } from "../components/imported-page-controls";

export const Route = createFileRoute("/legal")({
  head: () => ({ meta: [{ title: "Legal Pages | Veteran Solutions & Services" }, { name: 'description', content: "Legal — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:title', content: "Legal Pages | Veteran Solutions & Services" }, { property: 'og:description', content: "Legal — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:legal");
  return (
    <>
      <style>{cmsBackgroundCss(capturedCSS, '/site-assets/0a8023b1ca436a12.webp', cms('intro-background', '/site-assets/0a8023b1ca436a12.webp')) + repairCSS + innerRepairCSS}</style>
      <div className={"site-theme theme-legal"}>
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
              <a className={""} href={cms("f0014", "/about")}>{cms("f0015", "About Us")}</a>
              <a className={""} href={cms("f0016", "/services")}>{cms("f0017", "Services")}</a>
              <a className={""} href={cms("f0018", "/contact")}>{cms("f0019", "Contact Us")}</a>
              <a className={"active"} href={cms("f0020", "/legal")}>{cms("f0021", "Legal Pages")}</a>
            </nav>
            <a className={"button button-dark header-quote"} href={cms("f0022", "/contact")}>{cms("f0023", "Start a project")}</a>
            <ImportedPageMenu />
          </div>
        </header>
        <main id="main">
          <section className={"page-intro legal-intro"}>
            <div className={"\x63ontainer"}>
              <div className={"breadcrumb"}>
                <a href="/">{cms("f0024", "Home")}</a>
                <span>/</span>
                <span>{cms("f0025", "Legal Pages")}</span>
              </div>
              <span className={"eyebrow"}><span className={"label-line"} />{cms("f0026", "THE IMPORTANT DETAILS")}</span>
              <h1>{cms("f0027", "Clear information.")}<br /><em>{cms("f0028", "Easy to find.")}</em></h1>
              <p>{cms("f0029", "How this website handles your enquiry and what to know before requesting a service.")}</p>
            </div>
          </section>
          <ImportedSectionPrivacyPolicy />
        </main>
        <ImportedFooterYourNeedsOurMission />
      </div>
    </>
  );
}

function ImportedSectionPrivacyPolicy() {
  const cms = useCmsValues("page:legal");
  return (
    <section className={"legal-directory section"}>
      <div className={"\x63ontainer"}>
        <div className={"legal-directory-heading reveal-ready revealed"}>
          <span>{cms("f0030", "LEGAL PAGES / 01—02")}</span>
          <p>{cms("f0031", "Choose a page below for the details.")}</p>
        </div>
        <div className={"legal-cards"}>
          <a className={"legal-card reveal-ready revealed"} href={cms("f0032", "/legal/privacy")}>
            <span className={"legal-card-icon"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <span className={"legal-card-number"}>{cms("f0033", "01 / YOUR INFORMATION")}</span>
            <h2>{cms("f0034", "Privacy Policy")}</h2>
            <p>{cms("f0035", "What the quote form collects, how enquiries are used and who to contact with a question.")}</p>
            <span className={"underlined-link"}>{cms("f0036", "Read privacy policy")}</span>
          </a>
          <a className={"legal-card reveal-ready revealed"} href={cms("f0037", "/legal/terms")}>
            <span className={"legal-card-icon"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-file-text"} aria-hidden="true">
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </span>
            <span className={"legal-card-number"}>{cms("f0038", "02 / USING THE SITE")}</span>
            <h2>{cms("f0039", "Terms of Use")}</h2>
            <p>{cms("f0040", "How service enquiries, estimates, site content and illustrative images should be understood.")}</p>
            <span className={"underlined-link"}>{cms("f0041", "Read terms of use")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:legal");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0042", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0043", "Your needs.")}<br /><em>{cms("f0044", "Our mission.")}</em></h2>
            <p>{cms("f0045", "Property care with purpose.")}<br />{cms("f0046", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0047", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0048", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0049", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0050", "Explore")}</h3>
            <a href="/">{cms("f0051", "Home")}</a>
            <a href={cms("f0052", "/about")}>{cms("f0053", "About Us")}</a>
            <a href={cms("f0054", "/services")}>{cms("f0055", "Services")}</a>
            <a href={cms("f0056", "/contact")}>{cms("f0057", "Contact Us")}</a>
            <a href={cms("f0058", "/legal")}>{cms("f0059", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0060", "Our services")}</h3>
            <a href={cms("f0061", "/services/junk-removal")}>{cms("f0062", "Junk Removal")}</a>
            <a href={cms("f0063", "/services/painting")}>{cms("f0064", "Painting")}</a>
            <a href={cms("f0065", "/services/pool-cleaning")}>{cms("f0066", "Pool Cleaning")}</a>
            <a href={cms("f0067", "/services/power-washing")}>{cms("f0068", "Power Washing")}</a>
            <a href={cms("f0069", "/services/renovating")}>{cms("f0070", "Renovating")}</a>
            <a href={cms("f0071", "/services/property-cleaning")}>{cms("f0072", "Property Cleaning")}</a>
            <a href={cms("f0073", "/services/tile-replacement-installation")}>{cms("f0074", "Tile Replacement & Installation")}</a>
            <a href={cms("f0075", "/services/floor-renovation")}>{cms("f0076", "Floor Renovation")}</a>
            <a href={cms("f0077", "/services/demolition")}>{cms("f0078", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0079", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0080", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0081", "/legal/privacy")}>{cms("f0082", "Privacy Policy")}</a>
            <a href={cms("f0083", "/legal/terms")}>{cms("f0084", "Terms of Use")}</a>
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
