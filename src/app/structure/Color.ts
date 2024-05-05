//
// Created by edgar on 4/5/24 at 09:32:42.
//

type RGB = `rgb(${number},${number},${number})` | `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number},${number},${number},${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;


export type Color = RGB | RGBA | HEX;
