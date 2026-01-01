export default function HeroSection() {
  return (
    <section className="heroSection" id="home">

      <p className="tag fadeIn">HELLO, I AM</p>

      <h1 className="title floatUp">Vijay Shukla</h1>

      <h3 className="subtitle fadeInDelay">
        Passionate Full-Stack Developer crafting seamless web experiences.
      </h3>

      <div className="btnRow">
        <a className="primaryBtn btnPop" href="#projects">View My Work</a>
        <a className="outlineBtn btnPop" href="#contact">Contact Me</a>
      </div>

      <div className="socialRow fadeInDelay2">

        {/* GitHub */}
        <a href="https://github.com/Vijay6615/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>

        {/* LinkedIn */}
        <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        {/* Gmail */}
        <a href="mailto:vishukla19@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>

      </div>

    </section>
  );
}
