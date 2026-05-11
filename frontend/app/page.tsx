import Banner from "@/components/Home/Banner";
import TopHosts from "@/components/Home/TopHosts";
import Hosts from "@/components/Home/Hosts";

export default function Home() {
  return (
    <div className="bg-background w-full relative flex flex-col items-center justify-between">
      <Banner />
      <TopHosts />
      <Hosts />
    </div>
  );
}
