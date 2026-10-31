import { useCmsValues } from '@/lib/cms';
import { sharedServices as services, sharedFaqs as faqs } from '@/lib/cms-shared';
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import { Menu, X, ChevronDown, Check } from "lucide-react";

export function ImportedPageMenu() {
  const cms = useCmsValues("page:shared");
  const [open, setOpen] = useState(false);
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger className="mobile-menu" data-slot="sheet-trigger" aria-label={cms("f0001", "Open navigation")}><Menu size={26} /></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="import-menu-overlay" />
      <Dialog.Content className="menu-sheet import-menu-sheet" data-slot="sheet-content" aria-describedby={undefined}>
        <div data-slot="sheet-header" className="flex flex-col gap-1.5 p-4"><Dialog.Title data-slot="sheet-title" className="font-semibold import-menu-brand"><img src={cms("f0002", "/site-assets/f0a3c5858a327278.webp")} alt={cms("f0003", "Veteran Solutions and Services LLC")} width="80" height="44" /></Dialog.Title></div>
        <nav className="mobile-nav" aria-label={cms("f0004", "Mobile navigation")} onClick={() => setOpen(false)}>
          <Link to="/">{cms("f0005", "Home")}</Link><Link to="/about">{cms("f0006", "About Us")}</Link><Link to="/services">{cms("f0007", "Services")}</Link><Link to="/contact">{cms("f0008", "Contact Us")}</Link><Link to="/legal">{cms("f0009", "Legal Pages")}</Link>
          <Link className="button button-dark" to="/contact">{cms("f0010", "Request a quote")}</Link>
          <a className="mobile-phone" href={cms("f0011", "tel:+18573455076")}>{cms("f0012", "(857) 345-5076")}</a>
        </nav>
        <Dialog.Close className="import-menu-close" aria-label={cms("f0013", "Close")}><X size={16} /></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}


export function ImportedServiceSelect({ initialService = "" }: { initialService?: string }) {
  const cms = useCmsValues("page:shared");
  const [service, setService] = useState(initialService);
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested && services.some((entry) => entry[0] === requested)) setService(requested);
  }, []);
  return <Select.Root name="service" required value={service} onValueChange={setService}>
    <Select.Trigger data-slot="select-trigger" className="service-select import-service-trigger" aria-labelledby="service-label">
      <Select.Value placeholder={cms("f0014", "Choose your service")} /><Select.Icon><ChevronDown size={16} /></Select.Icon>
    </Select.Trigger>
    <Select.Portal><Select.Content className="import-service-options" position="popper" sideOffset={4}>
      <Select.Viewport>{services.map(([value, label]) => <Select.Item key={value} value={value} className="import-service-option">
        <Select.ItemText>{cms(`service-${value}`, label)}</Select.ItemText><Select.ItemIndicator><Check size={16} /></Select.ItemIndicator>
      </Select.Item>)}</Select.Viewport>
    </Select.Content></Select.Portal>
  </Select.Root>;
}

export function useImportedQuoteNotice() {
  const [notice, setNotice] = useState(false);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(true);
  }
  return { onSubmit, notice };
}


const accordionContentStyle = {
  "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
  "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
} as CSSProperties;

export function ImportedFaq() {
  const cms = useCmsValues('page:shared');
  return <Accordion.Root type="single" collapsible data-slot="accordion" className={"faq-list"}>
    {faqs.map(([question, answer], index) => <Accordion.Item key={question} value={`faq-${index}`} data-slot="accordion-item" className={"\x62order-b \x6cast:\x62order-b-0"}>
      <Accordion.Header className={"\x66lex"}>
        <Accordion.Trigger data-slot="accordion-trigger" className={"\x66lex \x66lex-1 \x69tems-start \x6austify-between \x67ap-4 \x72ounded-md \x70y-4 \x74ext-left \x74ext-sm \x66ont-medium \x74ransition-all \x6futline-none \x68over:\x75nderline \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-[\x33px] \x66ocus-visible:\x72ing-ring/\x350 \x64isabled:\x70ointer-events-none \x64isabled:\x6fpacity-50 [&[\x64ata-state=\x6fpen]>\x73vg]:\x72otate-180">{cms(`faq-${index}-question`, question ?? "")}<ChevronDown size={16} className={"\x70ointer-events-none \x73hrink-0 \x74ranslate-y-0.\x35 \x74ext-muted-foreground \x74ransition-transform \x64uration-200"} aria-hidden="true" /></Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content data-slot="accordion-content" className={"\x6fverflow-hidden \x74ext-sm \x64ata-[\x73tate=\x63losed]:\x61nimate-accordion-up \x64ata-[\x73tate=\x6fpen]:\x61nimate-accordion-down"} style={accordionContentStyle}><div className="pt-0 pb-4">{cms(`faq-${index}-answer`, answer ?? "")}</div></Accordion.Content>
    </Accordion.Item>)}
  </Accordion.Root>;
}