import React from 'react';
import ListItem from './ListItem';

const List = ({ keyword, contact, setSelectContactId, selectContactId }) => {
    return (
        <ul className="eysHZq">
            {
                contact && contact
                    .filter(item => item.name.indexOf(keyword) !== -1 || item.phoneNumber.indexOf(keyword) !== -1)
                    .map(item => <ListItem id={ item.id } name={ item.name } phoneNumber={ item.phoneNumber } setSelectContactId={ setSelectContactId } selectContactId = {selectContactId}/>)
            }
        </ul>
    );
};

export default List;