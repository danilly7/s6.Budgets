export const BudgetInquiry = () => {




    return (
        <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row mb-10 sm:mx-4 lg:mx-32 p-10 border-2 border-gray-50 shadow-lg rounded-lg w-full sm:w-auto'>
            <div className="flex flex-col sm:flex-row md:flex-row justify-between w-full mb-4 sm:mb-0 lg:gap-4">
                <div className='flex flex-col items-start p-4 flex-grow'>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nom"
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                    />
                </div>
                <div className='flex flex-col items-start p-4 flex-grow'>
                    <input
                        id="telephone"
                        type="tel"
                        placeholder="Telèfon"
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                    />
                </div>
                <div className='flex flex-col items-start p-4 flex-grow'>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                    />
                </div>
            </div>
            <button className="bg-teal-900 text-white rounded-lg px-8 py-2 sm:px-6 sm:py-2 lg:w-60 lg:h-12 transition-all duration-300 hover:bg-teal-700 mx-auto md:mt-4 lg:mr-auto lg:ml-6">
                Sol·licitar pressupost →
            </button>
        </div>
    )
};