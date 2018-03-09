
import React from 'react';
import {
    Dimensions,
} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height; 
const cameraWidth = 720;
const cameraHeight = 1280;
const ValueScale=()=>{
    let scale=0;
    if (w > h) {
        let tam = w;
        w = h;
        h = tam;
    }
    const scaleX = w / cameraWidth;
    const scaleY = h / cameraHeight;
    scale = scaleX > scaleY ? scaleY : scaleX;
    return scale;
};

export default ValueScale
