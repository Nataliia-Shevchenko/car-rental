import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div>
      <div className="h-[500px] w-full px-10 py-10 bg-cover bg-bottom bg-[url('https://res.cloudinary.com/dvkutwyno/image/upload/v1694879066/logos/hero_gouqbo.jpg')]">
        <div className="">
          <h1 className="text-white text-8xl font-bold mb-20 text-right">
            Car Rental Service N1 <br /> in Ukraine
          </h1>
          <p className="text-white text-2xl mb-2">Rent a car from 25$</p>
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-accent">
            <a href="/car-rental-ua/catalog">
              <ArrowRightIcon className="h-10 w-10 text-white hover:text-hover" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
