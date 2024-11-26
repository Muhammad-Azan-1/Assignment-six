import Image from "next/image";
import { Button } from "@/components/ui/button";
const Courses = () => {
  return (
    <>
      <div className="h-full w-full">
        <div className="w-full flex justify-center items-center mt-16 sm-max:mt-10 ">
          <div className="text-center ml-2 mr-2">
            <h1 className="font-roboto font-[700] text-[58px] md-max:text-[30px] sm-max:text-[23px] min-max1:text-[21px]">
              Explore Courses By Category
            </h1>
            <p className="font-roboto text-[18px] sm-max:text-[15px] mt-2">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
        </div>

        {/* courses box */}

        <div className="w-full mt-14 min-max0:mt-10 px-2 grid  grid-cols-[repeat(3,minmax(300px,2fr))] gap-x-5 gap-y-14 max-lgx:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] min-max0:flex min-max0:justify-center min-max0:flex-wrap">
          {/* course1 */}
          <div className="h-[132px] min-max0:w-[95%] bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px] sm2-max:hidden ">
            <div>
              <Image
                src="/Images/frame1.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[20px] min-max0:text-[17px] sm2-max:text-[15px]">
                Design & Development
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* course2 */}

          <div className="h-[132px] min-max0:w-[95%] bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px] ">
            <div>
              <Image
                src="/Images/frame10.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[19px] min-max0:text-[17px]">
                Marketing
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* course3 */}

          <div className="h-[132px] min-max0:w-[95%]  bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px] ">
            <div>
              <Image
                src="/Images/frame6.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[19px] min-max0:text-[17px]">
                Development
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* course4 */}

          <div className="h-[132px] min-max0:w-[95%]  bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px]">
            <div>
              <Image
                src="/Images/frame8.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[19px] min-max0:text-[17px]">
                Communication
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* course5 */}

          <div className=" h-[132px] min-max0:w-[95%] bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px] sm2-max:hidden ">
            <div>
              <Image
                src="/Images/frame7.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[19px] min-max0:text-[17px]">
                Digital Marketing
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* course6 */}

          <div className=" h-[132px] min-max0:w-[95%]  bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px] sm2-max:hidden ">
            <div>
              <Image
                src="/Images/frame6.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[19px] min-max0:text-[17px]">
                Self Development
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* course7 */}

          <div className=" h-[132px] min-max0:w-[95%]  bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px]  sm2-max:hidden">
            <div>
              <Image
                src="/Images/frame5.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[19px] min-max0:text-[17px]">
                Business
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* course8 */}

          <div className=" h-[132px] min-max0:w-[95%]  bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px] sm2-max:hidden ">
            <div>
              <Image
                src="/Images/Frame.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[19px] min-max0:text-[17px]">
                Finance
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* course9 */}

          <div className=" h-[132px]  min-max0:w-[95%]  bg-[#F7F7F7] flex items-center justify-evenly rounded-[3px] sm2-max:hidden">
            <div>
              <Image
                src="/Images/frame0.svg"
                alt="course1"
                width={100}
                height={100}
                className="min-max0:w-[85px]"
              ></Image>
            </div>
            <div>
              <h2 className="font-roboto font-[700] text-[19px] min-max0:text-[17px]">
                consulting
              </h2>
              <p className="text-lg font-roboto min-max0:text-[15px]">
                50+ Courses Available
              </p>
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
    </>
  );
};

export default Courses;
