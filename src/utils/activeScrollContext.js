
import { useContext } from "react";
import { useEffect } from "react";
import{useInView} from "react-intersection-observer";
import { ActiveSectionContext } from "../context/section-context";

export const scrollActiveSection = (section, ref, inView) => {

    const{setIsActive} = useContext(ActiveSectionContext);

    useEffect(() => {
        if (inView) {
            setIsActive(section);
        }
    }, [inView, setIsActive])
}