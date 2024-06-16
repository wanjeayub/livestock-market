import goatImage from "../assets/images/licensed-image.jpg";
import { FaHamburger, FaTrash } from "react-icons/fa";

export const Orders = () => {
  return (
    <div className="flex flex-row px-7 gap-4">
      <div className="bg-slate-100  p-3 rounded-md w-3/4">
        {/* add conditional rendering when items exist in the cart, otherwise show no items */}
        <div className="upper">
          <h1 className="border-b-2 text-3xl p-2">Cart(4)</h1>
          <div className="flex flex-row p-4 justify-between">
            <div className="flex flex-row gap-4">
              <img className="h-24" src={goatImage} alt="" />
              <div className="flex flex-col">
                <p className="text-2xl">Name: Mountain Goat</p>
                <p className="text-xl">Weight:10Kg</p>
              </div>
            </div>
            <div className="price">
              <p className="text-2xl font-semibold">Ksh 7,000</p>
            </div>
          </div>
        </div>
        <div className="p-3 flex flex-row justify-between">
          <div className="flex flex-row gap-5 items-center">
            <FaTrash className="text-2xl text-red-700" />
            <p>REMOVE</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <button className="text-3xl bg-lime-600 rounded-md px-2">-</button>
            <p>4</p>
            <p className="p-2 text-3xl bg-lime-600 w-fit">+</p>
          </div>
        </div>
      </div>
      <div className="summary border-t-2 bg-slate-100  p-3 rounded-md">
        <h1 className="text-3xl">Cart Summary</h1>
      </div>
    </div>
  );
};
