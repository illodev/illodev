import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";

import { Theme, themes } from "@/config/themes";

type Config = {
    theme: Theme;
};

export const config = new Store<Config>({
    theme: themes.indigo
});

export const updateTheme = (theme: Theme) => {
    config.setState((state) => {
        return {
            ...state,
            theme
        };
    });
};

export const useTheme = () => useStore(config, (state) => state.theme);
