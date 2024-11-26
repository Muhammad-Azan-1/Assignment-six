
import Hero from "./Components/hero/hero";
import LogoSec from './Components/logo-sec/Logo-sec'
import Courses from './Components/courses/Courses'
import Achievments from "./Components/achievements/Achievments";
import Courses2 from "./Components/courses2/Courses2";
import Team from "./Components/team/Team";
import  Testimonials from "./Components/testimonials/Testimonials"
import Footer from "./Components/footer/Footer"
export default function Home() {
  return (
    <div>
      <Hero />
      <LogoSec />
      <Courses />
      <Achievments />
      <Courses2 />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
