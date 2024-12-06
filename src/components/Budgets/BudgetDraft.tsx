import { butgetArray } from "./butgetArray"

export const BudgetDraft = () => {
    return (
        <>
            {butgetArray.map(({ name, telephone, email, services, totalBudget, date }, index) => (
                <div
                    key={index}
                    className='flex flex-row sm:flex-row md:flex-col lg:flex-row mb-10 sm:mx-4 lg:mx-32 py-10 px-20 border-2 border-gray-50 shadow-lg rounded-lg w-full sm:w-auto'
                >
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-full mb-4 sm:mb-0 lg:gap-4">
                        <div className='flex flex-col items-start justify-center p-4 flex-grow'>
                            <h1 className="text-3xl font-bold text-teal-800">{name}</h1>
                            <p className="text-gray-800">{telephone}</p>
                            <p className="text-gray-800">{email}</p>
                            <p className="text-gray-800">Data: {date.toLocaleDateString()}</p>
                        </div>
                        <div className='flex flex-col items-start lg:items-center justify-center p-4 flex-grow'>
                            <h2 className='text-2xl font-semibold text-gray-800 items-start'>Serveis contractats:</h2>
                            <ul className="list-disc pl-5 text-left lg:text-center">
                                {services.map(({
                                    nameService,
                                    discountService,
                                    priceService,
                                    extrasService
                                }, index) => (
                                    <li className="text-left">
                                        <div key={index}>
                                            <h2 className='text-xl font-semibold text-teal-800'>{nameService} <span className="text-base text-gray-400">{priceService}€</span></h2>
                                            {discountService && <p>Discount: {discountService}</p>}
                                            {extrasService && (
                                                <div>
                                                    <p className="text-gray-800 font-semibold">Extres:</p>
                                                    <ul className="list-inside pl-5">
                                                        {extrasService.map((extra, index) => (
                                                            <>
                                                                <li key={index} className="text-gray-800">Núm. pàgines: {extra.pages}</li>
                                                                <li key={index} className="text-gray-800">Núm. llenguatges: {extra.languages}</li>
                                                            </>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col items-end justify-center p-4 flex-grow'>
                            <h2 className="text-4xl font-semibold text-gray-800">Total: <span className="text-teal-800 font-bold">{totalBudget}€</span></h2>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};