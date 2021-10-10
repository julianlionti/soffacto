import { About } from "../components/About";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { VideoBg } from "../components/VideoBg";

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <VideoBg />
      <About />
      <Services />
    </div>
  );
};
