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
import { Navigate, useNavigate, Link } from "react-router-dom";
import favIcon from "@/assets/images/favicon.png";
import tagLine from "@/assets/images/footerbanner.png";

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

  const Navigate = useNavigate();
  const [showLoginCard, setShowLoginCard] = useState(false);

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50
      transition-[colors,shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
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
              : "bg-[#FFF9F1] backdrop-blur-sm rounded-2xl shadow-md px-6 py-3" // floating rounded card on hero
          }
        `}
        >
          <div
            className={`
            flex items-center justify-between
            transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isScrolled ? "h-14" : "h-20"}  // height reduced when scrolled
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
                  src={favIcon}
                  alt="wellmoon veda logo"
                  className="w-auto max-w-full h-10 md:h-12"
                />
                <img
                  src={tagLine}
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
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#d4af37]/70 hover:text-black"
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
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowLoginCard((prev) => !prev)}
                  className="bg-[#d4af37]/70 hover:bg-[#d4af37]/40 focus:bg-[#d4af37]/40 text-primary-foreground text-sm font-medium"
                >
                  Login
                </Button>

                {showLoginCard && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#e5d8c8] p-4 z-50">
                    <h3 className="text-sm font-semibold mb-3 text-foreground">
                      Log in to your account
                    </h3>

                    <form
                      className="space-y-3"
                      onSubmit={(e) => {
                        e.preventDefault();
                        // TODO: call your login API here
                        setShowLoginCard(false);
                      }}
                    >
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          required
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                          placeholder="••••••••"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="sm"
                        className="w-full bg-[#d4af37]/70 text-primary-foreground hover:bg-[#d4af37]/40 mt-2"
                      >
                        Log In
                      </Button>
                    </form>

                    <p className="mt-3 text-[11px] text-muted-foreground text-center">
                      Don’t have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-primary hover:underline"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                )}
              </div>
              <Button
                size="sm"
                onClick={() => Navigate("/sign-up")}
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
