import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_Floor_Plan_Level_1: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Floor_Plan_Level_1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_Floor_Plan_Level_2: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Floor_Plan_Level_2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_Floor_Plan_Level_3: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Floor_Plan_Level_3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      
        art_Floor_Plan_Level_4: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Floor_Plan_Level_4" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        
      }
    `}
    render={data => (
      <Section id="floor-plans">
        <Container>
          <Grid>
            <div>
              <h2>The Artist.</h2>
              <p>1 Bed | 1 Bath</p>
              <br></br>
              <p>
              The Artist will inspire how well you can live in a smaller space - less can be more! 
              The view allows for more of a detached home feel because it opens to a private, covered, paver patio and beautiful plants and trees. 
              The benefits of a yard, but no maintenance of one. 
              </p>
            </div>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_2.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_1.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>The Strategist.</h2>
              <p>1 Bed | 1 Bath</p>
              <br></br>
              <p>
              The Strategist got it’s name because of all the different flex spaces that could be used in so many different ways. Just outside of the bathroom there is another flex space which if you didn’t work from home and went with my nook idea instead you could use this as an office area. If you don’t need an office it’s a great vanity area. If you are just someone who loves clothes a large wardrobe would be fitting as well. Shelves for your library? Linen Closet? The options are endless.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>The Entertainer.</h2>
              <p>2 Bed | 2 Bath</p>
              <br></br>
              <p>
              The Entertainer is really tailored to someone who wants to be in a walkable location without compromising the ability to host a party. 
              The kitchen is the same size, but because of the shape of the great room; just envision moving the furniture to the walls and throwing a dance party.
              If you are someone that insists you can’t have a roommate and/or you financially don’t “need” one, the front bedroom would make a killer office with the giant windows and view.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_4.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid>
            <div>
              <h2>The Dreamer.</h2>
              <p>2 Bed | 2 Bath</p>
              <br></br>
              <p>
              There is a lot to be said for the Dreamer; whether you are downsizing and preparing for a life of travel, you are needing more space but aren’t quite ready for suburbia yet, or are determined to be an urbanite for life. This is truly an oasis.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_3.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <h2>More info coming soon!</h2>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
    props.inverse &&
    `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
