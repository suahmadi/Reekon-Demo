import React, { useState, useEffect } from "react";
//Framer Motion
import { motion, useAnimation } from "framer-motion";
// Styled Components
import { Container, Flex } from "../../styles/globalStyles";
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  FeaturedProjects,
} from "../../styles/homeStyles";
// Scroll Animations
import { useInView } from "react-intersection-observer";

const HomeFeatured = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HomeFeaturedSection
      ref={featured}
      animate={animation}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <a href='https://www.amazon.com/REEKON-Caliber-Measuring-Tool-Miter/dp/B098TTZZYL'>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <h3>Featured Product</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className='meta'
              >
                <h4>M1 CALIBER</h4>
                <h4>2020</h4>
              </motion.div>
            </Flex>
            <h2 className='featured-title'>
              MEASURE <br /> BETTER
              <span className='arrow'>
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 101 57'
                >
                  <path
                    d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
                    fill='#FFF'
                    fillRule='evenodd'
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              muted
              src={require("../../assets/video/featured-product.mp4")}
            ></video>
          </FeaturedVideo>
        </a>
      </Container>
      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button>
              <span>All Products</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  );
};

export default HomeFeatured;
