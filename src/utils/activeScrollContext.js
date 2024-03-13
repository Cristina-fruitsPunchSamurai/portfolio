
//import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
//import { ActiveSectionContext } from "../context/section-context";

/**
 * Custom hook that tracks if a section is currently in view and sets it as active.
 * @param {string} sectionName - The name of the section.
 * @param {number} threshold - The threshold value for determining if a section is in view.
 * @param {function} setIsActive - The function to set the active section.
 * @returns {object} - An object containing the ref and inView values.
 */
export const useScrollActiveSection = (sectionName,threshold, setIsActive ) => {

        const {ref,inView} = useInView({
        threshold: threshold,
    });

    useEffect(() => {
        if (inView) {
            setIsActive(sectionName);
        }
    }, [inView, setIsActive, sectionName, ref]);

    return {ref, inView};
}

