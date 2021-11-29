import React from 'react';
import ListItem from './ListItem';

const List = ({ keyword, contact, setSelectContactId, selectContactId }) => {
    return (
        <ul className="eysHZq">
            {
                contact && contact
                    .filter(item => item.name.indexOf(keyword) !== -1 || item.phone_number.indexOf(keyword) !== -1)
                    .map(item => <ListItem contact={ contact } id={ item.id } name={ item.name } phone_number={ item.phone_number } setSelectContactId={ setSelectContactId } selectContactId = {selectContactId}/>)
            }
        </ul>
    );
};

export default List;