import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <div className="col-md-11 offset-md-1">
            <div className="row">
              <div className="col-lg-11">
                <p className="lead col-lg-10 mx-auto" data-aos="fade-up">
                  Namaste!
                </p>
                <h1 className="heading" data-aos="fade-up">
                  I am Dharma Arya
                </h1>
                <p className="sub-heading col-lg-10 mx-auto" data-aos="fade-up">
                  A PhD scholar at IIT Mandi, researching the role of Trataka meditation in
                  enhancing mental well-being through the lens of Indian Knowledge Systems.
                </p>
                <a
                  href="#letsTalk"
                  className="btn bg-dark-subtle text-dark fw-bold rounded-pill px-4 mb-5"
                  data-aos="fade-up"
                >
                  Let&apos;s connect
                </a>
              </div>
            </div>
          </div>
          <div className="col-12" data-aos="fade-up">
            <figure>
              <Image
                src="/images/header-hero.png"
                className="img-fluid"
                alt=""
                width={1200}
                height={600}
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

