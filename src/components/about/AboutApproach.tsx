export default function AboutApproach() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className=" text-xl">Mind</h3>
          <p className="text-lg text-muted-foreground">
            Practices that calm the nervous system and create mental clarity.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className=" text-xl">Body</h3>
          <p className="text-lg text-muted-foreground">
            Gentle movement and breath to support hormonal and physical balance.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className=" text-xl">Energy</h3>
          <p className="text-lg text-muted-foreground">
            Subtle healing techniques that restore energetic harmony.
          </p>
        </div>
      </div>
    </section>
  );
}
