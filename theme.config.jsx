// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - DevLanguage",
    };
  },
  logo: (
    <span>
      Dev<strong>Language</strong>
    </span>
  ),
  project: {
    link: "https://github.com/shuding/nextra",
  },
  footer: {
    text: "Copyright © 2024 Jhoswe Castro - DevLanguage",
  },
  chat: {
    link: "#",
  },
};
