import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';


// const SOCIAL = [
//   {
//     icon: GithubIcon,
//     link: 'https://github.com/ajayns/gatsby-absurd',
//   },
//   {
//     icon: InstagramIcon,
//     link: 'https://instagram.com/ajay_ns',
//   },
//   {
//     icon: TwitterIcon,
//     link: 'https://twitter.com/ajayns08',
//   },
// ];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_HH_white: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "HH_white" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_HH_white.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom:1 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>The Willis</h2>
              <span>
                Please Contact
                {` `}
                <ExternalLink href="https://twitter.com/diana_valeanu">
                  (971) 319.4530
                </ExternalLink>
              </span>
            </Copyright>
            {/* <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons> */}
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

// const SocialIcons = styled.div`
//   display: flex;

//   img {
//     margin: 0 8px;
//     width: 24px;
//     height: 24px;
//   }

//   @media (max-width: ${props => props.theme.screen.sm}) {
//     margin-top: 40px;
//   }
// `;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
