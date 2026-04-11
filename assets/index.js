import logo from "./logo.svg";
import backend from "./backend.png";
import creator from "./creator.png";
import mobile from "./mobile.png";
import web from "./web.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

import css from "./tech/css.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";
import typescript from "./tech/typescript.png";
import threejs from "./tech/threejs.svg";

import meta from "./company/meta.png";
import shopify from "./company/shopify.png";
import starbucks from "./company/starbucks.png";
import tesla from "./company/tesla.png";

import carrent from "./carrent.png";
import jobit from "./jobit.png";
import tripguide from "./tripguide.png";

const assetSrc = (asset) => (typeof asset === "string" ? asset : asset.src);
const logoSrc = assetSrc(logo);
const backendSrc = assetSrc(backend);
const creatorSrc = assetSrc(creator);
const mobileSrc = assetSrc(mobile);
const webSrc = assetSrc(web);
const githubSrc = assetSrc(github);
const menuSrc = assetSrc(menu);
const closeSrc = assetSrc(close);
const cssSrc = assetSrc(css);
const dockerSrc = assetSrc(docker);
const figmaSrc = assetSrc(figma);
const gitSrc = assetSrc(git);
const htmlSrc = assetSrc(html);
const javascriptSrc = assetSrc(javascript);
const mongodbSrc = assetSrc(mongodb);
const nodejsSrc = assetSrc(nodejs);
const reactjsSrc = assetSrc(reactjs);
const reduxSrc = assetSrc(redux);
const tailwindSrc = assetSrc(tailwind);
const typescriptSrc = assetSrc(typescript);
const threejsSrc = assetSrc(threejs);
const metaSrc = assetSrc(meta);
const shopifySrc = assetSrc(shopify);
const starbucksSrc = assetSrc(starbucks);
const teslaSrc = assetSrc(tesla);
const carrentSrc = assetSrc(carrent);
const jobitSrc = assetSrc(jobit);
const tripguideSrc = assetSrc(tripguide);

export {
  logoSrc as logo,
  backendSrc as backend,
  creatorSrc as creator,
  mobileSrc as mobile,
  webSrc as web,
  githubSrc as github,
  menuSrc as menu,
  closeSrc as close,
  cssSrc as css,
  dockerSrc as docker,
  figmaSrc as figma,
  gitSrc as git,
  htmlSrc as html,
  javascriptSrc as javascript,
  mongodbSrc as mongodb,
  nodejsSrc as nodejs,
  reactjsSrc as reactjs,
  reduxSrc as redux,
  tailwindSrc as tailwind,
  typescriptSrc as typescript,
  threejsSrc as threejs,
  metaSrc as meta,
  shopifySrc as shopify,
  starbucksSrc as starbucks,
  teslaSrc as tesla,
  carrentSrc as carrent,
  jobitSrc as jobit,
  tripguideSrc as tripguide,
};
