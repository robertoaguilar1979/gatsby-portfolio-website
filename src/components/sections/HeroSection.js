import React from "react"
import styled from "styled-components"

function HeroSection() {
  return (
    <>
      <HeroWrapper>
        <HeroText>
          <HeroTextH1>Robert Aguilar</HeroTextH1>
          <HeroTextReactShopify>React/Shopify Developer </HeroTextReactShopify>
          <HeroTextMainText>
            I’m a software engineer located here in the USA. I’m a Navy Veteran
            that has a passion in helping the small to medium business thrive
            online.{" "}
          </HeroTextMainText>
          <a href="" className="hero-text__btn">
            Email Me
          </a>
        </HeroText>
        <div className="hero-picture"></div>
      </HeroWrapper>
    </>
  )
}

export default HeroSection

const HeroWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const HeroText = styled.div`
  margin-left: 0.5em;
`
const HeroTextH1 = styled.h1`
  font-family: "Playfair Display SC", serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 85px;
  letter-spacing: 0.1em;
  text-align: left;
`
const HeroTextReactShopify = styled.p`
  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.88em;
  text-align: left;
  color: #51dde8;

  height: 28px;
  max-width: 650px;
  left: 85px;
  top: 326px;
  margin-bottom: 1.75em;
  margin-left: 0.3em;
`
const HeroTextMainText = styled.p`
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  height: 83px;
  max-width: 539px;
  left: 85px;
  top: 400px;
  margin-left: 0.3em;
`
