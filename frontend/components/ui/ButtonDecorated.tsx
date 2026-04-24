import Image from "next/image";
import { tl, tr, bl, br, star } from "@/utils/frame";
import Link from "next/link";

type Props = { 
    buttonText: string,
    link: string
};
export default function ButtonDecorated({ buttonText, link}: Props) {
    return (
        <Link className="relative font-spirax text-3xl font-medium shadow-goldaura-inset shadow-goldaura btn-magic pointer-events-auto"
        href={link}
        >
            <Image
                src={tl}
                height={75}
                width={75}
                alt="frame"
                className="absolute -top-2 -left-2"
            />
            <Image
                src={tr}
                height={75}
                width={75}
                alt="frame"
                className="absolute -top-1 -right-2"
            />
            <Image
                src={br}
                height={75}
                width={75}
                alt="frame"
                className="absolute -bottom-1 -right-2"
            />
            <Image
                src={bl}
                height={75}
                width={75}
                alt="frame"
                className="absolute -bottom-1 -left-2"
            />
            {buttonText}
        </Link>
    );
}
