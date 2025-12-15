import { useState } from "react";
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
              className="text-sm font-medium text-foreground hover:text-[#be9d31]
              transition-colors"
            >
              Home
            </Link>

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
                            <Link
                              to={path.to}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#d4af37]/70 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
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
              className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
            >
              Plans & Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground hover:text-[#be9d31] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-[#d4af37]/70 hover:bg-[#d4af37]/40 focus:bg-[#d4af37]/40 
            text-primary-foreground text-sm font-medium"
            >
              Login
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#d4af37]/70 hover:bg-[#d4af37]/40 focus:bg-[#d4af37]/40 
            text-primary-foreground text-sm font-medium"
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
                to="#home"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Healing Path
                </p>
                <div className="flex flex-col space-y-2 pl-4">
                  {healingPaths.map((path) => (
                    <Link
                      key={path.name}
                      to={path.to}
                      className="text-sm text-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {path.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="#pricing"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plans & Pricing
              </Link>
              <Link
                to="#about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="#blog"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="#contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
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
