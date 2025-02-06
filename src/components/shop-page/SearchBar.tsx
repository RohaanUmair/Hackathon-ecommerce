'use client';

function SearchBar({ data, setFilteredData, searchTerm, setSearchTerm }: any) {

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(term)
        );
        setFilteredData(filtered);
    };

    return (
        <div className="p-4 flex justify-center">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
}

export default SearchBar;
