import logoIcon from '@src/assets/logo.svg';

const logo=<img src={logoIcon} alt='logo'/>

const leftlist=(<>
    <li>Productivity App</li>
    </>
    )


const rightlist=(
    <><li>Info</li><li>Login</li></>
)


const headerChildren={logo,leftlist,rightlist};

export {headerChildren};