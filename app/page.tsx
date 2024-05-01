import { HeroSection } from "@/components/heroSection/hereSection";
import { Introduction } from "@/components/others/introduction";
import { WhyPuzzle } from "@/components/others/whyPuzzle";
import { AvantajeRecusivitate } from "@/components/dezaAvantaje/AvantajeRecusivitate";
import { Dezavantaje } from "@/components/dezaAvantaje/dezavantaje";
import { IteratieVsRecursivitate } from "@/components/iteratieVsRecursivitate";
import { Table } from "@/components/others/table";
import { Footer } from "@/components/others/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradiant-to-r from-midnightBlack to-slate-900 gap-y-[20rem]">
      <HeroSection />
      <Introduction />
      <WhyPuzzle />
      <AvantajeRecusivitate />
      <Dezavantaje />
      <IteratieVsRecursivitate />
      <Table />
      <Footer />
    </main>
  );
}
