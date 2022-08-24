import React from 'react';
import s from './Listing.module.css';
import ItemListing from '../ItemListing/ItemListing';
import propTypes, { object } from 'prop-types';

const Listing = ({ list }) => {
    return (
        <div className={s['item-list']}>
            {
                list.map((item) => {
                    return (
                        <ItemListing key={item.listing_id} item={item} />
                    );
                })
            }
        </div>
    );
}

Listing.defaultProps = {
    items: [],
};

Listing.propTypes = {
    items: propTypes.arrayOf(object),
};

export default Listing;