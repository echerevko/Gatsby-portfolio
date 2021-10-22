import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        description
        featured
        github
        id
        slug
        url
        title
        stack {
          id
          title
        }
      }
    }
  }
`

export default IndexPage
