import {  MovingBorderBtn } from "@/app/component/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "@/app/(home)/component/Title";

export default function LandingSection ()  {
    return (
        <div className="min-h-[60vh] flex flex-col-reverse gap-20 lg:gap-0 lg:flex-row items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text=7xl font-bold">
                        嗨～你好✋
                    <br />{""}
                    <span className="underline underline-office-8 decoration-green-500">
                        {"我是Janus"}
                    </span>
                </h1>
                <p className="md:w-96 text-lg text-gray-300">
                    我是一個Web全端開發者
                </p>
                
                <Link href="mailto:ktr84759@gmail.com" className="inline-block group">
                    <Title text="聯繫我 📪"/>
                </Link>
            </div>
            <div className="relative">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] " >
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10 ">                        
                    </div>
                    <div className="absolute bottem-5 sm:bottem-14 left-0 sm:-left-10">
                        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold ">
                        <p>作品集</p>
                        </MovingBorderBtn>    
                </div>
                </div>                                
            </div>
        </div>
    )
}