import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Front-End",
    text: `JavaScript, React, Redux, Gatsby, HTML5, CSS3, Bootstrap, Material UI, Figma`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: "Back-End",
    text: `Node.js, Firebase, Netlify, API, AJAX, AXIOS `,
  },
  {
    id: 3,
    icon: <FaCode className="service-icon" />,
    title: "Other",
    text: `Storybook, Jest, Cucumber.js, Chromatic, i18n`,
  },
]

export default services
