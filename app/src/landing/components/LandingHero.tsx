const landingHero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl uppercase text-center font-medium">Master your time with</h1>
      <span className="text-6xl bg-linear-to-r font-medium from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase">HoursHub</span>
      <p className="text-center  text-sm text-light w-1/3 text-white/50 mt-5">
        HoursHub  time management platform designed to help
        you take control of your schedule and achieve your goals.
      </p>
      <button className="mt-9 -z-10 w-fit p-1.5 animate-bounce hover:scale-105 active:scale-95 transition-transform durarions-300 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium cursor-pointer"><span className="bg-[#111] border border-white/2 px-4 py-2 w-full h-full rounded-full">
      Get Started</span></button>
    </div>
  );
};

export default landingHero;
