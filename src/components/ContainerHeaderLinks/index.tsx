import styled from 'styled-components'
import { images } from '../../images'
import { SocialLink } from '../SocialLink'

export const ContainerSocialLinks = () => (
  <StyleDivContainerHeaderLinks>
    <SocialLink href={'https://example.com'} alt={'Twitter'} imageSrc={images.twitterSocial} />
    <SocialLink href={'https://example.com'} alt={'Facebook'} imageSrc={images.facebookSocial}/>
    <SocialLink href={'https://example.com'} alt={'You Tube'} imageSrc={images.youTubeSocial}/>
    <SocialLink href={'https://example.com'} alt={'Pinterest'} imageSrc={images.pinterestSocial}/>
    <SocialLink href={'https://example.com'} alt={'Instagram'} imageSrc={images.instagramSocial}/>
  </StyleDivContainerHeaderLinks>
)

const StyleDivContainerHeaderLinks = styled.div`
  display: flex;
  gap: 1.67vw;
`
