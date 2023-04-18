import './mainHeader.sass'

const MainHeader = () => {
    return (
        <div className="header">
            <h1 className="header__headline">Simple Hotel Check</h1>
            <button className='header__btn'>
                Выйти
                <div className="header__icon"></div>
            </button>
        </div>
    )
}

export default MainHeader;