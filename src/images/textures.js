import {
    grassImg,
    dirtImg,
    logImg,
    glassImg,
    woodImg,
} from "./images";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three"

export const groundTexture = new TextureLoader().load(grassImg);
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter

export const grassTexture = new TextureLoader().load(grassImg);
grassTexture.magFilter = NearestFilter

export const dirtTexture = new TextureLoader().load(dirtImg)
dirtTexture.magFilter = NearestFilter

export const logTexture = new TextureLoader().load(logImg);
logTexture.magFilter = NearestFilter

export const glassTexture = new TextureLoader().load(glassImg)
glassTexture.magFilter = NearestFilter


export const woodTexture = new TextureLoader().load(woodImg);
woodTexture.magFilter = NearestFilter