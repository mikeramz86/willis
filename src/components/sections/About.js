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
      }
    `}
    render={data => (
      <Section id="floor-plans">
        <Container>
          <Grid>
            <div>
              <h2>The Artist.</h2>
              <p>
              This Kenton 1BD/1BA home is simple living at its finest! At 620SF it has everything.  It is packed with high end finishes every homeowner is looking for these days and it starts with Bosch appliances, quartz counters, high ceilings, and full tile backsplash.  It continues to the pavers in the private covered patio which give you benefits of outdoor living with no maintenance. A gas FP makes relaxing easy after an easy commute home with MAX and freeway very close.  Multiple plans to choose from ensures a tailored fit.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_1.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_2.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>The Entertainer.</h2>
              <p>
              This N Willis 2BD/2BA condo with xxxSF living space and nearly the same size deck space with a great view of Mt. Hood.  Has fireplace, SS gas (BRAND) appliances. Flex floor plan great for multi-generation families, renting out for add’l income, or for home office.  A commuter’s dream: secure bike storage in building and 1 block from MAX stop, plus many local restaurants and conveniences just a short walk from your front door.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>The Dreamer.</h2>
              <p>
              This N Willis, 2BD/2BA top floor condo is penthouse living at its finest.  Its xxxSF has tons of built-in storage, FtC windows, top-of-the-line SS gas (BRAND) appliances, a gas FP, a private deck for entertaining, and if that weren’t enough, a giant master & en-suite!  Plus it’s a commuter’s dream: secure bike storage in building and 1 block from MAX, plus many local restaurants and conveniences just a short walk from your front door.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_Floor_Plan_Level_3.childImageSharp.fluid} />
            </Art>
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
