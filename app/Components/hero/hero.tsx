import { Button } from "@/components/ui/button";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="h-[800px] w-full flex flex-row justify-between items-center md-max:flex-col md-max:h-[100%] md-max:w-full md-max:justify-center">
        {/* text box */}
        <div className="w-[53.91%] h-[380px] max-l:w-[56%] flex flex-col justify-center gap-[30px] mb-[20px] md-max:items-center  md-max:w-full md-max:h-[270px] md-max:mb-[75px] sm-max:mb-[60px] min-max:mb-[70px] ">
          <div className="w-[450px] h-[660px] max-l:ml-6 max-lg:ml-10 ml-16 flex flex-col justify-center gap-[20px] leading-tight md-max:w-[95%] md-max:m-0 md-max:items-center md-max:justify-start md-max:mt-[85px] md-max:text-center md3-max:mt-[95px] sm-max:mt-[70px] min-max:mt-[80px]">
            <h1 className="text-[56px] max-l:text-[46px] sm-max:text-[34px] text-primary font-[700] font-roboto ">
              Learn new skills online with ease
            </h1>
            <p className="font-roboto text-[18px]  max-l:text-[17px] sm-max:text-[16px] ">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>

          {/* button box*/}
          <div className="max-l:ml-5 max-lg:ml-10 ml-16 flex justify-start max-l:gap-8 gap-10 md-max:ml-0 md-max:justify-center md-max:mb-[20px] sm-max:gap-6 min-max:gap-2">
            <Button
              variant={"default"}
              size={"my"}
              className="max-l:px-8 max-l:text-[15px] sm-max:text-[13px] sm-max:px-6"
            >
              Start Learning now
            </Button>
            <Button
              variant={"my3"}
              size={"my"}
              className="max-l:px-8 max-l:text-[15px] sm-max:text-[13px] sm-max:px-6"
            >
              Explore courses
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden relative h-[800px] w-[47.9%] flex-grow md-max:hidden">
          <Image
            src="/Images/hero.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        {/* only visible for small screens started from with 800px */}

        <div className="hidden md-max:inline-block w-[100%] h-[100%]">
          <Image
            src="/Images/hero.png"
            alt="Hero Image"
            width={300}
            height={400}
            className="w-[100%]"
          ></Image>
        </div>
      </div>

      <div className="border-[1px] w-full border-[#676767]"></div>
    </>
  );
};
export default Hero;
// w-[46.09%] h-[800px] relative overflow-hidden
