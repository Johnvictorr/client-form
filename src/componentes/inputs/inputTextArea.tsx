"use client";

import { UseFormRegister } from "react-hook-form";

type Interface = {
    width?: string
    label: string,
    name: string,
    register: UseFormRegister<any>,
    isRequired: boolean,
    /*error: any*/
};

export default function InputTextArea({ width, label, name, register, isRequired /*error*/ }: Interface) {

    {width ? width : width = "w-124"}

    return (
        <div className="flex flex-col">
            <div className="justify-start opacity-30 text-xs md:text-sm">
                <label htmlFor={label}>{label}</label>
            </div>
            <textarea
                id={label}
                className={`${width} p-2 rounded-lg bg-hoverSessions focus:outline-none resize-none w-full h-23 text-xs md:text-sm`}
                {...register(name, { required:isRequired })}
            />

            {/*error && <span className=" text-red-600 text-sm">Obrigatório</span>*/}
        </div>
    );
}