import React from 'react';
import s from './ItemListing.module.css';
import propTypes from 'prop-types';

const ItemListing = ({ item }) => {
    const { url, MainImage, title, currency_code, price, quantity, state } = item;
    const currencyList = {
        'USD': '$',
        'EUR': '€',
    };

    /**
     * Функция возвращает символ валюты при его наличии. В случае отсутствия символа возвращает переданный код
     * @param {string} currencyCode - код валюты
     * @returns {string}
     */
    function currencyDecoder(currencyCode) {
        if (currencyList[currencyCode]) {
            currencyIsSymbol = true;
            return currencyList[currencyCode];
        }
        currencyIsSymbol = false;
        return currencyCode;
    };

    /**
     * Возвращает класс для подсвечивания остатка в зависимости от количества
     * @param {number} quantity - остаток 
     * @returns {string}
     */
    function returnClassQuantity(quantity) {
        if (quantity <= 10) {
            return 'level-low';
        } else if (quantity <= 20) {
            return 'level-medium';
        } else if (quantity > 20) {
            return 'level-high';
        }
    }

    if (state !== "active") {
        // если товар отсутствует или данные о нем изменены
        return null;
    }

    let shortTitle = null;
    if (title.length > 50) {
        shortTitle = title.substr(0, 50) + '…';
    }

    let currencyIsSymbol = null;
    const currency = currencyDecoder(currency_code);
    const quantityClass = returnClassQuantity(quantity);

    return (
        <div className={s['item']}>
            <div className={s['item-image']}>
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={title} />
                </a>
            </div>
            <div className={s['item-details']}>
                <p className={s['item-title']}>
                    {shortTitle || title}
                </p>
                <p className={s['item-price']}>
                    {currencyIsSymbol ? `${currency}${price}` : `${price} ${currency}`}
                </p>
                <p className={s['item-quantity'] + ' ' + s[`${quantityClass}`]}>{quantity} left</p>
            </div>
        </div>
    );
}

ItemListing.propTypes = {
    item: propTypes.shape({
        url: propTypes.string,
        MainImage: propTypes.object,
        title: propTypes.string,
        currency_code: propTypes.string,
        price: propTypes.string,
        quantity: propTypes.number,
        listing_id: propTypes.number,
    }),
};

export default ItemListing;