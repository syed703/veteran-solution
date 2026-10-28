import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import { Menu, X, ChevronDown, Check } from "lucide-react";

export function ImportedPageMenu() {
  const [open, setOpen] = useState(false);
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger className="mobile-menu" data-slot="sheet-trigger" aria-label="Open navigation"><Menu size={26} /></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="import-menu-overlay" />
      <Dialog.Content className="menu-sheet import-menu-sheet" data-slot="sheet-content" aria-describedby={undefined}>
        <div data-slot="sheet-header" className="flex flex-col gap-1.5 p-4"><Dialog.Title data-slot="sheet-title" className="font-semibold">Veteran Solutions</Dialog.Title></div>
        <nav className="mobile-nav" aria-label="Mobile navigation" onClick={() => setOpen(false)}>
          <Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/contact">Contact Us</Link><Link to="/legal">Legal Pages</Link>
          <Link className="button button-dark" to="/contact">Request a quote</Link>
          <a className="mobile-phone" href="tel:+18573455076">(857) 345-5076</a>
        </nav>
        <Dialog.Close className="import-menu-close" aria-label="Close"><X size={16} /></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}

const services = [
  ["junk-removal", "Junk Removal"], ["painting", "Painting"], ["pool-cleaning", "Pool Cleaning"],
  ["power-washing", "Power Washing"], ["renovating", "Renovating"], ["property-cleaning", "Property Cleaning"],
  ["tile-replacement-installation", "Tile Replacement & Installation"], ["floor-renovation", "Floor Renovation"],
  ["demolition", "Demolition"], ["multiple", "More than one service"], ["personal-training", "Personal Training"],
];

export function ImportedServiceSelect({ initialService = "" }: { initialService?: string }) {
  const [service, setService] = useState(initialService);
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested && services.some(([value]) => value === requested)) setService(requested);
  }, []);
  return <Select.Root name="service" required value={service} onValueChange={setService}>
    <Select.Trigger data-slot="select-trigger" className="service-select import-service-trigger" aria-labelledby="service-label">
      <Select.Value placeholder="Choose your service" /><Select.Icon><ChevronDown size={16} /></Select.Icon>
    </Select.Trigger>
    <Select.Portal><Select.Content className="import-service-options" position="popper" sideOffset={4}>
      <Select.Viewport>{services.map(([value, label]) => <Select.Item key={value} value={value} className="import-service-option">
        <Select.ItemText>{label}</Select.ItemText><Select.ItemIndicator><Check size={16} /></Select.ItemIndicator>
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