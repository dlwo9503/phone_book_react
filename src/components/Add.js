import React, { useEffect, useState } from 'react';

const Add = ( {id, setId, contact, setContact, setAddContact, setSelectContactId} ) => {
    const [name, setName] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [check, setCheck] = useState(false);

    const handleConfirm = () => {
        setId(id + 1);
        setContact([...contact, {
            id: id,
            name: name,
            age: age,
            phone_number: phone_number,
            email: email,
            description: description
        }])
        setAddContact(false);
    }
    
    const handleCancel = () => {
        setAddContact(false);
    }

    const onChangeName = (e) => { setName(e.target.value) }
    const onChangePhone_number = (e) => { setPhone_number(e.target.value) }
    const onChangeAge = (e) => { setAge(e.target.value) }
    const onChangeEmail = (e) => { setEmail(e.target.value) }
    const onChangeDescription = (e) => { setDescription(e.target.value) }
    
    useEffect(() => { activationCheck() })

    const activationCheck = () => {
        (name !== '' && age !== '' && phone_number !== '' && email !== '' && description !== '') ? setCheck(true) : setCheck(false);
    }

    return (
        <div>
            <div className="biCrYn">
                <div className="syKsX">
                    <h1 className="hmqpxx">연락처를 등록하세요</h1>
                    <div className="jEEywD">
                        <label className="iPexDg">이름</label>
                        <input className="kFmqyc" type="text" name="name" value={name} onChange={onChangeName} />
                    </div>
                    <div className="jEEywD">
                        <label className="iPexDg">연락처</label>
                        <input className="kFmqyc" type="text" name="phone_number" value={phone_number} onChange={onChangePhone_number} />
                    </div>
                    <div className="jEEywD">
                        <label className="iPexDg">나이</label>
                        <input className="kFmqyc" type="text" name="age" value={age} onChange={onChangeAge} />
                    </div><div className="jEEywD">
                        <label className="iPexDg">email</label>
                        <input className="kFmqyc" type="text" name="email" value={email} onChange={onChangeEmail} />
                    </div>
                    <div className="jEEywD">
                        <label className="iPexDg">설명</label>
                        <input className="kFmqyc" type="text" name="description" value={description} onChange={onChangeDescription} />
                    </div>
                    <div className="eEJWPz">
                        <button disabled={!check} className="eraKfR" onClick={ handleConfirm }>확인</button>
                        <button className="hKymwP" onClick={ handleCancel }>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;