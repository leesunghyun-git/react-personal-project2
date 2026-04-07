import {FestivalDTO, StayDTO} from "../../commons/TravelData";
import { FC } from "react";
/*
export interface TravelDetailDTO {
    title:string
    image1:string
    x:number
    y:number
    contentid:number
    address:string
    contenttype:string
    hit:number
    msg:string
}
export interface AttractionDTO extends TravelDetailDTO{
    roomtype:string
    checkintime:string
    checkouttime:string
    chkcooking:string
    subfacility:string
    foodplace:string
    reservationurl:string
    infocenter:string
    parking:string
}
 */
interface DetailData {
    dto : StayDTO;
}
const Stay: FC<DetailData> = (data: DetailData) => {
    return (
        <table className={"table"} style={{"fontSize":"1.3rem"}}>
            <tbody>
            <tr>
                <th className={"w-25"}>주소</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.address}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>숙소 타입</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.roomtype}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>체크인 시간</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.checkintime}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>체크아웃 시간</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.checkouttime}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>객실 내 조리 가능 여부</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.chkcooking}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>숙소 시설</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.subfacility}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>숙소 내 음식점</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.foodplace}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>예약 링크</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.reservationurl}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>연락처</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.infocenter}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>주차</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.parking}}></td>
            </tr>
            </tbody>
        </table>
    );
}

export default Stay;