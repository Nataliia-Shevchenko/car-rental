import { Fragment, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import numberWithCommas from "../../helpers/numberWithCommas";
import splitText from "../../helpers/splitText";

const ModalCarDetails = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    rentalPrice,
    rentalConditions,
    address,
    mileage,
  } = car;

  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const splittedAddress = address.split(" ");
  const city = splittedAddress[3].slice(0, splittedAddress[3].length - 1);

  const mileageString = numberWithCommas(mileage);
  const newRentalConditions = splitText(rentalConditions);
  const ageConditions = newRentalConditions[0].split(" ");


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-secondaryt transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white shadow-xl transition-all w-[541px] px-10 py-10">
                <div>
                  <div className="absolute top-2 right-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 hover:text-accent">
                    <XMarkIcon
                      className="h-6 w-6 "
                      aria-hidden="true"
                      onClick={() => setOpen(false)}
                    />
                  </div>

                  <div className="flex justify-center items-center mb-3.5 rounded-xl overflow-hidden w-[461px] h-[248px]">
                    <img
                      className=" w-full h-full max-w-none object-cover"
                      src={img}
                    ></img>
                  </div>
                  <div className="text-left">
                    <p className="mb-2 text-lg font-medium leading-6 text-primaryt">
                      {make} <span className="text-accent">{model}</span>,{" "}
                      {year}
                    </p>
                    <div className="mb-3.5 text-xs font-normal leading-4.5 text-secondaryt">
                      <p className="mb-1">
                        {city} | {splittedAddress[4]} | Id: {id} | Year: {year}{" "}
                        | Type: {type}{" "}
                      </p>
                      <p>
                        Fuel Consumption: {fuelConsumption} | Engine Size:{" "}
                        {engineSize}
                      </p>
                    </div>
                    <p className=" mb-6 text-sm font-normal leading-5 text-primaryt">
                      {description}
                    </p>
                    <p className=" mb-2 text-sm font-normal leading-5 text-primaryt">
                      Accessories and functionalities:
                    </p>
                    <p className="mb-1 text-xs font-normal leading-4.5 text-secondaryt">
                      {accessories.join(" | ")}
                    </p>
                    <p className="mb-6 text-xs font-normal leading-4.5 text-secondaryt">
                      {functionalities.join(" | ")}
                    </p>
                    <p className=" mb-4 text-sm font-normal leading-5 text-primaryt">
                      Rental Conditions:
                    </p>
                    <div className="ml-3.5 mb-5 font-sans2 text-xs font-normal leading-4.5 tracking-tighter">
                      <div className="flex gap-8 mb-[22px]">
                        <p>
                          {ageConditions[0]} {ageConditions[1]} {" "}
                          <span className="text-accent font-semibold">
                            {ageConditions[2]}
                          </span>
                        </p>
                        <p>{newRentalConditions[1] || ""}</p>
                      </div>
                      <div className="flex gap-8">
                        <p>{newRentalConditions[2] || ""}</p>
                        <p>
                          Mileage:{" "}
                          <span className="text-accent font-semibold">
                            {mileageString}
                          </span>
                        </p>
                        <p>
                          Price:{" "}
                          <span className="text-accent font-semibold">
                            {rentalPrice}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="sm:flex">
                      <a href="tel:+380730000000">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-accent px-12 py-3 text-sm text-white leading-5 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-hover focus:ring-4 sm:mt-0 sm:w-auto"
                        >
                          Rental car
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ModalCarDetails;

ModalCarDetails.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }).isRequired,
};
