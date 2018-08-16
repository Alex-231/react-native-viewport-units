import {Dimensions} from 'react-native';

var {width, height} = Dimensions.get('window');

export const vh = width/100;
export const vw = height/100;
export const vmin = Math.min(vw, vh);
export const vmax = Math.max(vw, vh);