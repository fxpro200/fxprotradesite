import { useDevice } from '@deriv-com/ui';
import './app-logo.scss';

export const AppLogo = () => {
    const { isDesktop } = useDevice();
    if (!isDesktop) return null;
    return (
        <a
            className='app-header__logo'
            href='https://fxprotrades.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
            <img
                src='/assets/images/fxprotrades-logo.svg'
                alt='fxprotrades logo'
                style={{ height: 32, width: 32, marginRight: 8 }}
            />
            <span style={{ color: 'var(--navbar-text)', fontWeight: 700, fontSize: 20, letterSpacing: 1 }}>
                fxprotrades
            </span>
        </a>
    );
};
