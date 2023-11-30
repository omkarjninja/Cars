import React from "react";
import Pop from "./alert";

export default function NewsLetter() {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-16">
            <div className=" w-full  relative flex items-center justify-center">
                <img src="https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                <img src="https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                <img src="https://images.pexels.com/photos/5484508/pexels-photo-5484508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
                <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">Revving Up: Stay in the Driver's Seat with Our Latest Auto Insights!</h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                    Get ready to hit the road with our newsletter dedicated to all things automotive! From the latest industry trends to insider tips on maintenance, performance upgrades, and upcoming releases, we've got your car passion covered. Stay ahead of the curve with expert advice, in-depth reviews, and exclusive content delivered right to your inbox. Buckle up and join our community of enthusiasts for a ride through the ever-evolving world of cars!
                    </p>
                    <div className="sm:border border-white flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75"
                        >Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
