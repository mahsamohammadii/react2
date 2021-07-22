
import React from 'react';

import './index.css';



function  Component2(props){
    
      
    
    
    return(

        <div >
    <div className={'background'}>
    <h2 className={'hdiv'}>{props.firstname} به سایت ما خوش امدی</h2>
    <p className={'pdiv'}>{props.form.firstname}:نام و نام خانوادگی</p>
    <p className={'pdiv'}>{props.form.number} :شماره تلفن</p>
    <p className={'pdiv'}>{props.form.email}:ایمیل</p>
</div>

        </div>
        
    )
}
export default Component2;