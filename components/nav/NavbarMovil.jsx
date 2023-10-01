"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";

import logoItson from "@/assets/icons/LogoItson.png";
import { MdOutlineDashboard } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { PiKeyReturnBold } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";

const menuItems = [
  { name: "INICIO", link: "/", icon: MdOutlineDashboard },
  { name: "APARTADOS", link: "/apartados", icon: BsCalendarCheck },
  { name: "SALIDAS", link: "/salidas", icon: ImExit, margin: true },
  { name: "LLEGADAS", link: "/llegadas", icon: PiKeyReturnBold },
  { name: "REPORTES", link: "/reportes", icon: TbReportSearch, margin: true },
];


function NavbarMovil() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
console.log(open);
  return (
    <nav
      className={` bg-azulOscuro text-blanco  font-medium
     flex  flex-col  
     top-0 mb-4 
     md:px-10 md:py-3 
     items-center   
     fixed  
     w-full 
     z-30
     ${!open ? "h-10" : "h-80"} duration-300
    `}
    >
      <div className="flex flex-row justify-between w-full">
        <Link
          href={"/"}
          className="w-28 ml-5"
        >
          {/* <Image src={logoItson}> */}
          <AiOutlineHome
            size={32}
            className="cursor-pointer"
          />
        </Link>
        <div className=" py-3 flex justify-end pr-5 md:pr-0">
          <HiMenuAlt3
            size={32}
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className={` flex  flex-col  gap-4 whitespace-pre duration-300 ${!open && " opacity-0 translate-x-28  -translate-y-10 overflow-hidden"} `}>
        {menuItems.map((item) => (
          <Link
            className={`${item.margin && "md:mt-6 "}
            flex items-center 
            text-sm gap-3.5 font-medium p-2 
            hover:bg-azulNormal rounded-md`}
            href={item?.link}
            key={item?.name}
            onClick={handleClick}
          >
            <div>{React.createElement(item?.icon, { size: "20" })}</div>
            <h1
              className={`
                `}
            >
              {item?.name}
            </h1>
          </Link>
        ))}
      </div>
    </nav>
  );
}
export default NavbarMovil;
