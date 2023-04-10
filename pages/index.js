import { Inter } from "next/font/google";
import { flags } from "@/lib/flags";
import Card from "@/components/Card";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-zinc-100 dark:bg-zinc-800">
      <div className="container mx-auto grid grid-cols-6 gap-4">
        <div className="grid col-span-4 grid-cols-4 grid-rows-4 gap-5 h-screen  py-4">
         
        </div>
        <div className="col-span-2 gap-5 h-screen py-4">
        
        </div>
      </div>
    </main>
  );
}
