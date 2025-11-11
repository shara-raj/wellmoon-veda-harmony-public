import { useState } from "react";
import { Menu, X } from "lucide-react";

// Mock definitions for running in a single file environment
const Button = ({ children, className = "", ...props }) => (
  <button className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${className}`} {...props}>
    {children}
  </button>
);
// NavigationMenu components are too complex to mock fully,
// so we will simulate their usage with simple <div> and <a> tags
// for the single-file mandate, maintaining the original structure where possible.

// --- TYPE DEFINITIONS ---
type NavPath = {
  name: string;
  href: string;
};

// Define the data arrays outside the component
const mainNavItems: NavPath[] = [
  { name: "Home", href: "#home" },
  { name: "Plans & Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const healingPaths: NavPath[] = [
  { name: "Wellness Yoga", href: "#yoga" },
  { name: "Mudra Healing", href: "#mudra" },
  { name: "Aura Healing", href: "#aura" },
  { name: "Virtual Nature Healing", href: "#nature" },
  { name: "Sound Healing", href: "#sound" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper component for the dropdown content (simulating shadcn structure)
  const HealingPathDropdown = () => (
    <ul className="grid w-[400px] gap-3 p-4 bg-white border rounded-lg shadow-lg">
      {healingPaths.map((path) => (
        <li key={path.name}>
          <a
            href={path.href}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 text-sm font-medium"
            onClick={() => {
              /* Close dropdown logic */
            }}
          >
            {path.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 transition-all duration-300 hover:scale-[1.02]">
            <span className="text-2xl font-serif font-semibold text-gray-800">WellMoon Veda</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Nav Links */}
            {mainNavItems.slice(0, 1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors hover:scale-105 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}

            {/* Simulated Dropdown Menu */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
                Healing Path
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block hover:block">
                <HealingPathDropdown />
              </div>
            </div>

            {mainNavItems.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors hover:scale-105 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-100 hover:scale-105">
              Login
            </Button>
            <Button
              // 🛠️ CORRECTED HOVER COLOR: Using brand-tan-accent (hsl(35 50% 65%))
              className="text-sm bg-brand-tan-base/30 text-gray-800 shadow-md transition-all duration-300 
                       hover:bg-brand-tan-accent hover:text-white hover:scale-105"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white absolute inset-x-0 top-20 shadow-xl transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              {/* Main Nav Items */}
              {mainNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors px-4 py-2 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Healing Path Dropdown Links (flattened for mobile) */}
              <div className="px-4 pt-2 border-t border-gray-100">
                <p className="text-sm font-semibold text-orange-500 mb-2">Healing Path</p>
                <div className="flex flex-col space-y-2 pl-4">
                  {healingPaths.map((path) => (
                    <a
                      key={path.name}
                      href={path.href}
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {path.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Auth Buttons - Mobile */}
              <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-gray-200">
                <Button
                  className="w-full justify-center text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-100 hover:scale-[1.02]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Button>
                <Button
                  // 🛠️ CORRECTED HOVER COLOR: Using brand-tan-accent (hsl(35 50% 65%))
                  className="w-full bg-brand-tan-base/30 text-gray-800 shadow-md transition-all duration-300 
                             hover:bg-brand-tan-accent hover:text-white hover:shadow-lg hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
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

export default Navigation;
