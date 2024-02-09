import { FC } from 'react'
import styled from 'styled-components'
import { images } from '../../images'

export const Logo: FC = () => (
  <StyleALogoRizna href={'https://example.com'}>
    <StyleDivLogo>
      <StyleImageLogoRizna src={images.logoRizna} alt={'Foto Rizna logo'} />
      <StyleImageTypeRizna src={images.typeRizna} alt={'Foto Rizna type'} />
    </StyleDivLogo>
  </StyleALogoRizna>
)

const StyleALogoRizna = styled.a``

const StyleDivLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.63vw;
`
const StyleImageLogoRizna = styled.img`
  width: 2.92vw;
  height: 2.92;
`
const StyleImageTypeRizna = styled.img`
  width: 6.67vw;
  height: 1.52vw;
`
