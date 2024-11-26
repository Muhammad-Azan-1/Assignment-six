"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [Menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((menu: boolean) => !menu);
  
  }

  // console.log("value",Menu)
  return (
    <>
      <div className=" md-max:hidden h-[60px] w-full flex items-center justify-between">
        <div className="ml-6 h-full w-[484px] flex items-center gap-4 font-roboto">
          <p className="text-[14px] text-primary">
            Phone Number: 956 742 455 678
          </p>
          <div className="border-[1px] border-[#676767] h-[30px] bg-primary"></div>
          <p className="text-[14px] text-primary">Email:info@ddsgnr.com </p>
        </div>

        <div className="flex w-[11%] max-lg:w-[15%] h-full mr-8 justify-between items-center">
          <Link href="/">
            {" "}
            <FontAwesomeIcon className="text-[20px]" icon={faFacebook} />{" "}
          </Link>
          <Link href="/">
            {" "}
            <FontAwesomeIcon className="text-[20px]" icon={faTwitter} />{" "}
          </Link>
          <Link href="/">
            {" "}
            <FontAwesomeIcon className="text-[20px]" icon={faInstagram} />{" "}
          </Link>
          <Link href="/">
            {" "}
            <FontAwesomeIcon className="text-[20px]" icon={faLinkedin} />{" "}
          </Link>
        </div>
      </div>

      <div className="border-[1px] w-full border-primary"></div>

      {/* main header */}

      <div className="md-max:relative md-max:mt-0 w-full  h-[70px] md-max:justify-start justify-center gap-[40px] max-lg:gap-[38px] max-l:gap-[25px] bg-[#F7F7F7] mt-2 flex items-center">
        {/* logo box */}
        <div className=" md-max:w-[160px] md-max:absolute md-max:left-3 w-[14%] max-lg:w-[12%]">
          <Image
            src="/Images/logo.svg"
            alt="Logo"
            width={130}
            height={30}
          ></Image>
        </div>

        {/* Bars Icon */}

        <div className="md-max:inline-block hidden">
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="absolute right-3 top-6 text-[25px] cursor-pointer"
            icon={faBars}
          />
        </div>

        {/* menu box */}

        <div
          className={`md-max:bg-white scroll-smooth md-max:rounded-none  md-max:absolute	md-max:w-[100%] md-max:h-[1000px]  max-lg:w-[78%] 
  max-l:w-[81%] w-[72%] flex justify-between bg-[#FFFFFF] h-[44px] items-center b-r-[3px] border-r-black rounded-r-[5px] md-max:transform md-max:transition-transform md-max:duration-1000 md-max:ease-in-out
  ${Menu ? "md-max:top-[0px] md-max:translate-y-0 md-max:opacity-100" : "md-maxtop-[-1000px] md-max:translate-y-[-100%] md-max:opacity-0"}`}
        >
          <div className="md-max:ml-0 md-max:pt-20  md-max:text-[20px] md-max:text-black md-max:absolute md-max:top-0 md-max:flex-col md-max:justify-start md-max:items-center w-[100%] h-[100%] items-center flex justify-between ml-3 mr-8  max-l:mr-3">
            {/* cross Icons */}
            <div className="md-max:inline-block hidden">
              <FontAwesomeIcon
                onClick={toggleMenu}
                className="absolute right-10 top-8 text-[30px] cursor-pointer"
                icon={faTimes}
              />
            </div>

            <Link className="md-max:mb-8" href="/">
              Home
            </Link>
            <Link className="md-max:mb-8" href="/Courses">
              Courses
            </Link>
            <Link className="md-max:mb-8" href="/Services">
              Services
            </Link>
            <Link className="md-max:mb-8" href="/Achievment">
              Achievment
            </Link>
            <Link className="md-max:mb-8" href="/About">
              About Us
            </Link>
            <Link className="md-max:mb-8" href="/Testimonials">
              Testimonials
            </Link>
          </div>

          <div className=" md-max:absolute bottom-[500px]  md-max:w-full md-max:justify-center  flex h-[43px] items-center w-[185px] max-l:w-[155px] ">
            <Button variant={"my"} className="h-[43px]">
              Login
            </Button>
            <Button variant={"my2"} className=" ml-4 h-[43px]">
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      <div className="border-[1px] w-full border-[#676767] "></div>
    </>
  );
};

export default Header;
