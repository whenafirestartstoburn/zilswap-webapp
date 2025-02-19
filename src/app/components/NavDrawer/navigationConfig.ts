import { NavigationOptions } from "./types";

const navigationConfig: NavigationOptions[] = [{
  pages: [{
    title: "Swap + Pool",
    href: "/swap",
    show: true,
  }, {
    title: "Pools Overview",
    href: "/pools",
    badge: "New",
  }, {
    title: "Docs",
    expand: true,
    items: [{
      title: "Guide",
      href: "https://zilswap.gitbook.io/zilswap/",
      external: true,
      show: true,
    }, {
      title: "API Docs",
      href: "https://docs.zilswap.org/#/smart-contract",
      external: true,
      show: true,
    }]
  }, {
    title: "Governance",
    expand: true,
    items: [{
      title: "Voting",
      href: "https://vote.zilliqa.com/#/zwap/",
      external: true,
      show: true,
    }, {
      title: "Forum",
      href: "https://gov.zilswap.io",
      external: true,
      show: true,
    }]
  }, {
    title: "More",
    expand: true,
    items: [{
      title: "ZilStream",
      href: "https://zilstream.com",
      external: true,
      show: true,
    }, {
      title: "Github",
      href: "https://github.com/Switcheo/zilswap-sdk",
      external: true,
      show: true,
    }]
  }, {
    title: "Buy ZIL",
    href: "https://transak.com/",
    external: true,
    show: true,
    highlight: true
  }],
}];

export default navigationConfig;
