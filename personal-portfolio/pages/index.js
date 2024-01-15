import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Topic } from "@/components/Topic";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="introduction">
        <div className="cover">
          <h1>Hi, I’m Sagar 👋</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <br />
          <p>Ahmedabad, India</p>
          <p>Available for new projects</p>
          <br />
        </div>
        <img src="/Pic.png" />
      </div>
      <Topic />
      <Footer />
    </div>
  );
}
