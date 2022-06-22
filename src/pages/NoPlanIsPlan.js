import React,{useEffect, useRef} from 'react';
// import weatherView from './Weather';

export default function NoPlanIsPlan() {
    return(
        <div className="third_section sections">
            <div className="mini_section_one">
                <span className="one_title1">✈️</span>
                
                <p className="one_sub_title">출발! 24일</p>
                <div className="one_airplane">
                    <span>김포공항 🛫</span>
                    <span> ➡ </span>
                    <span>제주공항 🛬</span>
                </div>
                <div className="one_time">
                    <span>8시 30분 🕣</span>
                    <span> > </span>
                    <span>9시 40분 🕤</span>
                </div>
                <p className="one_sub_title">도착! 26일</p>
                <div className="one_airplane">
                    <span>제주공항 🛫</span>
                    <span> ➡ </span>
                    <span>김포공항 🛬</span>
                </div>
                <div className="one_time">
                    <span>9시 10분 🕤</span>
                    <span> > </span>
                    <span>10시 20분 🕥</span>
                </div>
            </div>
            <div className="mini_section_second">
            <p className="two_sub_title">
                장마시즌...인생 최초 <strong>무계획 제주여행</strong>
                <br/>
                유동적으로 움직이기!!
            </p>
            </div>
        </div>
    );

}