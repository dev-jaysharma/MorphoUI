import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const cn = (...className: ClassValue[]) => {
    return twMerge(clsx(className))
}