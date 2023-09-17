import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetCarsListbyPageQuery } from "../../redux/services/carsSlice";
import CarCard from "../CarCard/CarCard";
import { BellIcon } from "@heroicons/react/24/outline";

const CarList = () => {
  const [page, setPage] = useState(1);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  const { data, isLoading, error } = useGetCarsListbyPageQuery(page);

  useEffect(() => {
    if (page <= 1) {
      setDisabledPrev(true);
    } else if (page >= 4) {
      setDisabledNext(true);
      toast.custom(
        <div className="w-150 p-4 bg-accent opacity-75 flex justify-center items-center rounded-full text-white">
          <BellIcon className="h-6 w-6" />
          {"  "}It is the last page!
        </div>
      );
    } else if (page > 1 || page < 4) {
      setDisabledPrev(false);
      setDisabledNext(false);
    }
  }, [page]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && toast.error(error.message)}
      <div className="grid grid-cols-4 gap-x-7 gap-y-12 list-none mt-10">
        {data &&
          data.map((car) => (
            <li
              className="max-w-[274px] p-0 border-0"
              key={car.id}
            >
              <CarCard car={car} />
            </li>
          ))}
      </div>
      <div className="flex justify-center gap-4 py-10 mt-10 text-base font-medium leading-6 underline text-accent ">
        <button
          className="hover:text-hover disabled:opacity-25"
          type="button"
          disabled={disabledPrev}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="hover:text-hover disabled:opacity-25"
          type="button"
          disabled={disabledNext}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CarList;
