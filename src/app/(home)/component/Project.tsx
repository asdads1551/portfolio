import React from "react";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { DirectionAwareHover } from "@/app/component/ui/direction-aware-hover";
import { SiMongoose, SiNextdotjs, SiReact } from "react-icons/si";

export default function Projects(){
    const projects = [
        {
            title:"後台專案",
            tech:[SiReact,SiMongoose,SiNextdotjs],
            link:"www.google.com",
            cover:"/web-dashboard.png",
            backgroud:"bg-green-500",
        },
        {
            title:"電商平台",
            tech:[SiReact,SiMongoose,SiNextdotjs],
            link:"www.google.com",
            cover:"/web-dashboard.png",
            backgroud:"bg-blue-500",
        },
        {
            title:"電商平台",
            tech:[SiReact,SiMongoose,SiNextdotjs],
            link:"www.google.com",
            cover:"/web-dashboard.png",
            backgroud:"bg-blue-500",
        },
        {
            title:"電商平台",
            tech:[SiReact,SiMongoose,SiNextdotjs],
            link:"www.google.com",
            cover:"/web-dashboard.png",
            backgroud:"bg-blue-500",
        },
    ]
    return(
        <div className="py-10 p-5 sm:p-0">
            <Title text="專案👨🏻‍💻" className="flex flex-col items-center justify-center rotate-6"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index)=>{
                    return (
                        <Link href={project.link} key={index}>
                            <div className={cn("p-5 rounded-md", project.backgroud)}>
                                <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                                    <div className="space-y-5">
                                        <h1 className="text-2xl font-bold">{project.title}</h1>
                                        <div className="flex items-center gap-5">
                                            {project.tech.map((Icon, index)=>{
                                                return (                   
                                                    <div key={index}>
                                                        <Icon className="w-8 h-8 "/>
                                                    </div>                             
                                                    
                                                )
                                            })}
                                        </div>
                                    </div>    
                                </DirectionAwareHover>
                            </div>
                        </Link>
                )})}
            </div>
        </div>
    )    
}