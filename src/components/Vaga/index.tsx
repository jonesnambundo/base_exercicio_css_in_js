import React from 'react'
import { VagaContainer, Title, Link } from './Vaga'

interface Props {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga: React.FC<Props> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}) => (
  <VagaContainer>
    <Title>{titulo}</Title>
    <ul>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </VagaContainer>
)

export default Vaga
