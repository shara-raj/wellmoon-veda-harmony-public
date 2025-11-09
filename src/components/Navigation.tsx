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

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const healingPaths = [
    { name: "Wellness Yoga", href: "#yoga" },
    { name: "Mudra Healing", href: "#mudra" },
    { name: "Aura Healing", href: "#aura" },
    { name: "Virtual Nature Healing", href: "#nature" },
    { name: "Sound Healing", href: "#sound" },
  ];

  return (
    <nav className="relative z-50 bg-transparent border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-semibold text-foreground">
              WellMoon Veda
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Healing Path
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      {healingPaths.map((path) => (
                        <li key={path.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={path.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
              href="#pricing"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Plans & Pricing
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              Login
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
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
              <a
                href="#home"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <div className="px-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">Healing Path</p>
                <div className="flex flex-col space-y-2 pl-4">
                  {healingPaths.map((path) => (
                    <a
                      key={path.name}
                      href={path.href}
                      className="text-sm text-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {path.name}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="#pricing"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plans & Pricing
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#blog"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Login
                </Button>
                <Button size="sm" className="w-full bg-primary text-primary-foreground">
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

export default Navigation;
