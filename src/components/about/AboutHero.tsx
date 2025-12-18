import Aboutusimage from "@/components/about/aboutus.png";

export default function AboutHero() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
        {/* LEFT — TEXT */}
        <div className="space-y-6 max-w-xl">
          <span className="text-sm tracking-wide uppercase text-muted-foreground">
            About Us
          </span>

          <h1 className="font-serif text-5xl leading-tight">
            <div className="relative w-fit mb-3">
              <div
                aria-hidden
                className="
        absolute
        inset-x-0
        top-1/2
        -translate-y-1/2
        h-[1.1em]
        bg-[hsl(35_50%_85%)]
        rounded-sm
      "
              />
              <span className="relative z-10 block underline">Who</span>
            </div>

            <div className="relative w-fit mb-3 ml-[20%]">
              <div
                aria-hidden
                className="
        absolute
        inset-x-0
        top-1/2
        -translate-y-1/2
        h-[1.1em]
        bg-[hsl(35_50%_85%)]
        rounded-sm
      "
              />
              <span className="relative z-10 block underline">we</span>
            </div>

            <div className="relative w-fit ml-[30%]">
              <div
                aria-hidden
                className="
        absolute
        inset-x-0
        top-1/2
        -translate-y-1/2
        h-[1.1em]
        bg-[hsl(35_50%_85%)]
        rounded-sm
      "
              />
              <span className="relative z-10 block underline">are.</span>
            </div>
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            We guide women toward balance and inner wellbeing through mindful
            practices, natural wisdom, and gentle healing experiences.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative">
          {/* Background layer */}
          <div className="absolute -top-10 -left-10 h-full w-2/3 bg-[#FFF9F1] rounded-3xl" />

          {/* Main image */}
          <img
            src={Aboutusimage}
            alt="About us"
            className="relative rounded-3xl object-fill w-1/2 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
