import Image from "next/image";
import { tl, tr, bl, br } from "@/utils/frame";
import Link from "next/link";

type Props = {
  buttonText: string;
  link: string;
};
export default function ButtonDecorated({ buttonText, link }: Props) {
  const frameImageStyle = { width: "auto", height: "auto" };

  return (
    <Link
      className="relative mb-10 font-spirax text-3xl font-medium shadow-goldaura-inset shadow-goldaura btn-magic pointer-events-auto"
      href={link}
    >
      <Image src={tl} height={10} width={10} alt="frame" className="absolute -top-2 -left-2" style={frameImageStyle} />
      <Image src={tr} height={10} width={10} alt="frame" className="absolute -top-1 -right-2" style={frameImageStyle} />
      <Image src={br} height={10} width={10} alt="frame" className="absolute -bottom-1 -right-2" style={frameImageStyle} />
      <Image src={bl} height={10} width={10} alt="frame" className="absolute -bottom-1 -left-2" style={frameImageStyle} />
      {buttonText}
    </Link>
  );
}
