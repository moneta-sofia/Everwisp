import Background from "@/components/InProgress/Background"
import ButtonDecorated from '../components/ui/ButtonDecorated';
import StarsSocials from '../components/InProgress/StarsSocials';

export default function Home() {


  return (
    <div className="relative flex flex-col flex-1 items-center justify-between">
      
      <Background/>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-full-shadow  pt-8 ">Everwisp</h1>
        <h2 className="text-full-ilumination p-3"> Coming soon… A community where creators and players connect, interact, and grow together </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ButtonDecorated buttonText="Support us" link="https://paypal.me/Everwisp"/>
        <StarsSocials/> 
      </div>
    </div>
  );
}
