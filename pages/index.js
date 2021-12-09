import AboutMe from "../components/home/AboutMe";
import ThingsIDo from "../components/home/ThingsIDo";

const Content = [
  { heading: "Things I do", content: "Rishabh Prakash" },
  { heading: "Things not to do", content: "Rishabh Prakash" },
];

export default function Home() {
  return (
    <div>
      <AboutMe />
      <ThingsIDo/>
    </div>
  );
}
