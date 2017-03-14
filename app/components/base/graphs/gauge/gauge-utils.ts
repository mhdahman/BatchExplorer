
export const presetSizes = {
    xsmall: 100,
    small: 200,
    medium: 300,
    large: 400,
};

/*
    Utility methods
  */
export function percToDeg(perc) {
    return perc * 360;
};

export function percToRad(perc) {
    return degToRad(percToDeg(perc));
};

export function degToRad(deg) {
    return deg * Math.PI / 180;
};

export function invalidSizeMessage(value) {
    const sizes = Object.keys(presetSizes).join(",");
    return `Invalid size "${value}" for Gauge, use on of ${sizes} or a fixed number.`;
}
