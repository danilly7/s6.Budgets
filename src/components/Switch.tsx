import { useBudgetContext } from "./Budgets/Context";

export const Switch = () => {
    const { isDiscounted, toggleDiscount } = useBudgetContext();

    const handleToggle = () => {
        toggleDiscount();
    };

    const optionChosenMensual = isDiscounted
        ? ''
        : 'font-bold';

    const optionChosenAnual = isDiscounted
        ? 'font-bold'
        : '';

    return (
        <div className="flex flex-row justify-center mb-10">
            <div className="inline-flex justify-between gap-4 mx-auto text-gray-600">
                <p className={optionChosenMensual}>Pagament mensual</p>
                <div className="relative inline-block w-11 h-5">
                    <input
                        id="switch-component-discount"
                        type="checkbox"
                        checked={isDiscounted}
                        onChange={handleToggle}
                        className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-teal-800 cursor-pointer transition-colors duration-300"
                        aria-label="Toggle between monthly and yearly payment"
                    />
                    <label
                        htmlFor="switch-component-discount"
                        className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-teal-800 cursor-pointer"
                    ></label>
                </div>
                <p className={optionChosenAnual}>Pagament anual</p>

            </div>
        </div>
    )
};