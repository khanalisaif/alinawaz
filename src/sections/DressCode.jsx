import { Reveal, Petals } from '../components/ui'
import { wedding } from '../data/wedding'

export default function DressCode() {
  const d = wedding.dressCode

  return (
    <section className="paper relative h-[100svh] w-full flex flex-col items-center justify-start overflow-y-auto px-5 py-10 text-center border-t border-white/20 snap-start pb-24">
      <Petals />
      <Reveal delay={0.1}>
        <h2 className="font-script text-4xl leading-tight text-wine sm:text-5xl">
          Welcome to our Walima
        </h2>
        <p className="mx-auto mt-4 max-w-xs font-serif text-xl leading-relaxed text-wine/85">
          A celebration of love & togetherness
        </p>
        <p className="mx-auto mt-2 max-w-xs font-serif text-lg leading-relaxed text-wine/70">
          We’re delighted to have you with us ✨
        </p>
      </Reveal>

      {/* First Image */}
      <Reveal delay={0.25} className="relative mx-auto mt-8 max-w-sm overflow-hidden rounded-3xl border-2 border-gold/60 bg-[#fff8f2] p-1.5 shadow-xl">
        <div className="overflow-hidden rounded-[22px]">
          <img
            src={d.photo}
            alt="Dress Code Inspiration 1"
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </Reveal>

      {/* Second Image */}
      <Reveal delay={0.3} className="relative mx-auto mt-4 max-w-sm overflow-hidden rounded-3xl border-2 border-gold/60 bg-[#fff8f2] p-1.5 shadow-xl">
        <div className="overflow-hidden rounded-[22px]">
          <img
            src={d.ladiesPhoto}
            alt="Dress Code Inspiration 2"
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </Reveal>
    </section>
  )
}
