import { AttractionDTO } from "../../commons/TravelData";
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
    infocenter:string
    restdate:string
    usetime:string
    parking:string
}
 */
interface DetailData {
    dto : AttractionDTO;
}
const Attraction: FC<DetailData> = (data: DetailData) => {
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
                    <th className={"w-25"}>휴무일</th>
                    <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.restdate}}></td>
                </tr>
                <tr>
                    <th className={"w-25"}>운영 시간</th>
                    <td className={"w-75"} dangerouslySetInnerHTML={{__html:data.dto.usetime}}></td>
                </tr>
                <tr>
                    <th className={"w-25"}>주차</th>
                    <td className={"w-75" } dangerouslySetInnerHTML={{__html:data.dto.parking}}></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Attraction;