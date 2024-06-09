import { Link as LinkEstilo } from './styles'

export type Props = {
  children: string
  href: string
}

const Link = (props: Props) => (
  <LinkEstilo href={props.href}>{props.children}</LinkEstilo>
)

export default Link
