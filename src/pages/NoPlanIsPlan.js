import React,{useEffect, useRef, useState} from 'react';
// import weatherView from './Weather';
import Weather from './Weather';

import isfj from '../asset/img/isfj.jpeg';
import isfp from '../asset/img/isfp.jpeg';
import entj from '../asset/img/entj.jpeg';
import esfj from '../asset/img/esfj.jpeg';


export default function NoPlanIsPlan() {
    const [cold, setCold] = useState();

    const mbti = [
        {
        id:'사교적인 외교관 ESFJ',
        mbti:'재복',
        img:esfj,
        desc:'ESFJ의 여행 스타일은 어떨까요? 사교적인 외교관이라 불리는 ESFJ는 다수와 어울리는 것을 선호하며, 긍적적이고 배려심 있는 성격의 소유자인데요. 사람과의 상호작용을 통해 삶의 원동력을 얻는 ESFJ는 조직의 균형을 잡는 중재자 역할을 담당하기도 합니다.'
        },
        {
        id:'호기심 많은 예술가 ISFP',
        mbti:'원표',
        img:isfp,
        desc:'ISFP의 여행 스타일은 어떨까요? ISFP는 여행할 때도 평화롭고, 자유로운 분위기를 선호합니다. 우스갯소리로 ISFP는 "누워있는 시간이 가장 많은 유형"으로 분류되기도 하는데요. 이처럼 꼼꼼히 계획을 세우기보다는 여행지에서의 감성에 따라, 휴식을 취하고 음식을 즐기는 방식이 ISFP의 여행 스타일이라고 할 수 있습니다. 여기에 예기치 못했던 디테일, 그리고 예술적 오브제 등은 여행에 대한 ISFP의 만족도를 더욱 높힐 것 입니다.'
        },
        {
        id:'대담한 통솔가 ENTJ',
        mbti:'수진',
        img: entj,
        desc:'ENTJ의 여행 스타일은 어떨까요? 진취적인 ENTJ는 대담하고 성취욕이 뛰어나 새로운 도전을 두려워하지 않는 성향을 가지고 있는데요. 여행 역시 액티비티, 레포츠 등 활동적인 일정을 중심으로 계획하곤 합니다.'
        },
        {
        id:'용감한 수호자 ISFJ',
        mbti:'제선',
        img: isfj,
        desc:'ISFJ의 여행 스타일은 어떨까요? 용감한 수호자라 불리는 ISFJ는 감수성이 풍부하며, 독립적인 성향을 가지고 있어 다수보다는 소수 또는 혼자서 할 수 있는 활동을 선호하는데요. 모험과 변화보다는 조용하고 안정적인 삶을 추구하는 ISFJ는 조직 내에서 주로 조력자 역할을 담당하기도 합니다.',
        }
    ]

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
            <Weather setCold={setCold}/>
            <div className="to_do_list">
                <h1>TODO</h1>
                <table>
                    <tr>
                        <th>ESFJ<br/>재복👽</th>
                        <th>ISFP<br/>원표🐻‍❄️</th>
                        <th>ENTJ<br/>수진🐹</th>
                        <th>ISFJ<br/>제선🐭</th>
                    </tr>
                    <tr>
                        <td>회, 술</td>
                        <td>카페, 바다</td>
                        <td>승마, 오름</td>
                        <td>해물라면, 카트</td>
                    </tr>
                </table>
            </div>

            <div className="mbti_list">
                {mbti.map((mbti, index)=>{
                    return(
                        <div className="mbti_elem">
                            <div className="mbti_title">
                                <span className="mbti_name">{mbti.mbti}</span>
                                <span className="mbti_alias">{mbti.id}</span>
                            </div>
                            <div className="mbti_img_box">
                                <img src={mbti.img}/>
                            </div>    
                            <div className="mbti_desc">
                                {mbti.desc}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="thankYou">😀😊😊😺😍😗
            {/* 😁👍🥰🐶🐱🐭🐹🐰🐻🧸🐼🐻‍❄️🐯🦁🐮🐷 */}
            </div>
            <span className="footer">
            배달의민족 연성체는 제주도 호박엿 가판대를 모티브로 만든 서체입니다. 어수룩하지만 또박또박 한 글자씩 정성스럽게 써 내려간 붓글씨체로, 울뚝불뚝 리듬감이 느껴지는 것이 특징입니다.
            </span>

            </div>
        </div>
    );

}