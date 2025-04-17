import { UseFormRegister } from "react-hook-form";

type Interface = {
    array: Array<string>,
    width?: string,
    label: string,
    name: string,
    register: UseFormRegister<any>,
    isRequired: boolean,
    error?: any,
};

export default function InputSelect({ array, width, label, name, register, isRequired, error }: Interface) {
    {width ? width : width = "w-full"}

    return (
        <div className="flex flex-col">
            <label 
                htmlFor={label} 
                className="justify-start opacity-30 text-xs md:text-sm"
            >
                {label}
            </label>

            <select 
                id={label} 
                className={`${error ? "border-red-800 border-1" : "border-transparent"} ${width} p-2 rounded-lg bg-hoverSessions focus:outline-none text-xs md:text-sm`}
                defaultValue=""
                {...register(name, { required:isRequired })}
            >
                <option value="" disabled></option>
                {array.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>

            {error && <span className="text-red-600 text-xs">Obrigatório</span>}
        </div>
    );

}