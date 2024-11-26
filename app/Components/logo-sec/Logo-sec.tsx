import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="h-[225px] w-full bg-[#F7F7F7] flex flex-row justify-center gap-8 items-center  md-max:flex-col md-max:h-[210px] sm-max:h-[250px]  min-max1:h-[290px]">
        <div className="flex max-l:w-[25%] justify-start w-[30%] ml-1 items-center md-max:w-full md-max:text-center md-max:justify-center md-max:ml-0 ">
          <h1 className="text-[22px]  max-lg:text-[18px] max-l:text-[15px] md-max:text-[20px] font-roboto font-[700]">
            Trusted by 2000+ companies worldwide.
          </h1>
        </div>

        {/* Logos box */}
        <div className="flex w-[910px] max-l:w-[680px]  max-lg:w-[80%] justify-between items-center md-max:w-full md-max:justify-evenly md-max:content-between md-max:h-[85px] flex-wrap sm-max:h-[100px] sm-max:content-between  min-max1:h-[145px]">
          <Image
            src="/Images/Logo6.svg"
            alt=""
            width={130}
            height={50}
            className="max-lg:w-[100px] md-max:w-[120px]"
          ></Image>

          <Image
            src="/Images/Logo5.svg"
            alt="Logo1"
            width={130}
            height={100}
            className="max-lg:w-[100px] md-max:w-[120px]"
          ></Image>

          <Image
            src="/Images/Logo4.svg"
            alt="Logo2"
            width={130}
            height={100}
            className="max-lg:w-[100px] md-max:w-[120px]"
          ></Image>

          <Image
            src="/Images/Logo3.svg"
            alt="Logo3"
            width={130}
            height={100}
            className="max-lg:w-[100px] md-max:w-[120px]"
          ></Image>

          <Image
            src="/Images/Logo1.svg"
            alt="Logo4"
            width={130}
            height={100}
            className="max-lg:w-[100px] md-max:w-[120px]"
          ></Image>

          <Image
            src="/Images/Logo2.svg"
            alt="Logo5"
            width={130}
            height={100}
            className="max-lg:w-[100px] md-max:w-[120px]"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Page;
