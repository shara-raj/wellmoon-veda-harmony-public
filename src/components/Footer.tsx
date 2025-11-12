import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">WellMoon Veda</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Blending ancient Vedic wisdom with modern science for women's holistic wellness.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Healing Paths */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Healing Paths</h4>
            <ul className="space-y-3">
              <li>
                <a href="#yoga" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Wellness Yoga
                </a>
              </li>
              <li>
                <a href="#mudra" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mudra Healing
                </a>
              </li>
              <li>
                <a href="#aura" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Aura Healing
                </a>
              </li>
              <li>
                <a href="#nature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Virtual Nature Healing
                </a>
              </li>
              <li>
                <a href="#sound" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sound Healing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} WellMoon Veda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
