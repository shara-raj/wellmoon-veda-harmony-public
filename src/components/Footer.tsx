import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF9F1] border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-12">
          {/* Brand */}
          <div className="space-y-4 mr-3">
            <img
              src="/images/footerbanner.png"
              alt=""
              className="h-7 w-auto md:h-7 lg:h-9 object-contain flex-shrink-0"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blending ancient Vedic wisdom with modern science for women's
              holistic wellness.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-[#d4af37]/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-[#d4af37]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-[#d4af37]/50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-[#d4af37]/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Healing Paths */}
          <div className="">
            <h4 className="font-bold text-xl text-foreground mb-4">
              Healing Paths
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/wellness-yoga"
                  className="text-lg text-muted-foreground hover:text-black transition-colors"
                >
                  Wellness Yoga
                </a>
              </li>
              <li>
                <a
                  href="/mudra-healing"
                  className="text-lg text-muted-foreground hover:text-black transition-colors"
                >
                  Mudra Healing
                </a>
              </li>
              <li>
                <a
                  href="/aura-healing"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Aura Healing
                </a>
              </li>
              <li>
                <a
                  href="/virtual-nature-healing"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Virtual Nature Healing
                </a>
              </li>
              <li>
                <a
                  href="/sound-healing"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Sound Healing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-xl text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/plan-and-pricing"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-xl text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/return-policy"
                  className="text-lg text-muted-foreground hover:text-black  transition-colors"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-lg text-muted-foreground">
          <p>© {currentYear} WellMoon Veda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
