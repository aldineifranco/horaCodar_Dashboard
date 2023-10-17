import { Container } from './styles'

export interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps ) {
  return (
    <Container>{children}</Container>
  )
}
