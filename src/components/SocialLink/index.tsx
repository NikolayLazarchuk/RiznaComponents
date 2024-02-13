import { FC } from 'react'
import styled from 'styled-components'

interface SocialLinkProps {
  href:string;
  alt:string;
  imageSrc:string;
}

export const SocialLink: FC<SocialLinkProps> = ({href, alt, imageSrc}) => (
  <StyleASocialLink href={href} >
    <StyleImageSocialLink src={imageSrc} alt={alt} />
  </StyleASocialLink>
)

const StyleASocialLink = styled.a``

const StyleImageSocialLink = styled.img`
  width: 2.2vw;
  height: 2.2vw;
`
