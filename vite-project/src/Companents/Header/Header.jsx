import React from "react";
import { useTranslation } from "react-i18next"; // Mana shu joyi to'g'rilandi
import grop from "../../assets/img/Group 1.png";
import "./Header.css";

function Header() {
    const { t, i18n } = useTranslation()
    
    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <>
        <header>
            <div className="container">
                <div className="navar">
                    <img src={grop} alt="rasm"/>
                    <ul>
                        {/* Qolgan menyularni ham t() ichiga olib chiqdik */}
                        <li><a href="#">{t("header.Home")}</a></li>
                        <li><a href="#">{t("header.About")}</a></li>
                        <li><a href="#">{t("header.Services")}</a></li>
                        <li><a href="#">{t("header.Work")}</a></li>
                        <li><a href="#">{t("header.Blog")}</a></li>
                    </ul>
                    <select name="" id="" onChange={handleChangeLanguage} defaultValue={i18n.language}>
                        <option value="uz">uzb</option>
                        <option value="ru">rus</option>
                        <option value="en">eng</option>
                    </select>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;