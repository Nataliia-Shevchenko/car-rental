import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ModalCarDetails = ({ onClose, car }) => {
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
    address,
    mileage,
  } = car;

  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const splittedAddress = address.split(" ");

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
          <div className="fixed inset-0 bg-backdrop transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white p-10 w-135.25">
                  <div className="absolute top-2 right-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <XMarkIcon
                      className="h-6 w-6 "
                      aria-hidden="true"
                      onClick={() => setOpen(false)}
                    />
                  </div>

                  <div className="block mb-3.5 h-62">
                    <img
                      className=" block object-cover object-center rounded-xl"
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
                        {splittedAddress[3]} | {splittedAddress[4]} | Id: {id} |
                        Year: {year} | Type: {type}{" "}
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
                    <p className="mb-6 text-xs font-normal leading-4.5 text-secondaryt">
                      {accessories.join(" | ")}
                    </p>
                    <p className=" mb-3.75 text-sm font-normal leading-5 text-primaryt">
                      Rental Conditions:
                    </p>
                    <div className="ml-3.5 mb-5.5 flex gap-8 text-xs font-normal leading-4.5 tracking-tighter">
                      <p>
                        Minimum age :{" "}
                        <span className="text-accent font-semibold">25</span>
                      </p>
                      <p>Valid driver’s license</p>
                    </div>
                    <div className="ml-3.5 mb-7.75 flex gap-8 text-xs font-normal leading-4.5 tracking-tighter">
                      <p>Security deposite required</p>
                      <p>
                        Mileage:{" "}
                        <span className="text-accent font-semibold">
                          {mileage}
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
                        className="inline-flex w-full justify-center rounded-md bg-accent px-12 py-3 text-sm text-white leading-5 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-hover sm:mt-0 sm:w-auto"
                      >
                        Rental car
                      </button>
                    </a>
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
