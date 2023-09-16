import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { useGetCarsListQuery } from "../../redux/carsSlice";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FilterPanel = () => {
  const { data } = useGetCarsListQuery();

  const modelsOptions = [];
  if (data) {
    data.map((car) => modelsOptions.push(car.make));
  }

  let uniquemodelsOptions = [...new Set(modelsOptions)];

  const priceOptions = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );

  const [selectedModel, setSelectedModel] = useState("Enter the text");
  const [selectedPrice, setSelectedPrice] = useState("To $");
  const [mileageFrom, setMileageFrom] = useState(" ");
  const [mileageTo, setMileageTo] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    // data.filter((el) => el.make === selectedModel);
  };

  useEffect(() => {
 
  }, [selectedModel, selectedPrice, mileageFrom, mileageTo]);

  return (
    <form
      className="mt-8 ml-27 flex justify-center align-center content-baseline gap-4"
      onSubmit={handleSubmit}
    >
      <div>
        <Listbox value={selectedModel} onChange={setSelectedModel}>
          <Listbox.Label className="block mb-2 text-xs font-normal leading-4.5 text-secondaryt">
            Car brand
          </Listbox.Label>
          <Listbox.Button className="relative w-56 max-h-12 cursor-pointer rounded-xl bg-inputbg py-3.5 pl-3 pr-10 text-left text-primaryt focus:outline-none sm:text-sm sm:leading-6">
            {selectedModel}
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronDownIcon
                className="h-4 w-4 text-primaryt"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options style={{scrollbarWidth: 3, }} className="absolute cursor-pointer z-10 mt-1 h-38 w-56 py-3.5 px-4 overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 rounded-md bg-inputbg text-inputtext focus:outline-none sm:text-sm"> {uniquemodelsOptions &&
              uniquemodelsOptions.sort().map((car) => (
                <Listbox.Option
                  className="hover:text-primaryt"
                  key={car}
                  value={car}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  {car}
                </Listbox.Option>
              ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <Listbox value={selectedPrice} onChange={setSelectedPrice}>
          <Listbox.Label className="block mb-2 text-xs font-normal leading-4.5 text-secondaryt">
            Price/ 1 hour
          </Listbox.Label>
          <Listbox.Button className="relative w-31 max-h-12 cursor-pointer rounded-xl bg-inputbg py-3.5 pl-3 pr-10 text-left text-lg focus:outline-none sm:text-sm sm:leading-6">
            {selectedPrice}
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronDownIcon
                className="h-4 w-4 text-primaryt"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 cursor-pointer scrollbar:w-2 scrollbar:h-5 scrollbar:bg-transparent scrollbar-thumb:rounded scrollbar-thumb-scroll mt-1 max-h-56 w-31 py-3.5 px-4 overflow-auto rounded-md bg-white py-1 text-inputtext  focus:outline-none sm:text-sm">
            {priceOptions(20, 500, 10).map((car) => (
              <Listbox.Option
                className="hover:text-primaryt"
                key={car}
                value={car}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                {car}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <label className="block mb-2 text-xs font-normal leading-4.5 text-secondaryt">
          <span className="">Сar mileage / km</span>
        </label>
        <div className="flex ">
          <input
            type="text"
            name="price"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
            // id="price"
            className="block w-40 max-h-12 bg-inputbg rounded-bl-xl rounded-tl-xl border-e-inputborder border-e py-3.5 pl-7 pr-20 ring-gray-300 text-tg font-medium leading-5 text-primaryt focus:outline-none "
            placeholder="From"
          />
          <input
            type="text"
            name="price"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
            // id="price"
            className="block w-40 max-h-12 bg-inputbg rounded-br-xl rounded-tr-xl border-0 py-3.5 pl-7 pr-20 ring-gray-300 text-tg font-medium leading-5 text-primaryt focus:outline-none "
            placeholder="To"
          />
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <button
          type="submit"
          className="rounded-md bg-accent px-11 py-3.5 text-sm text-white leading-5 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-hover focus:ring-4"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default FilterPanel;
