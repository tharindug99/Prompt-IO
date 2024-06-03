import { Inter, Sansita } from "next/font/google";

const sansita = Sansita({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <section className="w-full flex justify-center items-center flex-col justify-items-center py-5">
      <div className="flex justify-center items-center">
        <h1 className={`mt-5 text-5xl font-bold text-center ${sansita.className}`}>
          Discover and Share!!
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <h1 className={`mt-5 text-5xl font-weight-900 text-center ${inter.className}`}>
          AI-Powered Prompts
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <h6 className={`mt-5 font-weight-900 text-center ${inter.className}`}>
          Prompt-IO is a platform where you will be able to obtain, better AI prompts..
          <br/>
          Join with us and create AI prompts !! 
        </h6>
      </div>
    </section>
  );
}
