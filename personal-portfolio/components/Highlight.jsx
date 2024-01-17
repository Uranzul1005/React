export function Highlight() {
  return (
    <div className="lg:flex lg:py-24 lg:px-20 gap-12 py-16">
      <div className="flex justify-center mb-12 order-2 lg:mt-0 lg:mr-10 lg:ml-20 lg:mb-10">
        <img className="max-w-none" src="/images/Pic.jpg" alt="profile" />
      </div>
      <div className="order-1 px-4">
        <h2 className="text-4xl">Hi, I’m Sagar 👋</h2>
        <p className="mt-2 text-slate-500">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
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
  );
}
