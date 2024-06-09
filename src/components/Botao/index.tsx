import { Botao as BotaoEstilo } from './styles'

export type Props = {
  type?: string
  children: string
}

const Botao = (props: Props) => <BotaoEstilo>{props.children}</BotaoEstilo>

export default Botao
