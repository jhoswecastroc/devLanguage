/* eslint-disable react/react-in-jsx-scope */
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
    text: (
      <span className="flex w-full justify-center text-xs font-semibold">
        Copyright ©{new Date().getFullYear()} {"DevLanguage. Creado por "}
        <a href="https://www.jhocode.dev/" target="_blank" rel="noreferrer">
          JhoCode
        </a>
        .
      </span>
    ),
  },
  chat: {
    link: "#",
  },
};
