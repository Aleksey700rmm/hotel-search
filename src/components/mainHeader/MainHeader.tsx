import "./mainHeader.sass";
import { Link } from "react-router-dom";
import { removeUser } from "../../store/action-creators/hotels";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../../store/action-creators/hotels";

const MainHeader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = {
            login: localStorage.getItem("login"),
            password: localStorage.getItem("password"),
        };
        if (user) {
            dispatch(setUser(user));
        }
    }, []);

    const deleteUser = () => {
        dispatch(removeUser());
        localStorage.removeItem("login");
        localStorage.removeItem("password");
    };

    return (
        <div className="header">
            <h1 className="header__headline">Simple Hotel Check</h1>
            <Link to="/" onClick={deleteUser}>
                <button className="header__btn">
                    Выйти
                    <div className="header__icon"></div>
                </button>
            </Link>
        </div>
    );
};

export default MainHeader;
