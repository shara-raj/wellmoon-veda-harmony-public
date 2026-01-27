import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import favicon from "@/assets/images/favicon.png";
import tagline from "@/assets/images/footerbanner.png";
import { Link } from "react-router-dom";

const SecondaryNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const healingPaths = [
    { name: "Wellness Yoga", to: "/wellness-yoga" },
    { name: "Mudra Healing", to: "/mudra-healing" },
    { name: "Aura Healing", to: "/aura-healing" },
    { name: "Virtual Nature Healing", to: "/virtual-nature-healing" },
    { name: "Sound Healing", to: "/sound-healing" },
  ];

  const Navigate = useNavigate();
  const [showLoginCard, setShowLoginCard] = useState(false);

  return (
    <nav className="relative z-50 bg-[#FFF9F1]">
      <div className="container mx-auto px-4 lg:px-8 pb-[10px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 pt-1">
            <img
              src={favicon}
              alt="Wellmoon Veda logo"
              className="h-7 w-auto md:h-10 lg:h-14 object-contain flex-shrink-0"
            />
            <img
              src={tagline}
              alt="Wellmoon Veda logo"
              className="h-5 w-auto md:h-6 lg:h-7 object-contain flex-shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-base font-medium text-foreground hover:text-[#be9d31]
              transition-colors"
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-[#be9d31]">
                    Healing Path
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      {healingPaths.map((path) => (
                        <li key={path.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={path.to}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#d4af37]/70 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-base font-medium leading-none">
                                {path.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/plan-and-pricing"
              className="text-base font-medium text-foreground hover:text-[#be9d31] transition-colors"
            >
              Plans & Pricing
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-foreground hover:text-[#be9d31] transition-colors"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-base font-medium text-foreground hover:text-[#be9d31] transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-foreground hover:text-[#be9d31] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowLoginCard((prev) => !prev)}
                className="bg-[#d4af37]/70 hover:bg-[#d4af37]/40 focus:bg-[#d4af37]/40 text-primary-foreground text-base font-medium"
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
                      to="/sign-up"
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
              className="bg-[#d4af37]/70 text-primary-foreground text-base font-medium hover:bg-[#d4af37]/40 hover:border-[hsl(35_50%_65%)]"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card">
            <div className="flex flex-col space-y-4">
              <Link
                to="/home"
                className="text-base font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-4">
                <p className="text-base font-medium text-muted-foreground mb-2">
                  Healing Path
                </p>
                <div className="flex flex-col space-y-2 pl-4">
                  {healingPaths.map((path) => (
                    <Link
                      key={path.name}
                      to={path.to}
                      className="text-base text-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {path.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/pricing"
                className="text-base font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plans & Pricing
              </Link>
              <Link
                to="/about"
                className="text-base font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-base font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-base font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start
                  bg-[hsl(35_50%_65%)] 
            text-primary-foreground 
            hover:bg-[#e0cbb6]/30 
            hover:text-black 
            shadow-soft
            transition-all duration-300
            hover: scale-105"
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-brand-tan-base/30 text-gray-800 shadow-md transition-all duration-300 
                             hover:bg-brand-tan-accent hover:text-white hover:shadow-lg hover:scale-105" // ⬅️ UPDATED
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SecondaryNavigation;
