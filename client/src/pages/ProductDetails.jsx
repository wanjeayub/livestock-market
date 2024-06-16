import { Link } from "react-router-dom";
import mainGoat from "../assets/images/licensed-image.jpg";

export const ProductDetails = () => {
  return (
    <div className="flex flex-col px-7">
      <div className="flex flex-col md:flex-row gap-4">
        <section className="p-7 bg-slate-100 w-fit rounded-md">
          <div className="flex flex-col md:flex-row shadow-sm">
            <div>
              <img
                className=" md:h-[300px]"
                src={mainGoat}
                alt="listing details image"
              />
            </div>
            <div className="flex flex-col md:px-4 gap-2">
              <p className="pt-4 text-2xl md:text-3xl">Name: Mountain Goat</p>
              <p className="text-xl">Breed: Capra Grigia</p>
              <p className="text-xl">Weight:10Kg</p>
              <p className="text-2xl md:text-3xl font-semibold">Ksh 7,000</p>
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
          <div>
            <p>Add Promo stuff</p>
          </div>
        </section>
        <aside>
          <div>
            <h1>Delivery & Returns</h1>
          </div>
        </aside>
      </div>

      <section className="px-7 p-3 flex flex-row gap-5">
        <div className="">
          <div className="b border-b-2 pb-2">
            <h1 className="text-2xl">Product Details</h1>
          </div>
          <div className="text pt-5">
            <p className="p-2">
              Immerse yourself in stunning visuals with our sleek and compact
              WK-32&quot;TV. Perfect for small to medium-sized spaces, this TV
              delivers a crisp and vibrant viewing experience that brings your
              favorite shows and movies to life. It carries a powerful
              multi-surround sound effect that increases the excitement and
              takes your normal sports watching a pleasurable experience. WK
              32&quot TV comes with Smart features like a dedicated web browser
              and popular apps like YouTube and a range of movie on demands
              services. It is frameless and does not support Bluetooth.
            </p>
            <p className="p-2">
              Technical Specifications Display Screen size: 32&quot; Resolution:
              1366*768 Tv Technology: SMART LED Connectivity Ports: USB(2), HDMI
              (2), AV input(1) Cabinet Audio System Bright treble, full mid
              range, deep bass, bring you and your family a thrilling listening
              experience. DNR Noise Reduction Technology Built-in 3D noise
              reduction make the signal stable and the picture realistic.
              Additional Features HD - More Vivid Images No light dot, restore
              natural colors, 360 degree reproduction of scene. Multi-interface,
              multi-play, enjoy streaming experience.
            </p>
          </div>
        </div>
        <aside className="flex-none w-1/4">
          <h1>Aside</h1>
        </aside>
      </section>
    </div>
  );
};
