import React from "react"
import { graphql } from "gatsby"
import { FaLinkedin, FaExternalLinkSquareAlt } from "react-icons/fa"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, LinkedIn, CV },
  } = data
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img
            src={image.localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <a href={LinkedIn} className="project-icon">
              <FaLinkedin />
            </a>
            <a href={CV} className="project-icon">
              <FaExternalLinkSquareAlt />
            </a>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      CV
      title
      LinkedIn
      info
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
