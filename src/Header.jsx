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
    } else if(window.location.pathname === "/projects"){
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

  return (
    <Stack direction="row">
      <div className="mainnav">
        <div class="logo-wrap">
          <Link to="/">
            <span class="u-vhide">Back to the homepage</span>{" "}
            <span class="logo js-logo">
              <div class="logo__skirrid">
                <div
                  class="shade"
                  data-drift="-5 -10"
                  style={
                    {
                      // transform: `translate(${transformX}px, ${transformY}px)`,
                    }
                  }
                >
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
          to="mailto:nsriramula@hawk.iit.edu?subject=🤘 Hi Niraj, I'd like to hire you"
        >
          <div
            class="shade"
            data-drift="-5 -10"
            style={
              {
                // transform: `translate(${transformX}px, ${transformY - 5 * 2}px)`,
              }
            }
          >
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
                  {socialIndex < 2 && (
                    <Link
                      class={`social-links__link ${social.icon}`}
                      to={social.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Follow me on {social.name}
                    </Link>
                  )}
                  {socialIndex >= 2 && (
                    <Link
                      class={`social-links__link`}
                      to={social.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundImage: `url(/assets/images/${social.icon}.svg)`,
                      }}
                    >
                      {social.name == "Medium" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 64 64"
                        >
                          <path d="M 18.998047 15 A 17.002 17.002 0 0 0 18.998047 49.003906 A 17.002 17.002 0 0 0 18.998047 15 z M 45.498047 16 A 8.502 16.002 0 0 0 45.498047 48.003906 A 8.502 16.002 0 0 0 45.498047 16 z M 58.5 17 A 3.5 15.002 0 1 0 58.5 47.003906 A 3.5 15.002 0 1 0 58.5 17 z"></path>
                        </svg>
                      )}
                      {social.name == "Stack Overflow" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 50 50"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M 40.925781 1.890625 L 37.859375 2.417969 L 41.1875 20.625 L 44.03125 20.253906 Z M 29.96875 6.351563 L 27.101563 8.078125 L 37.300781 23.035156 L 39.820313 21.480469 Z M 20.796875 15.03125 L 19.113281 17.703125 L 34.5 27 L 35.902344 24.578125 Z M 16.375 24.402344 L 15.628906 27.402344 L 33.359375 31.894531 L 33.640625 29.203125 Z M 9 29 L 9 47.984375 L 38.902344 48 L 38.902344 47.984375 C 38.933594 47.984375 39 29 39 29 L 36 29 L 36 45 L 12 45 L 12 29 Z M 15.152344 32.355469 L 14.902344 35.339844 L 33 37 L 33.203125 34.5 Z M 14.902344 39 L 15 42 L 33 41.929688 L 33 39 Z"
                          ></path>
                        </svg>
                      )}
                      {social.name == "Topmate" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="200"
                          height="200"
                          viewBox="0 0 30 30"
                        >
                          <path
                            d="M23.4394 21.4087C22.3801 22.9062 20.8648 24.0208 19.1199 24.5862C17.3749 25.1515 15.4939 25.1373 13.7577 24.5455C12.0215 23.9537 10.5233 22.8162 9.4869 21.3028C8.45048 19.7894 7.93143 17.9813 8.00727 16.1486C8.0831 14.3159 8.74975 12.5569 9.90765 11.1343C11.0656 9.71168 12.6526 8.7018 14.4317 8.25547C16.2109 7.80915 18.0866 7.95032 19.7789 8.6579C21.4712 9.36548 22.8892 10.6015 23.8212 12.1814L16.5 16.5L23.4394 21.4087Z"
                            fill="black"
                          />
                        </svg>
                      )}
                      Follow me on {social.name}
                    </Link>
                  )}
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
