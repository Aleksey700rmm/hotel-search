import "./hotelsListItem.sass";

const HotelsListItem = ({ hotelName, stars, priceAvg, days, date, onAddFavorites, favorite, fav }: any) => {

    let classNames = "hotels-list-item__label";
    let classes = "hotels-list-item";

    if (favorite && fav) {
        classNames += " active";
        classes += " favorite";
    }

    if (favorite) {
        classNames += " active";
    }

    const endItem = days > 4 ? "дней" : days > 1 ? "дня" : "день";

    const addStars = (count: number) => {
        const starsElements: string[] = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= count) {
                starsElements.push("yellow");
            } else {
                starsElements.push("grey");
            }
        }

        return starsElements.map((item, i) => {
            if (item === "yellow") {
                return <div className="yellow-star" key={i}></div>;
            } else {
                return <div className="grey-star" key={i}></div>;
            }
        });
    };

    const elements = addStars(stars);

    return (
        <li className={classes}>
            <div className="hotels-list-item__left">
                <h4 className="hotels-list-item__name">{hotelName}</h4>
                <div className="hotels-list-item__time">
                    <div className="hotels-list-item__date">{date}</div>
                    <div className="hotels-list-item__border"></div>
                    <div className="hotels-list-item__days">
                        {days} {endItem}
                    </div>
                </div>
                <div className="hotels-list-item__grade">{elements}</div>
            </div>
            <div className="hotels-list-item__right">
                <span className={classNames} onClick={onAddFavorites}></span>
                <div className="hotels-list-item__price-wrapper">
                    <div className="hotels-list-item__price">Price:</div>
                    <div className="hotels-list-item__amount">{Math.round(priceAvg!)} ₽</div>
                </div>
            </div>
        </li>
    );
};

export default HotelsListItem;
