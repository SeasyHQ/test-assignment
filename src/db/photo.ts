import { photoDb } from "../types/GeneratedDb";
import kx from "./kx";

export const getPhotoBase = () => kx<photoDb>("photo");
