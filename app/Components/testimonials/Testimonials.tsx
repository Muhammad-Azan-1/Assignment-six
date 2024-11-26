import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Testimonials = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#F7F7F7]">
        <div className="pt-16 text-center ">
          <h1 className="font-roboto font-[700] text-[48px] md-max:text-[32px] min-max0:text-[25px]">
            Customer testimonials
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-full h-full flex justify-center gap-8 px-8 mt-8 md3-max:px-6">
          {/* testiomnials 1 */}
          <div className="border-[2px] border-black w-[32%] h-[250px] p-3 pl-4 flex flex-col justify-around max-lg:w-[50%] md3-max:w-[100%] ">
            <div>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>

            <div>
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
            </div>

            <div className="flex">
              <Image
                src="/Images/team1.svg"
                alt="user1"
                width={50}
                height={50}
                className="rounded-[50%]"
              ></Image>

              <div className="ml-5">
                <h2 className="font-roboto font-[600]">James Nduku</h2>
                <h2>Software Developer</h2>
              </div>
            </div>
          </div>

          {/* testimonials2 */}

          <div className="border-[2px] border-black w-[32%] h-[250px] p-3 pl-4 flex flex-col justify-around max-lg:w-[50%] md3-max:hidden ">
            <div>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>

            <div>
              <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
            </div>

            <div className="flex">
              <Image
                src="/Images/team2.svg"
                alt="user1"
                width={50}
                height={50}
                className="rounded-[50%]"
              ></Image>

              <div className="ml-5">
                <h2 className="font-roboto font-[600]">James Nduku</h2>
                <h2>Software Developer</h2>
              </div>
            </div>
          </div>

          {/* testiominails3 */}

          <div className="border-[2px] border-black w-[32%] h-[250px] p-3 pl-4 flex flex-col justify-around max-lg:hidden ">
            <div>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>

            <div>
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
            </div>

            <div className="flex">
              <Image
                src="/Images/team4.svg"
                alt="user1"
                width={50}
                height={50}
                className="rounded-[50%]"
              ></Image>

              <div className="ml-5">
                <h2 className="font-roboto font-[600]">James Nduku</h2>
                <h2>Software Developer</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[80px]  mt-10 flex justify-between px-8 items-center sm-max:px-5">
          <div>
            <Image
              src="/Images/Slider.svg"
              alt="arrow-right"
              width={50}
              height={30}
            ></Image>
          </div>

          <div className="flex justify-between w-[120px] sm-max:w-[90px]">
            <Image
              src="/Images/arrow2.svg"
              alt="arrow-left"
              width={50}
              height={30}
              className="rotate-180 sm-max:w-[40px]"
            ></Image>

            <Image
              src="/Images/arrow1.svg"
              alt="arrow-left"
              width={50}
              height={30}
              className="rotate-180 sm-max:w-[40px]"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
