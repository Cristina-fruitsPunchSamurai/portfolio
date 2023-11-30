'use client'
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { timeline } from '@/data/timeline';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import '../globals.css';
import Divider from './Divider';

export default function Experience() {
    let workStyles = { background: '#4C1D95', padding: '0.5rem'};
    let schoolStyles = {background: '#831843', padding: '0.5rem'};

    return (
        <section className='mb-28'>
        <div className='mx-auto w-[90%]'>
            <h3 id="experience" className='text-3xl font-bold flex mx-auto items-center justify-center'>Experience</h3>
            <VerticalTimeline
            lineColor=''
            animate={true}>
                {timeline.map((item) => {
                    let isWorkIcon = item.icon === 'work';
                    return (
                        <React.Fragment key={item.id}>
                            <VerticalTimelineElement
                            visible={true}
                            date={item.date}
                            dateClassName='text-gray-400 font-bold'
                            contentArrowStyle={{ borderRight: '7px solid  #F5F3FF' }}
                            icon={isWorkIcon ? <MdOutlineWork/> : <FaGraduationCap/>}
                            iconStyle={isWorkIcon ? workStyles : schoolStyles}
                            >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className='vertical-timeline-element-subtitle'>{item.company}</h4>
                            <p id="description">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                )})}
            </VerticalTimeline>
        </div>
        </section>

    )
}
