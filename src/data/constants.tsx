import Google from "../assets/google.jpg";
import Verizon from "../assets/verizon.jpg";
import GDIT from "../assets/gdit.jpg";
import BAH from "../assets/bah.jpg";
import DVS from "../assets/dvs.jpg";
import Moffitt from "../assets/moffitt.jpg";
import Mosaic from "../assets/mosaic.jpg";
import ProjectImg from "../assets/project.jpg";
interface Map {
  [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = {
  google: Google,
  verizon: Verizon,
  gdit: GDIT,
  bah: BAH,
  dvs: DVS,
  moffitt: Moffitt,
  mosaic: Mosaic
};

export enum Constants {
  USERNAME = "Jason R Dominic",
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "project name 1": ProjectImg,
  "project name 2": ProjectImg,
};
