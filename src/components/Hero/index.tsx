import { Container } from '../../styles'
import Titulo from '../Titulo'
import { Hero as HeroEstilo } from './styles'

const Hero = () => (
  <HeroEstilo>
    <Container>
      <Titulo fontSize={48}>
        As melhores vagas para tecnologia, design e artes visuais.
      </Titulo>
    </Container>
  </HeroEstilo>
)

export default Hero
