import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Topic {
    id: number;
    heading: string;
    color: string;
    paragraphs: string[];

}


const PageSection = ({ topic, setMarquee }: { topic: Topic, setMarquee: React.Dispatch<React.SetStateAction<string>> }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        // run, when section is in view
        if (isInView) {
            // sets the marquee
            setMarquee(setMarqueeText(topic.heading));
            setIsActive(true);
            // un-comment to discover bug- console logs twice.
            // console.log(topic.heading, 'is in view')

            // Set the background color var of the body element when the component mounts
            document.documentElement.style.setProperty("--color-background", topic.color)
        } else {
            setIsActive(false); // Set isActive to false when section is not in view
        }
    }, [isInView, topic, setMarquee, setIsActive])

    const setMarqueeText = (string: string | undefined) => {
        let text = ""

        // sets the marquee with repeated text
        string && string.length !== 0 && (text = `😎  ${string} `.repeat(20))
        return text;
    }

    return (
        <section className={`page-content__section ${isActive && `active`}`} >
            <h2 ref={ref}>{topic.heading}</h2>

            {topic.paragraphs.map((paragraph, index) => {
                return (
                    <p key={index}>{paragraph}</p>
                )
            })}
        </section>
    )
}

export default PageSection