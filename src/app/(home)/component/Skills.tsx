'use client'
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/app/component/ui/card-hover-effect";
import {
    SiAmazoncloudwatch,
    SiCss3,
    SiDocker,
    SiExpress,
    SiGit,
    SiGooglecloud,
    SiHtml5,
    SiJavascript,
    SiJquery,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTailwindcss
} from "react-icons/si"
export default function Skills () {

    const skills = [
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },
        {
            text: "Python",
            Icon: SiPython,
        },
        {
            text: "Next",
            Icon: SiNextdotjs,
        },
        {
            text: "Express",
            Icon: SiExpress,
        },
        {
            text: "JQuery",
            Icon: SiJquery,
        },
        {
            text: "HTML",
            Icon: SiHtml5,
        },
        {
            text: "CSS",
            Icon: SiCss3,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Mongodb",
            Icon: SiMongodb,
        },
        {
            text: "MySQL",
            Icon: SiMysql,
        },
        {
            text: "GCP",
            Icon: SiGooglecloud,
        },
        {
            text: "GIT",
            Icon: SiGit,
        },
        {
            text: "Docker",
            Icon: SiDocker,
        },
        {
            text: "Linux",
            Icon: SiLinux,
        },
        {
            text: "AWS",
            Icon: SiAmazoncloudwatch,
        }
        
    ]

    return <div className=" max-w-5xl mx-auto px-8">
                <Title text="技能🔪" className="flex flex-col items-center justify-center rotate-6"/>
                <HoverEffect items={skills}/>
            </div>;
}

