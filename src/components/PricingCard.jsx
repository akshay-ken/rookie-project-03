import clsx from "clsx";

export function PricingCard({
  planName,
  plalnPrice,
  feat1,
  feat2,
  feat3,
  currentCard,
  handleSelect,
}) {
  const featuredBg = clsx({
    "bg-custom-gradient md:scale-105 md:mt-8": currentCard,
  });
  const featuredText = clsx({ "text-white": currentCard });
  const featuredButton = clsx({
    "bg-white text-[hsl(238,63%,64%)]": currentCard,
    "text-white bg-custom-gradient md:hover:bg-none md:hover:bg-white md:hover:text-[hsl(238,63%,64%)] md:hover:outline-2 md:hover:outline-[hsl(238,63%,64%)]":
      !currentCard,
  });
  return (
    <>
      <div
        className={`rounded-xl mx-auto bg-white w-sm flex flex-col items-center p-6 ${featuredBg}`}
      >
        <p className={`text-2xl mb-6 text-Gray-650 font-bold ${featuredText}`}>
          {planName}
        </p>

        <p
          className={`text-8xl font-extrabold tracking-tight flex items-center text-Gray-700 mb-8 before:content-['$_'] before:text-5xl ${featuredText}`}
        >
          {plalnPrice}
        </p>

        <p
          className={`text-lg font-bold text-Gray-650 py-4 border-y-1 w-full text-center ${featuredText}`}
        >
          {feat1}
        </p>

        <p
          className={`text-lg font-bold text-Gray-650 py-4 border-b-1 w-full text-center ${featuredText}`}
        >
          {feat2}
        </p>

        <p
          className={`text-lg font-bold mb-10 text-Gray-650 py-4 border-b-1 w-full text-center ${featuredText}`}
        >
          {feat3}
        </p>

        <button
          onClick={handleSelect}
          className={`w-full rounded-lg text-lg font-semibold  tracking-widest uppercase text-center py-4
              ${featuredButton}`}
        >
          Learn More
        </button>
      </div>
    </>
  );
}
