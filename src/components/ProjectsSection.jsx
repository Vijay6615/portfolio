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
          href="https://newecommerce-ten.vercel.app/"  // 👉 yahan apna link daalo
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
          href="https://example-iot-project.com"   // 👉 yahan IoT project link
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectCard fadeInDelay">
            <img
              src="https://images.unsplash.com/photo-1580281658622-8ff61f5d8ecd"
              alt="IoT Vitals Monitor"
              className="projectImg"
            />

            <h3 className="projectTitle">IoT Vitals Monitor</h3>

            <p className="projectDesc">
              Wearable monitoring device with remote patient alerts and cloud
              dashboard.
            </p>

            <p className="projectTags">IoT • Cloud • Healthcare</p>
          </div>
        </a>

        {/* Project 3 */}
        <a
          href="https://education-strategy-site.com"   // 👉 yahan education project link
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectCard fadeInDelay2">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
              alt="Education Expansion Strategy"
              className="projectImg"
            />

            <h3 className="projectTitle">Education Expansion Strategy</h3>

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
