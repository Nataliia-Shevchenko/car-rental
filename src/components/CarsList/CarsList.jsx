import { useEffect, useState } from "react";
import { useGetCarsListQuery } from "../../redux/carsSlice";
import CarCard from "../CarCard/CarCard";



const CarList = () => {

//   const [filter, setFilter] = useState(''); 

// const getVisibleCars = () =>
// data.filter(car =>
//   car.make.toLowerCase().includes(filter.toLowerCase())
// );

// useEffect(() => {
//   localStorage.setItem('cars', JSON.stringify(contacts));
// }, [cars]);

  const { data } = useGetCarsListQuery();

  return (
    <div className=" grid grid-cols-4 gap-x-7 gap-y-12 list-none mt-10 mb-10">
      
      {data &&
        data.map((car) => (
          <li className="box-border min-h-106 max-w-68 p-0 border-0" key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
    </div>
  );
};

export default CarList;
