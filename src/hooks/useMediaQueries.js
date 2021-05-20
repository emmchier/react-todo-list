import { useMediaQuery } from "react-responsive";

export const useMediaQueries = () => {

    const isDesktop = useMediaQuery({ minWidth: 1500 });
    const isNotebook = useMediaQuery({ minWidth: 1200, maxWidth: 1499 });
    const isNotebookSM = useMediaQuery({ minWidth: 993, maxWidth: 1199 });
    const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 992 });
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const isIphoneX = useMediaQuery({ minWidth: 375, maxWidth: 410 });
    const isGalaxy5 = useMediaQuery({ minWidth: 360, maxWidth: 374 });
    const isIphone5 = useMediaQuery({ minWidth: 280, maxWidth: 359 });

    return {
        isDesktop,
        isNotebook,
        isNotebookSM,
        isTablet,
        isMobile,
        isIphoneX,
        isGalaxy5,
        isIphone5
    }
}