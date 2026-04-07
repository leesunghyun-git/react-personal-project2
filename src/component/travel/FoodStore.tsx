import {FestivalDTO, FoodStoreDTO} from "../../commons/TravelData";
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
    firstmenu:string
    treatmenu:string
    infocenter:string
    parking:string
    opendate:string
    opentime:string
    restdate:string
}
 */
interface DetailData {
    dto : FoodStoreDTO;
}
const FoodStore: FC<DetailData> = (data: DetailData) => {
    return (
        <table className={"table"} style={{"fontSize":"1.3rem"}}>
            <tbody>
            <tr>
                <th className={"w-25"}>주소</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.address}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>메인 메뉴</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.firstmenu}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>서브 메뉴</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.treatmenu}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>연락처</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.infocenter}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>개점일</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.opendate}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>운영 시간</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.opentime}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>휴무일</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.restdate}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>주차</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.parking}}></td>
            </tr>
            </tbody>
        </table>
    );
}

export default FoodStore;