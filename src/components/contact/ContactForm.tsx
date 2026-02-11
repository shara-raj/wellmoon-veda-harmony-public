export default function ContactForm() {
  return (
    <form className="space-y-6">
      <h2 className="font-semibold text-2xl">Send a Message</h2>

      <input
        type="text"
        placeholder="Your name"
        className="w-full rounded-lg border px-4 py-3"
      />

      <input
        type="email"
        placeholder="Your email"
        className="w-full rounded-lg border px-4 py-3"
      />

      <textarea
        placeholder="Your message"
        rows={5}
        className="w-full rounded-lg border px-4 py-3"
      />

      <button
        type="submit"
        className="bg-[#d4af37]/70 hover:bg-[#d4af37]/40 rounded-lg border px-6 py-3"
      >
        Send Message
      </button>
    </form>
  );
}
