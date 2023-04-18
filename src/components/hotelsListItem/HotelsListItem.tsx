import './hotelsListItem.sass'
import { ListItemProps } from '../../types/hotels';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../store/action-creators/hotels';
import { useEffect } from 'react';

const HotelsListItem = ({hotelName, stars, priceAvg, days, date, onAddFavorites, favorite, fav}: any) => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     addStars(stars)
    // })

    let classNames = 'hotels-list-item__label'
    let classes = 'hotels-list-item'

    if (favorite && fav) {
        classNames += ' active'
        classes += ' favorite'
    }

    if (favorite) {
        classNames += ' active'
    }

    // const starsElements: string[] = []

    const addStars = (count: number) => {
        const starsElements: string[] = []

        for (let i = 1; i <= 5; i++) {
            if (i <= count) {
                starsElements.push('yellow')
            } else {
                starsElements.push('grey')
            }
        }

        return starsElements.map((item) => {
            if (item === 'yellow') {
                return <div className='yellow-star'></div>
            } else { 
                return <div className='grey-star'></div> 
            }
        })
    }

    const elements = addStars(stars)
    
    // const onAddFavorites = () => {
    //     dispatch(addFavorites(hotelName!))
    // }

    return (
        <li className={classes}>
            <div className='hotels-list-item__left'>
                <h4 className='hotels-list-item__name'>{hotelName}</h4>
                <div className='hotels-list-item__time'>
                    <div className="hotels-list-item__date">{date}</div>
                    <div className="hotels-list-item__border"></div>
                    <div className="hotels-list-item__days">{days} день</div>
                </div>
                <div className="hotels-list-item__grade">{elements}</div>
            </div>
            <div className='hotels-list-item__right'>
                <span className={classNames} onClick={onAddFavorites}></span>
                <div className='hotels-list-item__price-wrapper'>
                    <div className="hotels-list-item__price">Price:</div>
                    <div className="hotels-list-item__amount">{Math.round(priceAvg!)} ₽</div>
                </div>
            </div>
        </li>
    )
}

export default HotelsListItem;