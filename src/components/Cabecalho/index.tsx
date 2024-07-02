import React, { ReactNode } from 'react'
import { Titulo } from './Cabecalho'

type Props = {
  children: ReactNode
}

const Cabecalho = ({ children }: Props) => <Titulo>{children} </Titulo>

export default Cabecalho
