import {CultureDTO, FestivalDTO} from "../../commons/TravelData";
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
    evenethomepage:string
    spendtime:string
}
 */
interface DetailData {
    dto : FestivalDTO;
}
const Festival: FC<DetailData> = (data: DetailData) => {
    return (
        <table className={"table"} style={{"fontSize":"1.3rem"}}>
            <tbody>
            <tr>
                <th className={"w-25"}>주소</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.address}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>시작일</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.eventstartdate}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>종료일</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.eventenddate}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>나이 제한</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.agelimit}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>행사 시간</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.playtime}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>행사 장소</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.eventplace}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>요금</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.usetime}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>소요 시간</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.spendtime}}></td>
            </tr>
            <tr>
                <th className={"w-25"}>행사 홈페이지</th>
                <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.evenethomepage}}></td>
            </tr>
            </tbody>
        </table>
    );
}

export default Festival;