import { FC } from 'react'
import styled from 'styled-components'
import { images } from '../../images'

export const SocialLink: FC = () => (
  <StyleASocialLink>
    <StyleImageSocialLink src={images.twitterSocial} alt={'social image'} />
  </StyleASocialLink>
)

const StyleASocialLink = styled.a``

const StyleImageSocialLink = styled.img`
  width: 2.2vw;
  height: 2.2vw;
`
