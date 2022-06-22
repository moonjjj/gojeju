import React,{useState, useEffect} from 'react';

import { Map, MapMarker, Circle, ZoomControl,Roadview, RoadviewMarker } from 'react-kakao-maps-sdk';
import home from '../asset/img/home.png';
import orangeMarker from '../asset/img/marker-orange.png';
import flag from '../asset/img/flag.png';
import dummy, { travelList } from '../asset/js/dummy'
//etc
const {kakao} = window;
export default function JejuMap(){

  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [inputValue, setInputValue] = useState("제주도 서귀포시 표선면 가시로 263-15");
  const [draggable, setDraggable] = useState(false);



  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(inputValue, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    })

    // 여기부터 지오코딩
  //   if (navigator.geolocation) {
    
  //     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  //     navigator.geolocation.getCurrentPosition(function(position) {
          
  //         var lat = position.coords.latitude, // 위도
  //             lon = position.coords.longitude; // 경도
          
  //         var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
  //             message = '<div style="padding:5px;">현위치!</div>'; // 인포윈도우에 표시될 내용입니다
          
  //         // 마커와 인포윈도우를 표시합니다
  //         displayMarker(locPosition, message);
              
  //       });
      
  // } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      
  //     var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
  //         message = 'geolocation을 사용할수 없어요..'
          
  //     displayMarker(locPosition, message);
  // }
  
  // 지도에 마커와 인포윈도우를 표시하는 함수입니다
  function displayMarker(locPosition, message) {
  
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({  
          map: map, 
          position: locPosition
      }); 
      
      var iwContent = message, // 인포윈도우에 표시할 내용
          iwRemoveable = true;
  
      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
          content : iwContent,
          removable : iwRemoveable
      });
      
      // 인포윈도우를 마커위에 표시합니다 
      infowindow.open(map, marker);
      
      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);      
  }  
// 

  }, [map,inputValue])
  return(
    <div className="second_section sections">
          <Map // 로드뷰를 표시할 Container
      center={{
        lat: 33.339120415606985, 
        lng: 126.79790619306574,
      }}
      className="jeju_map"
      level={10}
      onCreate={setMap}
      // draggable={draggable}
    >

      {/* 우리가 갈 곳 */}
      {travelList.map((marker) => (
        <MapMarker
          // key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
          image={{
            src: flag, // 마커이미지의 주소입니다
            size: {
              width: 14,
              height: 14,
            },
          }}
        >
          {info &&info.id === marker.id && (
            <div  className="marker_info"
              onClick={()=>{
                // document.location.href('www.naver.com');
                // window.location,href=`https://map.naver.com/v5/search/${marker.content}/place`
                window.open(`https://map.naver.com/v5/search/${marker.name?.replace(" ","%20")}`,'네이버','width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes');return false;
              }}
            >
              {marker.name}
              
            </div>
          )}
        </MapMarker>
      ))}


      {/* home@@@@@ */}
      <MapMarker
        position={{
          lat: 33.339120415606985, 
          lng: 126.79790619306574,
        }}
        image={{
          src: home, // 마커이미지의 주소입니다
          size: {
            width: 22,
            height: 22,
          },
          // options: {
          //   offset: {
          //     x: 27,
          //     y: 69,
          //   },
          // },
        }}
      />

    {/* 검색해서 나아ㅗ는거 */}
    {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
          image={{
            src: orangeMarker, // 마커이미지의 주소입니다
            size: {
              width: 14,
              height: 21,
            },
            // options: {
            //   offset: {
            //     x: 27,
            //     y: 69,
            //   },
            // },
          }}
        >
          {info &&info.content === marker.content && (
            <div  className="marker_info"
              onClick={()=>{
                // document.location.href('www.naver.com');
                // window.location,href=`https://map.naver.com/v5/search/${marker.content}/place`
                window.open(`https://map.naver.com/v5/search/${marker.content?.replace(" ","%20")}`,'네이버','width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes');return false;
              }}
            >
              {marker.content}
              
            </div>
          )}
        </MapMarker>
      ))}

                {/* <ZoomControl style={{top:'123px'}}/> */}
    </Map>


    <input 
      type="text"
      className="jeju_search_input"
      onChange={(e)=>{
        setInputValue("제주" + e.target.value);
      }}
      placeholder="검색해보세요 ex)표선면 카페, 승마"
    />
    <div className="map_down_btn" onClick={(e)=>{
      // window.scrollTo({
      //   top: 300,
      //   behavior: "smooth",
      // })
      window.scrollTo({top:300,behavior:'smooth'});
    }}
    >⬇️</div>

    </div>
  );
}
