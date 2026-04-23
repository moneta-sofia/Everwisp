import Image from "next/image";
import { tl, tr, bl, br, star } from "@/utils/frame";

type Props = { buttonText: string };
export default function ButtonDecorated({ buttonText }: Props) {
    return (
        <button className="relative font-spirax text-3xl font-medium shadow-goldaura-inset shadow-goldaura btn-magic pointer-events-auto">
            <Image
                src={tl}
                height={75}
                width={75}
                alt="frame"
                className="absolute -top-2 -left-2 h-auto"
            />
            <Image
                src={tr}
                height={75}
                width={75}
                alt="frame"
                className="absolute -top-1 -right-2 h-auto"
            />
            <Image
                src={br}
                height={75}
                width={75}
                alt="frame"
                className="absolute -bottom-1 -right-2 h-auto"
            />
            <Image
                src={bl}
                height={75}
                width={75}
                alt="frame"
                className="absolute -bottom-1 -left-2 h-auto"
            />
            {buttonText}
        </button>
    );
}
