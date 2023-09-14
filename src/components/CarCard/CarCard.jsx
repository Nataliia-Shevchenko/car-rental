import{ useState } from 'react';
import ModalCarDetails from '../modal/ModalCarDetails'

const CarCard = ({ car }) => {

    const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // const handleBtnClick = () => {
  //   toggleModal();
  // }; 

  const {
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

    const splittedAddress = address.split(' ');

  return (
    <div className="">
        <div className="block">
        <img className=" block object-cover object-center h-67 w-68.5 rounded-xl" src={img}></img>
        </div>
      <div className="flex justify-between mb-2">
      <p className="text-base font-medium leading-6 text-primaryt">
        {make} <span className="text-accent">{model}</span>, {year}
      </p>
      <p>{rentalPrice}</p>
      </div>
      <p className="text-xs font-normal leading-4.5 text-secondaryt">{splittedAddress[3]} | {splittedAddress[4]} | {rentalCompany} |
        {type} | {model} | {mileage} | {functionalities[0]}
      </p>
      <button onClick={() => toggleModal()} type="button" className="inline-flex w-full justify-center px-24 py-3 rounded-lg bg-accent text-sm text-white leading-5 mt-8 hover:bg-hover">Learn more</button>
      {showModal && (<ModalCarDetails onClose={toggleModal} car={car}/>)}
    </div>
  );
};

export default CarCard;
