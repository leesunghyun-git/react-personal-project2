import {Fragment} from "react";
import {Link} from "react-router-dom";
function Header() {
    return (
        <Fragment>
            <div id="overlayer"></div>
            <div className="loader">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <nav className="site-nav">
                <div className="container">
                    <div className="menu-bg-wrap">
                        <div className="site-navigation">
                            <div className="row g-0 align-items-center">
                                <div className="col-2">
                                    <Link to={"/"} className="logo m-0 float-start">Ktravel<span
                                        className="text-primary">.</span></Link>
                                </div>
                                <div className="col-8 text-center">
                                    <form action="#" className="search-form d-inline-block d-lg-none">
                                        <input type="text" className="form-control" placeholder="검색어입력..."/>
                                        <span className="bi-search"></span>
                                    </form>

                                    <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                        <li className="active"><a href="index.html">Home</a></li>
                                        <li className="has-children">
                                            <a href="category.html">서울 여행</a>
                                            <ul className="dropdown">
                                                <li><Link to={"/list/seoul/12"}>명소</Link></li>
                                                <li><Link to={"/list/seoul/14"}>문화시설</Link></li>
                                                <li><Link to={"/list/seoul/15"}>축제/행사</Link></li>
                                                <li><Link to={"/list/seoul/39"}>음식점</Link></li>
                                                <li><Link to={"/list/seoul/38"}>쇼핑</Link></li>
                                                <li><Link to={"/list/seoul/32"}>숙박</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="category.html">경주 여행</a>
                                            <ul className="dropdown">
                                                <li><Link to={"/list/gyeongju/12"}>명소</Link></li>
                                                <li><Link to={"/list/gyeongju/14"}>문화시설</Link></li>
                                                <li><Link to={"/list/gyeongju/15"}>축제/행사</Link></li>
                                                <li><Link to={"/list/gyeongju/39"}>음식점</Link></li>
                                                <li><Link to={"/list/gyeongju/38"}>쇼핑</Link></li>
                                                <li><Link to={"/list/gyeongju/32"}>숙박</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="category.html">부산 여행</a>
                                            <ul className="dropdown">
                                                <li><Link to={"/list/busan/12"}>명소</Link></li>
                                                <li><Link to={"/list/busan/14"}>문화시설</Link></li>
                                                <li><Link to={"/list/busan/15"}>축제/행사</Link></li>
                                                <li><Link to={"/list/busan/39"}>음식점</Link></li>
                                                <li><Link to={"/list/busan/38"}>쇼핑</Link></li>
                                                <li><Link to={"/list/busan/32"}>숙박</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="category.html">제주 여행</a>
                                            <ul className="dropdown">
                                                <li><Link to={"/list/jeju/12"}>명소</Link></li>
                                                <li><Link to={"/list/jeju/14"}>문화시설</Link></li>
                                                <li><Link to={"/list/jeju/15"}>축제/행사</Link></li>
                                                <li><Link to={"/list/jeju/39"}>음식점</Link></li>
                                                <li><Link to={"/list/jeju/38"}>쇼핑</Link></li>
                                                <li><Link to={"/list/jeju/32"}>숙박</Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="category.html">Youtube</a></li>
                                        <li><a href="category.html">여행 후기 게시판</a></li>
                                        <li><a href="category.html">Politics</a></li>
                                    </ul>
                                </div>
                                <div className="col-2 text-end">
                                    <a href="#"
                                       className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
                                        <span></span>
                                    </a>
                                    <form action="#" className="search-form d-none d-lg-inline-block">
                                        <input type="text" className="form-control" placeholder="Search..."/>
                                        <span className="bi-search"></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>

    )
}

export default Header;