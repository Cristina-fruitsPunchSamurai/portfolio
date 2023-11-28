'use client'
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { timeline } from '@/data/timeline';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";

export default function Experience() {
    let workStyles = { background: '#4C1D95', padding: '0.5rem'};
    let schoolStyles = {background: '#831843', padding: '0.5rem'};
    return (
        <section id="experience">
        <div className='mx-auto'>
            <h3 className='text-3xl font-bold flex mx-auto items-center justify-center'>Experience</h3>
            <VerticalTimeline
            lineColor=''>
                {timeline.map((item) => {
                    let isWorkIcon = item.icon === 'work';
                    return (
                        <React.Fragment key={item.id}>
                            <VerticalTimelineElement
                            visible={true}
                            date={item.date}
                            dateClassName='text-gray-400 font-bold'
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            icon={isWorkIcon ? <MdOutlineWork/> : <FaGraduationCap/>}
                            iconStyle={isWorkIcon ? workStyles : schoolStyles}
                            >
                            <h3 className="vertical-timeline-element-title text-zinc-900 font-bold">{item.title}</h3>
                            <h4 className='text-zinc-700 text-sm'>{item.company}</h4>
                            <p className='text-zinc-900 text-sm'>{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                )})}
            </VerticalTimeline>
        </div>
        </section>

    )
}
