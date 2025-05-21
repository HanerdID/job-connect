// src/components/templates/Hero.jsx
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const Hero = () => {
  return (
    <div className="bg-[#3E3A74]/5 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="w-full md:w-1/2 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E3A74] mb-4">
              Temukan Karir Impian <br className="hidden md:block" />
              <span className="text-[#FFC857]">Anda Sekarang!</span>
            </h1>
            <p className="text-neutral-600 mb-8 max-w-md">
              Hubungkan karir dan passion Anda dengan ribuan peluang kerja di
              Indonesia yang sesuai dengan keahlian Anda.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as={Link} to="/jobs" variant="primary">
                Temukan Pekerjaan
              </Button>
              <Button as={Link} to="/companies" variant="secondary">
                Perusahaan
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-[#3E3A74]">1,200+</h3>
                <p className="text-neutral-600">Pekerjaan Aktif</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3E3A74]">400+</h3>
                <p className="text-neutral-600">Perusahaan</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3E3A74]">3,000+</h3>
                <p className="text-neutral-600">Kandidat Terbantu</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-2/5 mt-10 md:mt-0 z-10 rounded-lg shadow-card overflow-hidden">
            <img
              src="/images/jobConnect-hero.png"
              alt="JobConnect Logo"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
