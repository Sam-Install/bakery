import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Qualities from "./components/Qualities";
import Abs from "./components/Abs";
import Cake from "./components/Cake";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

export default function Home() {
  return (
<>

<div>

<Navbar/>
<Hero/>
<Qualities/>
<Abs/>
<Cake/>
<Feedback/>
<Footer/>

</div>

</>
  );
}
