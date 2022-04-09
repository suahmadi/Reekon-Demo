import React, { useState } from "react"
//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  NavVideos,
  CloseNav,
} from "../styles/navigationStyles"
import { FooterContent, FooterSocial } from "../styles/footerStyles"
//Icons
import { Instagram, Facebook } from "../assets/svg/social-icons"
//Framer Motion
import { motion, AnimatePresence } from "framer-motion"

const navRoutes = [
  {
    id: 0,
    title: "M1 CALIBAR",
    path:
      "https://www.amazon.com/REEKON-Caliber-Measuring-Tool-Miter/dp/B098TTZZYL",
    video: "https://tinyurl.com/featured-reekon-product",
  },
  {
    id: 1,
    title: "T1 TOMAHAWK",
    path:
      "https://www.kickstarter.com/projects/reekon/t1-tomahawk-professional-digital-tape-measure",
    video: "https://tinyurl.com/t1-reekon",
  },
  {
    id: 2,
    title: "ROCK MEASURE APP",
    path: "https://www.reekon.tools/t1",
    video: "https://tinyurl.com/reekonApp",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "https://tinyurl.com/featured-reekon-product",
    key: "0",
  })

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2 to="/">Products</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      key={route.id}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }
                    >
                      <a href={`${route.path}`}>
                        <motion.div
                          initial={{ x: -108 }}
                          className="link"
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className="arrow">
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#000"
                                fillRule="evenodd"
                              ></path>
                            </motion.svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>contact@reekon.tools</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>000.000.000</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="https://www.instagram.com/reekontools/"
                      target="instagram"
                    >
                      <Instagram />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="https://www.facebook.com/reekontools/"
                      target="facebook"
                    >
                      <Facebook />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <motion.div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      src={revealVideo.video}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      loop
                      autoPlay
                    ></motion.video>
                  </AnimatePresence>
                </motion.div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
