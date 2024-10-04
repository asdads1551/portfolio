import React from "react";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { DirectionAwareHover } from "@/app/component/ui/direction-aware-hover";
import { SiMongoose, SiNextdotjs, SiReact,SiNuxtdotjs,SiVuedotjs,SiTailwindcss,SiTypescript,SiVite,SiBootstrap} from "react-icons/si";

export default function Projects(){
    const projects = [
        {
            title:"電商後台管理系統",
            tech:[SiVuedotjs,SiNuxtdotjs,SiTailwindcss,SiVite],
            link:"https://ecommercedb.zeabur.app/overview",
            cover:"/電商儀表板.jpg",
            backgroud:"bg-green-500",
        },
        {
            title:"電商平台",
            tech:[SiVuedotjs,SiNuxtdotjs,SiTailwindcss,SiVite],
            link:"https://ecommerce.zeabur.app/",
            cover:"/電商網站.jpg",
            backgroud:"bg-blue-500",
        },
        {
            title:"任務管理系統",
            tech:[SiVuedotjs,SiNuxtdotjs,SiBootstrap,SiVite],
            link:"https://taskmg.zeabur.app/",
            cover:"/任務管理系統.jpg",
            backgroud:"bg-blue-500",
        },

    ]
    return(
        <div className="py-10 p-5 sm:p-0">
            <Title text="專案👨🏻‍💻" className="flex flex-col items-center justify-center rotate-6"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index)=>{
                    return (
                        <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                            <div className={cn("p-5 rounded-md w-full h-[300px]", project.backgroud)}>
                                <DirectionAwareHover imageUrl={project.cover} className="w-full h-full space-y-5 cursor-pointer">
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