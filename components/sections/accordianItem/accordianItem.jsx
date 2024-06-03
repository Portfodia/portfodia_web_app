import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const AccordionItem = ({ title, content}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
    return ( 
         <div className="flex flex-col items-center md:w-[70%] w-[95%] md:mt-2">
                <div className="flex items-center justify-between bg-white p-4 md:w-[70%] w-[95%]">
                    <h1 className="font-semibold text-boldPurple md:text-[0.9rem] text-[0.8rem]">{title}</h1>
                    <FaCaretDown className="cursor-pointer" onClick={toggleAccordion}/>
                </div>
                {isOpen && (
                    <div className="p-4 bg-white md:w-[70%] w-[95%]">
                        <p className="md:font-semibold md:text-[0.75rem] text-[0.7rem]">{content}</p>
                    </div>
                )}
         </div>
     );
}
 
export default AccordionItem;