import Button from '@/components/ui/Button';
import Image from 'next/image';
import Services from '@/components/home/Services';
import Approach from '@/components/home/Approach';
import Process from '@/components/home/Process';
import Work from '@/components/home/Work';
import ClosingCta from '@/components/home/ClosingCta';

// Reusable HeroHeading to ensure 100% pixel-perfect alignment between solid & water layers
function HeroHeading({ variant, ariaHidden = false }: { variant: 'solid' | 'water'; ariaHidden?: boolean }) {
  const isWater = variant === 'water';

  return (
    <div
      className={`h-full flex flex-col justify-center py-5 sm:py-6 lg:py-7 pl-6 sm:pl-10 lg:pl-12 xl:pl-16 ${
        isWater ? 'select-none pointer-events-none' : 'select-text pointer-events-none'
      }`}
      aria-hidden={ariaHidden}
    >
      <h1
        aria-label={isWater ? undefined : 'We build products that move your business forward'}
        className="h-[88vh] flex flex-col justify-between font-display font-black tracking-[-0.045em] leading-[0.83] text-left text-[clamp(3.6rem,14.8vh,9.2vw)]"
      >
        <span
          className={`block whitespace-nowrap hero-reveal-line ${isWater ? 'hero-heading-water' : 'text-[#1A1C1E] pointer-events-auto'}`}
          style={{ '--line-i': 0 } as React.CSSProperties}
        >
          WE BUILD
        </span>
        <span
          className={`block whitespace-nowrap hero-reveal-line ${isWater ? 'hero-heading-water' : 'text-[#1A1C1E] pointer-events-auto'}`}
          style={{ '--line-i': 1 } as React.CSSProperties}
        >
          PRODUCTS
        </span>
        <span
          className={`block whitespace-nowrap hero-reveal-line ${isWater ? 'hero-heading-water' : 'text-[#5F6368] pointer-events-auto'}`}
          style={{ '--line-i': 2 } as React.CSSProperties}
        >
          THAT
        </span>
        <span
          className={`block whitespace-nowrap hero-reveal-line ${isWater ? 'hero-heading-water' : 'text-[#5F6368] pointer-events-auto'}`}
          style={{ '--line-i': 3 } as React.CSSProperties}
        >
          MOVE YOUR
        </span>
        <span
          className={`block whitespace-nowrap hero-reveal-line ${isWater ? 'hero-heading-water' : 'text-[#5F6368] pointer-events-auto'}`}
          style={{ '--line-i': 4 } as React.CSSProperties}
        >
          BUSINESS
        </span>
        <span
          className={`block whitespace-nowrap hero-reveal-line ${isWater ? 'hero-heading-water' : 'text-[#5F6368] pointer-events-auto'}`}
          style={{ '--line-i': 5 } as React.CSSProperties}
        >
          FORWARD
        </span>
      </h1>
    </div>
  );
}

// Synchronized split point between left canvas (solid typography) and right workspace visual (water-glass typography)
const HERO_SPLIT_PERCENT = 29;

