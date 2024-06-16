import { Link } from "react-router-dom";
import goatImage from "../assets/images/licensed-image.jpg";

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Sample data added, to be updated from backend */}
      <section className="px-7">
        <h2 className="font-semibold text-xl">Top Selling</h2>
        <div className="flex flex-row gap-4">
          <Link to="/product-details">
            <div className="shadow-md w-fit rounded-md overflow-hidden">
              <img
                className="h-40"
                src={goatImage}
                alt="sample image for goat"
              />
              <div className="pt-4">
                <p>Mountain Goat</p>
                <p>Age: 5yrs</p>
                <p>Weight:8kgs</p>
                <p className="font-semibold">Ksh 5,300</p>
              </div>
            </div>
          </Link>

          <div className="shadow-md w-fit rounded-md overflow-hidden">
            <img className="h-40" src={goatImage} alt="sample image for goat" />
            <div className="p-3">
              <p>Mountain Goat</p>
              <p>Age: 5yrs</p>
              <p>Weight:8kgs</p>
              <p className="font-semibold">Ksh 5,300</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-7 mt-4">
        <h2 className="font-semibold text-xl">On Offer</h2>
        <div className="flex flex-row gap-4">
          <div className="shadow-md w-fit rounded-md overflow-hidden">
            <img className="h-40" src={goatImage} alt="sample image for goat" />
            <div className="pt-4">
              <p>Mountain Goat</p>
              <p>Age: 5yrs</p>
              <p>Weight:8kgs</p>
              <p className="font-semibold">Ksh 5,300</p>
            </div>
          </div>
          <div className="shadow-md w-fit rounded-md overflow-hidden">
            <img className="h-40" src={goatImage} alt="sample image for goat" />
            <div className="pt-4">
              <p>Mountain Goat</p>
              <p>Age: 5yrs</p>
              <p>Weight:8kgs</p>
              <p className="font-semibold">Ksh 5,300</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
