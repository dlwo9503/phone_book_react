import React, { useState } from 'react';
import styled from 'styled-components';

const Item = styled.li`
    display: flex;
    background-color: ${(props) => (props.id ? "rgb(40, 173, 250)" : "inherit")}
`;

const ListItem = ({ contact, id, name, phone_number, setSelectContactId, selectContactId }) => {
    const arr = Array.from({length: contact.length}, () => false);
    const [arr2, setArr2] = useState(arr);
    console.log('arr' + arr);
    
    
    const handleListItem = () => {
        console.log(id);
        setSelectContactId(id);
        
        let newArray = arr2;
        setArr2( arr );
        newArray[id - 1] = true;
        setArr2( newArray );
        console.log('2', arr2);
    }

    return (
        <Item id={arr2[id - 1]} onClick={handleListItem}>
            <button className="hPsvfS" id={id}>
                <div className="jcTaHb">{name}</div>
                <div className="hydYaP">{phone_number}</div>
            </button>
        </Item>
    );
};

export default ListItem;