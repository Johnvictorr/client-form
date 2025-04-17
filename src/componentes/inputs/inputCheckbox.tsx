import { UseFormRegister } from "react-hook-form";

type Interface = {
    id: string,
    label: string,
    name: string,
    register: UseFormRegister<any>,
    isRequired: boolean,
    error?: any,
};

export default function InputCheckbox({ id, label, name, register, isRequired }: Interface) {

    return (
        <div className="flex flex-col items-center text-xs md:text-sm">
            <label
                htmlFor={id}
                className="justify-start opacity-30" 
            >
                {label}
            </label>

            <div>
                <label htmlFor={id}>
                    <input 
                        className="peer hidden"
                        type="checkbox"
                        id={id}
                        {...register(name, { required:isRequired })}
                    />
                    <span
                        className="peer-checked:before:content-['✔'] w-8 md:w-10 h-8 md:h-9 bg-hoverSessions rounded-full peer-checked:bg-button flex items-center justify-center cursor-pointer"
                    />
                </label>
            </div>
        </div>
    );
}