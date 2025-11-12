import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "The personalized healing path transformed my energy levels. I feel balanced and calm, even during stressful weeks. A truly essential service!",
    name: "Anya Sharma",
    title: "Marketing Manager",
    rating: 5,
  },
  {
    quote:
      "I was skeptical about virtual sound healing, but it provided deeper relaxation than anything I've tried. WellMoon Veda is a sanctuary.",
    name: "Lena Dubois",
    title: "Software Engineer",
    rating: 5,
  },
  {
    quote:
      "The wellness yoga videos are perfectly tailored for hormonal harmony. My physical and emotional clarity has never been better.",
    name: "Chloe Miller",
    title: "Artist & Designer",
    rating: 5,
  },
  {
    quote:
      "The guided mudra practice sessions are simple yet incredibly powerful. It's easy to fit into a busy schedule. Highly recommend the Basic plan!",
    name: "Sara Kim",
    title: "Educator",
    rating: 4,
  },
  {
    quote:
      "Exceptional value in the Premium plan. The one-on-one sessions were a game-changer for my overall spiritual and physical well-being.",
    name: "Isabella Rossi",
    title: "Entrepreneur",
    rating: 5,
  },
  {
    quote:
      "A great resource for anyone looking to connect ancient wisdom with modern life. The community is supportive and the content is high quality.",
    name: "Emily Chen",
    title: "Student",
    rating: 4,
  },
];

// Helper to calculate the number of cards visible based on screen size
const getCardsPerView = () => {
  if (window.innerWidth >= 1280) return 3; // xl screens
  if (window.innerWidth >= 768) return 2; // md screens and up
  return 1; // mobile/sm screens
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [isHovering, setIsHovering] = useState(false); // New state to pause on hover

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonials.length;

  // Auto-advance logic (runs every 5 seconds)
  useEffect(() => {
    // Only run the timer if not hovering
    if (isHovering) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const lastValidStartIndex = totalSlides - cardsPerView;

        let nextIndex = prevIndex + cardsPerView;

        // Logic to ensure continuous loop that hits the last visible card set
        if (prevIndex === lastValidStartIndex) {
          return 0; // Loop back to start
        }

        if (nextIndex > lastValidStartIndex) {
          return lastValidStartIndex; // Stop exactly at the last full view
        }

        return nextIndex;
      });
    }, 3000); // 5 seconds interval

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [cardsPerView, totalSlides, isHovering]);

  // Function to render rating stars
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "text-gold-light fill-gold-light" : "text-gray-300"}`} />
      ));
  };

  // Calculate the percentage width of a single item relative to the visible area
  // We divide 100% by the number of cards visible at once to get the translation step
  const itemPercentageWidth = 100 / cardsPerView;

  // Calculate the number of dots needed
  const numDots =
    totalSlides > cardsPerView
      ? Math.floor(totalSlides / cardsPerView) + (totalSlides % cardsPerView !== 0 ? 1 : 0)
      : 1;

  // Calculate the current active dot index for navigation control
  const currentActiveDotIndex = Math.floor(currentIndex / cardsPerView);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Hear from Our Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by women who have found balance and clarity through ancient practices.
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="relative overflow-hidden max-w-7xl mx-auto"
          // Pause animation on hover
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out gap-8 px-4"
            style={{
              // Translate by the current index multiplied by the step width
              transform: `translateX(-${currentIndex * itemPercentageWidth}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                // Responsive width for card display (1, 2, or 3 cards visible)
                // Added flex-shrink-0 to prevent shrinking and forced layout
                className="w-full flex-shrink-0 md:w-1/2 xl:w-1/3"
                style={{
                  // Apply explicit width to card element to ensure calculation is pixel perfect
                  minWidth: `${itemPercentageWidth}%`,
                }}
              >
                {/* Testimonial Card */}
                <div className="bg-card p-6 h-full rounded-xl shadow-medium flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-lg font-['Quicksand',_'Poppins',_sans-serif] italic text-foreground flex-grow mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots (for manual control/visual cue) */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array(numDots)
              .fill(0)
              .map((_, i) => {
                // Calculate the index for the dot to navigate to
                let targetIndex = i * cardsPerView;

                // Ensure the last dot points to the last valid starting index
                const lastValidStartIndex = totalSlides - cardsPerView;
                if (targetIndex > lastValidStartIndex) {
                  targetIndex = lastValidStartIndex;
                }

                // Determine if this dot represents the currently viewed slide group
                // Check if the current index is within the range of the slide group represented by dot i
                const isActive = currentIndex >= targetIndex && currentIndex < targetIndex + cardsPerView;

                return (
                  <button
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
                    }`}
                    onClick={() => setCurrentIndex(targetIndex)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
