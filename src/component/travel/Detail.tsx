import {Fragment} from "react";
import {useState,useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router";
import {AxiosResponse} from "axios";
import {AttractionDTO,CultureDTO,FestivalDTO,FoodStoreDTO,ShoppingDTO,StayDTO} from "../../commons/TravelData";
import api from "../../commons/api"
import {Link} from "react-router-dom";
import Attraction from "./Attraction";
import Culture from "./Culture";
import Festival from "./Festival";
import FoodStore from "./FoodStore";
import Shopping from "./Shopping";
import Stay from "./Stay";

type TravelDetailDTO = AttractionDTO | CultureDTO | FestivalDTO | FoodStoreDTO | ShoppingDTO | StayDTO;
interface TravelDetailData {
    dto : TravelDetailDTO;
}
function Detail() {
    const {region,contenttype,contentid} = useParams();

    const {isLoading,isError,data,error} = useQuery<AxiosResponse<TravelDetailData>,Error>({
        queryKey : ['TravelDetail'+contentid],
        queryFn : async ()=>{
            return await api.get('/'+region+'/detail/'+contenttype+'/'+contentid)
        }
    })

    if(isLoading){
        return (
            <div className={"text-center"} style={{"margin":"0px auto"}}>
                <div className="spinner-border"></div>
            </div>
        );
    }
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
    const DetailRender = () => {
        if(!data) return null;

        else
        {
            switch(contenttype){
                case '12' :
                    return <Attraction dto={data.data.dto as AttractionDTO}/>
                case '14' :
                    return <Culture dto={data.data.dto as CultureDTO}/>

                case '15' :
                    return <Festival dto={data.data.dto as FestivalDTO}/>

                case '32' :
                    return <Stay dto={data.data.dto as StayDTO}/>

                case '38' :
                    return <Shopping dto={data.data.dto as ShoppingDTO}/>

                case '39' :
                    return <FoodStore dto={data.data.dto as FoodStoreDTO}/>

            }
        }


    }

    return (
        <Fragment>
            <div className="site-cover site-cover-sm same-height overlay single-page"
                 style={{"backgroundImage": "url("+data?.data.dto.image1+")"}}>
                <div className="container">
                    <div className="row same-height justify-content-center">
                        <div className="col-md-6">
                            <div className="post-entry text-center">
                                <h1 className="mb-4">{data?.data.dto.title}</h1>
                                <div className="post-meta align-items-center text-center">
                                    <span><Link to={"/list/"+region+"/12"} style={{"color":"white"}}>{krregion}</Link> | <Link to={"/list/"+region+"/"+contenttype} style={{"color":"white"}}>{content}</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">

                    <div className="row blog-entries element-animate">

                        <div className="col-md-12 col-lg-12 main-content">

                            <div className="post-content-body">
                                <div className="row my-6 justify-content-center">
                                    <div className="col-md-8 mb-4">
                                        <img src={data?.data.dto.image1} alt="Image placeholder"
                                             className="img-fluid rounded" style={{"width":"100%","height":"100%"}} />
                                    </div>
                                </div>
                                <p style={{"fontSize":"1.3rem"}}>{data?.data.dto.msg}</p>
                                <div className={"row md-6"}>
                                    {DetailRender()}
                                </div>
                            </div>


                            <div className="pt-5">
                                <p>Categories: <a href="#">Food</a>, <a href="#">Travel</a> Tags: <a
                                    href="#">#manila</a>, <a href="#">#asia</a></p>
                            </div>


                            <div className="pt-5 comment-wrap">
                                <h3 className="mb-5 heading">6 Comments</h3>
                                <ul className="comment-list">
                                    <li className="comment">
                                        <div className="vcard">
                                            <img src="images/person_1.jpg" alt="Image placeholder"/>
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                                                laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure! Quam voluptas earum impedit
                                                necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply rounded">Reply</a></p>
                                        </div>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard">
                                            <img src="images/person_2.jpg" alt="Image placeholder"/>
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                                                laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure! Quam voluptas earum impedit
                                                necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply rounded">Reply</a></p>
                                        </div>

                                        <ul className="children">
                                            <li className="comment">
                                                <div className="vcard">
                                                    <img src="images/person_3.jpg" alt="Image placeholder"/>
                                                </div>
                                                <div className="comment-body">
                                                    <h3>Jean Doe</h3>
                                                    <div className="meta">January 9, 2018 at 2:21pm</div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                                                        autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                                                        voluptas earum impedit necessitatibus, nihil?</p>
                                                    <p><a href="#" className="reply rounded">Reply</a></p>
                                                </div>


                                                <ul className="children">
                                                    <li className="comment">
                                                        <div className="vcard">
                                                            <img src="images/person_4.jpg" alt="Image placeholder"/>
                                                        </div>
                                                        <div className="comment-body">
                                                            <h3>Jean Doe</h3>
                                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                Pariatur quidem laborum necessitatibus, ipsam impedit
                                                                vitae autem, eum officia, fugiat saepe enim sapiente
                                                                iste iure! Quam voluptas earum impedit necessitatibus,
                                                                nihil?</p>
                                                            <p><a href="#" className="reply rounded">Reply</a></p>
                                                        </div>

                                                        <ul className="children">
                                                            <li className="comment">
                                                                <div className="vcard">
                                                                    <img src="images/person_5.jpg"
                                                                         alt="Image placeholder"/>
                                                                </div>
                                                                <div className="comment-body">
                                                                    <h3>Jean Doe</h3>
                                                                    <div className="meta">January 9, 2018 at 2:21pm
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit. Pariatur quidem laborum
                                                                        necessitatibus, ipsam impedit vitae autem, eum
                                                                        officia, fugiat saepe enim sapiente iste iure!
                                                                        Quam voluptas earum impedit necessitatibus,
                                                                        nihil?</p>
                                                                    <p><a href="#" className="reply rounded">Reply</a>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard">
                                            <img src="images/person_1.jpg" alt="Image placeholder"/>
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                                                laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure! Quam voluptas earum impedit
                                                necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply rounded">Reply</a></p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="comment-form-wrap pt-5">
                                    <h3 className="mb-5">Leave a comment</h3>
                                    <form action="#" className="p-5 bg-light">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website">Website</label>
                                            <input type="url" className="form-control" id="website"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="" id="message" cols={30} rows={10}
                                                      className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Post Comment" className="btn btn-primary"/>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );

}

export default Detail;