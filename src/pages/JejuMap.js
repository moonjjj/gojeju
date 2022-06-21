import React,{useState, useEffect} from 'react';

import { Map, MapMarker, Circle, ZoomControl } from 'react-kakao-maps-sdk';

//etc
const {kakao} = window;
export default function JejuMap(){

  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [inputValue, setInputValue] = useState("제주 맛집");
  const [draggable, setDraggable] = useState(false)

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
  }, [map,inputValue])
  return(
    <div className="second_section sections">
          <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      className="jeju_map"
      level={3}
      onCreate={setMap}
      // draggable={draggable}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.content && (
            <div style={{color:"#000"}}
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
                      <MapMarker
                  position={{
                    lat: 37.566826,
                    lng: 126.9786567,
                  }}
                  image={{
                    src: 'https://gongsaero.s3.ap-northeast-2.amazonaws.com/system/marker_gongsaero.png', // 마커이미지의 주소입니다
                    size: {
                      width: 64,
                      height: 69,
                    },
                    options: {
                      offset: {
                        x: 27,
                        y: 69,
                      },
                    },
                  }}
                />
                {/* <ZoomControl style={{top:'123px'}}/> */}
    </Map>

    <input 
      type="text"
      className="jeju_search_input"
      onChange={(e)=>{
        setInputValue("제주" + e.target.value);
      }}
      placeholder="검색해보세요 ex)표선면 맛집, 승마"
    />
    <div className="map_down_btn" onClick={(e)=>{
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      })
    }}
    >⬇️</div>

    </div>
  );
}
