import {AttractionDTO, CultureDTO} from "../../commons/TravelData";
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
export interface CultureDTO extends TravelDetailDTO {
    discountinfo:string
    restdate:string
}
 */
interface DetailData {
    dto : CultureDTO;
};
const Culture: FC<DetailData> = (data: DetailData) => {
    return (
        <table className={"table"} style={{"fontSize":"1.3rem"}}>
            <tbody>
            <tr>
                <th className={"w-25"}>주소</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.address}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>연락처</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.infocenter}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>이용 요금</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.usefee}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>예상 소요시간</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.spendtime}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>운영 시간</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.usetime}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>휴무일</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.restdate}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>할인 정보</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.discountinfo}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>주차</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.parking}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>주차 요금</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.parkingfee}}></td>
            </tr>
            </tbody>
        </table>
    );
}

export default Culture;