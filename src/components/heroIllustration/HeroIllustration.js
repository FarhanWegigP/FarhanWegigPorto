import React, {useContext} from "react";
import "./HeroIllustration.scss";
import StyleContext from "../../contexts/StyleContext";
import heroCharLight from "../../assets/images/heroCharLight.png";
import heroCharDark from "../../assets/images/heroCharDark.png";
import heroRingLight from "../../assets/images/heroRingLight.png";
import heroRingDark from "../../assets/images/heroRingDark.png";

export default function HeroIllustration() {
  const {isDark} = useContext(StyleContext);

  const charLayer = className => (
    <div className={className}>
      <img
        className={isDark ? "hero-fade-out" : "hero-fade-in"}
        src={heroCharLight}
        alt="Illustration of me waving"
      />
      <img
        className={isDark ? "hero-fade-in" : "hero-fade-out"}
        src={heroCharDark}
        alt="Illustration of me waving"
      />
    </div>
  );

  return (
    <div className="hero-illustration">
      {charLayer("hero-illustration-char hero-illustration-char-back")}
      <div className="hero-illustration-ring">
        <img
          className={isDark ? "hero-fade-out" : "hero-fade-in"}
          src={heroRingLight}
          alt=""
          aria-hidden="true"
        />
        <img
          className={isDark ? "hero-fade-in" : "hero-fade-out"}
          src={heroRingDark}
          alt=""
          aria-hidden="true"
        />
      </div>
      {charLayer("hero-illustration-char hero-illustration-char-front")}
    </div>
  );
}
