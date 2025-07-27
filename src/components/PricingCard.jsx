export function PricingCard({ planName, plalnPrice, feat1, feat2, feat3 }) {
  return (
    <>
      <div class="rounded-xl mx-auto bg-white min-w-sm flex flex-col items-center p-6">
        <p class="text-2xl mb-6 text-Gray-650 font-bold">{planName}</p>

        <p class="text-8xl font-extrabold tracking-tight flex items-center text-Gray-700 mb-8 before:content-['$_'] before:text-5xl">
          {plalnPrice}
        </p>

        <p class="text-lg font-bold text-Gray-650 py-4 border-y-1 w-full text-center">
          {feat1}
        </p>

        <p class="text-lg font-bold text-Gray-650 py-4 border-b-1 w-full text-center">
          {feat2}
        </p>

        <p class="text-lg font-bold mb-10 text-Gray-650 py-4 border-b-1 w-full text-center">
          {feat3}
        </p>

        <button class="w-full rounded-lg text-lg font-semibold tracking-widest uppercase text-center py-4 text-white bg-custom-gradient">
          Learn More
        </button>
      </div>
    </>
  );
}
