import { UseFormRegister } from "react-hook-form"

type Interface = {
  maxLength?: number
  minLength?: number
  width?: string,
  label?: string,
  name: string,
  register: UseFormRegister<any>,
  isRequired: boolean,
  error?: any,
  mask?: 'cpf' | 'telefone' | 'cep' | 'number'
}

export default function InputText ({ label, name, width = "w-full md:w-auto", maxLength, minLength, register, isRequired, error, mask }: Interface) {

  function applyMask(value: string, maskType: 'cpf' | 'telefone' | 'cep' | 'number') {
    let cleaned = value.replace(/\D/g, '');

    if (maskType === 'cpf') {
      return cleaned
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})\.(\d{3})(\d)/, '.$1.$2-$3')
        .slice(0, 14);
    }

    if (maskType === 'telefone') {
      return cleaned
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{4})$/, '$1-$2')
        .slice(0, 15);
    }

    if (maskType === 'cep') {
      return cleaned
        .replace(/^(\d{5})(\d)/, '$1-$2')
        .slice(0, 9);
    }

    if (maskType === 'number') {
      return cleaned
      .replace(/\D/g, '')
    }

    return value;
  }

  return (
    <div className="flex flex-col">
      <label 
        htmlFor={label} 
        className="justify-start opacity-30 text-xs md:text-sm"
      >
        {label}
        <p>{isRequired}</p>
      </label>

      <input
        id={label}
        className={`${error && "border-1 border-red-800"} ${width} p-2 rounded-lg bg-hoverSessions focus:outline-none text-xs md:text-sm`}
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        {...register(name, {
          required: isRequired,
          onChange: (e) => {
            if (mask) {
              e.target.value = applyMask(e.target.value, mask);
            }
          }
        })}
      />

      {error && <span className="text-red-600 text-xs"><p>Obrigatório</p></span>}
    </div>
  )
}
