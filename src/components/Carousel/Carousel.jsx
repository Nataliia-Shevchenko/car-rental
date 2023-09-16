import ScrollCarousel from 'scroll-carousel-react';
import { logoList } from './list';

const Carousel = () => {
    return (
      <>
    
        <ScrollCarousel
        margin={20}
          autoplay
          autoplaySpeed={1}
          speed={1}
          // onReady={() => console.log('I am ready')}
        >
          {logoList.map((item) => (
            <div key={item.id} className=' border-2 border-hover bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-xl rounded h-36 w-48 mt-10 mb-10 text-center'>
              <img src={item.href} className='w-full h-full max-w-none object-contain'/>
            </div>
          ))}
        </ScrollCarousel>
      </>
    );
  };
  
  export default Carousel;