import { Link } from "@tanstack/react-router";
import { Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/30 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-temple-gradient font-display text-lg shadow-md">
              ॐ
            </span>
            <span className="font-display text-xl">Vishwakarma Telugu Vaastu</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-secondary-foreground/80">
            Authentic Vaastu Shastra guidance for homes, businesses and sacred spaces —
            rooted in tradition, applied with care.
          </p>
          <a
            href="https://www.youtube.com/@vishwakarmateluguvastu"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Youtube className="h-4 w-4" /> Subscribe on YouTube
          </a>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-secondary-foreground/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent">Our Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Reach Us</h4>
          <ul className="mt-3 space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> <a href="tel:+917330961291" className="hover:text-accent">+91 73309 61291</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> <a href="mailto:vishvakarmavastu12@gmail.com" className="hover:text-accent break-all">vishvakarmavastu12@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Andhra Pradesh / Telangana, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-secondary-foreground/60 md:px-8">
          © {new Date().getFullYear()} Vishwakarma Telugu Vaastu. Sarvē janāḥ sukhinō bhavantu.
        </div>
      </div>
    </footer>
  );
}
