import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // if root page is open then load Landing.css, if not then load Work.css
  useEffect(() => {
    if (window.location.pathname === "/") {
      // change this location in future to /
      const link = document.createElement("link");
      link.href = "/assets/styles/Landing.module.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    } else if (window.location.pathname === "/work") {
      const link = document.createElement("link");
      link.href = "/assets/styles/Work.module.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    } else if (window.location.pathname === "/about") {
      const link = document.createElement("link");
      link.href = "/assets/styles/About.module.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    } else if (window.location.pathname === "/projects") {
      const link = document.createElement("link");
      link.href = "/assets/styles/Projects.module.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, [window.location.pathname]);

  const [ariaHiddenOpen, setAriaHiddenOpen] = useState(false);
  const [ariaHiddenClose, setAriaHiddenClose] = useState(true);

  const socialMedia = [
    {
      name: "GitHub",
      link: "https://github.com/shreyash-Pandey-Katni",
      icon: "social-links__link--gh",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shreyash-pandey-katni/",
      icon: "social-links__link--li",
    },
    {
      name: "Stack Overflow",
      link: "https://stackoverflow.com/users/14551505/shreyash-pandey",
      icon: "social-links__link--so",
    },
    {
      name: "Medium",
      link: "https://shreyashpandeykatni.medium.com/",
      icon: "social-links__link--me",
    },
    {
      name: "Topmate",
      link: "https://topmate.io/shreyash_pandey_katni",
      icon: "social-links__link--tm",
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <Stack direction="row">
      <div
        className="mainnav"
        style={{
          // backgroundColor:
          //   scrollY > window.innerHeight &&
          //   document.getElementsByClassName("is-open").length === 0
          //     ? "rgba(0, 0, 0, 0.5)"
          //     : "transparent",
          // transition: "all 0.5s ease",
          // backdropFilter: scrollY > window.innerHeight ? "blur(10px)" : "none",
        }}
      >
        <div class="logo-wrap">
          <Link to="/">
            <span class="u-vhide">Back to the homepage</span>{" "}
            <span class="logo js-logo">
              <div class="logo__skirrid">
                <div class="shade" data-drift="-5 -10">
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256">
                    <polygon
                      class="filled-poly"
                      points="156.2,91.5 112.7,146.5 89,116.5 33.2,187 80.7,187 144.8,187 231.8,187"
                    ></polygon>
                  </svg>
                </div>
                <div class="logo">
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256">
                    <polygon
                      class="stroke-poly"
                      points="84,106.5 28.2,177 139.8,177 "
                    ></polygon>
                    <polygon
                      class="stroke-poly"
                      points="151.2,81.5 75.7,177 226.8,177 "
                    ></polygon>
                  </svg>
                </div>
              </div>
            </span>
          </Link>
        </div>
        <div class="menu-link">
          <button
            class={`menu-link__trigger js-menu-trigger ${
              ariaHiddenOpen ? "is-active" : ""
            }`}
            aria-expanded={ariaHiddenOpen ? "false" : "true"}
            aria-controls="main-menu"
          >
            <span class="menu-link__mask">
              <span
                class="menu-link__label menu-link__label--close js-menu-label-close"
                aria-hidden={ariaHiddenOpen}
                onClick={() => {
                  document
                    .getElementById("main-menu")
                    .classList.toggle("is-open");
                  setAriaHiddenOpen(!ariaHiddenOpen);
                  setAriaHiddenClose(!ariaHiddenClose);
                }}
              >
                Close
              </span>{" "}
              <span
                class="menu-link__label menu-link__label--open js-menu-label-open"
                aria-hidden={ariaHiddenClose}
                onClick={() => {
                  document
                    .getElementById("main-menu")
                    .classList.toggle("is-open");
                  setAriaHiddenOpen(!ariaHiddenOpen);
                  setAriaHiddenClose(!ariaHiddenClose);
                }}
              >
                Menu
              </span>
            </span>
          </button>
        </div>
        <Link
          class="hire-me"
          to={`mailto:shreyash.pandey.katni@gmail.com?subject=🤘 Hi Shreyash, I'd like to hire you`}
        >
          <div class="shade" data-drift="-5 -10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path
                class="filled-path"
                d="M30.78,9.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L42.37,50.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C10.42,45,6.24,38.52,6.24,31.2,6.24,19.53,17.26,9.87,30.78,9.87Z"
              ></path>
            </svg>
          </div>
          <div class="main">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path
                class="stroke-path"
                d="M27.78,5.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L39.37,46.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C7.42,41,3.24,34.52,3.24,27.2,3.24,15.53,14.26,5.87,27.78,5.87Z"
              ></path>
            </svg>
          </div>
          Hire me
        </Link>
      </div>
      <div class="main-menu js-menu" id="main-menu">
        <div class="main-menu__mask"></div>
        <div class="main-menu__flyout">
          <div class="main-menu__inr wrap">
            <ul class="social-links">
              {socialMedia.map((social, socialIndex) => (
                <li class="social-links__item">
                  <Link
                    class={`social-links__link ${social.icon}`}
                    to={social.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Follow me on {social.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul class="main-menu__links primary-links">
              <li class="primary-links__item">
                <Link
                  aria-current="page"
                  class="primary-links__link t-primary"
                  to="/"
                  aria-describedby="desc_home"
                  reloadDocument={true}
                >
                  Home
                </Link>{" "}
                <span id="desc_home" class="primary-links__summary">
                  Back to the home page.
                </span>
              </li>
              <li class="primary-links__item">
                <Link
                  aria-current="page"
                  class="primary-links__link t-primary"
                  to="/work"
                  aria-describedby="desc_work"
                  reloadDocument={true}
                >
                  Work
                </Link>{" "}
                <span id="desc_work" class="primary-links__summary">
                  My approach to development.
                </span>
              </li>
              <li class="primary-links__item">
                <Link
                  class="primary-links__link t-primary"
                  to="/about"
                  aria-describedby="desc_about"
                  reloadDocument={true}
                >
                  About
                </Link>{" "}
                <span id="desc_about" class="primary-links__summary">
                  A little about me and my background.
                </span>
              </li>
              <li class="primary-links__item">
                <Link
                  class="primary-links__link t-primary"
                  to="/projects"
                  aria-describedby="desc_writing"
                  reloadDocument={true}
                >
                  Projects
                </Link>{" "}
                <span id="desc_writing" class="primary-links__summary">
                  My latest Projects.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default Header;
