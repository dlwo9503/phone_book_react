import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Add = ({ setContact, setAddContact }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [check, setCheck] = useState(false); // 유효성 체크용

    const handleConfirm = () => {
        axios.post('https://contact-server1.herokuapp.com/contacts/', JSON.stringify(
            {
                name: name,
                age: Number(age),
                phoneNumber: phoneNumber,
                email: email,
                description: description
            }), {
            headers: {
                "Content-Type": `application/json`,
            },
        })
        setAddContact(false);
    }

    useEffect(() => {
        return axios.get('https://contact-server1.herokuapp.com/contacts').then((res) =>{
            setContact(res.data);
        })
    });

    const handleCancel = () => {
        setAddContact(false);
    }

    const onChangeName = (e) => { setName(e.target.value) }
    const onChangePhone_number = (e) => { setPhoneNumber(e.target.value) }
    const onChangeAge = (e) => { setAge(e.target.value) }
    const onChangeEmail = (e) => { setEmail(e.target.value) }
    const onChangeDescription = (e) => { setDescription(e.target.value) }

    useEffect(() => { 
        (name !== '' && age !== '' && phoneNumber !== '' && email !== '') ? setCheck(true) : setCheck(false);
    },[name, age, phoneNumber, email])

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
                        <input className="kFmqyc" type="text" name="phoneNumber" value={phoneNumber} onChange={onChangePhone_number} />
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
                        <button disabled={!check} className="eraKfR" onClick={handleConfirm}>확인</button>
                        <button className="hKymwP" onClick={handleCancel}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;