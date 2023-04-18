import './hotelsHeader.sass'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const HotelsHeader = () => {

    const date = useTypedSelector(state => state.hotels.hotels[0])?.date

    return (
        <div className="hotels-header">
            <h2 className="hotels-header__headline">Отели</h2>
            <div className='hotels-header__icon'></div>
            <h2 className="hotels-header__headline">Москва</h2>
            <div className="hotels-header__date">{date || null}</div>
        </div>
    )
}

export default HotelsHeader;