import React from 'react';
import {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import Home from "./component/layout/Home";
import List from "./component/travel/List";
import Detail from "./component/travel/Detail";
function App() {
    useEffect(() => {
        const loadScript = (src: string) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = `${process.env.PUBLIC_URL}${src}`;
                script.async = true; // 비동기 로드 허용
                script.onload = () => resolve(true);
                document.body.appendChild(script);
            });
        };

        const initScripts = async () => {
            // 1. 컴포넌트가 확실히 마운트될 때까지 충분히 대기
            // (네트워크 상황이나 기기 성능에 따라 다를 수 있음)
            await new Promise(resolve => setTimeout(resolve, 200));

            // 2. 종속성이 있는 순서대로 로드
            await loadScript('/js/bootstrap.bundle.min.js');
            await loadScript('/js/tiny-slider.js');
            await loadScript('/js/flatpickr.min.js');
            await loadScript('/js/aos.js');
            await loadScript('/js/glightbox.min.js');

            // 3. UI 조작 파일(navbar, custom)은 가장 마지막에
            await loadScript('/js/navbar-fix.js');
            await loadScript('/js/counter.js');
            await loadScript('/js/custom.js');
        };

        initScripts();

        // Cleanup: 페이지 이동 시 스크립트 중복 방지 (선택 사항)
        return () => {
            const scripts = document.querySelectorAll('script[src*="/js/"]');
            scripts.forEach(s => s.remove());
        };
    }, []);

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/list/:region/:contenttype"} element={<List/>} />
          <Route path={"/detail/:region/:contenttype/:contentid"} element={<Detail/>} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
