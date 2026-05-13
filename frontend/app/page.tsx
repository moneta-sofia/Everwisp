import Banner from "@/components/Home/Banner";
import TopHosts from "@/components/Home/TopHosts";
import Hosts from "@/components/Home/Hosts";
import ParticleCanvas from "../components/background/ParticleCanvas";
import LightBeams from "../components/background/LightBeams";
import Header from "@/components/layout/Header/Header";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <div className="w-full relative flex flex-col items-center justify-between">
        <ParticleCanvas />
        <LightBeams />
        <Banner />
        <TopHosts />
        <Hosts />
      </div>
    </main>
  );
}
