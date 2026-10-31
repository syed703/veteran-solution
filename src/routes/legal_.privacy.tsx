import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues } from '@/lib/cms';
import { publicSiteQuery } from '@/lib/public-site';
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/legal.privacy.css?raw";
import { ImportedPageMenu } from "../components/imported-page-controls";

export const Route = createFileRoute("/legal_/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | Veteran Solutions & Services" }, { name: 'description', content: "Legal / Privacy — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:title', content: "Privacy Policy | Veteran Solutions & Services" }, { property: 'og:description', content: "Legal / Privacy — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:legal/privacy");
  return (
    <>
      <style>{capturedCSS + repairCSS + innerRepairCSS}</style>
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
          <section className={"page-intro legal-intro legal-document-intro"}>
            <div className={"\x63ontainer"}>
              <div className={"breadcrumb"}>
                <a href="/">{cms("f0024", "Home")}</a>
                <span>/</span>
                <a href={cms("f0025", "/legal")}>{cms("f0026", "Legal Pages")}</a>
                <span>/</span>
                <span>{cms("f0027", "Privacy Policy")}</span>
              </div>
              <span className={"eyebrow"}><span className={"label-line"} />{cms("f0028", "YOUR INFORMATION")}</span>
              <h1>{cms("f0029", "Privacy Policy")}</h1>
              <p>{cms("f0030", "Veteran Solutions and Services LLC · Last updated October 6, 2026")}</p>
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
  const cms = useCmsValues("page:legal/privacy");
  return (
    <section className={"legal-document section"}>
      <div className={"\x63ontainer legal-document-grid"}>
        <aside className={"legal-sidebar"}>
          <span>{cms("f0031", "ON THIS PAGE")}</span>
          <nav aria-label={cms("f0032", "Privacy Policy sections")}>
            <a href={cms("f0033", "#information")}>{cms("f0034", "Information you send us")}</a>
            <a href={cms("f0035", "#use")}>{cms("f0036", "How the information is used")}</a>
            <a href={cms("f0037", "#storage")}>{cms("f0038", "Storage and website providers")}</a>
            <a href={cms("f0039", "#retention")}>{cms("f0040", "Records and your questions")}</a>
            <a href={cms("f0041", "#updates")}>{cms("f0042", "Changes to this notice")}</a>
          </nav>
          <a className={"legal-back"} href={cms("f0043", "/legal")}>{cms("f0044", "View all legal pages")}</a>
        </aside>
        <div className={"legal-article"}>
          <p className={"legal-lead"}>{cms("f0045", "We want you to know what happens to the details you share when you contact us through this website.")}</p>
          <section className={"legal-article-section"} id="information">
            <span>{cms("f0046", "01")}</span>
            <div>
              <h2>{cms("f0047", "Information you send us")}</h2>
              <p>{cms("f0048", "When you submit a quote request, we receive your name, phone number, email address, property ZIP code, selected service and the project details you provide. The website also records a submission time and a reference number so we can identify your request.")}</p>
              <p>{cms("f0049", "Please avoid sending payment card numbers, government identification or other sensitive information in the project description. The quote form does not ask for those details.")}</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="use">
            <span>{cms("f0050", "02")}</span>
            <div>
              <h2>{cms("f0051", "How the information is used")}</h2>
              <p>{cms("f0052", "We use your enquiry details to respond to you, understand the work you have in mind, discuss an estimate or schedule and keep a record of the conversation. A quote request does not automatically book a service.")}</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="storage">
            <span>{cms("f0053", "03")}</span>
            <div>
              <h2>{cms("f0054", "Storage and website providers")}</h2>
              <p>{cms("f0055", "Quote requests are stored in the website’s enquiry database. The hosting and database providers process information needed to run the site and deliver your request. Basic technical information, such as a browser or network address, may be processed by the hosting infrastructure for site operation and security.")}</p>
              <p>{cms("f0056", "Information may be made available to people helping us respond to your request or provide the service, and may be disclosed when required by law.")}</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="retention">
            <span>{cms("f0057", "04")}</span>
            <div>
              <h2>{cms("f0058", "Records and your questions")}</h2>
              <p>{cms("f0059", "Enquiry records may be kept as needed to answer requests, manage service discussions and meet recordkeeping obligations. If you have a question about information you submitted or want to request a correction or deletion, contact us using the number below.")}</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="updates">
            <span>{cms("f0060", "05")}</span>
            <div>
              <h2>{cms("f0061", "Changes to this notice")}</h2>
              <p>{cms("f0062", "If the way this website handles enquiries changes, this page may be updated. The date shown above tells you when this notice was last revised.")}</p>
            </div>
          </section>
          <div className={"legal-contact"}>
            <span>{cms("f0063", "NEED TO SPEAK WITH US?")}</span>
            <h2>{cms("f0064", "Let’s talk it through.")}</h2>
            <p>{cms("f0065", "Call Veteran Solutions and Services LLC with any question about this page or your enquiry.")}</p>
            <a href={cms("f0066", "tel:+18573455076")}>{cms("f0067", "(857) 345-5076")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:legal/privacy");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0068", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0069", "Your needs.")}<br /><em>{cms("f0070", "Our mission.")}</em></h2>
            <p>{cms("f0071", "Property care with purpose.")}<br />{cms("f0072", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0073", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0074", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0075", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0076", "Explore")}</h3>
            <a href="/">{cms("f0077", "Home")}</a>
            <a href={cms("f0078", "/about")}>{cms("f0079", "About Us")}</a>
            <a href={cms("f0080", "/services")}>{cms("f0081", "Services")}</a>
            <a href={cms("f0082", "/contact")}>{cms("f0083", "Contact Us")}</a>
            <a href={cms("f0084", "/legal")}>{cms("f0085", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0086", "Our services")}</h3>
            <a href={cms("f0087", "/services/junk-removal")}>{cms("f0088", "Junk Removal")}</a>
            <a href={cms("f0089", "/services/painting")}>{cms("f0090", "Painting")}</a>
            <a href={cms("f0091", "/services/pool-cleaning")}>{cms("f0092", "Pool Cleaning")}</a>
            <a href={cms("f0093", "/services/power-washing")}>{cms("f0094", "Power Washing")}</a>
            <a href={cms("f0095", "/services/renovating")}>{cms("f0096", "Renovating")}</a>
            <a href={cms("f0097", "/services/property-cleaning")}>{cms("f0098", "Property Cleaning")}</a>
            <a href={cms("f0099", "/services/tile-replacement-installation")}>{cms("f0100", "Tile Replacement & Installation")}</a>
            <a href={cms("f0101", "/services/floor-renovation")}>{cms("f0102", "Floor Renovation")}</a>
            <a href={cms("f0103", "/services/demolition")}>{cms("f0104", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0105", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0106", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0107", "/legal/privacy")}>{cms("f0108", "Privacy Policy")}</a>
            <a href={cms("f0109", "/legal/terms")}>{cms("f0110", "Terms of Use")}</a>
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
