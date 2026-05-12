import Banner from "@/components/Home/Banner";
import TopHosts from "@/components/Home/TopHosts";
import Hosts from "@/components/Home/Hosts";
import ParticleCanvas from "../components/background/ParticleCanvas";
import LightBeams from "../components/background/LightBeams";

export default function Home() {
  return (
    <main>
      <div className="bg-background w-full relative flex flex-col items-center justify-between">
        <ParticleCanvas />
        <LightBeams />
        <Banner />
        <TopHosts />
        <Hosts />
      </div>
    </main>
  );
}
