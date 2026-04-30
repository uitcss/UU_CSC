import Image from "next/image";
import PageShell from "@/components/page-shell";

export default function ContactPage() {
  const blueGradient =
    "linear-gradient(90deg,#02365F 0%,#023863 8%,#023B68 17%,#023D6C 25%,#023F70 33%,#024275 42%,#024479 50%,#02477D 58%,#024982 67%,#024C86 75%,#024E8B 83%,#02518F 92%,#025394 100%)";

  return (
    <PageShell
      eyebrow="Contact Us"
      eyebrowIcon={
        <Image src="/assets/Icon-15.svg" alt="Contact icon" width={16} height={16} className="h-4 w-4" />
      }
      title="Get in Touch"
      description="Have questions about the club? Want to collaborate on a project? We'd love to hear from you. Reach out and let's build something amazing together!"
      centeredHero
      showFooterMap
    >
      <section className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="flex items-center gap-2 font-[var(--font-raleway)] text-[36px] font-bold leading-[46.8px] text-[#122D43]">
            <Image src="/assets/Icon-14.svg" alt="Sparkles" width={20} height={20} className="h-5 w-5" />
            Send us a Message
          </h2>
          <form className="mt-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium leading-[14px] text-[#122D43]">
                  Name
                </span>
                <input
                  type="text"
                  className="h-9 w-full rounded-md border border-[#e5e7eb] bg-white px-3 py-1 text-sm leading-5 text-[#122D43] outline-none ring-[#025394] transition focus:ring-2"
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium leading-[14px] text-[#122D43]">
                  Email
                </span>
                <input
                  type="email"
                  className="h-9 w-full rounded-md border border-[#e5e7eb] bg-white px-3 py-1 text-sm leading-5 text-[#122D43] outline-none ring-[#025394] transition focus:ring-2"
                  placeholder="your.email@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-medium leading-[14px] text-[#122D43]">
                Subject
              </span>
              <input
                type="text"
                className="h-9 w-full rounded-md border border-[#e5e7eb] bg-white px-3 py-1 text-sm leading-5 text-[#122D43] outline-none ring-[#025394] transition focus:ring-2"
                placeholder="What is this about?"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium leading-[14px] text-[#122D43]">
                Message
              </span>
              <textarea
                rows={4}
                className="w-full rounded-md border border-[#e5e7eb] bg-white px-3 py-2 text-sm leading-5 text-[#122D43] outline-none ring-[#025394] transition focus:ring-2"
                placeholder="Tell us what's on your mind..."
              />
            </label>
            <button
              type="button"
              style={{ backgroundImage: blueGradient }}
              className="flex h-9 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-medium tracking-[0.14px] text-white"
            >
              <Image src="/assets/Icon-10.svg" alt="Send" width={16} height={16} className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="font-[var(--font-raleway)] text-[36px] font-bold leading-[46.8px] text-[#122D43]">
            Contact Information
          </h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-[#e5e7eb] bg-white p-4">
              <div className="flex items-start gap-4">
                <div
                  style={{ backgroundImage: blueGradient }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
                >
                  <Image src="/assets/Icon-1.svg" alt="Email" width={16} height={16} className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-base font-medium leading-[25.6px] text-[#122D43]">Email</p>
                  <p className="mt-1 text-sm leading-5 text-[#02365F]">uitcss@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-[#e5e7eb] bg-white p-4">
              <div className="flex items-start gap-4">
                <div
                  style={{ backgroundImage: blueGradient }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
                >
                  <Image src="/assets/Icon.svg" alt="Location" width={13} height={16} className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-base font-medium leading-[25.6px] text-[#122D43]">Location</p>
                  <p className="mt-1 text-sm leading-5 text-[#02365F]">
                    Uttaranchal University, Prem Nagar, Dehradun - 248007, Uttarakhand
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-[#e5e7eb] bg-white p-4">
              <div className="flex items-start gap-4">
                <div
                  style={{ backgroundImage: blueGradient }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
                >
                  <Image src="/assets/Icon-9.svg" alt="Clock" width={24} height={24} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium leading-[25.6px] text-[#122D43]">
                    Office Hours
                  </p>
                  <p className="mt-1 text-sm leading-5 text-[#02365F]">Mon - Fri: 9:30 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-[#e5e7eb] pt-8">
            <h3 className="font-[var(--font-raleway)] text-2xl font-semibold leading-[33.6px] text-[#122D43]">
              Follow Us
            </h3>
            <p className="mt-3 text-sm leading-5 text-[#02365F]">
              Stay connected with us on social media for updates, events, and more.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { src: "/assets/Icon-8.svg", label: "GitHub" },
                { src: "/assets/Icon-7.svg", label: "LinkedIn" },
                { src: "/assets/Icon-6.svg", label: "Twitter" },
                { src: "/assets/Icon-4.svg", label: "Instagram" },
                { src: "/assets/Icon-3.svg", label: "YouTube" },
              ].map((icon) => (
                <div
                  key={icon.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#e5e7eb] bg-white text-xs font-semibold text-[#122D43]"
                >
                  <Image src={icon.src} alt={icon.label} width={20} height={20} className="h-5 w-5" />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-[#02539433] bg-[linear-gradient(135deg,rgba(2,54,95,0.05)_0%,rgba(2,83,148,0.05)_100%)] p-4">
              <p className="text-sm leading-5">
                <span className="font-semibold text-[#025394]">Join our community!</span>{" "}
                <span className="text-[#122D43CC]">
                  Connect with fellow students, share projects, and stay updated on upcoming
                  events and workshops.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
