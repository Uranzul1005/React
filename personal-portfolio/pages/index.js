import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="container lg:mx-auto mx-4">
      <Header />
      <div className="lg:flex my-28 gap-12">
        <div className="flex justify-center mt-16 mb-12 order-2 lg:mt-0 lg:mr-10 lg:ml-20 lg:mb-10 object-cover">
          <img src="/images/Pic.jpg" alt="profile" />
        </div>
        <div className="order-1">
          <h2 className="text-4xl">Hi, I’m Sagar 👋</h2>
          <p className="mt-2 text-slate-500">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className=" text-slate-500 my-12">
            <div className="flex">
              <img src="/icons/icon.jpg" />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex">
              <div>
                <img src="/icons/Online.jpg" />
              </div>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/icons/Github.jpg" />
            <img src="/icons/Twitter.jpg" />
          </div>
        </div>
      </div>
      <div>
        <p>About me</p>
        <div>
          <div className="flex justify-center">
            <img src="/images/Fullpic.jpg" />
          </div>

          <div>
            <h2>Curious about me? Here you have it:</h2>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <br />
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <br />
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development
            </p>
            <br />
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <br />
            <p>Finally, some quick bits about me</p>
            <br />
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
