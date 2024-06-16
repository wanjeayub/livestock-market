import { Link } from "react-router-dom";
import mainGoat from "../assets/images/licensed-image.jpg";

export const ProductDetails = () => {
  return (
    <div className="flex flex-row">
      <section className="px-7">
        <div className="flex flex-row">
          <div>
            <img
              className="h-[300px]"
              src={mainGoat}
              alt="listing details image"
            />
          </div>
          <div className="flex flex-col px-4 gap-3">
            <p className="text-3xl">Name: Mountain Goat</p>
            <p className="text-xl">Breed: Capra Grigia</p>
            <p className="text-xl">Weight:10Kg</p>
            <p className="text-3xl font-semibold">Ksh 7,000</p>
            <p className="text-xl">
              Seller:
              <Link to={"/shop"}>Wanje | similar listings from Wanje</Link>
            </p>
            <p className="text-sm text-slate-600">In stock</p>
            <p className="text-sm text-slate-600">
              + Shipping from Ksh 2,000 to Nairobi
            </p>
            <button className="bg-lime-500 p-3 rounded-md w-full text-white">
              Add to Cart
            </button>
          </div>
        </div>
        <br />
        <div>
          <p>Add Promo stuff</p>
        </div>
      </section>
      <section></section>
    </div>
  );
};
