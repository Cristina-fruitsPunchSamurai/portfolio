
'use client'

import React,{useContext, useEffect}from 'react';
//my context
import { ActiveSectionContext } from '@/context/section-context';
//Scroll Nav with react-intersection-observer
import {useInView} from 'react-intersection-observer';
//Timeline library
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { timeline } from '@/data/timeline';
import 'react-vertical-timeline-component/style.min.css';
//Icons
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import '../globals.css';
import { scrollActiveSection } from '@/utils/activeScrollContext';


export default function Experience() {
    let workStyles = { background: '#4C1D95', padding: '0.5rem'};
    let schoolStyles = {background: '#831843', padding: '0.5rem'};

    const {setIsActive} = useContext(ActiveSectionContext);

    const {ref} = scrollActiveSection("Experience", 0.60, setIsActive)

    return (
        <section
        ref={ref}
        className='mb-28 scroll-mt-28'>
            <div className='mx-auto w-[90%]'>
                <h3 id="experience" className='text-2xl font-bold flex items-center justify-center mb-8 uppercase'>Experience</h3>
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
