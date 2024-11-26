import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="w-full h-auto mt-16  ">
        <div className="w-full h-[120px] md-max:h-auto flex flex-row justify-between items-center px-6 md-max:flex-col">
          <div className="pr-2 md-max:text-center md-max:w-full">
            <h2 className="font-[600] font-robot text-[18px] pr-1 ">
              Subscribe to our newsletter
            </h2>
            <p className="text-[15px] md-max:mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="md-max:w-full">
            <div className="w-[385px] flex flex-row justify-between items-center md-max:flex-col md-max:w-full">
              <input
                type="text"
                className="p-2 h-[40px] w-[256px] md-max:w-[90%] rounded-[5px] border-[1px] mt-4 border-[black] placeholder:text-[#505050]"
                placeholder="Enter your email"
              />
              <Button
                variant={"my4"}
                size={"my2"}
                className="md-max:w-[90%] mt-4"
              >
                Subsrcibe
              </Button>
            </div>
            <div className="md-max:w-full md-max:text-center">
              <p className="text-[12px] mt-3 ml-1">
                By subscribing you agree to with our{" "}
                <span className="underline">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}

      <div className="w-full h-[400px] ">
        <div className="mt-20 h-auto flex justify-center gap-[200px] max-lg:gap-[160px] max-l:gap-[140px] flex-wrap sm-max:flex-col sm-max:items-center sm-max:gap-[40px] sm-max:mt-14">
          <ul className="sm-max:text-center">
            <li>
              <Image
                src="/Images/logo.svg"
                alt="Hero Image"
                width={100}
                height={100}
                className="w-[140px]"
              ></Image>
            </li>
          </ul>

          <ul className="w-[10%] max-lgx:w-[106px] sm-max:text-center ">
            <li className="font-[600] mb-4">Courses</li>
            <li className="mb-4">Business</li>
            <li className="mb-4">Development</li>
            <li className="mb-4">Technology</li>
            <li className="mb-4">Design</li>
            <li className="mb-4">Programming</li>
          </ul>

          <ul className="w-[10%] max-lgx:w-[106px] sm-max:text-center">
            <li className="font-[600] mb-4">Resources</li>
            <li className="mb-4">Carer</li>
            <li className="mb-4">Resume</li>
            <li className="mb-4">Learning</li>
            <li className="mb-4">Interview preparation</li>
            <li className="mb-4">Jobs</li>
          </ul>

          <ul className="w-[10%] max-lgx:w-[106px] sm-max:text-center">
            <li className="font-[600] mb-4">About us</li>
            <li className="mb-4">Contact us</li>
            <li className="mb-4">Help / Support</li>
            <li className="mb-4">FAQs</li>
            <li className="mb-4">Trems and condition</li>
            <li className="mb-4">partners</li>
          </ul>
        </div>

        {/* border */}
        <div className="w-full px-6 mt-4">
          <div className="border-t-[1px] border-black w-[100%]"></div>
        </div>
        {/* border */}

        <div className="w-full h-[60px] flex justify-between px-[22px] sm-max:px-[10px] mt-4 max2-l:inline-block">
          <div className="flex justify-start items-center w-[70%] max2-l:w-full max2-l:mt-4 ">
            <p className="mr-6 max-l:text-[15px]  max2-l:w-full max2-l:text-center">
              2023 Ddsgnr. All right reserved.
            </p>

            <div className="flex justify-between items-center max2-l:hidden">
              <p className="mr-6 underline max-l:text-[15px]">Privacy Policy</p>
              <p className="mr-6 underline max-l:text-[15px]">
                Trems of Services
              </p>
              <p className="underline max-l:text-[15px]">Cookies setting</p>
            </div>
          </div>

          {/* will be vsisble on small screens */}
          <div className="hidden max2-l:flex max2-l:justify-center max2-l:gap-3 sm-max:gap-0 max2-l:items-center max2-l:w-full max2-l:mt-5 ">
            <p className="mr-6 underline max-l:text-[15px] sm-max:text-[14px] min-max0:text-[12px] sm-max:mr-4">
              Privacy Policy
            </p>
            <p className="mr-6 underline max-l:text-[15px] sm-max:text-[14px] min-max0:text-[12px] sm-max:mr-4">
              Trems of Services
            </p>
            <p className="underline max-l:text-[15px] sm-max:text-[14px] min-max0:text-[12px]">
              Cookies setting
            </p>
          </div>

          <div className="w-[170px] flex justify-between items-center  max2-l:justify-center max2-l:gap-6  max2-l:w-full max2-l:mt-6 ">
            <FontAwesomeIcon className="text-[20px]" icon={faLinkedin} />
            <FontAwesomeIcon className="text-[20px]" icon={faFacebook} />
            <FontAwesomeIcon className="text-[20px]" icon={faInstagram} />
            <FontAwesomeIcon className="text-[20px]" icon={faTwitter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

//
