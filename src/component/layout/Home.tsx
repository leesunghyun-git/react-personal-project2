import {Fragment} from "react";
import api from "../../commons/api";
import {useQuery} from '@tanstack/react-query';
import {TravelListDTO,HomeData} from "../../commons/TravelData";
import {AxiosResponse} from "axios";
import {Link} from "react-router-dom";
function Home(){
    const {isLoading,isError,error,data} =useQuery<AxiosResponse<HomeData>,Error>({
        queryKey:["main-data"],
        queryFn: async()=> await api.get('/home/data')
    })
    if(isLoading)
        return <h1 className={"text-center"}>Now Loading... </h1>
    if(isError)
        return <h1 className={"text-center"}>Error발생 : {error?.message}</h1>

    if(data==null)
        return <h1 className={"text-center"}>Loading...</h1>
    else
    return (
        <Fragment>
            <section className="section bg-light">
                <div className="container">
                    <div className="row align-items-stretch retro-layout">
                        <div className="col-md-4">
                            <a href="single.html" className="h-entry mb-30 v-height gradient">

                                <div className="featured-img" style={{"backgroundImage" : "url('images/img_2_horizontal.jpg')"}}></div>

                                <div className="text">
                                    <span className="date">Apr. 14th, 2022</span>
                                    <h2>AI can now kill those annoying cookie pop-ups</h2>
                                </div>
                            </a>
                            <a href="single.html" className="h-entry v-height gradient">

                                <div className="featured-img" style={{"backgroundImage" : "url('images/img_5_horizontal.jpg')"}}></div>

                                <div className="text">
                                    <span className="date">Apr. 14th, 2022</span>
                                    <h2>Don’t assume your user data in the cloud is safe</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="single.html" className="h-entry img-5 h-100 gradient">

                                <div className="featured-img" style={{"backgroundImage": "url('images/img_1_vertical.jpg')"}}></div>

                                <div className="text">
                                    <span className="date">Apr. 14th, 2022</span>
                                    <h2>Why is my internet so slow?</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="single.html" className="h-entry mb-30 v-height gradient">

                                <div className="featured-img" style={{"backgroundImage": "url('images/img_3_horizontal.jpg')"}}></div>

                                <div className="text">
                                    <span className="date">Apr. 14th, 2022</span>
                                    <h2>Startup vs corporate: What job suits you best?</h2>
                                </div>
                            </a>
                            <a href="single.html" className="h-entry v-height gradient">

                                <div className="featured-img" style={{"backgroundImage": "url('images/img_4_horizontal.jpg')"}}></div>

                                <div className="text">
                                    <span className="date">Apr. 14th, 2022</span>
                                    <h2>Thought you loved Python? Wait until you meet Rust</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        <section className="section posts-entry posts-entry-sm bg-light">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-sm-6">
                        <h2 className="posts-entry-title">서울 TOP 4</h2>
                    </div>
                    <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
                </div>

                <div className="row">
                    {
                        data?.data.sList.map((data:TravelListDTO,index:number)=>{
                            return(
                            <div className="col-md-6 col-lg-3">
                                <div className="blog-entry">
                                    <Link to={"/detail/seoul/"+data.contenttype+"/"+data.contentid} className="img-link">
                                        <img src={data.image1} alt="Image" className="img-fluid" style={{"height":"220px","width":"360px"}}/>
                                    </Link>
                                    <span className="date">조회수 : {data.hit}</span>
                                    <h2><a href="single.html">{data.title}</a></h2>
                                    <p>{data.address}</p>
                                    <p><Link to={"/detail/seoul/"+data.contenttype+"/"+data.contentid} className="read-more">상세 보기</Link></p>
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>

            <section className="section posts-entry posts-entry-sm">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h2 className="posts-entry-title">경주 TOP 4</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
                    </div>
                    <div className="row">
                            {
                                data?.data.gList.map((data:TravelListDTO,index:number)=>{
                                    return(
                                        <div className="col-md-6 col-lg-3">
                                            <div className="blog-entry">
                                                <Link to={"/detail/gyeongju/"+data.contenttype+"/"+data.contentid} className="img-link">
                                                    <img src={data.image1} alt="Image" className="img-fluid" style={{"height":"220px","width":"360px"}}/>
                                                </Link>
                                                <span className="date">조회수 : {data.hit}</span>
                                                <h2><a href="single.html">{data.title}</a></h2>
                                                <p>{data.address}</p>
                                                <p><Link to={"/detail/gyeongju/"+data.contenttype+"/"+data.contentid} className="read-more">상세 보기</Link></p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                    </div>
                </div>
            </section>
            <section className="section posts-entry posts-entry-sm bg-light">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h2 className="posts-entry-title">부산 TOP 4</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
                    </div>
                    <div className="row">

                            {
                                data?.data.bList.map((data:TravelListDTO,index:number)=>{
                                    return(
                                        <div className="col-md-6 col-lg-3">
                                            <div className="blog-entry">
                                                <Link to={"/detail/busan/"+data.contenttype+"/"+data.contentid}  className="img-link">
                                                    <img src={data.image1} alt="Image" className="img-fluid" style={{"height":"220px","width":"360px"}}/>
                                                </Link>
                                                <span className="date">조회수 : {data.hit}</span>
                                                <h2><a href="single.html">{data.title}</a></h2>
                                                <p>{data.address}</p>
                                                <p><Link to={"/detail/busan/"+data.contenttype+"/"+data.contentid}className="read-more">상세 보기</Link></p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                    </div>
                </div>
            </section>

            <section className="section posts-entry posts-entry-sm">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h2 className="posts-entry-title">제주 TOP 4</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
                    </div>
                    <div className="row">

                        {
                            data?.data.jList.map((data:TravelListDTO,index:number)=>{
                                return(
                                    <div className="col-md-6 col-lg-3">
                                        <div className="blog-entry">
                                            <Link to={"/detail/jeju/"+data.contenttype+"/"+data.contentid} className="img-link">
                                                <img src={data.image1} alt="Image" className="img-fluid" style={{"height":"220px","width":"360px"}}/>
                                            </Link>
                                            <span className="date">조회수 : {data.hit}</span>
                                            <h2><a href="single.html">{data.title}</a></h2>
                                            <p>{data.address}</p>
                                            <p><Link to={"/detail/jeju/"+data.contenttype+"/"+data.contentid} className="read-more">상세 보기</Link></p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        <section className="section posts-entry">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-sm-6">
                        <h2 className="posts-entry-title">Culture</h2>
                    </div>
                    <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
                </div>
                <div className="row g-3">
                    <div className="col-md-9 order-md-2">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="blog-entry">
                                    <a href="single.html" className="img-link">
                                        <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid"/>
                                    </a>
                                    <span className="date">Apr. 14th, 2022</span>
                                    <h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                                    <p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog-entry">
                                    <a href="single.html" className="img-link">
                                        <img src="images/img_2_sq.jpg" alt="Image" className="img-fluid"/>
                                    </a>
                                    <span className="date">Apr. 14th, 2022</span>
                                    <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                                    <p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled blog-entry-sm">
                            <li>
                                <span className="date">Apr. 14th, 2022</span>
                                <h3><a href="single.html">Don’t assume your user data in the cloud is safe</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </li>

                            <li>
                                <span className="date">Apr. 14th, 2022</span>
                                <h3><a href="single.html">Meta unveils fees on metaverse sales</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </li>

                            <li>
                                <span className="date">Apr. 14th, 2022</span>
                                <h3><a href="single.html">UK sees highest inflation in 30 years</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">

                <div className="row mb-4">
                    <div className="col-sm-6">
                        <h2 className="posts-entry-title">Politics</h2>
                    </div>
                    <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_7_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">


                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_1.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_6_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">


                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_2.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_5_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">


                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_3.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_4_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">


                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_4.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_3_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">


                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_5.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_2_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">


                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_4.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_1_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">


                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_3.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_4_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">



                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_2.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="post-entry-alt">
                            <a href="single.html" className="img-link"><img src="images/img_3_horizontal.jpg" alt="Image" className="img-fluid"/></a>
                            <div className="excerpt">



                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <div className="post-meta align-items-center text-left clearfix">
                                    <figure className="author-figure mb-0 me-3 float-start"><img src="images/person_5.jpg" alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By <a href="#">David Anderson</a></span>
                                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <div className="section bg-light">
            <div className="container">

                <div className="row mb-4">
                    <div className="col-sm-6">
                        <h2 className="posts-entry-title">Travel</h2>
                    </div>
                    <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
                </div>

                <div className="row align-items-stretch retro-layout-alt">

                    <div className="col-md-5 order-md-2">
                        <a href="single.html" className="hentry img-1 h-100 gradient">
                            <div className="featured-img" style={{"backgroundImage": "url('images/img_2_vertical.jpg')"}}></div>
                            <div className="text">
                                <span>February 12, 2019</span>
                                <h2>Meta unveils fees on metaverse sales</h2>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-7">

                        <a href="single.html" className="hentry img-2 v-height mb30 gradient">
                            <div className="featured-img" style={{"backgroundImage": "url('images/img_1_horizontal.jpg')"}}></div>
                            <div className="text text-sm">
                                <span>February 12, 2019</span>
                                <h2>AI can now kill those annoying cookie pop-ups</h2>
                            </div>
                        </a>

                        <div className="two-col d-block d-md-flex justify-content-between">
                            <a href="single.html" className="hentry v-height img-2 gradient">
                                <div className="featured-img" style={{"backgroundImage": "url('images/img_2_sq.jpg')"}}></div>
                                <div className="text text-sm">
                                    <span>February 12, 2019</span>
                                    <h2>Don’t assume your user data in the cloud is safe</h2>
                                </div>
                            </a>
                            <a href="single.html" className="hentry v-height img-2 ms-auto float-end gradient">
                                <div className="featured-img" style={{"backgroundImage": "url('images/img_3_sq.jpg')"}}></div>
                                <div className="text text-sm">
                                    <span>February 12, 2019</span>
                                    <h2>Startup vs corporate: What job suits you best?</h2>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </Fragment>
    )

}

export default Home;
