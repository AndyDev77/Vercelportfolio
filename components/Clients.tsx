"use client";

import { companies, testimonials } from "@/data";
import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        Mots aimables de <span className="text-purple">clients satisfaits</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  className="md:w-10"
                  width={20}
                  height={20}
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 50 : 75}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
