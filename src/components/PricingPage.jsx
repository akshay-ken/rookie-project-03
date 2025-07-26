export function PricingPage() {
  return (
    <main className="w-full h-screen flex ">
      <div className="my-auto mx-auto">
        <h1 className="text-4xl font-bold text-Gray-650 ">Our Pricing</h1>
        <div className="flex flex-row my-4 gap-x-6 items-center justify-center">
          <p className="font-bold text-Gray-650 text-lg">Annually</p>
          <label class="inline-block cursor-pointer mt-2">
            <input type="checkbox" class="peer sr-only" />
            <div class="relative w-14 h-8 bg-sky-400 rounded-full peer-checked:before:translate-x-full   before:absolute before:top-[4px] before:start-[4px] before:bg-white before:rounded-full before:h-6 before:w-6 before:transition-transform peer-checked:bg-sky-400"></div>
          </label>
          <p className="font-bold text-Gray-650 text-lg">Monthly</p>
        </div>
      </div>
    </main>
  );
}
