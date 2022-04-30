import { Color } from './types';

export const getColorAsCssVar = (color?: Color) => (color ? `var(--${color})` : undefined);
