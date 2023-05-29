import React from "react";
import Image from "next/image";
import Button from "@/components/elements/Button";

export default function CartSection() {
  return (
    <section>
      <div className="sticky top-0 flex flex-1 justify-center lg:justify-end">
        <div className="w-full md:w-8/12 lg:w-10/12">
          <section className="mb-2">
            <h1 className="uppercase text-5xl font-normal">JONATHAN SIMKHAI</h1>
            <p className="text-sm">Lurex Linen Viscose Jacket in Conchiglia</p>
            <strong className="text-sm">$255</strong>
          </section>
          <section className="mt-4">
            <p className="uppercase text-sm">
              <strong>Color</strong> Conchiglia
            </p>
            <div className="flex mt-2">
              <Image src="/images/product/color_option1.png" width={53} height={65} alt="color_option1" className="mr-2"/>
              <Image src="/images/product/color_option2.png" width={53} height={65} alt="color_option2"/>
            </div>
          </section>
          <section className="mt-5">
            <div className="flex justify-between mb-2">
              <p className="text-sm">
                <strong>SIZE</strong> L
              </p>
              <p className="text-sm underline">SIZE GUIDE</p>
            </div>
            <Button type="inactive" classname="m-1">
              XS
            </Button>
            <Button type="inactive" classname="m-1">
              S
            </Button>
            <Button type="disabled" classname="m-1">
              M
            </Button>
            <Button type="primary" classname="m-1">
              L
            </Button>
            <Button type="inactive" classname="m-1">
              XXL
            </Button>
            <Button type="primary" classname="w-full mt-5 py-3 uppercase flex items-center	justify-center">
              <span className="mr-2">ADD TO BAG</span><Image src="/images/arrow.svg" width={16} height={10} alt="arrow" />
            </Button>
          </section>
          <section>
            <p className="text-sm mt-5 mb-5">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
            <p className="text-sm">Speak to a Personal Stylist CHAT NOW</p>
          </section>
        </div>
        
      </div>
    </section>
  );
}
