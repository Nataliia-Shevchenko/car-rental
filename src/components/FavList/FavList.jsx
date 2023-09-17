import CarCard from "../CarCard/CarCard";
import { useGetCarbyIdQuery } from "../../redux/services/carsSlice";

const FavList = () => {
  // const { data} = useGetCarsListQuery();
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const favoritesArray = [];
  const { car } = useGetCarbyIdQuery(favorites[0]);
  console.log(car)


  return (
    <div className="container mx-auto px-128 grid grid-cols-4 gap-x-7 gap-y-12 list-none mt-10">
      {favoritesArray &&
        favoritesArray.map((car) => {
          <li
            className="box-border min-h-106 max-w-68 p-0 border-0"
            key={car.id}
          >
            <CarCard car={car} />
          </li>;
        })}
    </div>
  );
};

export default FavList;
