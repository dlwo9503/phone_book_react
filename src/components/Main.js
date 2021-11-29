import React, { useState } from 'react';
import Add from './Add';
import List from './List';
import Info from './Info';

const Main = () => {
    const [id, setId] = useState(1); // 추가할 id
    const [contact, setContact] = useState([]); // 전체 연락처 담을 배열
    const [keyword, setKeyword] = useState(''); // 검색어
    const [addContact, setAddContact] = useState(false); // 추가버튼
    const [selectContactId, setSelectContactId] = useState(0); // 선택한 연락처 id

    const onChange = (e) => { setKeyword(e.target.value) }

    const handleAdd = () => { setAddContact(true) }

    const handleDelete = () => {
        setContact(contact.filter(item => item.id !== selectContactId));
        setSelectContactId(0); // 선택 연락처 초기화
    }

    return (
        <div className="biCrYn">
            {
                addContact ?
                    <Add id={id} setId={setId} contact={contact} setContact={setContact} setAddContact={setAddContact} setSelectContactId={selectContactId}/> :
                    <>
                        <div className="kMthTr">
                            <div className="gfuSqG">
                                <input placeholder="검색어를 입력하세요." className="dJXsSm" value={keyword} onChange={onChange} />
                            </div>
                            <List id={id} keyword={keyword} contact={contact} setSelectContactId={setSelectContactId} selectContactId={selectContactId}/>
                        </div>
                        {
                            selectContactId === 0 ?
                                <div className="DykGo">
                                    <div className="jibPFy">선택된 연락처가 없습니다.</div>
                                </div>
                                :
                                <Info contact={contact} selectContactId={selectContactId}/>
                        }
                        <button className="ccTnQh kpPvTx" onClick={handleAdd}>+</button>
                        <button disabled={!selectContactId} className="ccTnQh lpaEYv" onClick={handleDelete}>-</button>
                    </>
            }
        </div>
    );
};

export default Main;