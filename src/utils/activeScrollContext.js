
//import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
//import { ActiveSectionContext } from "../context/section-context";

export const useScrollActiveSection = (sectionName,threshold, setIsActive ) => {

        const {ref,inView} = useInView({
        threshold: threshold,
    });

    useEffect(() => {
        if (inView) {
            setIsActive(sectionName);
        }
    }, [inView, setIsActive, sectionName, ref]);

    return {ref};
}

