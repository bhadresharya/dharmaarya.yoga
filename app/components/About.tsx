export default function About() {
  return (
    <section className="about">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <p className="badge text-dark bg-dark-subtle rounded-pill fs-6 mb-3 px-3" data-aos="fade-up">
            About me
          </p>
          <h2 className="heading" data-aos="fade-up">
            Blending ancient wisdom with modern inquiry to explore the inner landscape of the mind
          </h2>
          <p className="sub-heading col-lg-10 mx-auto" data-aos="fade-up">
            With a background in Yoga and a deep interest in Indian Knowledge Systems. I focus on how
            traditional practices like Trataka meditation can support mental well-being in today&apos;s
            world.
          </p>
          <ul className="service-list text-start">
            <li className="row" data-aos="fade-up">
              <div className="col-md-4">
                <h5 className="mb-3 mb-md-0 text-md-end fw-bold">Research Interests</h5>
              </div>
              <div className="col-md-8">
                <ul className="nav flex-column">
                  <li className="nav-item">Trataka meditation and
                    cognitive-emotional health</li>
                  <li className="nav-item">Yogic psychology and Indian
                    epistemology</li>
                  <li className="nav-item">Mental health through Indian
                    Knowledge Systems</li>
                  <li className="nav-item">Interdisciplinary research
                    grounded in tradition</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

