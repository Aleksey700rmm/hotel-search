import { addFilters } from "../../store/action-creators/hotels";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./filters.sass";

const Filters = () => {
    const { filter } = useTypedSelector((state) => state.hotels);

    const dispatch = useDispatch();

    const onAddFilters = (name: string) => {
        dispatch(addFilters(name));
    };

    let filterClassNames = "filters__item";
    let filterClasses = "filters__item";
    if (filter === "rating") {
        filterClassNames += " filterActive";
    }
    if (filter === "price") {
        filterClasses += " filterActive";
    }

    return (
        <div className="filters">
            <div className={filterClassNames} onClick={() => onAddFilters("rating")}>
                <div className="filters__description">Рейтинг</div>
                <div className="filters__arrows">
                    <div className="filters__select-up"></div>
                    <div className="filters__select-down"></div>
                </div>
            </div>
            <div className={filterClasses} onClick={() => onAddFilters("price")}>
                <div className="filters__description">Цена</div>
                <div className="filters__arrows">
                    <div className="filters__select-up"></div>
                    <div className="filters__select-down"></div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
