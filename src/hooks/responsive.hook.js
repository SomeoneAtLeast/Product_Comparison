import {useMediaQuery} from 'react-responsive'

export const useResponsive = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMiniPc = useMediaQuery({ query: '(min-width: 1024px)' });
    const isMediumPc = useMediaQuery({ query: '(min-width: 1366px)' });

    return {isTablet, isMobile, isMiniPc, isMediumPc}
}