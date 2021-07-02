import {useMediaQuery} from 'react-responsive'

export const useResponsive = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

    return {isTablet, isMobile}
}