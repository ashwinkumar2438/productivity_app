import '@src/scss/components/Header.scss';

const Header=(props)=>{

    //const Logo=props.Logo;
    return (
        <header className="app-header">
            <nav className="flex-block">
                <div className="left-block">
                    <div className="logo-block">
                        {props.logo??null}
                    </div>
                    <div className="left-list">
                        <ul>
                            {props.leftlist??null}
                        </ul>
                    </div>
                </div>
                <div className="right-block">
                    <div className="right-list">
                        <ul>
                            {props.rightlist??null}
                        </ul>
                    </div>       
                </div>
            </nav>
        </header>
    )

}

export {Header};