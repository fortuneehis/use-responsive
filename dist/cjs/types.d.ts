import { ReactElement } from "react";
export declare type Direction = "horizontal" | "vertical";
export declare type Constraints = Partial<{
    direction: Direction;
    min: number;
    max: number;
}>;
export declare type ResponsiveProps = {
    children: ReactElement;
} & Constraints;
