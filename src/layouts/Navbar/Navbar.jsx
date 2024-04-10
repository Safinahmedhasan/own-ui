const Navbar = () => {
  return (
    <div>
      <div className="shadow-lg py-5 fixed w-full top-0 z-50 bg-white md:block hidden">
        <div className="flex justify-between items-center container mx-auto">
          <div>
            <h2>
              <span className="text-black font-bold text-3xl">Own</span>{" "}
              <span className="text-white bg-orange-400 text-2xl font-bold px-2">
                UI
              </span>
            </h2>
          </div>
          <div className="flex justify-center items-center gap-5">
            <p className="cursor-pointer hover:text-orange-400">Documents</p>
            <p className="cursor-pointer hover:text-orange-400">Git</p>
            <p className="cursor-pointer hover:text-orange-400">Pro</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <div className="space-x-3">
              <input
                type="search"
                className="border border-orange-400 py-1 outline-none px-5 rounded-xl"
              />
              <input
                type="submit"
                value="Search"
                className="bg-orange-400 text-white px-5 py-1.5 rounded-lg"
              />
            </div>
            <div>
              <button>Dev Contact</button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Responsive */}
      <div className="shadow-lg py-5 fixed w-full top-0 z-50 bg-white block md:hidden px-5">
        <div className="flex justify-between items-center container mx-auto">
          <div>
            <h2>
              <span className="text-black font-bold text-3xl">Own</span>{" "}
              <span className="text-white bg-orange-400 text-2xl font-bold px-2">
                UI
              </span>
            </h2>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <div>
              <button className="text-orange-400 font-bold">Dev Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
