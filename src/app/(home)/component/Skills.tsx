'use client'
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/app/component/ui/card-hover-effect";
import {
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiReact
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
            text: "React",
            Icon: SiReact,
        },
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "React",
            Icon: SiReact,
        }
    ]

    return <div className=" max-w-5xl mx-auto px-8">
                <Title text="技能🔪" className="flex flex-col items-center justify-center rotate-6"/>
                <HoverEffect items={skills}/>
            </div>;
}

