import { SearchButtons } from "./SearchButtonsData/SearchButtons";
import SearchItems from "./SearchItems";
const SearchFields = () => {
    return ( 
        <div className="lg:px-20 px-6 py-20">
            <h1 className="font-semibold lg:text-2xl text-2xl pt-3 pb-4">Top Search Fields</h1>
            <div className="flex items-center justify-center flex-wrap gap-3">
            {SearchButtons.map(item => (
                <SearchItems 
                    key={item.id}
                    field={item.field}
                />
            ))}
            </div>
        </div>
     );
}
 
export default SearchFields;