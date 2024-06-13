import { FiSearch } from "react-icons/fi";
const SearchItems = ( {field} ) => {
    return ( 
        <button className="flex items-center gap-2 bg-middleGray border px-4 py-2 rounded-md ">
                    <p className="md:text-[0.9rem] text-[0.75rem]">{field}</p>
                    <FiSearch className="text-deepGray" />
        </button>
     );
}
 
export default SearchItems;