export default function HomePage() {
  return (
    <div className="w-full">
      
      {/* ========================================================================
           HERO SECTION (Editorial Magazine Layout: Full-Height Headline,
           Calibrated 64vw Workspace Image (36% Split), and Clean Monitor Overlap)
           ======================================================================== */}
      
      {/* ── DESKTOP VIEWPORT (lg+) ── */}
      <section className="hidden lg:block w-full h-screen relative overflow-hidden bg-white">

        {/* Desktop Right Visual Container:
            Positioned at left: HERO_SPLIT_PERCENT% and right: 0 so its boundary perfectly matches
            the text clip-path across all screen sizes and eliminates any viewport-vs-percentage scrollbar offset. */}
        <div
          className="absolute top-0 right-0 bottom-0 overflow-hidden bg-stone-100 z-10"
          style={{ left: `${HERO_SPLIT_PERCENT}%` }}
        >
          {/* Zoomed Workspace: centers on vertical + horizontal monitors */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              transform: 'scale(1.48)',
              transformOrigin: '88% 32%',
            }}
          >
            <Image
              src="/assets/hero-desk.png"
              alt="Modern web development studio workspace with code on screens"
              fill
              priority
              sizes="(min-width: 1024px) 71vw, 1px"
              className="object-cover object-center"
            />
          </div>

          {/* Contrast-enhancing gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 via-24% to-transparent pointer-events-none" />
        </div>

        {/* Layer 1: Solid Ink Headline (Clipped strictly to left canvas: 0 -> HERO_SPLIT_PERCENT%, stacked at z-[1] behind the image container) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          style={{ clipPath: `inset(0 calc(100% - ${HERO_SPLIT_PERCENT}%) 0 0)` }}
        >
          <HeroHeading variant="solid" />
        </div>

        {/* Layer 2: Water Glass Headline (Clipped strictly to image: HERO_SPLIT_PERCENT% -> 100%, stacked at z-20 above the image container) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          style={{ clipPath: `inset(0 0 0 ${HERO_SPLIT_PERCENT}%)` }}
          aria-hidden="true"
        >
          <HeroHeading variant="water" ariaHidden={true} />
        </div>

        {/* Subtext Frosted Glass Card & CTA Buttons (Bottom-Right) - Fluidly scales for standard & large 2K/4K displays */}
        <div className="hero-card-reveal absolute bottom-8 right-6 sm:right-10 lg:bottom-10 lg:right-12 xl:bottom-12 xl:right-14 2xl:bottom-14 2xl:right-16 z-30 max-w-[clamp(430px,24vw,660px)]">
          <div className="hero-glass-card rounded-[clamp(22px,1.3vw,32px)] p-[clamp(1.25rem,1.35vw,2.25rem)]">
            <p className="text-[#1A1C1E] text-[clamp(15px,0.85vw,21px)] leading-[1.62] font-normal tracking-[-0.01em]">
              From high-performance websites to custom software, we combine thoughtful design and reliable engineering to help businesses launch, grow, and stand out.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-[clamp(0.75rem,0.85vw,1.25rem)] mt-[clamp(0.85rem,1vw,1.4rem)]">
            <Button href="#contact" size="hero">Start a project</Button>
            <Button href="#services" variant="light" size="hero" icon="right">Explore our services</Button>
          </div>
        </div>

      </section>

      {/* ── MOBILE & TABLET VIEWPORT (< lg) ──
          Calibrated to occupy exactly 1 viewport (100svh):
          - Minimal top padding to remove awkward tablet gap
          - Vertical-scaling headline that commands upper 50%
          - Snug subtext card + CTA buttons resting cleanly above mobile dock */}
      <section className="lg:hidden relative h-[100svh] max-h-[100svh] flex flex-col justify-between p-4 sm:p-6 md:p-8 pt-3 sm:pt-4 md:pt-5 pb-16 sm:pb-18 bg-white overflow-hidden">
        {/* Visible atmospheric studio workspace background visual (< lg) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-stone-100 z-0 pointer-events-none opacity-65">
          <Image
            src="/assets/hero-desk.png"
            alt="Modern web development studio workspace"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 1px"
            className="object-cover object-center"
          />
          {/* Translucent luminous wash that guarantees text contrast while keeping photo visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 via-45% to-white/85" />
        </div>

        {/* Mobile Headline (Scales with viewport height to command screen without causing overflow) */}
        <div className="relative z-10 flex-1 flex flex-col justify-center min-h-0 py-1">
          <h1
            aria-label="We build products that move your business forward"
            className="h-full max-h-[52vh] flex flex-col justify-between font-display font-black tracking-[-0.045em] leading-[0.82] text-left text-[clamp(2.85rem,7.2vh,4.6rem)] sm:text-[clamp(3.5rem,8vh,5.6rem)] select-text"
          >
            <span className="block text-[#1A1C1E] hero-reveal-line" style={{ '--line-i': 0 } as React.CSSProperties}>WE BUILD</span>
            <span className="block text-[#1A1C1E] hero-reveal-line" style={{ '--line-i': 1 } as React.CSSProperties}>PRODUCTS</span>
            <span className="block text-[#5F6368] hero-reveal-line" style={{ '--line-i': 2 } as React.CSSProperties}>THAT</span>
            <span className="block text-[#5F6368] hero-reveal-line" style={{ '--line-i': 3 } as React.CSSProperties}>MOVE YOUR</span>
            <span className="block text-[#5F6368] hero-reveal-line" style={{ '--line-i': 4 } as React.CSSProperties}>BUSINESS</span>
            <span className="block text-[#5F6368] hero-reveal-line" style={{ '--line-i': 5 } as React.CSSProperties}>FORWARD</span>
          </h1>
        </div>

        {/* Mobile Subtext Card & Responsive CTAs */}
        <div className="hero-card-reveal relative z-10 w-full max-w-[500px] sm:max-w-[560px] shrink-0 pt-2 pb-1">
          <div className="hero-glass-card rounded-[18px] sm:rounded-[22px] p-3.5 sm:p-4.5 mb-2.5 sm:mb-3">
            <p className="text-[#1A1C1E] text-xs sm:text-[13.5px] leading-[1.52] font-normal">
              From high-performance websites to custom software, we combine thoughtful design and reliable engineering to help businesses launch, grow, and stand out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <Button href="#contact" size="sm" className="[--btn-h:44px] sm:[--btn-h:48px] text-[13px] sm:text-sm justify-between sm:justify-center">
              Start a project
            </Button>
            <Button href="#services" variant="light" size="sm" icon="right" className="[--btn-h:44px] sm:[--btn-h:48px] text-[13px] sm:text-sm justify-between sm:justify-center">
              Explore our services
            </Button>
          </div>
        </div>
      </section>

      <Services />
      <Approach />
      <Process />
      <Work />
      <ClosingCta />

    </div>
  );
}
