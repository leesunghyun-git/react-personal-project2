import {useQuery} from "@tanstack/react-query";
import {useState, useEffect, Fragment} from "react";
import api from '../../commons/api';
import {TravelListDTO,TravelListData} from "../../commons/TravelData";
import {AxiosResponse} from "axios";
import {useParams,useNavigate} from "react-router";
import {Link} from "react-router-dom";
import Pagination from "../../commons/Pagination";
function List() {
    const [curPage,setCurpage] = useState<number>(1);
    const {region,contenttype} = useParams();
    useEffect(()=>{
        setCurpage(1)
    },[region,contenttype])
    const {isLoading,isError,error,data} =useQuery<AxiosResponse<TravelListData>,Error>({
        queryKey:[region+'/'+contenttype+'list-data/'+curPage],
        queryFn: async()=>{
            return await api.get('/'+region+'/list/'+contenttype+'/'+curPage)
        }
    })
    if(isLoading)
        return (
            <div className={"text-center"} style={{"margin":"0px auto"}}>
            <div className="spinner-border"></div>
            </div>
)
    if (isError)
        return <h1 className={"text-center"}>Error발생 : {error?.message}</h1>
    let content:string = '';
    switch(contenttype){
        case '12' :
            content = '관광명소'
            break;
        case '14' :
            content = '문화시설'
            break;

        case '15' :
            content = '축제/행사'
            break;

        case '32' :
            content = '숙박'
            break;

        case '38' :
            content = '쇼핑'
            break;

        case '39' :
            content = '음식점'
            break;

    }
    let krregion:string ='';

    switch(region) {
        case 'seoul':
            krregion='서울'
            break;
        case 'gyeongju':
            krregion='경주'
            break;
        case 'busan':
            krregion='부산'
            break;
        case 'jeju':
            krregion='제주'
            break;
    }
    return (
        <Fragment>
            <div className="section search-result-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">{krregion} {content}</div>
                        </div>
                    </div>
                    <div className="row posts-entry">
                        {
                            data?.data.list.map((data: TravelListDTO, index: number) => {
                                return (
                                    <div className="col-md-6 col-lg-3">
                                        <div className="blog-entry">
                                            <a href="single.html" className="img-link">
                                                <img src={data.image1} alt="Image" className="img-fluid"
                                                     style={{"height": "220px", "width": "360px"}}/>
                                            </a>
                                            <span className="date">조회수 : {data.hit}</span>
                                            <h2><a href="single.html">{data.title}</a></h2>
                                            <p>{data.address}</p>
                                            <p><a href="#" className="read-more">상세 보기</a></p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {
                        data?.data &&
                        <Pagination data={data.data} setCurPage={setCurpage} curPage={curPage}/>
                    }
                </div>
            </div>
        </Fragment>
    );

}

export default List;