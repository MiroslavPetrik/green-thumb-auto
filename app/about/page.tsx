import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white">
        About
      </h1>
      <span className="text-lg font-bold uppercase tracking-wide text-lime-500">
        Project
      </span>
      <p className="max-w-xl text-lg font-bold text-white">
        <a
          href="https://github.com/MiroslavPetrik/green-thumb-auto"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-8"
        >
          GREEN THUMB AUTO: Touch Grass
        </a>{" "}
        is a GTA VI minigame:
      </p>
      <ul className="text-lg font-bold text-white">
        <li>📸 Explore areas and collect photos of rare plant cultivars.</li>
        <li>✂️ Edit the photos and are save into your herbarium.</li>
        <li>🌷 Complete the minigame by capturing all the plants.</li>
      </ul>

      <span className="text-lg font-bold uppercase tracking-wide text-lime-500">
        Author
      </span>
      <Image
        src="/avatar.png"
        className="rounded-full size-30"
        alt="Miroslav Petrik"
        width={320}
        height={320}
      />
      <a
        href="https://github.com/MiroslavPetrik"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold uppercase underline underline-offset-8 tracking-wide text-white hover:text-lime-500"
      >
        MiroslavPetrik
      </a>
      <span className="text-lg font-bold uppercase tracking-wide text-lime-500">
        Featuring
      </span>
      <a
        href="https://github.com/unlayer/react-image-editor"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-bold underline underline-offset-8 uppercase tracking-wide text-white hover:text-lime-500"
      >
        @unlayer/react-image-editor
      </a>
      <span className="text-lg font-bold uppercase tracking-wide text-lime-500">
        Shipped
      </span>
      <p className="text-lg font-extrabold uppercase tracking-wide text-white">
        <time> September &apos;26</time>...before GTA VI
      </p>
    </div>
  );
}
