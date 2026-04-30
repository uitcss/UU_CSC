import Navbar from "./navbar";
import SiteFooter from "./site-footer";

export default function PageShell({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  children,
  centeredHero = false,
  showFooterMap = false,
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,rgba(229,244,255,0.30)_100%)]">
        <section className="mx-auto max-w-[1248px] px-4 pb-8 pt-24 md:px-8">
          <div className={centeredHero ? "mb-10 text-center" : "mb-10 max-w-3xl"}>
            <p className="mb-4 inline-flex items-center rounded-full bg-[#0253941A] px-4 py-2 text-sm font-medium text-[#025394]">
              {eyebrowIcon ? <span className="mr-2 inline-flex">{eyebrowIcon}</span> : null}
              {eyebrow}
            </p>
            <h1 className="font-[var(--font-raleway)] text-5xl font-bold leading-[57.6px] text-[#122D43]">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-[672px] text-base leading-[25.6px] text-[#02365F]">
              {description}
            </p>
          </div>
          {children}
        </section>
      </main>
      <SiteFooter showTopPanel={showFooterMap} />
    </>
  );
}
