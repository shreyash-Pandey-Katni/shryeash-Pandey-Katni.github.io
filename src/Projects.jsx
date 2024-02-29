function Projects() {
  const projects = [
    {
      date: "Nov 2023 - Going on",
      title: "Lexica Art",
      description:
        "Revolutionizing marketing analysis with Python-based web applications, merging data analysis and machine learning for optimized campaign strategies.",
      href: "https://github.com/shreyash-Pandey-Katni/marketingTool",
    },
    {
      date: "Oct 2022 - Mar 2023",
      title: "Super Resolution",
      description:
        "Unveiling the power of image enhancement through TensorFlow and GAN, transforming low-resolution images into stunning visual masterpieces.",
      href: "https://github.com/Shreyashjiodndian2/SuperResolution",
    },
    {
      date: "Sep 2022 - Oct 2022",
      title: "Photo to Monet-style art",
      description:
        "Redefining artistic expression with GAN and CNN, seamlessly converting ordinary photos into captivating Monet-style paintings.",
      href: "https://github.com/Shreyashjiodndian2/CycleGAN",
    },
    {
      date: "Oct 2022 - Oct 2022",
      title: "Semantic Search Engine",
      description:
        "Pioneering faster and more accurate information retrieval with cutting-edge NLP and semantic analysis technologies.",
      href: "https://github.com/Shreyashjiodndian2/semantic-search-engine",
    },
    {
      date: "Aug 2022 - Sep 2022",
      title: "Library Management",
      description:
        "Streamlining library operations with a modern MERN stack web application, empowering efficient book cataloging and search functionalities.",
      href: "https://github.com/Shreyashjiodndian2/MERN-revision",
    },
    {
      date: "Mar 2022 - Jul 2022",
      title: "Robo Financial Advisor",
      description:
        "Empowering investors with optimal strategies through an AI-driven advisory platform, facilitating seamless investment decisions across diverse asset classes.",
      href: "https://github.com/Shreyashjiodndian2/collegeProject",
    },
    {
      date: "Apr 2022 - Apr 2022",
      title: "Shooting Game using JS and canvas",
      description:
        "Elevating gaming experiences with a dynamic shooting game built on React.js, delivering immersive entertainment with every click.",
      href: "https://github.com/Shreyashjiodndian2/GameInCanvas",
    },
    {
      date: "May 2021 - May 2021",
      title: "Twitter Quote Image Generator",
      description:
        "Adding visual flair to quotes with a bespoke web application, seamlessly integrating with Twitter for effortless sharing of inspiring messages.",
      href: "https://github.com/Shreyashjiodndian2/quoteImgRepo",
    },
  ];

  return (
    <main id="main-content" class="page-body" tabindex="-1">
      <svg
        style={{
          position: "absolute",
          top: "-900px",
          left: "-900px",
          clip: "rect(0,0,0,0)",
        }}
      >
        <filter id="duotone_filter">
          <feColorMatrix
            type="matrix"
            result="grayscale"
            values="1 0 0 0 0
    1 0 0 0 0
    1 0 0 0 0
    0 0 0 1 0"
          ></feColorMatrix>
          <feComponentTransfer
            color-interpolation-filters="sRGB"
            result="duotone"
          >
            <feFuncR
              type="table"
              tableValues="0.6196078431372549 1.0745098039215686"
            ></feFuncR>
            <feFuncG
              type="table"
              tableValues="0.2784313725490196 0.9529411764705882"
            ></feFuncG>
            <feFuncB
              type="table"
              tableValues="-0.20784313725490197 0.7803921568627451"
            ></feFuncB>
            <feFuncA type="table" tableValues="0 1"></feFuncA>
          </feComponentTransfer>
        </filter>
      </svg>
      <div class="section is-onscreen">
        <div class="article-heading">
          <h1 class="article-heading__title t-heading t-medium:s t-bigger:m t-biggest:l">
            <span>
              My Projects<span class="dot">.</span>
            </span>
          </h1>
        </div>
        <p class="page-header__lede t-primary lh-loose t-body:s t-sublede:m t-lede:l reveal-content">
          Explore my diverse portfolio, spanning from cutting-edge developments
          in web technology and programming to groundbreaking ventures in
          linguistics and natural language processing.{" "}
        </p>
        <div class="article-list reveal-content">
          {projects.map((project) => (
            <div
              class="article-listing article-list__item js-themepeep"
              data-theme='{"bg":"#f9f3f3","line":"#5c1623","fill":"#e1667c","text":"#0c1430","subtext":"#4261b5","duo":"#b7c6f0"}'
            >
              <span class="article-listing__date">{project.date}</span>
              <div class="article-listing__content flow">
                <h3 class="article-listing__title t-heading t-lede:s t-medium:m t-medium:l">
                  <a
                    href={project.href}
                    class="article-listing__link"
                    target="_blank"
                  >
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
