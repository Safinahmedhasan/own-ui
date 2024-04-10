const Demo = () => {
  return (
    <div>
      <div className="flex flex-col bg-white shadow-xl rounded-xl w-96">
        <img
          src="https://i.ibb.co/f2DnPgd/img1.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="p-5">
          <h2 className="text-start font-bold text-xl">Shoes!</h2>
          <p className="text-left my-3">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="flex justify-end">
            <button className="text-end px-5 text-base py-3 bg-[#4A00FF] text-white font-bold rounded-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
