import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Courses2 = () => {
  return (
    <>
      <div className="w-full h-[auto mt-16">
        <div className="w-full">
          <h1 className="font-roboto font-[700] text-[56px] text-center md-max:text-[38px] min-max0:text-[32px]">
            Courses
          </h1>
          <p className="text-center font-roboto text-[18px]">
            Your Ultimate Guide to learning
          </p>
        </div>

        <div className="w-full flex justify-center mt-16">
          <p className="">Popular</p>
          <p className="ml-6">Recomanded</p>
          <p className="ml-6">Best Price</p>
        </div>

        {/* courses boxses */}

        <div className="w-full mt-10 px-1 md2-max:px-4 h-auto grid justify-center items-center grid-cols-[repeat(3,minmax(250px,1fr))]  gap-x-6 gap-y-10  max-lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  ">
          {/* box1 */}
          <div className="h-auto md2-max:rounded-[5px] overflow-hidden">
            <div className="Image">
              <Image
                src="/Images/Image1.svg"
                alt="UI UX Developer"
                width={500}
                height={200}
                className="w-full aspect-[16/9] object-cover"
              ></Image>
            </div>

            <div className="w-full p-2 h-[240px] flex flex-col justify-evenly bg-[#F7F7F7]">
              <div className="flex w-full justify-between">
                <p className="text-[14px] font-roboto font-[600]">Design</p>
                <div>
                  <FontAwesomeIcon
                    className="mr-1 text-[#D9D9D9]"
                    icon={faStar}
                  />
                  <p className="font-roboto font-[600] inline-block">5.0</p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-[24px] max-lg:text-[22px] font-[700] font-roboto">
                  UX/UI Design 201
                </h1>
                <p className="text-[15px] max-lg:text-[14px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>

              <div className="flex items-center mt-2">
                <Button variant={"my"}>Enroll</Button>
                <p className="ml-5">400$</p>
              </div>
            </div>
          </div>

          {/* box2 */}
          <div className=" h-auto md2-max:hidden">
            <div className="Image">
              <Image
                src="/Images/Image2.svg"
                alt="UI UX Developer"
                width={500}
                height={200}
                className="w-full aspect-[16/9] object-cover"
              ></Image>
            </div>

            <div className="w-full p-2 h-[240px] flex flex-col justify-evenly bg-[#F7F7F7]">
              <div className="flex w-full justify-between">
                <p className="text-[14px] font-roboto font-[600]">Progamming</p>
                <div>
                  <FontAwesomeIcon
                    className="mr-1 text-[#D9D9D9]"
                    icon={faStar}
                  />
                  <p className="font-roboto font-[600] inline-block">5.0</p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-[24px] max-lg:text-[22px] font-[700] font-roboto">
                  Introduction to Python
                </h1>
                <p className="text-[15px] max-lg:text-[14px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>

              <div className="flex items-center">
                <Button variant={"my"}>Enroll</Button>
                <p className="ml-5">400$</p>
              </div>
            </div>
          </div>

          {/* box3 */}
          <div className="h-auto  md2-max:rounded-[5px] overflow-hidden">
            <div className="Image">
              <Image
                src="/Images/Image3.svg"
                alt="UI UX Developer"
                width={500}
                height={200}
                className="w-full aspect-[16/9] object-cover"
              ></Image>
            </div>

            <div className="w-full p-2 h-[240px] flex flex-col justify-evenly bg-[#F7F7F7]">
              <div className="flex w-full justify-between">
                <p className="text-[14px] font-roboto font-[600]">Business</p>
                <div>
                  <FontAwesomeIcon
                    className="mr-1 text-[#D9D9D9]"
                    icon={faStar}
                  />
                  <p className="font-roboto font-[600] inline-block">5.0</p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-[24px] max-lg:text-[22px] font-[700] font-roboto">
                  Data Analysis for Beginners
                </h1>
                <p className="text-[15px] max-lg:text-[14px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>

              <div className="flex items-center">
                <Button variant={"my"}>Enroll</Button>
                <p className="ml-5">400$</p>
              </div>
            </div>
          </div>

          {/* box4 */}
          <div className="h-auto md2-max:hidden ">
            <div className="Image">
              <Image
                src="/Images/Image4.svg"
                alt="UI UX Developer"
                width={500}
                height={200}
                className="w-full aspect-[16/9] object-cover"
              ></Image>
            </div>

            <div className="w-full p-2 h-[240px] flex flex-col justify-evenly bg-[#F7F7F7]">
              <div className="flex w-full justify-between">
                <p className="text-[14px] font-roboto font-[600]">Art</p>
                <div>
                  <FontAwesomeIcon
                    className="mr-1 text-[#D9D9D9]"
                    icon={faStar}
                  />
                  <p className="font-roboto font-[600] inline-block">5.0</p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-[24px] max-lg:text-[22px] font-[700] font-roboto">
                  Art Specialization
                </h1>
                <p className="text-[15px] max-lg:text-[14px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>

              <div className="flex items-center">
                <Button variant={"my"}>Enroll</Button>
                <p className="ml-5">400$</p>
              </div>
            </div>
          </div>

          {/* box5 */}
          <div className="h-auto  md2-max:rounded-[5px] overflow-hidden">
            <div className="Image">
              <Image
                src="/Images/Image5.svg"
                alt="UI UX Developer"
                width={500}
                height={200}
                className="w-full aspect-[16/9] object-cover"
              ></Image>
            </div>

            <div className="w-full p-2 h-[240px] flex flex-col justify-evenly bg-[#F7F7F7]">
              <div className="flex w-full justify-between">
                <p className="text-[14px] font-roboto font-[600]">Law</p>
                <div>
                  <FontAwesomeIcon
                    className="mr-1 text-[#D9D9D9]"
                    icon={faStar}
                  />
                  <p className="font-roboto font-[600] inline-block">5.0</p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-[24px] max-lg:text-[22px] font-[700] font-roboto">
                  Rule of Law
                </h1>
                <p className="text-[15px] max-lg:text-[14px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>

              <div className="flex items-center">
                <Button variant={"my"}>Enroll</Button>
                <p className="ml-5">400$</p>
              </div>
            </div>
          </div>

          {/* box6 */}
          <div className="h-auto  md2-max:hidden">
            <div className="Image">
              <Image
                src="/Images/Image6.svg"
                alt="UI UX Developer"
                width={500}
                height={200}
                className="w-full aspect-[16/9] object-cover"
              ></Image>
            </div>

            <div className="w-full p-2 h-[240px] flex flex-col justify-evenly bg-[#F7F7F7]">
              <div className="flex w-full justify-between">
                <p className="text-[14px] font-roboto font-[600]">Tech</p>
                <div>
                  <FontAwesomeIcon
                    className="mr-1 text-[#D9D9D9]"
                    icon={faStar}
                  />
                  <p className="font-roboto font-[600] inline-block">5.0</p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-[24px] max-lg:text-[22px] font-[700] font-roboto">
                  Introduction to webflow
                </h1>
                <p className="text-[15px] max-lg:text-[14px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>

              <div className="flex items-center">
                <Button variant={"my"}>Enroll</Button>
                <p className="ml-5">400$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-10">
          <Button
            variant={"my3"}
            size={"my"}
            className="sm2-max:px-4 py-2 text-[15px]"
          >
            View all courses
          </Button>
        </div>
      </div>

      {/* courses */}
    </>
  );
};

export default Courses2;

{
  /* <div className="border-[1px] border-black h-[540px] w-[80%]">
          <div className='w-full'>
          <Image
          src='/Images/Image.svg'
          alt='UI UX Developer'
          width={500}
          height={200}
          className='w-full'
          ></Image>
          </div>

          <div className='relative h-[115px] px-3 mt-6'>
          <p>Design</p>
          <h1 className='mt-5'>UX/UI Design 201</h1>
          <p className='w-[95%] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>

       <div className='mt-8 px-3 flex items-center'>
        <Button variant={"my"}>Login</Button>
        <p className='font-[500] ml-10'>400$</p>
        </div>
        </div> */
}

// Use of w-full
// The className='w-full' on the <Image> component ensures the image always takes up the full width of its parent container, regardless of the screen size.
// On small screens, the container width is smaller, so the image automatically adjusts its size proportionally to the container.
// 2. Aspect Ratio with aspect-[16/9]
// The aspect-[16/9] class ensures the image maintains a 16:9 ratio while resizing. This prevents distortion or unexpected cropping on different screen sizes.
// When the parent container width changes (e.g., on smaller screens), the height adjusts proportionally to maintain this ratio.
