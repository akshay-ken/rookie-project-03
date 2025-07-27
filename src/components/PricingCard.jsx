export function PricingCard() {
  return (
    <>
      <div class="rounded-xl mx-auto bg-white min-w-sm flex flex-col items-center p-6">
        <p class="text-2xl mb-6 text-Gray-650 font-bold">Basic</p>

        <p class="text-8xl font-extrabold tracking-tight flex items-center text-Gray-700 mb-8 before:content-['$_'] before:text-5xl">
          199.99
        </p>

        <p class="text-lg font-bold text-Gray-650 py-4 border-y-1 w-full text-center">
          500 GB Storage
        </p>

        <p class="text-lg font-bold text-Gray-650 py-4 border-b-1 w-full text-center">
          2 Users Allowed
        </p>

        <p class="text-lg font-bold mb-10 text-Gray-650 py-4 border-b-1 w-full text-center">
          Send up to 3 GB
        </p>

        <button class="w-full rounded-lg text-lg font-semibold tracking-widest uppercase text-center py-4 text-white bg-custom-gradient">
          Learn More
        </button>
      </div>
    </>
  );
}
