import { Questions } from "../questionData/questionData";
import AccordionItem from "../accordianItem/accordianItem";
const Faq = () => {

    return ( 
        <div className="md:px-20 py-20 bg-thinPurple flex flex-col items-center  gap-2 px-6">
            <h1 className="md:text-3xl text-2xl font-extrabold text-center">Frequently Asked Questions</h1>
            <p className="md:w-[10%] w-[15%] text-center rounded-md bg-middlePurple h-1 md:mt-3"></p>
            <p className="md:w-[40%] w-[90%] text-[0.8rem] md:text-base text-center md:pt-9 pt-5 md:pb-3">Here Are Some Frequently Asked Questions Users Asked When Using Portfodia</p>
            {Questions.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
     );
}
 
export default Faq;