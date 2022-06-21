import React,{useState, useEffect} from 'react';

import { Map, MapMarker, Circle } from 'react-kakao-maps-sdk';

//etc
const {kakao} = window;
export default function JejuMap(){

  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [inputValue, setInputValue] = useState();

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
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.content && (
            <div style={{color:"#000"}}>{marker.content}</div>
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
    </Map>

    <input 
    type="text"
    onChange={(e)=>{
      setInputValue("제주" + e.target.value);
    }}
    />

    </div>
  );
}
