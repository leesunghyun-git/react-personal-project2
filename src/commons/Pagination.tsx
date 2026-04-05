import {FC, Fragment} from "react";
import {TravelListData} from "./TravelData";
interface PageProps{
    data : TravelListData;
    setCurPage :(page:number)=>void;
    curPage:number;
}
const Pagination:FC<PageProps> = ({data,setCurPage,curPage}:PageProps)=>{
    const {totalPage,startPage,endPage} = data;
    const pageArr = []

    const pageChange=(page:number)=>setCurPage(page)
    if(startPage>1)
    {
        pageArr.push(
            <Fragment>
            <a onClick={()=>pageChange(startPage-1)} style={{"cursor":"pointer"}}>{startPage-1}</a>
            <span>...</span>
            </Fragment>
        )
    }
    for(let i:number = startPage;i<=endPage;i++)
    {
        if(i==curPage)
        {
            pageArr.push(
                <span>{i}</span>
            )
        }
        else
        {
            pageArr.push(
                <a onClick={()=>{pageChange(i)}} style={{"cursor":"pointer"}}>{i}</a>
            )
        }
    }
    if(endPage<totalPage)
    {
        pageArr.push(
            <Fragment>
                <span>...</span>
            <a onClick={()=>pageChange(endPage+1)} style={{"cursor":"pointer"}}>{endPage+1}</a>
            </Fragment>
        )
    }
    return (
        <div className="row text-center pt-5 border-top">
            <div className="col-md-12">
                <div className="custom-pagination">
                    {
                        pageArr
                    }
                </div>
            </div>
        </div>
    )
}

export default Pagination;
