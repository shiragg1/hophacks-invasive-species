import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className={"align-baseline"}>
        <h1 className="text-6xl py-8 font-extrabold">
        Stony Run Restoration
      </h1>
          <div className={"pb-8"}>
          <p className={"text-amber-100 drop-shadow-2xl text-center align-baseline bg-emerald-700 rounded pl-5 pr-5"}>
              A HopHacks and SHIP project bringing together JHU students and Friends of Stony Run
          </p>
          </div>
      </div>
      <div className="relative justify-center">
          <img src="/stony_run_trail.jpg" className={"rounded-lg align-baseline"}/>

          {/*<Image*/}
          {/*    src="/stony_run_trail.jpeg"*/}
          {/*    width={777}*/}
          {/*    height={437}*/}
          {/*    alt={"Picture of the Stony Run trail"}*/}
          {/*    className={"rounded-lg align-baseline"}*/}
          {/*/>*/}
      </div>

      {/*<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">*/}
      {/*  <a*/}
      {/*    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={`mb-3 text-2xl font-semibold`}>*/}
      {/*      Docs{' '}*/}
      {/*      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*        -&gt;*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
      {/*      Find in-depth information about Next.js features and API.*/}
      {/*    </p>*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
      {/*    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={`mb-3 text-2xl font-semibold`}>*/}
      {/*      Learn{' '}*/}
      {/*      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*        -&gt;*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
      {/*      Learn about Next.js in an interactive course with&nbsp;quizzes!*/}
      {/*    </p>*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={`mb-3 text-2xl font-semibold`}>*/}
      {/*      Templates{' '}*/}
      {/*      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*        -&gt;*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
      {/*      Explore the Next.js 13 playground.*/}
      {/*    </p>*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={`mb-3 text-2xl font-semibold`}>*/}
      {/*      Deploy{' '}*/}
      {/*      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*        -&gt;*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
      {/*      Instantly deploy your Next.js site to a shareable URL with Vercel.*/}
      {/*    </p>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </main>
  )
}
