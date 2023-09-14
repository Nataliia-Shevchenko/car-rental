import { useGetCarsListQuery } from "../../redux/carsSlice";
import CarCard from "../CarCard/CarCard";

const CarList = () => {
  const { data } = useGetCarsListQuery();

  return (
    <div className="container mx-auto px-128 grid grid-cols-4 gap-x-7 gap-y-12 list-none mt-10">
      {data &&
        data.map((car) => (
          <li className="box-border h-106 w-68.5 p-0 border-0" key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
    </div>
  );
};

export default CarList;
