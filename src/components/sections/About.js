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
              Welcome to the Artist, a glimpse into the creativity of simple Portland living. 
              The view opens to a private, covered paver patio and beautiful plants and trees, allowing for more of a detached home feel. Features like a beautiful gas fireplace, high ceilings, and tons of natural light give life to a home that feels open and full of potential. 
              The Artist will inspire how well you can live in a smaller space - less can be more!
              </p>
            </div>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_2.childImageSharp.fluid} />
            </Art>
            <br></br>
            <br></br>
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
              The Strategist shines as a one-of-a-kind layout that lends itself to someone looking for an adaptable home they can really make their own. 
              While high end finishes provide a bright modern starting point, the additional flex spaces are ready to customize to your personal lifestyle. 
              Whether you’re looking for a dining nook, a home office, vanity, or extra closet space - the Strategist provides the freedom to make your vision come to life.              </p>
            </div>
            <br></br>
          </Grid>
          <Grid>
            <div>
              <h2>The Entertainer.</h2>
              <p>2 Bed | 2 Bath</p>
              <br></br>
              <p>
              The Entertainer is a true split bedroom floor plan, and a home buyer’s dream! Whether you have a potential roommate in mind or looking to work from your own home office (with a view), same size bedrooms and bathrooms located on opposite ends of the home provide a little natural separation. Meanwhile the heart of this home is wide open and ready to bring people together. The Entertainer is really tailored to someone who wants to be in a walkable location without compromising the ability to host a party.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_4.childImageSharp.fluid} />
            </Art>
            <br></br>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_3.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>The Dreamer.</h2>
              <p>2 Bed | 2 Bath</p>
              <br></br>
              <p>
              The Dreamer lends itself to a more traditional layout, with bedrooms on one side of the home and great room on the other, as well as a formal entryway between. 
              The nearly floor to ceiling windows let in an abundance of sunlight and create an almost airy quality that really makes this home stand out. The master retreat, with walk in closet and en suit, adds to the home’s sense of comfort and tranquility. 
              There is a lot to be said for the Dreamer; whether you are downsizing and preparing for a life of travel, you are needing more space but aren’t quite ready for suburbia yet, or are determined to be an urbanite for life. 
              This is truly an oasis.
              </p>
            </div>
            <br></br>
          </Grid>
            <div>
              <br></br>
              <br></br>
              <br></br> 
              <h2 style={{textAlign: "center"}}>More info coming soon!</h2>
            </div>
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
