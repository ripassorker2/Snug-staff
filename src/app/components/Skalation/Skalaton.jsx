const Skalaton = () => {
    return (
        <div className="p-7 border rounded-xl border-[#CEDFEB] shadow-lg">
            <div className="h-[250px] bg-gray-300 animate-pulse rounded-xl"></div>

            <div className="flex space-x-3 space-y-3 -ml-3 flex-wrap items-center my-2 text-sm">
                <div className=" hidden">
                    {/* Bedroom Icon */}
                    <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
                    <div className="w-8 h-4 bg-white rounded-lg"></div>
                </div>
                <div className="bg-gray-300 inline-flex items-center rounded-lg px-2 py-1 animate-pulse">
                    {/* Bedroom Icon */}
                    <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
                    <div className="w-8 h-4 bg-white rounded-lg"></div>
                </div>
                <div className="bg-gray-300 inline-flex items-center rounded-lg px-2 py-1 animate-pulse">
                    {/* Bathroom Icon */}
                    <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
                    <div className="w-8 h-4 bg-white rounded-lg"></div>
                </div>
                <div className="bg-gray-300 inline-flex items-center rounded-lg px-2 py-1 animate-pulse">
                    {/* Guest Icon */}
                    <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
                    <div className="w-8 h-4 bg-white rounded-lg"></div>
                </div>
            </div>
            <div className="mt-3 leading-5 text-base">
                <div className="text-lg font-semibold text-gray-800 bg-gray-300 animate-pulse rounded-lg h-6"></div>
                <div className="pt-2">
                    <div className="w-16 h-4 bg-gray-300 animate-pulse rounded-lg"></div>
                </div>
            </div>
            <div className="mt-3">
                <button className="bg-gray-300 w-full rounded-lg group pointer-events-none animate-pulse h-7"></button>
            </div>
        </div>
    );
};

export default Skalaton;
