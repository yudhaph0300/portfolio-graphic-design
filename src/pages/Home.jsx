import "../style/home.css";
import profile from "../assets/profile.png";
import model1 from "../assets/model-1.png";
import model2 from "../assets/model-2.png";
import model3 from "../assets/model-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import socialMedia from "../assets/works/social-media.json";

function Home() {
  const slides = [
    {
      id: 1,
      image: model1,
      title: "Image 1",
    },
    {
      id: 2,
      image: model2,
      title: "Image 2",
    },
    {
      id: 3,
      image: model3,
      title: "Image 3",
    },
  ];

  return (
    <>
      <div class="container">
        <div class="row h-100">
          <div class="col-md-6 d-flex align-items-center">
            <div>
              <div class="heading-hero">Creative Design for Unique Ideas.</div>
              <div class="sub-heading-hero">
                Transforming concepts into stunning visuals with expertise in
                Adobe Photoshop, Adobe Illustrator, and Figma.
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-end hero-profile">
            <img src={profile} alt="" class="img-fluid image-custom" />
          </div>
        </div>
      </div>
      <div className="about-section">
        <div class="container">
          <div className="row">
            <div className="col-md-5 d-flex align-items-end">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-md-7 d-flex align-items-center">
              <div>
                <div className="section-title">Who Am I?</div>
                <div className="mt-2">
                  <span className="fw-bold">I’m Mohammad Yudha Pamungkas,</span>{" "}
                  a fresh graduate in Computer Science from Universitas
                  Brawijaya. Alongside my technical background,{" "}
                  <span className="fw-bold">
                    I have a strong passion for Graphic Design,
                  </span>{" "}
                  honed through various creative projects.
                </div>
                <div className="mt-2">
                  With advanced skills in{" "}
                  <span className="fw-bold">
                    Adobe Photoshop, Illustrator, and Figma,
                  </span>{" "}
                  I create visually impactful designs, including social media
                  content, branding materials, and custom illustrations. My goal
                  is to deliver designs that captivate and effectively
                  communicate the client’s vision.
                </div>

                <div className="mt-2">
                  Explore my creative works and see how I bring ideas to life.
                  I'm eager to take on new challenges and continue growing in
                  graphic design.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="works-section py-5">
        <div>
          <div className="text-center section-title">My Creative Works</div>
          <div className="mt-2">
            <ul class="nav nav-underline justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Social Media Posts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Poster
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Book Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  UI Design
                </a>
              </li>
            </ul>
          </div>

          <div className="container works-content mt-4">
            <div className="row g-4">
              <div className="col-lg-4">
                <img src={socialMedia[0].url} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-8">
                <div className="row g-3">
                  {socialMedia.map((image) => (
                    <>
                      <div className="col-lg-3">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="img-fluid"
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
