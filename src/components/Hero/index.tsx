import React from 'react'
import { HeroContainer, Overlay, Content, Title } from './Hero'

const Hero = () => (
  <HeroContainer>
    <Overlay />
    <Content>
      <div className="container">
        <Title>
          As melhores vagas para tecnologia, design e artes visuais.
        </Title>
      </div>
    </Content>
  </HeroContainer>
)

export default Hero
