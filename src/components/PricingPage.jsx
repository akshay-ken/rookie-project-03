import { useState } from "react";
import { PricingCard } from "./PricingCard";

export function PricingPage() {
  const [priceType, setPriceType] = useState(true);
  const [selected, setSelected] = useState(0);
  function handleSelect(planName) {
    setSelected(planName);
  }
  return (
    <main className="w-full h-screen flex ">
      <div className="my-auto mx-auto">
        <h1 className="text-4xl font-bold text-Gray-650 text-center ">
          Our Pricing
        </h1>
        <div className="flex flex-row my-4 gap-x-6 items-center justify-center">
          <p className="font-bold text-Gray-650 text-lg ">Annually</p>
          <label className="inline-block cursor-pointer">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={priceType}
              onChange={() => setPriceType((prevState) => !prevState)}
            />
            <div className="relative w-14 h-8 bg-sky-400 rounded-full peer-checked:before:translate-x-full   before:absolute before:top-[4px] before:start-[4px] before:bg-white before:rounded-full before:h-6 before:w-6 before:transition-transform peer-checked:bg-sky-400"></div>
          </label>
          <p className="font-bold text-Gray-650 text-lg ">Monthly</p>
        </div>

        <div className="md:flex md:flex-row">
          <PricingCard
            planName={"Basic"}
            plalnPrice={priceType ? 19.99 : 199.99}
            feat1={"500 GB Storage"}
            feat2={"2 Users Allowed"}
            feat3={"Send up to 3 GB"}
            currentCard={selected === 1}
            handleSelect={() => handleSelect(1)}
          />
          <PricingCard
            planName={"Professional"}
            plalnPrice={priceType ? 24.99 : 249.99}
            feat1={"1 TB Storage"}
            feat2={"5 Users Allowed"}
            feat3={"Send up to 10 GB"}
            currentCard={selected === 2}
            handleSelect={() => handleSelect(2)}
          />
          <PricingCard
            planName={"Master"}
            plalnPrice={priceType ? 39.99 : 399.99}
            feat1={"2 TB Storage"}
            feat2={"10 Users Allowed"}
            feat3={"Send up to 20 GB"}
            currentCard={selected === 3}
            handleSelect={() => handleSelect(3)}
          />
        </div>
      </div>
    </main>
  );
}
