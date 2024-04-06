import Image from "next/image";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - DevLanguage",
    };
  },
  logo: (
    <Image alt="Logotipo" src="/assets/logotipo.png" width={50} height={50} />
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
