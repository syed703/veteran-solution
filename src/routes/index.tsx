import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues } from '@/lib/cms';
import { publicSiteQuery } from '@/lib/public-site';
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Accordion from "@radix-ui/react-accordion";
import repairCSS from "../styles/import-repairs.css?raw";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/captured.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Veteran Solutions & Services | Your needs. Our mission." },
    { name: "description", content: "Veteran-owned property cleaning, renovation, painting and demolition services. Your needs. Our mission." },
    { property: "og:title", content: "Veteran Solutions & Services" },
    { property: "og:description", content: "Veteran-owned property care. One trusted team for your next project." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:home");
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS + repairCSS}</style>
      <div className={"site-theme theme-home"}>
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
              <a className={"active"} href="/">{cms("f0013", "Home")}</a>
              <a className={""} href={cms("f0014", "/about")}>{cms("f0015", "About Us")}</a>
              <a className={""} href={cms("f0016", "/services")}>{cms("f0017", "Services")}</a>
              <a className={""} href={cms("f0018", "/contact")}>{cms("f0019", "Contact Us")}</a>
              <a className={""} href={cms("f0020", "/legal")}>{cms("f0021", "Legal Pages")}</a>
            </nav>
            <a className={"button button-dark header-quote"} href={cms("f0022", "/contact")}>{cms("f0023", "Start a project")}</a>
            <Dialog.Root>
            <Dialog.Trigger type="button" data-slot="sheet-trigger" className={"mobile-menu"} aria-label={cms("f0024", "Open navigation")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-menu"} aria-hidden="true">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="import-menu-overlay" />
                <Dialog.Content className="menu-sheet import-menu-sheet" data-slot="sheet-content" aria-describedby={undefined}>
                  <div data-slot="sheet-header" className="flex flex-col gap-1.5 p-4"><Dialog.Title data-slot="sheet-title" className="font-semibold import-menu-brand"><img src={cms("f0025", "/site-assets/f0a3c5858a327278.webp")} alt={cms("f0026", "Veteran Solutions and Services LLC")} width="80" height="44" /></Dialog.Title></div>
                  <nav className="mobile-nav" aria-label={cms("f0027", "Mobile navigation")}>
                    <a href="/">{cms("f0028", "Home")}</a><a href={cms("f0029", "/about")}>{cms("f0030", "About Us")}</a><a href={cms("f0031", "/services")}>{cms("f0032", "Services")}</a><a href={cms("f0033", "/contact")}>{cms("f0034", "Contact Us")}</a><a href={cms("f0035", "/legal")}>{cms("f0036", "Legal Pages")}</a>
                    <a className="button button-dark" href={cms("f0037", "/contact")}>{cms("f0038", "Request a quote")}</a><a className="mobile-phone" href={cms("f0039", "tel:+18573455076")}>{cms("f0040", "(857) 345-5076")}</a>
                  </nav>
                  <Dialog.Close className="import-menu-close" aria-label={cms("f0041", "Close")}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg></Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </header>
        <main id="main">
          <section className={"home-hero"}>
            <div className={"hero-photo"}>
              <img src={cms("f0042", "/site-assets/6f7df1550472904c.webp")} alt={cms("f0043", "Aerial view of a residential property")} fetchPriority="high" />
              <video className={"hero-video"} autoPlay muted loop playsInline preload="auto" poster={cms("f0044", "/site-assets/6f7df1550472904c.webp")} aria-hidden="true">
                <source media="(prefers-reduced-motion: no-preference)" src={cms('hero-video', '/site-assets/cb078f882496fc7b.mp4')} type="video/mp4" />
              </video>
            </div>
            <div className={"hero-shade"} />
            <div className={"\x63ontainer hero-content"}>
              <div className={"hero-topline"}>
                <span className={"hero-topline-right"}>{cms("f0045", "PROPERTY SOLUTIONS")}<br />{cms("f0046", "WITH PURPOSE")}</span>
              </div>
              <div className={"hero-main"}>
                <div className={"hero-title-block"}>
                  <span className={"hero-pretitle"} style={{ transform: "translateY(0px)", opacity: "1" }}>{cms("f0047", "THE STANDARD IS PERSONAL.")}</span>
                  <h1 style={{ transform: "translateY(0px)", opacity: "1" }}>{cms("f0048", "Your needs.")}<br /><em>{cms("f0049", "Our mission.")}</em></h1>
                  <p style={{ transform: "translateY(0px)", opacity: "1" }}>{cms("f0050", "One trusted team for the spaces you live in, work in, and care about.")}</p>
                  <div className={"hero-actions"} style={{ transform: "translateY(0px)", opacity: "1" }}>
                    <a className={"button button-dark"} href={cms("f0051", "/contact")}>{cms("f0052", "Request a quote")}</a>
                    <a className={"button button-outline"} href={cms("f0053", "/services")}>{cms("f0054", "Explore our services")}</a>
                  </div>
                </div>
                <div className={"hero-side-note"}>
                  <span>{cms("f0055", "01 / 09")}</span>
                  <span>{cms("f0056", "PROPERTY CARE")}<br />{cms("f0057", "FROM START TO FINISH")}</span>
                </div>
              </div>
              <div className={"hero-bottomline"}>
                <span><i /> {cms("f0058", " SCROLL TO EXPLORE")}</span>
                <span>{cms("f0059", "AVAILABLE 24/7 ")}<span className={"hero-bottom-sep"} />{" "}{cms("f0060", "(857) 345-5076")}</span>
              </div>
            </div>
          </section>
          <div className={"assurance-strip"}>
            <div className={"\x63ontainer assurance-inner"}>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>{cms("f0061", "Veteran owned & operated")}</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg>{cms("f0062", "Available 24/7")}</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-star"} aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>{cms("f0063", "One team. Nine services.")}</span>
              <a href={cms("f0064", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{" "}{cms("f0065", "(857) 345-5076")}</a>
            </div>
          </div>
          <ImportedSectionOneTeamForeveryNext />
          <section className={"process-section section"}>
            <div className={"\x63ontainer"}>
              <div className={"section-heading reveal-ready revealed"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />{cms("f0066", "A SIMPLE WAY FORWARD")}</span>
                  <h2>{cms("f0067", "Good service starts")}<br />{cms("f0068", "with ")}<em>{cms("f0069", "a conversation.")}</em></h2>
                </div>
                <p>{cms("f0070", "From your first request to the agreed work, we keep the next step clear.")}</p>
              </div>
              <div className={"process-grid"}>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0071", "01")}</span>
                  <h3>{cms("f0072", "Tell us what you need")}</h3>
                  <p>{cms("f0073", "Choose a service and share a few details about your property and project.")}</p>
                </div>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0074", "02")}</span>
                  <h3>{cms("f0075", "Make a clear plan")}</h3>
                  <p>{cms("f0076", "We review the scope, discuss the estimate and agree a suitable schedule.")}</p>
                </div>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0077", "03")}</span>
                  <h3>{cms("f0078", "Put your plans in motion")}</h3>
                  <p>{cms("f0079", "With the details agreed, we get to work on the service your property needs.")}</p>
                </div>
              </div>
            </div>
          </section>
          <ImportedSectionACompanyBuiltonService />
          <ImportedSectionSeeTheSpaceSee />
          <section className={"demolition-feature"}>
            <div className={"demolition-image"}>
              <img src={cms("f0080", "/site-assets/73ade72c9b09495f.jpg")} alt={cms("f0081", "Excavator preparing a site for its next use")} loading="lazy" />
            </div>
            <div className={"demolition-content \x63ontainer"}>
              <div className={"reveal-ready revealed"}>
                <span className={"eyebrow light"}>{cms("f0082", "CLEAR & PREPARE / DEMOLITION")}</span>
                <h2>{cms("f0083", "Every new beginning")}<br />{cms("f0084", "needs ")}<em>{cms("f0085", "a clear start.")}</em></h2>
                <p>{cms("f0086", "Selective removal, demolition requests and debris planning. Let’s discuss what needs to go—and what you want to build next.")}</p>
                <a className={"button button-white"} href={cms("f0087", "/services/demolition")}>{cms("f0088", "Explore demolition")}</a>
              </div>
            </div>
          </section>
          <section className={"personal-training-section"} aria-labelledby="personal-training-heading">
            <div className={"\x63ontainer personal-training-layout"}>
              <div className={"personal-training-image reveal-ready revealed"}>
                <img src={cms("f0089", "/site-assets/fef155f94d897b0d.webp")} alt={cms("f0090", "Illustrative residential painting and renovation work")} loading="lazy" />
                <span>{cms("f0091", "PROPERTY CARE / VETERAN OWNED")}</span>
              </div>
              <div className={"personal-training-copy reveal-ready revealed"}>
                <span className={"eyebrow"}><span className={"label-line"} />{cms("f0092", "PERSONAL TRAINING")}</span>
                <h2 id="personal-training-heading">{cms("f0093", "A personal approach")}<br />{cms("f0094", "to ")}<em>{cms("f0095", "your goals.")}</em></h2>
                <p>{cms("f0096", "Veteran Solutions & Services is built around caring for people and their properties. Alongside our cleaning, renovation, painting and demolition work, we welcome enquiries about personal training. Tell us what you hope to achieve, and we’ll talk through the next step.")}</p>
                <div className={"personal-training-detail"}>
                  <span>{cms("f0097", "VETERAN OWNED")}</span>
                  <span>{cms("f0098", "YOUR GOALS FIRST")}</span>
                </div>
                <a className={"button button-dark"} href={cms("f0099", "/contact?service=personal-training")}>{cms("f0100", "Ask about personal training")}</a>
              </div>
            </div>
          </section>
          <ImportedSectionLetSTakeCareof />
          <ImportedSectionGoodQuestionsClearAnswers />
        </main>
        <ImportedFooterYourNeedsOurMission />
      </div>
    </>
  );
}

function ImportedSectionOneTeamForeveryNext() {
  const cms = useCmsValues("page:home");
  return (
    <section className={"services-overview section"}>
      <div className={"\x63ontainer"}>
        <div className={"section-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />{cms("f0101", "WHAT WE DO / 01—06")}</span>
            <h2>{cms("f0102", "One team for")}<br /><em>{cms("f0103", "every next step.")}</em></h2>
          </div>
          <div className={"heading-right"}>
            <p>{cms("f0104", "From clearing a space to caring for a home, we bring focus and a clear plan to every service.")}</p>
            <a className={"underlined-link"} href={cms("f0105", "/services")}>{cms("f0106", "View all nine services")}</a>
          </div>
        </div>
        <div className={"home-services-grid"}>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f0ed" } as CSSProperties}>
            <a aria-label={cms("f0107", "Explore Junk Removal")} className={"service-image"} href={cms("f0108", "/services/junk-removal")}>
              <img src={cms("f0109", "/site-assets/58a94b431b74715b.webp")} alt={cms("f0110", "Veteran Solutions team member preparing to clear a cluttered space")} style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>{cms("f0111", "01")}</span>
              <span className={"image-category"}>{cms("f0112", "Clear & clean")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0113", "/services/junk-removal")}>
                <h3>{cms("f0114", "Junk Removal")}</h3>
              </a>
              <p>{cms("f0115", "Make room for what comes next. Furniture, unwanted items and property cleanouts, handled with care.")}</p>
              <a className={"underlined-link"} href={cms("f0116", "/services/junk-removal")}>{cms("f0117", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4eeea" } as CSSProperties}>
            <a aria-label={cms("f0118", "Explore Painting")} className={"service-image"} href={cms("f0119", "/services/painting")}>
              <img src={cms("f0120", "/site-assets/0695a946ebede19a.webp")} alt={cms("f0121", "Veteran Solutions painter working on a home exterior")} style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>{cms("f0122", "02")}</span>
              <span className={"image-category"}>{cms("f0123", "Refresh & renew")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0124", "/services/painting")}>
                <h3>{cms("f0125", "Painting")}</h3>
              </a>
              <p>{cms("f0126", "Bring a fresh perspective to your property with thoughtfully prepared interior and exterior painting.")}</p>
              <a className={"underlined-link"} href={cms("f0127", "/services/painting")}>{cms("f0128", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f5f1eb" } as CSSProperties}>
            <a aria-label={cms("f0129", "Explore Pool Cleaning")} className={"service-image"} href={cms("f0130", "/services/pool-cleaning")}>
              <img src={cms("f0131", "/site-assets/268a312bff2a0a69.webp")} alt={cms("f0132", "Veteran Solutions worker skimming a swimming pool")} style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>{cms("f0133", "03")}</span>
              <span className={"image-category"}>{cms("f0134", "Clear & clean")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0135", "/services/pool-cleaning")}>
                <h3>{cms("f0136", "Pool Cleaning")}</h3>
              </a>
              <p>{cms("f0137", "Keep your pool inviting with attentive cleaning that takes everyday maintenance off your list.")}</p>
              <a className={"underlined-link"} href={cms("f0138", "/services/pool-cleaning")}>{cms("f0139", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f1ef" } as CSSProperties}>
            <a aria-label={cms("f0140", "Explore Power Washing")} className={"service-image"} href={cms("f0141", "/services/power-washing")}>
              <img src={cms("f0142", "/site-assets/4f8f0842a9551b24.webp")} alt={cms("f0143", "Veteran Solutions worker power washing a paved patio")} style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>{cms("f0144", "04")}</span>
              <span className={"image-category"}>{cms("f0145", "Clear & clean")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0146", "/services/power-washing")}>
                <h3>{cms("f0147", "Power Washing")}</h3>
              </a>
              <p>{cms("f0148", "Lift built-up dirt from suitable exterior surfaces and give your property a cleaner first impression.")}</p>
              <a className={"underlined-link"} href={cms("f0149", "/services/power-washing")}>{cms("f0150", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ea" } as CSSProperties}>
            <a aria-label={cms("f0151", "Explore Renovating")} className={"service-image"} href={cms("f0152", "/services/renovating")}>
              <img src={cms("f0153", "/site-assets/bf38b010f24207a7.jpg")} alt={cms("f0154", "Bright finished interior with natural wood flooring")} style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>{cms("f0155", "05")}</span>
              <span className={"image-category"}>{cms("f0156", "Refresh & renew")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0157", "/services/renovating")}>
                <h3>{cms("f0158", "Renovating")}</h3>
              </a>
              <p>{cms("f0159", "Turn a space that needs attention into one that feels considered, practical and ready for everyday life.")}</p>
              <a className={"underlined-link"} href={cms("f0160", "/services/renovating")}>{cms("f0161", "Explore service")}</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ec" } as CSSProperties}>
            <a aria-label={cms("f0162", "Explore Property Cleaning")} className={"service-image"} href={cms("f0163", "/services/property-cleaning")}>
              <img src={cms("f0164", "/site-assets/c82ff7ecf9d14bb2.webp")} alt={cms("f0165", "Veteran Solutions worker cleaning an outdoor property area")} style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>{cms("f0166", "06")}</span>
              <span className={"image-category"}>{cms("f0167", "Clear & clean")}</span>
            </a>
            <div className={"service-copy"}>
              <a href={cms("f0168", "/services/property-cleaning")}>
                <h3>{cms("f0169", "Property Cleaning")}</h3>
              </a>
              <p>{cms("f0170", "Give your property the attention it deserves, with cleaning tailored to the areas that need it most.")}</p>
              <a className={"underlined-link"} href={cms("f0171", "/services/property-cleaning")}>{cms("f0172", "Explore service")}</a>
            </div>
          </article>
        </div>
        <div className={"services-outro"}>
          <span>{cms("f0173", "THE RIGHT HELP, WHEN IT MATTERS.")}</span>
          <a className={"button button-dark"} href={cms("f0174", "/services")}>{cms("f0175", "Explore the full lineup")}</a>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionACompanyBuiltonService() {
  const cms = useCmsValues("page:home");
  return (
    <section className={"mission-section"} aria-labelledby="home-about-heading">
      <div className={"\x63ontainer mission-grid"}>
        <div className={"mission-copy reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />{cms("f0176", "ABOUT VETERAN SOLUTIONS & SERVICES")}</span>
          <h2 id="home-about-heading">{cms("f0177", "A company built")}<br />{cms("f0178", "on ")}<em>{cms("f0179", "service.")}</em></h2>
          <p>{cms("f0180", "We’re a veteran-owned business here to help you care for your property and move your next project forward. From the work that clears a space to the details that renew it, we bring our services together under one name.")}</p>
          <p>{cms("f0181", "We start by hearing what matters to you, then talk through the scope and a practical way ahead. Your needs are the starting point for every conversation.")}</p>
          <div className={"mission-values"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> {cms("f0182", " Veteran owned & operated")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> {cms("f0183", " Nine property services")}</span>
          </div>
          <a className={"button button-white"} href={cms("f0184", "/about")}>{cms("f0185", "Get to know our company")}</a>
        </div>
        <div className={"mission-visual reveal-ready revealed"}>
          <div className={"mission-visual-top"}>
            <span>{cms("f0186", "OUR IDENTITY")}</span>
            <span>{cms("f0187", "ONE TEAM / NINE SERVICES")}</span>
          </div>
          <div className={"mission-logo-card"}>
            <img src={cms("f0188", "/site-assets/8448ccd12888d989.webp")} alt={cms("f0189", "Veteran Solutions and Services LLC eagle logo")} loading="lazy" />
          </div>
          <div className={"mission-visual-bottom"}>
            <span>{cms("f0190", "YOUR NEEDS.")}<br />{cms("f0191", "OUR MISSION.")}</span>
            <span>{cms("f0192", "VETERAN OWNED")}<br />{cms("f0193", "& OPERATED")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSeeTheSpaceSee() {
  const cms = useCmsValues("page:home");
  const [splits, setSplits] = useState([50, 50, 50]);
  return (
    <section className={"comparison-section section"} aria-labelledby="comparison-heading">
      <div className={"\x63ontainer"}>
        <div className={"comparison-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />{cms("f0194", "THE TRANSFORMATION / 01—03")}</span>
            <h2 id="comparison-heading">{cms("f0195", "See the space.")}<br /><em>{cms("f0196", "See the possibility.")}</em></h2>
          </div>
          <div className={"comparison-intro"}>
            <span>{cms("f0197", "THREE INTERACTIVE VIEWS")}</span>
            <p>{cms("f0198", "Move each slider to explore the potential of a room, an exterior and a pool.")}</p>
          </div>
        </div>
        <div className={"comparison-grid"}>
          <article className={"comparison-card reveal-ready revealed"}>
            <div className={"comparison-stage"} style={{ "--split": `${splits[0]}%` } as CSSProperties}>
              <img className={"comparison-after"} src={cms("f0199", "/site-assets/bf38b010f24207a7.jpg")} alt={cms("f0200", "Illustrative refreshed living room with wood floors")} loading="lazy" />
              <div className={"comparison-before"} style={{ clipPath: `inset(0px ${100 - (splits[0] ?? 50)}% 0px 0px)` } as CSSProperties}>
                <img src={cms("f0201", "/site-assets/138ecd3f6822b5eb.webp")} alt={cms("f0202", "Illustrative living room before a refresh")} loading="lazy" />
              </div>
              <span className={"comparison-tag comparison-tag-before"}>{cms("f0203", "BEFORE")}</span>
              <span className={"comparison-tag comparison-tag-after"}>{cms("f0204", "AFTER")}</span>
              <span className={"comparison-divider"} aria-hidden="true">
                <span className={"comparison-handle"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-move-horizontal"} aria-hidden="true">
                    <path d="m18 8 4 4-4 4" />
                    <path d="M2 12h20" />
                    <path d="m6 8-4 4 4 4" />
                  </svg>
                </span>
              </span>
              <input type="range" min="0" max="100" step="1" className={"comparison-range"} aria-label={cms("f0205", "Compare before and after: A room, reimagined")} aria-valuetext={`${splits[0]}% of the before image visible`} value={splits[0]} onChange={event => setSplits(previous => previous.map((value, index) => index === 0 ? Number(event.target.value) : value))} />
            </div>
            <div className={"comparison-card-copy"}>
              <div className={"comparison-card-meta"}>
                <span>{cms("f0206", "01 / RENOVATING")}</span>
                <span>{cms("f0207", "DRAG TO COMPARE")}</span>
              </div>
              <h3>{cms("f0208", "A room, reimagined")}</h3>
              <p>{cms("f0209", "See how refreshed finishes can change the feel of a room.")}</p>
            </div>
          </article>
          <article className={"comparison-card reveal-ready revealed"}>
            <div className={"comparison-stage"} style={{ "--split": `${splits[1]}%` } as CSSProperties}>
              <img className={"comparison-after"} src={cms("f0210", "/site-assets/3ba8c5a82c95a2b7.jpg")} alt={cms("f0211", "Illustrative clean white home and landscaped yard")} loading="lazy" />
              <div className={"comparison-before"} style={{ clipPath: `inset(0px ${100 - (splits[1] ?? 50)}% 0px 0px)` } as CSSProperties}>
                <img src={cms("f0212", "/site-assets/0f0c94f6a081f247.webp")} alt={cms("f0213", "Illustrative home exterior before a refresh")} loading="lazy" />
              </div>
              <span className={"comparison-tag comparison-tag-before"}>{cms("f0214", "BEFORE")}</span>
              <span className={"comparison-tag comparison-tag-after"}>{cms("f0215", "AFTER")}</span>
              <span className={"comparison-divider"} aria-hidden="true">
                <span className={"comparison-handle"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-move-horizontal"} aria-hidden="true">
                    <path d="m18 8 4 4-4 4" />
                    <path d="M2 12h20" />
                    <path d="m6 8-4 4 4 4" />
                  </svg>
                </span>
              </span>
              <input type="range" min="0" max="100" step="1" className={"comparison-range"} aria-label={cms("f0216", "Compare before and after: A welcome return")} aria-valuetext={`${splits[1]}% of the before image visible`} value={splits[1]} onChange={event => setSplits(previous => previous.map((value, index) => index === 1 ? Number(event.target.value) : value))} />
            </div>
            <div className={"comparison-card-copy"}>
              <div className={"comparison-card-meta"}>
                <span>{cms("f0217", "02 / EXTERIOR CARE")}</span>
                <span>{cms("f0218", "DRAG TO COMPARE")}</span>
              </div>
              <h3>{cms("f0219", "A welcome return")}</h3>
              <p>{cms("f0220", "Explore the difference careful exterior attention can make.")}</p>
            </div>
          </article>
          <article className={"comparison-card reveal-ready revealed"}>
            <div className={"comparison-stage"} style={{ "--split": `${splits[2]}%` } as CSSProperties}>
              <img className={"comparison-after"} src={cms("f0221", "/site-assets/e8c3906bfaa1516a.webp")} alt={cms("f0222", "Illustrative clear pool and clean deck")} loading="lazy" />
              <div className={"comparison-before"} style={{ clipPath: `inset(0px ${100 - (splits[2] ?? 50)}% 0px 0px)` } as CSSProperties}>
                <img src={cms("f0223", "/site-assets/516e5f40933ff0fc.webp")} alt={cms("f0224", "Illustrative pool before cleaning")} loading="lazy" />
              </div>
              <span className={"comparison-tag comparison-tag-before"}>{cms("f0225", "BEFORE")}</span>
              <span className={"comparison-tag comparison-tag-after"}>{cms("f0226", "AFTER")}</span>
              <span className={"comparison-divider"} aria-hidden="true">
                <span className={"comparison-handle"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-move-horizontal"} aria-hidden="true">
                    <path d="m18 8 4 4-4 4" />
                    <path d="M2 12h20" />
                    <path d="m6 8-4 4 4 4" />
                  </svg>
                </span>
              </span>
              <input type="range" min="0" max="100" step="1" className={"comparison-range"} aria-label={cms("f0227", "Compare before and after: Ready to enjoy again")} aria-valuetext={`${splits[2]}% of the before image visible`} value={splits[2]} onChange={event => setSplits(previous => previous.map((value, index) => index === 2 ? Number(event.target.value) : value))} />
            </div>
            <div className={"comparison-card-copy"}>
              <div className={"comparison-card-meta"}>
                <span>{cms("f0228", "03 / POOL CLEANING")}</span>
                <span>{cms("f0229", "DRAG TO COMPARE")}</span>
              </div>
              <h3>{cms("f0230", "Ready to enjoy again")}</h3>
              <p>{cms("f0231", "Picture an inviting pool and a space ready to use.")}</p>
            </div>
          </article>
        </div>
        <div className={"comparison-bottom"}>
          <p>{cms("f0232", "These are illustrative concepts, not completed client projects. Actual before and after photos can be added when available.")}</p>
          <a className={"underlined-link"} href={cms("f0233", "/contact")}>{cms("f0234", "Tell us about your space")}</a>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionLetSTakeCareof() {
  const cms = useCmsValues("page:home");
  const [requestNotice, setRequestNotice] = useState(false);
  return (
    <section id="quote" className={"quote-section section"}>
      <div className={"\x63ontainer quote-layout"}>
        <div className={"quote-intro reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />{cms("f0235", "ONE LESS THING ON YOUR LIST")}</span>
          <h2>{cms("f0236", "Let’s take care")}<br />{cms("f0237", "of ")}<em>{cms("f0238", "your next project.")}</em></h2>
          <p>{cms("f0239", "Something to clear, clean or completely reimagine? Tell us what you have in mind.")}</p>
          <div className={"contact-detail"}>
            <span className={"contact-icon"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </span>
            <div>
              <small>{cms("f0240", "Prefer to talk it through?")}</small>
              <a href={cms("f0241", "tel:+18573455076")}>{cms("f0242", "(857) 345-5076")}</a>
            </div>
          </div>
          <div className={"quote-points"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> {cms("f0243", " Veteran owned & operated")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0244", " Available 24/7")}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> {cms("f0245", " A clear scope before work begins")}</span>
          </div>
          <p className={"quote-small"}>{cms("f0246", "Your property. Your priorities.")}<br />{cms("f0247", "Our mission is to help with both.")}</p>
        </div>
        <div className={"quote-panel reveal-ready revealed"}>
          <form className={"quote-form"} onSubmit={event => { event.preventDefault(); setRequestNotice(true); }}>
            <div className={"form-heading"}>
              <span className={"eyebrow"}>{cms("f0248", "LET’S GET STARTED")}</span>
              <h3>{cms("f0249", "Tell us what you need.")}</h3>
              <p>{cms("f0250", "A few details help us understand your project.")}</p>
            </div>
            <div className={"form-row"}>
              <label>{cms("f0251", "Full name ")}<span>*</span><input required autoComplete="name" maxLength={120} placeholder={cms("f0252", "Your full name")} name="name" defaultValue="" /></label>
              <label>{cms("f0253", "Phone number ")}<span>*</span><input type="tel" required autoComplete="tel" maxLength={30} placeholder={cms("f0254", "(555) 000-0000")} name="phone" defaultValue="" /></label>
            </div>
            <div className={"form-row"}>
              <label>{cms("f0255", "Email address ")}<span>*</span><input type="email" required autoComplete="email" maxLength={180} placeholder={cms("f0256", "you@example.com")} name="email" defaultValue="" /></label>
              <label>{cms("f0257", "Property ZIP code")}{" "}<span>*</span><input required autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" maxLength={10} placeholder={cms("f0258", "ZIP code")} title={cms("f0259", "Enter a 5-digit US ZIP code, optionally followed by a 4-digit extension.")} name="zip" defaultValue="" /></label>
            </div>
            <label className={"service-label"} id="service-label">{cms("f0260", "Which service do you need? ")}<span>*</span></label>
            <Select.Root name="service" required>
              <Select.Trigger className="service-select import-service-trigger" aria-labelledby="service-label"><Select.Value placeholder={cms("f0261", "Choose your service")} /><Select.Icon>{cms("f0262", "⌄")}</Select.Icon></Select.Trigger>
              <Select.Portal><Select.Content position="popper" className="service-options import-service-options"><Select.Viewport>
                {[["junk-removal", "Junk Removal"], ["painting", "Painting"], ["pool-cleaning", "Pool Cleaning"], ["power-washing", "Power Washing"], ["renovating", "Renovating"], ["property-cleaning", "Property Cleaning"], ["tile-replacement-installation", "Tile Replacement & Installation"], ["floor-renovation", "Floor Renovation"], ["demolition", "Demolition"], ["multiple", "More than one service"], ["personal-training", "Personal Training"]].map(([value, label]) => <Select.Item key={value} value={value ?? ""} data-slot="select-item" className="import-service-option"><Select.ItemText>{label}</Select.ItemText><Select.ItemIndicator>{cms("f0263", "✓")}</Select.ItemIndicator></Select.Item>)}
              </Select.Viewport></Select.Content></Select.Portal>
            </Select.Root>
            <label className={"message-label"}>{cms("f0264", "A little about your project")}{" "}<span>*</span><textarea name="message" required minLength={10} maxLength={3000} rows={4} placeholder={cms("f0265", "What needs attention? Include the approximate size, current condition and your preferred timing.")} /></label>
            <div className={"honeypot"} aria-hidden="true">
              <label>{cms("f0266", "Company website")}<input tabIndex={-1} autoComplete="off" name="company" defaultValue="" /></label>
            </div>
            <button className={"button button-dark form-submit"} type="submit">{cms("f0267", "Request my quote")}</button>
            {requestNotice && <p role="status">{cms("f0268", "Online quote requests are not connected yet. Please call (857) 345-5076 to discuss your project.")}</p>}
            <p className={"form-note"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{cms("f0269", "We’ll use these details to contact you about your request. ")}<a href={cms("f0270", "/legal/privacy")}>{cms("f0271", "Privacy Policy")}</a></span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionGoodQuestionsClearAnswers() {
  const cms = useCmsValues("page:home");
  return (
    <section className={"faq-section section"}>
      <div className={"\x63ontainer faq-layout"}>
        <div className={"reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />{cms("f0272", "A LITTLE MORE CLARITY")}</span>
          <h2>{cms("f0273", "Good questions.")}<br /><em>{cms("f0274", "Clear answers.")}</em></h2>
          <p>{cms("f0275", "Still have something on your mind?")}<br /><a href={cms("f0276", "tel:+18573455076")}>{cms("f0277", "Give us a call.")}</a></p>
        </div>
        <Accordion.Root type="single" collapsible data-slot="accordion" className={"faq-list"}>
          <Accordion.Item value="faq-0" data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
            <Accordion.Header className={"\x66lex"}>
              <Accordion.Trigger id="radix-_R_d9mi_" data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180"}>{cms("f0278", "Can I request more than one service?")}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-chevron-down \x70ointer-events-none \x73ize-4 \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as CSSProperties}><div className="pt-0 pb-4">{cms("f0279", "Yes. Choose ‘More than one service’ in the quote form and tell us which services you need. We can review the work together and discuss an appropriate plan.")}</div></Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="faq-1" data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
            <Accordion.Header className={"\x66lex"}>
              <Accordion.Trigger id="radix-_R_l9mi_" data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180"}>{cms("f0280", "How do I get an estimate?")}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-chevron-down \x70ointer-events-none \x73ize-4 \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as CSSProperties}><div className="pt-0 pb-4">{cms("f0281", "Complete the quote form with your service, property ZIP code and a brief description, or call (857) 345-5076. We’ll review the scope and may need more details or a property assessment before confirming an estimate.")}</div></Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="faq-2" data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
            <Accordion.Header className={"\x66lex"}>
              <Accordion.Trigger id="radix-_R_t9mi_" data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180"}>{cms("f0282", "Do you offer urgent service?")}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-chevron-down \x70ointer-events-none \x73ize-4 \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as CSSProperties}><div className="pt-0 pb-4">{cms("f0283", "You can contact us 24/7. Call to discuss urgent work. Scheduling depends on the service, the location and team availability; a request does not confirm a booking.")}</div></Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="faq-3" data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
            <Accordion.Header className={"\x66lex"}>
              <Accordion.Trigger id="radix-_R_159mi_" data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180"}>{cms("f0284", "Which areas do you serve?")}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-chevron-down \x70ointer-events-none \x73ize-4 \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as CSSProperties}><div className="pt-0 pb-4">{cms("f0285", "Include your property ZIP code in your request or call the team. We’ll confirm coverage for your location before arranging the work.")}</div></Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:home");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0286", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0287", "Your needs.")}<br /><em>{cms("f0288", "Our mission.")}</em></h2>
            <p>{cms("f0289", "Property care with purpose.")}<br />{cms("f0290", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0291", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0292", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0293", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0294", "Explore")}</h3>
            <a href="/">{cms("f0295", "Home")}</a>
            <a href={cms("f0296", "/about")}>{cms("f0297", "About Us")}</a>
            <a href={cms("f0298", "/services")}>{cms("f0299", "Services")}</a>
            <a href={cms("f0300", "/contact")}>{cms("f0301", "Contact Us")}</a>
            <a href={cms("f0302", "/legal")}>{cms("f0303", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0304", "Our services")}</h3>
            <a href={cms("f0305", "/services/junk-removal")}>{cms("f0306", "Junk Removal")}</a>
            <a href={cms("f0307", "/services/painting")}>{cms("f0308", "Painting")}</a>
            <a href={cms("f0309", "/services/pool-cleaning")}>{cms("f0310", "Pool Cleaning")}</a>
            <a href={cms("f0311", "/services/power-washing")}>{cms("f0312", "Power Washing")}</a>
            <a href={cms("f0313", "/services/renovating")}>{cms("f0314", "Renovating")}</a>
            <a href={cms("f0315", "/services/property-cleaning")}>{cms("f0316", "Property Cleaning")}</a>
            <a href={cms("f0317", "/services/tile-replacement-installation")}>{cms("f0318", "Tile Replacement & Installation")}</a>
            <a href={cms("f0319", "/services/floor-renovation")}>{cms("f0320", "Floor Renovation")}</a>
            <a href={cms("f0321", "/services/demolition")}>{cms("f0322", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0323", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0324", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0325", "/legal/privacy")}>{cms("f0326", "Privacy Policy")}</a>
            <a href={cms("f0327", "/legal/terms")}>{cms("f0328", "Terms of Use")}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const loopingVideos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[loop]:not([autoplay]):not([controls])"),
    )
      .filter((video) => video.muted && !video.closest("[data-site-import-carousel-store]"))
      .slice(0, 32);
    const videoObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      }
    });
    loopingVideos.forEach((video) => videoObserver.observe(video));
    return () => {
      videoObserver.disconnect();
      loopingVideos.forEach((video) => video.pause());
    };
  }, []);
}

function CmsIndex() {
  const { data } = useSuspenseQuery(publicSiteQuery);
  return <CmsProvider content={data.content}><Index /></CmsProvider>;
}
