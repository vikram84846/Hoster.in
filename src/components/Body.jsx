import React from "react";

const Body = () =>{
    return(
        <div className="space-y-4 lg:flex">
            <div className="flex items-center justify-center my-36 lg:flex-1 lg:order-2 ">
                <img src="./assets/Blue-Shape.svg" alt="1st" className="absolute -rotate-45 h-64 md:h-80 lg:h-[400px]" />
                <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-80 lg:h-[400px]" />
                <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-80 lg:h-[400px]"/>
                <img src="./assets/Hero-Model.png" alt="hero" className="absolute h-64 md:h-80 lg:h-[400px]"/>

            </div>
            <div className="lg:flex-1 lg:order-1">
                <h1 className="text-4xl font-bold font-playfair leading-tight md:text-5xl lg:text-7xl">Host your website in less than 5 minutes.</h1>
                <p className="font-lato text-gray-400 lg:text-2xl">  With Hoster, get your website up and running in no less than 5 minutes with the most competitive pricing package available online.</p>
                <form action="" className="flex flex-col gap-4 md:flex-row lg:h-14">
                    <input type="email" placeholder="Enter email address"className="rounded-md px-4 py-3 placeholder:text-gray-400 lg:w-80" />
                    <button className=" rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white lg:w-40 lg:text-lg ">Join Waitlist</button>
                </form>
                <div className="flex gap-2">
                    <img src="./assets/Checkmark.svg" alt="check" />
                    <p className="font-lato text-gray-400 lg:text-[20px]">No spam ever. Unsubscribe anytime</p>
                </div>
            </div>
        </div>
    )
}

export default Body