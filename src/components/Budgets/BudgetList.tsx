import { useBudgetContext } from "./Context";

export const BudgetList = () => {
    const { budgets } = useBudgetContext();

    return (
        <>
            {budgets.map(({ inquiryBudget, featuresBudget }, index) => (
                <div
                    key={index}
                    className='flex flex-row sm:flex-row md:flex-col lg:flex-row mb-10 sm:mx-4 lg:mx-32 py-10 px-20 border-2 border-gray-50 shadow-lg rounded-lg w-full sm:w-auto'
                >
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-full mb-4 sm:mb-0 lg:gap-4">
                        <div className='flex flex-col items-start justify-center p-4 flex-grow'>
                            <h1 className="text-3xl font-bold text-teal-800">{inquiryBudget.name}</h1>
                            <p className="text-gray-800">{inquiryBudget.telephone}</p>
                            <p className="text-gray-800">{inquiryBudget.email}</p>
                            <p className="text-gray-800">Data: {inquiryBudget.date}</p>
                        </div>
                        <div className='flex flex-col items-start lg:items-center justify-center p-4 flex-grow'>
                            <h2 className='text-2xl font-semibold text-gray-800 items-start'>Serveis contractats:</h2>
                            <ul className="list-disc pl-5 text-left lg:text-center">
                                {featuresBudget.services.map(({
                                    nameService,
                                    priceService,
                                    extrasService,
                                }, serviceIndex) => (
                                    <li key={`${nameService}-${serviceIndex}`} className="text-left">
                                        <div>
                                            <h2 className='text-xl font-semibold text-teal-800'>{nameService} <span className="text-base text-gray-400">{priceService}€</span></h2>
                                            {extrasService && (
                                                <div>
                                                    <p className="text-gray-800 font-semibold">Extres: <span className="text-sm text-gray-400">30€ per extra</span></p>
                                                    <ul className="list-inside pl-5" >
                                                        <li className="text-gray-800">Núm. pàgines: {extrasService.pages}</li>
                                                        <li className="text-gray-800">Núm. llenguatges: {extrasService.languages}</li>

                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col items-end justify-center p-4 flex-grow'>
                            <h2 className="text-4xl font-semibold text-gray-800">Total: <span className="text-teal-800 font-bold">{featuresBudget.priceBudget}€</span></h2>
                            {featuresBudget.discountedBudget 
                                ? <p className="text-orange-400 py-2">Amb el descompte del 20% aplicat.</p>
                                : <p className=" pb-10"></p>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};