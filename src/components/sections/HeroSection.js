import React from "react"
import styled from "styled-components"

function HeroSection() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-text">
          <h1 className="hero-text__h1">Robert Aguilar</h1>
          <p className="hero-text__react-shopify">React/Shopify Developer </p>
          <p className="hero-text__mainText">
            I’m a software engineer located here in the USA. I’m a Navy Veteran
            that has a passion in helping the small to medium business thrive
            online.{" "}
          </p>
          <a href="" className="hero-text__btn">
            Email Me
          </a>
        </div>
        <div className="hero-picture"></div>
      </div>
    </>
  )
}

export default HeroSection
