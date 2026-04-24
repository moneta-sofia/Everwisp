import Background from "@/components/InProgress/Background"
import ButtonDecorated from '../components/ui/ButtonDecorated';
import StarsSocials from '../components/InProgress/StarsSocials';

export default function Home() {


  return (
    <div className="relative flex p-8 flex-col flex-1 items-center justify-between">
      
      <Background/>
      <div>
        <h1 className="text-full-shadow mb-5">Page in progress </h1>
        <h2> Help us to improve our page and community!</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ButtonDecorated buttonText="Donate Us" link="https://paypal.me/Everwisp"/>
        <StarsSocials/> 
      </div>
    </div>
  );
}
