import chalk = require('chalk')
import tinycolor = require('tinycolor2');
import { Label } from '../types/label.type';

export const isValidHex = (color: string) => {
    if (!color || typeof color !== 'string') {
        return false;
    }

    if (color.startsWith('#')) {
        color = color.substring(1);
    }

    switch (color.length) {
        case 3: return /^[0-9A-F]{3}$/i.test(color);
        case 6: return /^[0-9A-F]{6}$/i.test(color);
        case 8: return /^[0-9A-F]{8}$/i.test(color);
        default: return false;
    }
}

export const textColor = (color: string) => {
    return tinycolor(color).isDark() ? '#ffffff' : '#000000'
}

export const labelWithBackground = ({ color, value }: Label) => {
    return chalk.bgHex(color)(chalk.hex(textColor(color))(` ${value} `))
}

export const randomHexColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
