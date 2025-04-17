"use client";

import InputText from "@/componentes/inputs/inputText";
import InputSelect from "@/componentes/inputs/inputSelect";
import ButtonForm from "@/componentes/button/buttonForm";
import InputTextArea from "@/componentes/inputs/inputTextArea";
import InputDate from "@/componentes/inputs/inputDate";
import InputCheckbox from "@/componentes/inputs/inputCheckbox";
import InputPassword from "@/componentes/inputs/inputPassword";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nome: string;
  cpf: string;
  telefone: string;
  sexo: string;
  dataNascimento: string;
  nacionalidade: string;
  profissao: string;
  parceiro: string;
  inss: string;
  contrato: boolean;
  motivo: string;
  cep: string;
  bairro: string;
  numero: string;
  rua: string;
  estado: string;
  cidade: string;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
    console.log("Cliente Cadastrado com Sucesso");
    router.push("/");
  }

  return (
    <div className="justify-center">
      <div className="w-auto bg-background flex flex-col p-1 md:p-10">

        <form onSubmit={handleSubmit(onSubmit)} className="bg-sessions md:rounded-lg p-5">

          <div className="flex flex-col md:flex-row gap-0 md:gap-4">
            {/* Coluna Esquerda */}
            <div className="flex flex-col w-full gap-1">
              <InputText name="nome" label="Nome Completo *" register={register} error={errors.nome} isRequired={true} />

              <InputText name="cpf" label="CPF *" maxLength={14} minLength={14} register={register} error={errors.cpf} isRequired={true} mask="cpf" />

              <div className="flex items-center gap-2">
                <div className="w-1/2">
                  <InputSelect name="sexo" label="Sexo *" array={["Masculino", "Feminino", "Neutro", "Indefinido"]} register={register} error={errors.sexo} isRequired={true}/>
                </div>
                
                <div className="w-1/2">
                  <InputDate name="dataNascimento" label="Data de Nascimento *" register={register} error={errors.dataNascimento} isRequired={true} />
                </div>
              </div>

              <InputText name="nacionalidade" label="Nacionalidade *" register={register} error={errors.nacionalidade} isRequired={true} />

              <InputText name="profissao" label="Profissão *" register={register} error={errors.profissao} isRequired={true} />

              <InputPassword name="inss" label="Senha do INSS *" register={register} error={errors.inss} isRequired={true} />

              <div className="flex items-center gap-4">
                <InputCheckbox name="contrato" label="Contrato" id="contrato" register={register} isRequired={false} />

                <div className="w-full">
                  <InputText name="motivo" label="Motivo (Sem Contrato) *" width="w-full" register={register} isRequired={false} />
                </div>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="flex flex-col w-full gap-1">
              <InputText name="telefone" label="Telefone *" maxLength={14} minLength={14} register={register} error={errors.telefone} isRequired={true} mask="telefone" />

              <InputText name="parceiro" label="Como Chegou? (Parceiro) *" register={register} error={errors.parceiro} isRequired={true} />

              <InputText name="cep" label="CEP *" maxLength={9} minLength={9} register={register} error={errors.cep} isRequired={true} mask="cep" />

              <InputText name="bairro" label="Bairro *" register={register} error={errors.bairro} isRequired={true} />

              <div className="flex items-center gap-2">
                <InputText name="numero" label="N° *" width="w-15 md:w-17" register={register} error={errors.numero} isRequired={true} mask="number" />

                <div className="w-full">
                    <InputText name="rua" label="Rua *" width="w-full" register={register} error={errors.rua} isRequired={true} />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <InputSelect name="estado" label="Estado *" width="w-15 md:w-17" array={["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]} register={register} error={errors.estado} isRequired={true} />

                <div className="w-full">
                    <InputText name="cidade" label="Cidade *" width="w-full" register={register} error={errors.cidade} isRequired={true} />
                </div>
              </div>

              <InputText name="complemento" label="Complemento" register={register} isRequired={false} />
            </div>
          </div>

            <div className="flex flex-col gap-4">
              <InputTextArea name="observacoes" label="Observações" register={register} isRequired={false} />

              <ButtonForm width="w-full" type="submit" label="Cadastrar Cliente" />
            </div>

        </form>

      </div>
    </div>
  );
}
