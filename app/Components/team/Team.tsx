import Image from "next/image";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <>
      <div className=" h-[840px] md-max:h-auto  w-full bg-[#F7F7F7] mt-16">
        <div className="w-full text-center pt-16">
          <h1 className="font-roboto font-[700] text-[48px] md-max:text-[38px] min-max0:text-[32px]">
            Our Team
          </h1>
          <p className="text-[18px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>

        {/* students box */}
        <div className="w-full h-[70%] flex flex-row flex-wrap justify-center items-center gap-15 md-max:gap-20  mt-12 md2-max:justify-center md2-max:flex-col md2-max:gap-20 ">
          {/* box1 */}
          <div className="w-[33%] md2-max:w-[100%] box1 flex flex-col justify-between items-center">
            <div>
              <Image
                src="/Images/team1.svg"
                alt="memeber 1"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="box1 flex flex-col justify-center items-center">
              <h3 className="mt-4 text-[20px] font-roboto font-[600]">
                James Nduku
              </h3>
              <h3 className="mt-0">Marketing Coordinator</h3>
              <div className="w-full flex justify-evenly mt-4">
                <FontAwesomeIcon className="text-[18px]" icon={faLinkedin} />
                <FontAwesomeIcon className="text-[18px]" icon={faTwitter} />
                <FontAwesomeIcon className="text-[18px]" icon={faEarth} />
              </div>
            </div>
          </div>

          {/* box2 */}

          <div className=" w-[33%] md2-max:w-[100%] box1 flex flex-col justify-between items-center">
            <div>
              <Image
                src="/Images/team2.svg"
                alt="memeber 1"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="box1 flex flex-col justify-center items-center">
              <h3 className="mt-4 text-[20px] font-roboto font-[600]">
                Joseph Munyambu
              </h3>
              <h3 className="mt-0">Nursing Assistant</h3>
              <div className="w-full flex justify-evenly mt-4">
                <FontAwesomeIcon className="text-[18px]" icon={faLinkedin} />
                <FontAwesomeIcon className="text-[18px]" icon={faTwitter} />
                <FontAwesomeIcon className="text-[18px]" icon={faEarth} />
              </div>
            </div>
          </div>

          {/* box3 */}

          <div className=" w-[33%] md2-max:w-[100%] box1 flex flex-col justify-between items-center">
            <div>
              <Image
                src="/Images/team3.svg"
                alt="memeber 1"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="box1 flex flex-col justify-center items-center">
              <h3 className="mt-4 text-[20px] font-roboto font-[600]">
                Joseph barrito
              </h3>
              <h3 className="mt-0">Medical Assistant</h3>
              <div className="w-full flex justify-evenly mt-4">
                <FontAwesomeIcon className="text-[18px]" icon={faLinkedin} />
                <FontAwesomeIcon className="text-[18px]" icon={faTwitter} />
                <FontAwesomeIcon className="text-[18px]" icon={faEarth} />
              </div>
            </div>
          </div>

          {/* box4 */}

          <div className="w-[33%] md2-max:hidden box1 flex flex-col justify-between items-center">
            <div>
              <Image
                src="/Images/team4.svg"
                alt="memeber 1"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="box1 flex flex-col justify-center items-center">
              <h3 className="mt-4 text-[20px] font-roboto font-[600]">
                Erick Kipkemboi
              </h3>
              <h3 className="mt-0">Web Designer</h3>
              <div className="w-full flex justify-evenly mt-4">
                <FontAwesomeIcon className="text-[18px]" icon={faLinkedin} />
                <FontAwesomeIcon className="text-[18px]" icon={faTwitter} />
                <FontAwesomeIcon className="text-[18px]" icon={faEarth} />
              </div>
            </div>
          </div>

          {/* box5 */}

          <div className="w-[33%] md2-max:hidden box1 flex flex-col justify-between items-center">
            <div>
              <Image
                src="/Images/team5.svg"
                alt="memeber 1"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="box1 flex flex-col justify-center items-center">
              <h3 className="mt-4 text-[20px] font-roboto font-[600]">
                Stephen Kerubo
              </h3>
              <h3 className="mt-0">President of Sale</h3>
              <div className="w-full flex justify-evenly mt-4">
                <FontAwesomeIcon className="text-[18px]" icon={faLinkedin} />
                <FontAwesomeIcon className="text-[18px]" icon={faTwitter} />
                <FontAwesomeIcon className="text-[18px]" icon={faEarth} />
              </div>
            </div>
          </div>

          {/* box6 */}

          <div className="w-[33%] md2-max:hidden box1 flex flex-col justify-between items-center">
            <div>
              <Image
                src="/Images/team6.svg"
                alt="memeber 1"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="box1 flex flex-col justify-center items-center">
              <h3 className="mt-4 text-[20px] font-roboto font-[600]">
                John Lebones
              </h3>
              <h3 className="mt-0">Dog Tranier</h3>
              <div className="w-full flex justify-evenly mt-4">
                <FontAwesomeIcon className="text-[18px]" icon={faLinkedin} />
                <FontAwesomeIcon className="text-[18px]" icon={faTwitter} />
                <FontAwesomeIcon className="text-[18px]" icon={faEarth} />
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden md2-max:inline-block w-full text-center mt-10">
          <Button variant={"my4"} size={"my"}>
            View all
          </Button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
