import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function StartPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Image
        src="/hero.png"
        alt="Touch Grass hero image"
        className="max-w-4xl w-full p-4 xl:p-8"
        width={1536}
        height={1024}
      />
      <header className="text-center mb-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-white">The plants await you!</h1>
        <p className="text-xl text-white">
          Come and <i>touch grass</i> of the Liberty City.
        </p>
      </header>

      <Link
        href="/map"
        className={cn(
          "block px-20 py-4 text-center bg-lime-500 text-[32px] leading-none font-bold uppercase transition-colors duration-300 text-slate-900 hover:bg-white",
        )}
      >
        play Game
      </Link>
    </div>
  );
}
