import React from "react";

const Solo = (props) => {
    return (
        <>

// {/* // <!-- hero section --> */}
<section className="relative py-32 lg:py-36 bg-white" id={props.id}>
    <div
        className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span
                className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span
            className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

            <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900">
               {props.head}
            </h1>
            <p className="mt-8 text-gray-700">
            {props.para}            </p>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img src={props.immg} alt="Hero image" width="2350" height="2359"
                className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
        </div>
    </div>
</section>
</>
    );
};

export default Solo;
// // <!-- component -->
// <!-- component -->
{/* <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
        rel="stylesheet" />

<!-- navbar --> */}





// copy

<div classNameName="dark:bg-gray-900">
            <div classNameName="container mx-auto py-9 md:py-12 lg:py-24">
                <div classNameName="relative mx-4">
                    <img src="https://i.ibb.co/q5k5j57/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" classNameName="w-full h-full hidden lg:block" />
                    <img src="https://i.ibb.co/94jQFsV/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" classNameName="hidden sm:block lg:hidden w-full h-full" />
                    <img src="https://i.ibb.co/cJz8LZ2/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" classNameName="sm:hidden w-full h-full" />

                    <div classNameName="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                        <h1 classNameName="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 sm:w-8/12">Minimalist Furniture Design</h1>
                        <p classNameName="text-base leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-5/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button classNameName="hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                    </div>
                    <button classNameName="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                </div>
            </div>
        </div>