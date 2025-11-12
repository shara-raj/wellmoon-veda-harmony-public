import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming Button is available

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

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the total number of items to show in the carousel (allowing for wrap-around)
  const totalSlides = testimonials.length;
  // Calculate the index limit based on cards shown per view
  const maxIndex = Math.ceil(totalSlides / cardsPerView) * cardsPerView;

  // Auto-advance logic (runs every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move to the next set of cards
        let nextIndex = prevIndex + cardsPerView;

        // If we reach the end, loop back to the start (0)
        if (nextIndex >= totalSlides) {
          nextIndex = 0;
        }

        return nextIndex;
      });
    }, 5000); // 5 seconds interval

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [cardsPerView, totalSlides]); // Dependency on cardsPerView ensures restart on resize

  // Function to render rating stars
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "text-gold-light fill-gold-light" : "text-gray-300"}`} />
      ));
  };

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
        <div className="relative overflow-hidden max-w-7xl mx-auto">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              // Translate by percentage based on current index and total items
              transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                // Responsive width for card display (1, 2, or 3 cards visible)
                className="w-full flex-shrink-0 md:w-1/2 xl:w-1/3 p-4"
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

          {/* Navigation Dots (Optional: for manual control/visual cue) */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array(Math.ceil(totalSlides / cardsPerView))
              .fill(0)
              .map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i * cardsPerView
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
                  }`}
                  onClick={() => setCurrentIndex(i * cardsPerView)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
