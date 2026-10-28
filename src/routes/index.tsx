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
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS + repairCSS}</style>
      <div className={"site-theme theme-home"}>
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
              <a className={"active"} href="/">Home</a>
              <a className={""} href="/about">About Us</a>
              <a className={""} href="/services">Services</a>
              <a className={""} href="/contact">Contact Us</a>
              <a className={""} href="/legal">Legal Pages</a>
            </nav>
            <a className={"button button-dark header-quote"} href="/contact">Start a project</a>
            <Dialog.Root>
            <Dialog.Trigger type="button" data-slot="sheet-trigger" className={"mobile-menu"} aria-label="Open navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-menu"} aria-hidden="true">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="import-menu-overlay" />
                <Dialog.Content className="menu-sheet import-menu-sheet" data-slot="sheet-content" aria-describedby={undefined}>
                  <div data-slot="sheet-header" className="flex flex-col gap-1.5 p-4"><Dialog.Title data-slot="sheet-title" className="font-semibold import-menu-brand"><img src="/site-assets/f0a3c5858a327278.webp" alt="Veteran Solutions and Services LLC" width="80" height="44" /></Dialog.Title></div>
                  <nav className="mobile-nav" aria-label="Mobile navigation">
                    <a href="/">Home</a><a href="/about">About Us</a><a href="/services">Services</a><a href="/contact">Contact Us</a><a href="/legal">Legal Pages</a>
                    <a className="button button-dark" href="/contact">Request a quote</a><a className="mobile-phone" href="tel:+18573455076">(857) 345-5076</a>
                  </nav>
                  <Dialog.Close className="import-menu-close" aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg></Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </header>
        <main id="main">
          <section className={"home-hero"}>
            <div className={"hero-photo"}>
              <img src="/site-assets/6f7df1550472904c.webp" alt="Aerial view of a residential property" fetchPriority="high" />
              <video className={"hero-video"} autoPlay muted loop playsInline preload="auto" poster="/site-assets/6f7df1550472904c.webp" aria-hidden="true">
                <source media="(prefers-reduced-motion: no-preference)" src="/site-assets/cb078f882496fc7b.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={"hero-shade"} />
            <div className={"\x63ontainer hero-content"}>
              <div className={"hero-topline"}>
                <span className={"hero-topline-right"}>PROPERTY SOLUTIONS<br />WITH PURPOSE</span>
              </div>
              <div className={"hero-main"}>
                <div className={"hero-title-block"}>
                  <span className={"hero-pretitle"} style={{ transform: "translateY(0px)", opacity: "1" }}>THE STANDARD IS PERSONAL.</span>
                  <h1 style={{ transform: "translateY(0px)", opacity: "1" }}>Your needs.<br /><em>Our mission.</em></h1>
                  <p style={{ transform: "translateY(0px)", opacity: "1" }}>One trusted team for the spaces you live in, work in, and care about.</p>
                  <div className={"hero-actions"} style={{ transform: "translateY(0px)", opacity: "1" }}>
                    <a className={"button button-dark"} href="/contact">Request a quote</a>
                    <a className={"button button-outline"} href="/services">Explore our services</a>
                  </div>
                </div>
                <div className={"hero-side-note"}>
                  <span>01 / 09</span>
                  <span>PROPERTY CARE<br />FROM START TO FINISH</span>
                </div>
              </div>
              <div className={"hero-bottomline"}>
                <span><i /> SCROLL TO EXPLORE</span>
                <span>AVAILABLE 24/7 <span className={"hero-bottom-sep"} />{" "}(857) 345-5076</span>
              </div>
            </div>
          </section>
          <div className={"assurance-strip"}>
            <div className={"\x63ontainer assurance-inner"}>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>Veteran owned &amp; operated</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg>Available 24/7</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-star"} aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>One team. Nine services.</span>
              <a href="tel:+18573455076"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{" "}(857) 345-5076</a>
            </div>
          </div>
          <ImportedSectionOneTeamForeveryNext />
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
          <ImportedSectionACompanyBuiltonService />
          <ImportedSectionSeeTheSpaceSee />
          <section className={"demolition-feature"}>
            <div className={"demolition-image"}>
              <img src="/site-assets/73ade72c9b09495f.jpg" alt="Excavator preparing a site for its next use" loading="lazy" />
            </div>
            <div className={"demolition-content \x63ontainer"}>
              <div className={"reveal-ready revealed"}>
                <span className={"eyebrow light"}>CLEAR &amp; PREPARE / DEMOLITION</span>
                <h2>Every new beginning<br />needs <em>a clear start.</em></h2>
                <p>Selective removal, demolition requests and debris planning. Let’s discuss what needs to go—and what you want to build next.</p>
                <a className={"button button-white"} href="/services/demolition">Explore demolition</a>
              </div>
            </div>
          </section>
          <section className={"personal-training-section"} aria-labelledby="personal-training-heading">
            <div className={"\x63ontainer personal-training-layout"}>
              <div className={"personal-training-image reveal-ready revealed"}>
                <img src="/site-assets/fef155f94d897b0d.webp" alt="Illustrative residential painting and renovation work" loading="lazy" />
                <span>PROPERTY CARE / VETERAN OWNED</span>
              </div>
              <div className={"personal-training-copy reveal-ready revealed"}>
                <span className={"eyebrow"}><span className={"label-line"} />PERSONAL TRAINING</span>
                <h2 id="personal-training-heading">A personal approach<br />to <em>your goals.</em></h2>
                <p>Veteran Solutions &amp; Services is built around caring for people and their properties. Alongside our cleaning, renovation, painting and demolition work, we welcome enquiries about personal training. Tell us what you hope to achieve, and we’ll talk through the next step.</p>
                <div className={"personal-training-detail"}>
                  <span>VETERAN OWNED</span>
                  <span>YOUR GOALS FIRST</span>
                </div>
                <a className={"button button-dark"} href="/contact?service=personal-training">Ask about personal training</a>
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
  return (
    <section className={"services-overview section"}>
      <div className={"\x63ontainer"}>
        <div className={"section-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />WHAT WE DO / 01—06</span>
            <h2>One team for<br /><em>every next step.</em></h2>
          </div>
          <div className={"heading-right"}>
            <p>From clearing a space to caring for a home, we bring focus and a clear plan to every service.</p>
            <a className={"underlined-link"} href="/services">View all nine services</a>
          </div>
        </div>
        <div className={"home-services-grid"}>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f0ed" } as CSSProperties}>
            <a aria-label="Explore Junk Removal" className={"service-image"} href="/services/junk-removal">
              <img src="/site-assets/58a94b431b74715b.webp" alt="Veteran Solutions team member preparing to clear a cluttered space" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>01</span>
              <span className={"image-category"}>Clear &amp; clean</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/junk-removal">
                <h3>Junk Removal</h3>
              </a>
              <p>Make room for what comes next. Furniture, unwanted items and property cleanouts, handled with care.</p>
              <a className={"underlined-link"} href="/services/junk-removal">Explore service</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4eeea" } as CSSProperties}>
            <a aria-label="Explore Painting" className={"service-image"} href="/services/painting">
              <img src="/site-assets/0695a946ebede19a.webp" alt="Veteran Solutions painter working on a home exterior" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>02</span>
              <span className={"image-category"}>Refresh &amp; renew</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/painting">
                <h3>Painting</h3>
              </a>
              <p>Bring a fresh perspective to your property with thoughtfully prepared interior and exterior painting.</p>
              <a className={"underlined-link"} href="/services/painting">Explore service</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f5f1eb" } as CSSProperties}>
            <a aria-label="Explore Pool Cleaning" className={"service-image"} href="/services/pool-cleaning">
              <img src="/site-assets/268a312bff2a0a69.webp" alt="Veteran Solutions worker skimming a swimming pool" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>03</span>
              <span className={"image-category"}>Clear &amp; clean</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/pool-cleaning">
                <h3>Pool Cleaning</h3>
              </a>
              <p>Keep your pool inviting with attentive cleaning that takes everyday maintenance off your list.</p>
              <a className={"underlined-link"} href="/services/pool-cleaning">Explore service</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f3f1ef" } as CSSProperties}>
            <a aria-label="Explore Power Washing" className={"service-image"} href="/services/power-washing">
              <img src="/site-assets/4f8f0842a9551b24.webp" alt="Veteran Solutions worker power washing a paved patio" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>04</span>
              <span className={"image-category"}>Clear &amp; clean</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/power-washing">
                <h3>Power Washing</h3>
              </a>
              <p>Lift built-up dirt from suitable exterior surfaces and give your property a cleaner first impression.</p>
              <a className={"underlined-link"} href="/services/power-washing">Explore service</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ea" } as CSSProperties}>
            <a aria-label="Explore Renovating" className={"service-image"} href="/services/renovating">
              <img src="/site-assets/bf38b010f24207a7.jpg" alt="Bright finished interior with natural wood flooring" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>05</span>
              <span className={"image-category"}>Refresh &amp; renew</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/renovating">
                <h3>Renovating</h3>
              </a>
              <p>Turn a space that needs attention into one that feels considered, practical and ready for everyday life.</p>
              <a className={"underlined-link"} href="/services/renovating">Explore service</a>
            </div>
          </article>
          <article className={"service-card featured-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": "#f4f0ec" } as CSSProperties}>
            <a aria-label="Explore Property Cleaning" className={"service-image"} href="/services/property-cleaning">
              <img src="/site-assets/c82ff7ecf9d14bb2.webp" alt="Veteran Solutions worker cleaning an outdoor property area" style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
              <span className={"service-number"}>06</span>
              <span className={"image-category"}>Clear &amp; clean</span>
            </a>
            <div className={"service-copy"}>
              <a href="/services/property-cleaning">
                <h3>Property Cleaning</h3>
              </a>
              <p>Give your property the attention it deserves, with cleaning tailored to the areas that need it most.</p>
              <a className={"underlined-link"} href="/services/property-cleaning">Explore service</a>
            </div>
          </article>
        </div>
        <div className={"services-outro"}>
          <span>THE RIGHT HELP, WHEN IT MATTERS.</span>
          <a className={"button button-dark"} href="/services">Explore the full lineup</a>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionACompanyBuiltonService() {
  return (
    <section className={"mission-section"} aria-labelledby="home-about-heading">
      <div className={"\x63ontainer mission-grid"}>
        <div className={"mission-copy reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />ABOUT VETERAN SOLUTIONS &amp; SERVICES</span>
          <h2 id="home-about-heading">A company built<br />on <em>service.</em></h2>
          <p>We’re a veteran-owned business here to help you care for your property and move your next project forward. From the work that clears a space to the details that renew it, we bring our services together under one name.</p>
          <p>We start by hearing what matters to you, then talk through the scope and a practical way ahead. Your needs are the starting point for every conversation.</p>
          <div className={"mission-values"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> Veteran owned &amp; operated</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Nine property services</span>
          </div>
          <a className={"button button-white"} href="/about">Get to know our company</a>
        </div>
        <div className={"mission-visual reveal-ready revealed"}>
          <div className={"mission-visual-top"}>
            <span>OUR IDENTITY</span>
            <span>ONE TEAM / NINE SERVICES</span>
          </div>
          <div className={"mission-logo-card"}>
            <img src="/site-assets/8448ccd12888d989.webp" alt="Veteran Solutions and Services LLC eagle logo" loading="lazy" />
          </div>
          <div className={"mission-visual-bottom"}>
            <span>YOUR NEEDS.<br />OUR MISSION.</span>
            <span>VETERAN OWNED<br />&amp; OPERATED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSeeTheSpaceSee() {
  const [splits, setSplits] = useState([50, 50, 50]);
  return (
    <section className={"comparison-section section"} aria-labelledby="comparison-heading">
      <div className={"\x63ontainer"}>
        <div className={"comparison-heading reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />THE TRANSFORMATION / 01—03</span>
            <h2 id="comparison-heading">See the space.<br /><em>See the possibility.</em></h2>
          </div>
          <div className={"comparison-intro"}>
            <span>THREE INTERACTIVE VIEWS</span>
            <p>Move each slider to explore the potential of a room, an exterior and a pool.</p>
          </div>
        </div>
        <div className={"comparison-grid"}>
          <article className={"comparison-card reveal-ready revealed"}>
            <div className={"comparison-stage"} style={{ "--split": `${splits[0]}%` } as CSSProperties}>
              <img className={"comparison-after"} src="/site-assets/bf38b010f24207a7.jpg" alt="Illustrative refreshed living room with wood floors" loading="lazy" />
              <div className={"comparison-before"} style={{ clipPath: `inset(0px ${100 - (splits[0] ?? 50)}% 0px 0px)` } as CSSProperties}>
                <img src="/site-assets/138ecd3f6822b5eb.webp" alt="Illustrative living room before a refresh" loading="lazy" />
              </div>
              <span className={"comparison-tag comparison-tag-before"}>BEFORE</span>
              <span className={"comparison-tag comparison-tag-after"}>AFTER</span>
              <span className={"comparison-divider"} aria-hidden="true">
                <span className={"comparison-handle"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-move-horizontal"} aria-hidden="true">
                    <path d="m18 8 4 4-4 4" />
                    <path d="M2 12h20" />
                    <path d="m6 8-4 4 4 4" />
                  </svg>
                </span>
              </span>
              <input type="range" min="0" max="100" step="1" className={"comparison-range"} aria-label="Compare before and after: A room, reimagined" aria-valuetext={`${splits[0]}% of the before image visible`} value={splits[0]} onChange={event => setSplits(previous => previous.map((value, index) => index === 0 ? Number(event.target.value) : value))} />
            </div>
            <div className={"comparison-card-copy"}>
              <div className={"comparison-card-meta"}>
                <span>01 / RENOVATING</span>
                <span>DRAG TO COMPARE</span>
              </div>
              <h3>A room, reimagined</h3>
              <p>See how refreshed finishes can change the feel of a room.</p>
            </div>
          </article>
          <article className={"comparison-card reveal-ready revealed"}>
            <div className={"comparison-stage"} style={{ "--split": `${splits[1]}%` } as CSSProperties}>
              <img className={"comparison-after"} src="/site-assets/3ba8c5a82c95a2b7.jpg" alt="Illustrative clean white home and landscaped yard" loading="lazy" />
              <div className={"comparison-before"} style={{ clipPath: `inset(0px ${100 - (splits[1] ?? 50)}% 0px 0px)` } as CSSProperties}>
                <img src="/site-assets/0f0c94f6a081f247.webp" alt="Illustrative home exterior before a refresh" loading="lazy" />
              </div>
              <span className={"comparison-tag comparison-tag-before"}>BEFORE</span>
              <span className={"comparison-tag comparison-tag-after"}>AFTER</span>
              <span className={"comparison-divider"} aria-hidden="true">
                <span className={"comparison-handle"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-move-horizontal"} aria-hidden="true">
                    <path d="m18 8 4 4-4 4" />
                    <path d="M2 12h20" />
                    <path d="m6 8-4 4 4 4" />
                  </svg>
                </span>
              </span>
              <input type="range" min="0" max="100" step="1" className={"comparison-range"} aria-label="Compare before and after: A welcome return" aria-valuetext={`${splits[1]}% of the before image visible`} value={splits[1]} onChange={event => setSplits(previous => previous.map((value, index) => index === 1 ? Number(event.target.value) : value))} />
            </div>
            <div className={"comparison-card-copy"}>
              <div className={"comparison-card-meta"}>
                <span>02 / EXTERIOR CARE</span>
                <span>DRAG TO COMPARE</span>
              </div>
              <h3>A welcome return</h3>
              <p>Explore the difference careful exterior attention can make.</p>
            </div>
          </article>
          <article className={"comparison-card reveal-ready revealed"}>
            <div className={"comparison-stage"} style={{ "--split": `${splits[2]}%` } as CSSProperties}>
              <img className={"comparison-after"} src="/site-assets/e8c3906bfaa1516a.webp" alt="Illustrative clear pool and clean deck" loading="lazy" />
              <div className={"comparison-before"} style={{ clipPath: `inset(0px ${100 - (splits[2] ?? 50)}% 0px 0px)` } as CSSProperties}>
                <img src="/site-assets/516e5f40933ff0fc.webp" alt="Illustrative pool before cleaning" loading="lazy" />
              </div>
              <span className={"comparison-tag comparison-tag-before"}>BEFORE</span>
              <span className={"comparison-tag comparison-tag-after"}>AFTER</span>
              <span className={"comparison-divider"} aria-hidden="true">
                <span className={"comparison-handle"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-move-horizontal"} aria-hidden="true">
                    <path d="m18 8 4 4-4 4" />
                    <path d="M2 12h20" />
                    <path d="m6 8-4 4 4 4" />
                  </svg>
                </span>
              </span>
              <input type="range" min="0" max="100" step="1" className={"comparison-range"} aria-label="Compare before and after: Ready to enjoy again" aria-valuetext={`${splits[2]}% of the before image visible`} value={splits[2]} onChange={event => setSplits(previous => previous.map((value, index) => index === 2 ? Number(event.target.value) : value))} />
            </div>
            <div className={"comparison-card-copy"}>
              <div className={"comparison-card-meta"}>
                <span>03 / POOL CLEANING</span>
                <span>DRAG TO COMPARE</span>
              </div>
              <h3>Ready to enjoy again</h3>
              <p>Picture an inviting pool and a space ready to use.</p>
            </div>
          </article>
        </div>
        <div className={"comparison-bottom"}>
          <p>These are illustrative concepts, not completed client projects. Actual before and after photos can be added when available.</p>
          <a className={"underlined-link"} href="/contact">Tell us about your space</a>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionLetSTakeCareof() {
  const [requestNotice, setRequestNotice] = useState(false);
  return (
    <section id="quote" className={"quote-section section"}>
      <div className={"\x63ontainer quote-layout"}>
        <div className={"quote-intro reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />ONE LESS THING ON YOUR LIST</span>
          <h2>Let’s take care<br />of <em>your next project.</em></h2>
          <p>Something to clear, clean or completely reimagine? Tell us what you have in mind.</p>
          <div className={"contact-detail"}>
            <span className={"contact-icon"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </span>
            <div>
              <small>Prefer to talk it through?</small>
              <a href="tel:+18573455076">(857) 345-5076</a>
            </div>
          </div>
          <div className={"quote-points"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> Veteran owned &amp; operated</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> Available 24/7</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> A clear scope before work begins</span>
          </div>
          <p className={"quote-small"}>Your property. Your priorities.<br />Our mission is to help with both.</p>
        </div>
        <div className={"quote-panel reveal-ready revealed"}>
          <form className={"quote-form"} onSubmit={event => { event.preventDefault(); setRequestNotice(true); }}>
            <div className={"form-heading"}>
              <span className={"eyebrow"}>LET’S GET STARTED</span>
              <h3>Tell us what you need.</h3>
              <p>A few details help us understand your project.</p>
            </div>
            <div className={"form-row"}>
              <label>Full name <span>*</span><input required autoComplete="name" maxLength={120} placeholder="Your full name" name="name" defaultValue="" /></label>
              <label>Phone number <span>*</span><input type="tel" required autoComplete="tel" maxLength={30} placeholder="(555) 000-0000" name="phone" defaultValue="" /></label>
            </div>
            <div className={"form-row"}>
              <label>Email address <span>*</span><input type="email" required autoComplete="email" maxLength={180} placeholder="you@example.com" name="email" defaultValue="" /></label>
              <label>Property ZIP code{" "}<span>*</span><input required autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" maxLength={10} placeholder="ZIP code" title="Enter a 5-digit US ZIP code, optionally followed by a 4-digit extension." name="zip" defaultValue="" /></label>
            </div>
            <label className={"service-label"} id="service-label">Which service do you need? <span>*</span></label>
            <Select.Root name="service" required>
              <Select.Trigger className="service-select import-service-trigger" aria-labelledby="service-label"><Select.Value placeholder="Choose your service" /><Select.Icon>⌄</Select.Icon></Select.Trigger>
              <Select.Portal><Select.Content position="popper" className="service-options import-service-options"><Select.Viewport>
                {[["junk-removal", "Junk Removal"], ["painting", "Painting"], ["pool-cleaning", "Pool Cleaning"], ["power-washing", "Power Washing"], ["renovating", "Renovating"], ["property-cleaning", "Property Cleaning"], ["tile-replacement-installation", "Tile Replacement & Installation"], ["floor-renovation", "Floor Renovation"], ["demolition", "Demolition"], ["multiple", "More than one service"], ["personal-training", "Personal Training"]].map(([value, label]) => <Select.Item key={value} value={value ?? ""} data-slot="select-item" className="import-service-option"><Select.ItemText>{label}</Select.ItemText><Select.ItemIndicator>✓</Select.ItemIndicator></Select.Item>)}
              </Select.Viewport></Select.Content></Select.Portal>
            </Select.Root>
            <label className={"message-label"}>A little about your project{" "}<span>*</span><textarea name="message" required minLength={10} maxLength={3000} rows={4} placeholder="What needs attention? Include the approximate size, current condition and your preferred timing." /></label>
            <div className={"honeypot"} aria-hidden="true">
              <label>Company website<input tabIndex={-1} autoComplete="off" name="company" defaultValue="" /></label>
            </div>
            <button className={"button button-dark form-submit"} type="submit">Request my quote</button>
            {requestNotice && <p role="status">Online quote requests are not connected yet. Please call (857) 345-5076 to discuss your project.</p>}
            <p className={"form-note"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-check"} aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>We’ll use these details to contact you about your request. <a href="/legal/privacy">Privacy Policy</a></span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionGoodQuestionsClearAnswers() {
  return (
    <section className={"faq-section section"}>
      <div className={"\x63ontainer faq-layout"}>
        <div className={"reveal-ready revealed"}>
          <span className={"eyebrow"}><span className={"label-line"} />A LITTLE MORE CLARITY</span>
          <h2>Good questions.<br /><em>Clear answers.</em></h2>
          <p>Still have something on your mind?<br /><a href="tel:+18573455076">Give us a call.</a></p>
        </div>
        <Accordion.Root type="single" collapsible data-slot="accordion" className={"faq-list"}>
          <Accordion.Item value="faq-0" data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
            <Accordion.Header className={"\x66lex"}>
              <Accordion.Trigger id="radix-_R_d9mi_" data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180"}>Can I request more than one service?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-chevron-down \x70ointer-events-none \x73ize-4 \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as CSSProperties}><div className="pt-0 pb-4">Yes. Choose ‘More than one service’ in the quote form and tell us which services you need. We can review the work together and discuss an appropriate plan.</div></Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="faq-1" data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
            <Accordion.Header className={"\x66lex"}>
              <Accordion.Trigger id="radix-_R_l9mi_" data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180"}>How do I get an estimate?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-chevron-down \x70ointer-events-none \x73ize-4 \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as CSSProperties}><div className="pt-0 pb-4">Complete the quote form with your service, property ZIP code and a brief description, or call (857) 345-5076. We’ll review the scope and may need more details or a property assessment before confirming an estimate.</div></Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="faq-2" data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
            <Accordion.Header className={"\x66lex"}>
              <Accordion.Trigger id="radix-_R_t9mi_" data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180"}>Do you offer urgent service?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-chevron-down \x70ointer-events-none \x73ize-4 \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as CSSProperties}><div className="pt-0 pb-4">You can contact us 24/7. Call to discuss urgent work. Scheduling depends on the service, the location and team availability; a request does not confirm a booking.</div></Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="faq-3" data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
            <Accordion.Header className={"\x66lex"}>
              <Accordion.Trigger id="radix-_R_159mi_" data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180"}>Which areas do you serve?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-chevron-down \x70ointer-events-none \x73ize-4 \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as CSSProperties}><div className="pt-0 pb-4">Include your property ZIP code in your request or call the team. We’ll confirm coverage for your location before arranging the work.</div></Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
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
