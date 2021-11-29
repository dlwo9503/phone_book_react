import React from 'react';

const Info = ( {contact, selectContactId} ) => {
    let selectContact = contact.filter(item => item.id === selectContactId);
    return (
        <div class="DykGo">
            <dl class="XJxhY">
                <dt class="dJdFwe">이름</dt>
                <dd class="bAVzgZ">{selectContact[0].name}</dd>
            </dl>
            <dl class="XJxhY">
                <dt class="dJdFwe">나이</dt>
                <dd class="bAVzgZ">{selectContact[0].age}</dd>
            </dl>
            <dl class="XJxhY">
                <dt class="dJdFwe">전화번호</dt>
                <dd class="bAVzgZ">{selectContact[0].phone_number}</dd>
            </dl>
            <dl class="XJxhY">
                <dt class="dJdFwe">Email</dt>
                <dd class="bAVzgZ">{selectContact[0].email}</dd>
            </dl>
            <dl class="XJxhY">
                <dt class="dJdFwe">설명</dt>
                <dd class="bAVzgZ">{selectContact[0].description}</dd>
            </dl>
        </div>
    );
};

export default Info;