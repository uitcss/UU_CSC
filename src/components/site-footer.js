import Image from "next/image";
import Link from "next/link";

export default function SiteFooter({ showTopPanel = false }) {
  const blueGradient =
    "linear-gradient(135deg,#02365F 0%,#023863 8%,#023B68 17%,#023D6C 25%,#023F70 33%,#024275 42%,#024479 50%,#02477D 58%,#024982 67%,#024C86 75%,#024E8B 83%,#02518F 92%,#025394 100%)";

  return (
    <>
      {showTopPanel && (
        <section className="mx-auto mt-10 h-[684px] w-full max-w-[1216px] overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#e5f4ff] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
          <Image
            src="/assets/source/image.jpg"
            alt="Campus map"
            width={1216}
            height={684}
            className="h-full w-full object-cover"
          />
        </section>
      )}
      <footer style={{ backgroundImage: blueGradient }} className="mt-0 text-white">
        <div className="mx-auto max-w-[1248px] px-4 pb-4 pt-12 md:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Image
                src="/assets/Image%20(UU%20CS%20Club%20Logo)-1.png"
                alt="UU CS Club"
                width={54}
                height={64}
                className="mb-4 h-16 w-[54px]"
              />
              <p className="max-w-[280px] text-sm leading-[22.75px] text-white/90">
                Empowering students through technology, innovation, and collaboration.
              </p>
            </div>
            <div>
              <h3 className="font-[var(--font-raleway)] text-[20px] font-semibold leading-7">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-[var(--font-raleway)] text-[20px] font-semibold leading-7">
                Resources
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>Learning Resources</li>
                <li>Blog</li>
                <li>Code of Conduct</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-[var(--font-raleway)] text-[20px] font-semibold leading-7">
                Connect With Us
              </h3>
              <div className="mt-4 flex gap-3">
                {[
                  { src: "/assets/Icon-5.svg", label: "GitHub" },
                  { src: "/assets/Icon-11.svg", label: "LinkedIn" },
                  { src: "/assets/Icon-2.svg", label: "Twitter" },
                ].map((icon) => (
                  <div key={icon.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Image src={icon.src} alt={icon.label} width={20} height={20} className="h-5 w-5" />
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2 text-sm text-white/90">
                  <Image src="/assets/Icon-1.svg" alt="Email" width={16} height={16} className="h-4 w-4" />
                  uitcss@gmail.com
                </p>
                <p className="flex max-w-[260px] items-start gap-2 text-sm text-white/90">
                  <Image src="/assets/Icon.svg" alt="Location" width={13} height={16} className="mt-0.5 h-4 w-4" />
                  Uttaranchal University, Prem Nagar, Dehradun
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-sm text-white/80 md:flex md:items-center md:justify-between">
            <p>© 2026 UU Computer Science Club. All rights reserved.</p>
            <div className="mt-3 flex gap-6 md:mt-0">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
