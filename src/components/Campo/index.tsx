import { Campo as CampoEstilo } from './styles'

export type Props = {
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

const Campo = (props: Props) => (
  <CampoEstilo
    placeholder={props.placeholder}
    onChange={props.onChange}
    type={props.type}
  ></CampoEstilo>
)

export default Campo
