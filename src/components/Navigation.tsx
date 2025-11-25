import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const healingPaths = [
    { name: "Wellness Yoga", href: "/wellness-yoga" },
    { name: "Mudra Healing", href: "/mudra-healing" },
    { name: "Aura Healing", href: "/aura-healing" },
    { name: "Virtual Nature Healing", href: "/virtual-nature-healing" },
    { name: "Sound Healing", href: "/sound-healing" },
  ];

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50
      transition-colors transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${
        isScrolled
          ? "bg-[#FFF9F1] shadow-md"
          : "bg-transparent backdrop-blur-md"
      }
    `}
    >
      <div
        className={`container mx-auto px-2 py-2 lg:px-8 transition-[padding,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1) ${
          isScrolled ? "py-1" : "py-3 mt-2"
        }]`}
      >
        <div
          className={`
          transition-all duration-300
          ${
            isScrolled
              ? "rounded-none px-3 py-1" // full-width bar, smaller padding
              : "bg-[#FFF9F1]/50 backdrop-blur-sm rounded-2xl shadow-md px-6 py-3" // floating rounded card on hero
          }
        `}
        >
          <div
            className={`
            flex items-center justify-between
            transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isScrolled ? "h-14" : "h-20"}  // 👈 height reduced when scrolled
          `}
          >
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <div
                className={`logoClass flex items-center w-32 md:w-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isScrolled
                    ? "flex-row items-center space-x-2 scale-95"
                    : "flex-col items-center space-y-1 scale-100"
                }`}
              >
                <img
                  src="/images/favicon.png"
                  alt="wellmoon veda logo"
                  className="w-auto max-w-full h-10 md:h-12"
                />
                <img
                  src="/images/footerbanner.png"
                  alt="wellmoon veda tagline"
                  className="w-auto max-w-full h-5 md:h-6"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                Home
              </a>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-[#be9d31]">
                      Healing Path
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-card">
                        {healingPaths.map((path) => (
                          <li key={path.name}>
                            <NavigationMenuLink asChild>
                              <a
                                href={path.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#be9d31] hover:text-white"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {path.name}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                href="/plan-and-pricing"
                className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                Plans & Pricing
              </a>
              <a
                href="/about"
                className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                About
              </a>
              <a
                href="/blog"
                className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-[#d4af37]/70 text-primary-foreground text-sm font-medium hover:bg-[#d4af37]/40 hover:border-[hsl(35_50%_65%)]"
              >
                Login
              </Button>
              <Button
                size="sm"
                className="bg-[#d4af37]/70 text-primary-foreground text-sm font-medium hover:bg-[#d4af37]/40 hover:border-[hsl(35_50%_65%)]"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card">
            <div className="flex flex-col space-y-4">
              {/* ... same as before ... */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
