export default function ProjectsSection() {
  return (
    <section id="projects" className="projectsSection">

      <h2 className="aboutTitle">Featured Projects</h2>

      <div className="underline"></div>

      <p className="aboutSub">
        A selection of my recent work.
      </p>

      <div className="projectsGrid">

        {/* Project 1 */}
        <a
          href="https://navodaya-puja.vercel.app/"  // 👉 yahan apna link daalo
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          <div className="projectCard fadeIn">
            <img
              src="/project1.jpg"
              alt="Puja Website"
              className="projectImg"
            />

            <h3 className="projectTitle">Puja Website</h3>

            <p className="projectDesc">
              Sacred pujas for every occasion. Customized services to meet your spiritual needs.
            </p>

            <p className="projectTags">Pujas • Cultural • Hindu</p>
          </div>
        </a>

        {/* Project 2 */}
        <a
          href="https://real-time-stock-protfolio-56l6.vercel.app/"   // 👉 yahan IoT project link
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectCard fadeInDelay">
            <img
              src="/project2.jpg"
              alt="Real-Time Stock Tracker"
              className="projectImg"
            />

            <h3 className="projectTitle">Real-Time Stock Tracker</h3>

            <p className="projectDesc">
              Wearable monitoring device with remote patient alerts and cloud
              dashboard.
            </p>

            <p className="projectTags">IoT • Cloud • Stock Market</p>
          </div>
        </a>

        {/* Project 3 */}
        <a
          href="https://mineclaw.vercel.app/"   // 👉 yahan education project link
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectCard fadeInDelay2">
            <img
              src="/project3.jpg"
              alt="Drug Prevention and Awareness System"
              className="projectImg"
            />

            <h3 className="projectTitle">Drug Prevention and Awareness System</h3>

            <p className="projectDesc">
              Strategic roadmap increasing school footprint across 5 regions
              leading to 40% enrollment growth.
            </p>

            <p className="projectTags">Strategy • Leadership • Business</p>
          </div>
        </a>

      </div>
    </section>
  );
}
