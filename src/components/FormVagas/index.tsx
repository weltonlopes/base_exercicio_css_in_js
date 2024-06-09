import { FormEvent, useState } from 'react'
import { FormVagas as FormVagasEstilo } from './styles'

import Campo from '../Campo'
import Botao from '../Botao'

type Props = {
  aoPesquisar: (termo: string) => void
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVagasEstilo onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </FormVagasEstilo>
  )
}
export default FormVagas
