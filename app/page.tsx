import HeroSec from './components/herosec';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
export default function Home() {
  return (
    <section>
    <div>
      <Navbar />
      <HeroSec />
      <div className="flex justify-center items-center mt-20 w-full h-[100px]">
        <img src="/image 1175.png" alt="Image" className="w-[904px] h-[93px]" />
      </div>
      <div>
        <div className="relative w-full h-[462px]">
          {/* Background Image */}
          <img
            src="/Rectangle 102.png"
            alt="Background Image"
            className="w-full h-full object-cover"
          />

          {/* Overlay Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
            {/* Text Container */}
            <div className="flex flex-col items-center text-center px-6">
              <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-tight tracking-wide">
                Get Latest Update By Subscribing <br /> Our Newsletter
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </section>
  );
}
