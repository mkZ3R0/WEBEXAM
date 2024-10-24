import {useState} from 'react';

const SearchBar = ({currentSearch, handleSearchClick}) => 
{
    const [searchTerm,setSearchTerm] = useState(currentSearch);

    const handleSearchSubmit = (event) =>
    {
        event.preventDefault();

        handleSearchClick(searchTerm);
    };

    const handleSearchInput = (event) =>
    {
        setSearchTerm(event.target.value);
    };

    const handleReset = () =>
    {
        handleSearchClick("");
    }


    return (
        <div className="bg-gray-900 text-white">
            <form className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7"
            onSubmit={handleSearchSubmit}>
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
                md:w-2/5">
                    Every night <br></br><span className="text-red-700">is movie night</span>
                </h1>
                <div>
                    <input type="text" placeholder="Looking for a specific film?" onChange={handleSearchInput}
                    className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded 
                    px-2 focus:outline-none" />
                    <button className="bg-red-400 hover:bg-red-700 duration-300 px-5 py-2.5 font-[Poppins]
                    rounded-md text-white md:w-auto w-full" type="submit" disabled={!searchTerm}>
                    Find
                    </button>
                </div>
            </form>
            <button className="bg-violet-500 hover:bg-violet-700 duration-300 px-5 py-2.5 font-[Poppins]
                    rounded-md text-white md:w-auto w-full" type="click" onClick={handleReset}>
                    ALL
            </button>
        </div>
    );

};

export default SearchBar;