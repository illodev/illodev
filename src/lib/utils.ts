import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function mergeRefs<T extends unknown | null>(...refs: React.Ref<T>[]) {
    const filteredRefs = refs.filter(Boolean);

    if (!filteredRefs.length) return null;
    if (filteredRefs.length === 0) return filteredRefs[0];

    return (inst: T) => {
        for (const ref of filteredRefs) {
            if (typeof ref === "function") {
                ref(inst);
            } else if (ref) {
                (ref as React.MutableRefObject<T | null>).current = inst;
            }
        }
    };
}
