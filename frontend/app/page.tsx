import Banner from "@/components/Home/Banner";
import TopHosts from '@/components/Home/TopHosts';


export default function Home() {


  return (
    <div className="bg-background w-full relative flex flex-col items-center justify-between">
      <Banner/>
      <TopHosts/>
    </div>
  );
}
