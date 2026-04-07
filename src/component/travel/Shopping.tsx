import {FestivalDTO, ShoppingDTO} from "../../commons/TravelData";
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
    fairday:string
    infocenter:string
    parking:string
}
 */
interface DetailData {
    dto : ShoppingDTO;
}
const Shopping: FC<DetailData> = (data: DetailData) => {
    return (
        <table className={"table"} style={{"fontSize":"1.3rem"}}>
            <tbody>
            <tr>
                <th className={"w-25"}>주소</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.address}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>판매 상품</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.saleitem}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>가격</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.saleitemcost}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>운영일</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.fairday}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>휴무일</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.restdate}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>운영 시간</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.opentime}}></td>
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

export default Shopping;