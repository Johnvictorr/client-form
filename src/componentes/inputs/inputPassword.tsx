import { UseFormRegister } from "react-hook-form";

type Interface = {
    minLength?: number
    label: string,
    name: string,
    register: UseFormRegister<any>,
    isRequired: boolean,
    error: any,
}

export default function InputPassword({ minLength, label, name, register, isRequired, error }: Interface) {

    return (
        <div className="flex flex-col">
            <label 
                htmlFor={label} 
                className={`justify-start opacity-30 text-xs md:text-sm`}
            >
                {label}
            </label>
            
            <input
                className={`${error && "border-1 border-red-800"} p-2 rounded-lg bg-hoverSessions focus:outline-none w-full text-xs md:text-sm`}
                type="password"
                minLength={minLength}
                {...register(name, { required:isRequired })}
            />

            {error && <span className=" text-red-600 text-xs">Obrigatório</span>}
        </div>
    );
}