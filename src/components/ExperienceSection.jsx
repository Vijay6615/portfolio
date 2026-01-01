export default function ExperienceSection() {
  return (
    <section id="experience" className="expSection">

      <h2 className="aboutTitle">Experience</h2>

      <div className="underline"></div>

      <p className="aboutSub">
        My professional career path.
      </p>

      <div className="expList">

        {/* Experience 1 */}
        <div className="expItem fadeIn">
          <h3 className="jobTitle">Engineering Designer</h3>

          <p className="expMeta">
            HS Design (SteriPack) • 2020 – Present
          </p>

          <p className="expDesc">
            Leading design initiatives for next-generation medical devices.
            Collaborating with cross-functional teams to ensure regulatory
            compliance and user-centric design.
          </p>
        </div>

        {/* Experience 2 */}
        <div className="expItem fadeInDelay">
          <h3 className="jobTitle">Senior Manager, Services Sales</h3>

          <p className="expMeta">
            Inspirisys Solutions • 2015 – 2020
          </p>

          <p className="expDesc">
            Managed IT services portfolio, driving business growth and
            relationships across healthcare and manufacturing sectors.
          </p>
        </div>

      </div>
    </section>
  );
}
