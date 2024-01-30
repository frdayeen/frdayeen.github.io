import Image from "next/image";
import {HomeBanner} from "./components/HomeComponents";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <main className="bg-white w-full min-h-screen">
     <HomeBanner/>
     {/* <Skills/> */}
    </main>
  );
}
