/// <reference types="react" />
import * as react from 'react';
import { ReactElement } from 'react';

declare type Direction = "horizontal" | "vertical";
declare type Constraints = Partial<{
    direction: Direction;
    min: number;
    max: number;
}>;
declare type ResponsiveProps = {
    children: ReactElement;
} & Constraints;

declare const useResponsive: ({ min, max, direction, }: Constraints) => boolean;

declare const Responsive: ({ min, max, direction, children }: ResponsiveProps) => react.ReactElement<any, string | react.JSXElementConstructor<any>> | null;

export { Responsive, useResponsive };
