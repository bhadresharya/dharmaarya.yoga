import Image from 'next/image'

export default function OnlineYogaClasses() {
  return (
    <section className="online-yoga-classes">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <p className="badge text-dark bg-dark-subtle rounded-pill fs-6 mb-3 px-3" data-aos="fade-up">
            Online Yoga Classes
          </p>
          <h2 className="heading" data-aos="fade-up">
            Experience Mindful Mornings
          </h2>
          <p className="sub-heading col-lg-10 mx-auto" data-aos="fade-up">
            Start your day with energizing and peaceful yoga sessions guided by Dharma Arya. Our online
            classes are designed for all levels and focus on holistic wellness—body, breath, and mind.
          </p>
          <div className="col-12" data-aos="fade-up">
            <a href="https://www.instagram.com/dharmaarya.yoga" target="_blank" rel="noopener noreferrer">
              <figure>
                <Image
                  src="/images/online-yog-class-poster.jpg"
                  className="img-fluid no-effect"
                  alt="Online Yoga Class Poster"
                  width={1200}
                  height={800}
                />
              </figure>
            </a>
            <a
              href="https://www.instagram.com/dharmaarya.yoga"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg bg-dark-subtle text-dark fw-bold rounded-pill px-4 ms-sm-2 mt-2 mt-sm-0"
            >
              <i className="fab fa-instagram fa-lg me-1"></i> DM now on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

