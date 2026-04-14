const ReadyStart = () => {
  return (
    <section className="bg-black/30 w-full my-20 relative ">
      <span className="absolute top-0 left-0 w-full h-full bg-linear-90 from-blue-500 to-purple-500 opacity-5 blur-3xl"></span>
      <div className="container flex flex-col text-center  items-center justify-center gap-6 py-40 mx-auto">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-4xl font-bold text-white">
            Ready to define your{' '}
            <span className="bg-linear-90 from-blue-500 to-purple-500 bg-clip-text text-transparent">
              luminescent
            </span>{' '}
            workflow?
          </h2>
          <p className="text-white w-120 ">
            Join hundreds of creators who have transformed their management
            experience with our Aether Glass interface.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="border border-purple-700/40 bg-purple-500/10 cursor-pointer active:scale-95 hover:bg-purple-500/20 transition-all duration-300  text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyStart;
