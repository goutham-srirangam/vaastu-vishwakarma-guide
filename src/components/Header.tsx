import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Facebook, Instagram, Youtube } from "lucide-react";

const services = [
  { to: "/services/vaastu-education", label: "Vaastu Education" },
  { to: "/services/residential", label: "Residential Projects" },
  { to: "/services/commercial", label: "Commercial Projects" },
  { to: "/services/industrial", label: "Industrial Projects" },
  { to: "/services/farmhouse-plot", label: "Farmhouse or Plot" },
  { to: "/services/restaurant", label: "Restaurant" },
  { to: "/services/hospital", label: "Hospital Project" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top welcome strip */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm md:px-8">
          <span className="font-medium tracking-wide">
            Welcome to Vishwakarma Telugu Vaastu
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] opacity-80">Follow Us</span>
            <a aria-label="YouTube" href="https://www.youtube.com/@vishwakarmateluguvastu" target="_blank" rel="noreferrer" className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 transition hover:bg-primary-foreground/25">
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a aria-label="Instagram" href="#" className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 transition hover:bg-primary-foreground/25">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a aria-label="Facebook" href="#" className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 transition hover:bg-primary-foreground/25">
              <Facebook className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-gold/30 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-temple-gradient font-display text-lg text-primary-foreground shadow-md">
              ॐ
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg text-secondary md:text-xl">
                Vishwakarma Telugu Vaastu
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Vaastu Shastra Consultancy
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-secondary"
                activeProps={{ className: "text-secondary" }}
              >
                Services <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              {servicesOpen && (
                <div className="absolute left-0 top-full w-64 rounded-lg border border-gold/40 bg-card p-2 shadow-xl">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-secondary"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
            >
              Get Consultation
            </Link>
          </nav>

          <button
            aria-label="Toggle menu"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-gold/30 bg-cream lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3">
              <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
              <MobileLink to="/gallery" onClick={() => setOpen(false)}>Gallery</MobileLink>
              <MobileLink to="/services" onClick={() => setOpen(false)}>All Services</MobileLink>
              <div className="ml-4 border-l border-gold/40 pl-3">
                {services.map((s) => (
                  <MobileLink key={s.to} to={s.to} onClick={() => setOpen(false)}>
                    {s.label}
                  </MobileLink>
                ))}
              </div>
              <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-secondary"
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-secondary" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-secondary"
    >
      {children}
    </Link>
  );
}
