const Achievments = () => {
  return (
    <>
      <div className="w-full h-full mt-12">
        <div className="text-center px-2 mt-20">
          <h1 className="font-[700] font-roboto text-[48px] md-max:text-[38px] min-max0:text-[32px]">
            Our Achivements
          </h1>
          <p className="font-roboto text-[18px] md-max:text-[16px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className="w-full h-[100px] md2-max:h-[180px] mt-9 flex justify-around flex-wrap content-between">
          <div className="w-[150px] text-center">
            <h1 className="font-[700] font-roboto text-[40px] sm2-max:text-[28px]">
              +200
            </h1>
            <p className="text-center">Courses</p>
          </div>

          <div className="w-[150px] text-center">
            <h1 className="font-[700] font-roboto text-[40px] sm2-max:text-[28px]">
              +50K
            </h1>
            <p className="text-center">Mentors</p>
          </div>

          <div className="w-[150px] text-center">
            <h1 className="font-[700] font-roboto text-[40px] sm2-max:text-[28px]">
              +370K
            </h1>
            <p className="text-center">Students</p>
          </div>

          <div className="w-[150px] text-center">
            <h1 className="font-[700] font-roboto text-[40px] sm2-max:text-[28px]">
              +100
            </h1>
            <p className="text-center">Recognation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievments;
