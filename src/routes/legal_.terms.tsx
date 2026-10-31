import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues } from '@/lib/cms';
import { publicSiteQuery } from '@/lib/public-site';
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/legal.terms.css?raw";
import { ImportedPageMenu } from "../components/imported-page-controls";

export const Route = createFileRoute("/legal_/terms")({
  head: () => ({ meta: [{ title: "Terms of Use | Veteran Solutions & Services" }, { name: 'description', content: "Legal / Terms — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:title', content: "Terms of Use | Veteran Solutions & Services" }, { property: 'og:description', content: "Legal / Terms — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:legal/terms");
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
                <span>{cms("f0027", "Terms of Use")}</span>
              </div>
              <span className={"eyebrow"}><span className={"label-line"} />{cms("f0028", "USING THE WEBSITE")}</span>
              <h1>{cms("f0029", "Terms of Use")}</h1>
              <p>{cms("f0030", "Veteran Solutions and Services LLC · Last updated October 6, 2026")}</p>
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
  const cms = useCmsValues("page:legal/terms");
  return (
    <section className={"legal-document section"}>
      <div className={"\x63ontainer legal-document-grid"}>
        <aside className={"legal-sidebar"}>
          <span>{cms("f0031", "ON THIS PAGE")}</span>
          <nav aria-label={cms("f0032", "Terms of Use sections")}>
            <a href={cms("f0033", "#website")}>{cms("f0034", "About this website")}</a>
            <a href={cms("f0035", "#quotes")}>{cms("f0036", "Requests, estimates and work")}</a>
            <a href={cms("f0037", "#images")}>{cms("f0038", "Photography and examples")}</a>
            <a href={cms("f0039", "#use")}>{cms("f0040", "Using the site")}</a>
            <a href={cms("f0041", "#updates")}>{cms("f0042", "Changes and contact")}</a>
          </nav>
          <a className={"legal-back"} href={cms("f0043", "/legal")}>{cms("f0044", "View all legal pages")}</a>
        </aside>
        <div className={"legal-article"}>
          <p className={"legal-lead"}>{cms("f0045", "These terms explain how to use this website and what happens when you request a quote.")}</p>
          <section className={"legal-article-section"} id="website">
            <span>{cms("f0046", "01")}</span>
            <div>
              <h2>{cms("f0047", "About this website")}</h2>
              <p>{cms("f0048", "This website introduces Veteran Solutions and Services LLC and its property services. The descriptions are general information to help you decide what to ask about; they do not promise that a particular service or result is available for every property.")}</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="quotes">
            <span>{cms("f0049", "02")}</span>
            <div>
              <h2>{cms("f0050", "Requests, estimates and work")}</h2>
              <p>{cms("f0051", "Sending a quote request is an invitation to discuss your project. It does not reserve a date, create a service agreement or establish a final price. Scope, materials, site conditions, access, scheduling and any required approvals are reviewed before work is agreed.")}</p>
              <p>{cms("f0052", "Any estimate or service arrangement is governed by the details agreed directly with you for that project.")}</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="images">
            <span>{cms("f0053", "03")}</span>
            <div>
              <h2>{cms("f0054", "Photography and examples")}</h2>
              <p>{cms("f0055", "The website includes stock imagery and illustrative before-and-after concepts to help explain services and possibilities. Those concepts are not photographs of completed client projects and do not guarantee a specific result.")}</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="use">
            <span>{cms("f0056", "04")}</span>
            <div>
              <h2>{cms("f0057", "Using the site")}</h2>
              <p>{cms("f0058", "Please use the website and quote form for genuine service enquiries. Do not try to disrupt the site, submit misleading requests or access information that is not intended for you.")}</p>
            </div>
          </section>
          <section className={"legal-article-section"} id="updates">
            <span>{cms("f0059", "05")}</span>
            <div>
              <h2>{cms("f0060", "Changes and contact")}</h2>
              <p>{cms("f0061", "Site content and these terms may be updated. For a question about a service, quote or this website, call us using the number below.")}</p>
            </div>
          </section>
          <div className={"legal-contact"}>
            <span>{cms("f0062", "NEED TO SPEAK WITH US?")}</span>
            <h2>{cms("f0063", "Let’s talk it through.")}</h2>
            <p>{cms("f0064", "Call Veteran Solutions and Services LLC with any question about this page or your enquiry.")}</p>
            <a href={cms("f0065", "tel:+18573455076")}>{cms("f0066", "(857) 345-5076")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:legal/terms");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0067", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0068", "Your needs.")}<br /><em>{cms("f0069", "Our mission.")}</em></h2>
            <p>{cms("f0070", "Property care with purpose.")}<br />{cms("f0071", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0072", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0073", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0074", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0075", "Explore")}</h3>
            <a href="/">{cms("f0076", "Home")}</a>
            <a href={cms("f0077", "/about")}>{cms("f0078", "About Us")}</a>
            <a href={cms("f0079", "/services")}>{cms("f0080", "Services")}</a>
            <a href={cms("f0081", "/contact")}>{cms("f0082", "Contact Us")}</a>
            <a href={cms("f0083", "/legal")}>{cms("f0084", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0085", "Our services")}</h3>
            <a href={cms("f0086", "/services/junk-removal")}>{cms("f0087", "Junk Removal")}</a>
            <a href={cms("f0088", "/services/painting")}>{cms("f0089", "Painting")}</a>
            <a href={cms("f0090", "/services/pool-cleaning")}>{cms("f0091", "Pool Cleaning")}</a>
            <a href={cms("f0092", "/services/power-washing")}>{cms("f0093", "Power Washing")}</a>
            <a href={cms("f0094", "/services/renovating")}>{cms("f0095", "Renovating")}</a>
            <a href={cms("f0096", "/services/property-cleaning")}>{cms("f0097", "Property Cleaning")}</a>
            <a href={cms("f0098", "/services/tile-replacement-installation")}>{cms("f0099", "Tile Replacement & Installation")}</a>
            <a href={cms("f0100", "/services/floor-renovation")}>{cms("f0101", "Floor Renovation")}</a>
            <a href={cms("f0102", "/services/demolition")}>{cms("f0103", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0104", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0105", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0106", "/legal/privacy")}>{cms("f0107", "Privacy Policy")}</a>
            <a href={cms("f0108", "/legal/terms")}>{cms("f0109", "Terms of Use")}</a>
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
