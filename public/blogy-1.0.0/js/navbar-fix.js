// public/js/navbar-fix.js

(function() {
	'use strict';

	var siteMenuClone = function() {
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

		// [체크 1] 대상 폴더가 없으면 아예 실행 안 함
		if (!siteMobileMenuBody) return;

		// 기존 복제본 삭제 (중복 방지)
		siteMobileMenuBody.innerHTML = "";

		jsCloneNavs.forEach(nav => {
			var navCloned = nav.cloneNode(true);
			navCloned.setAttribute('class', 'site-nav-wrap');
			siteMobileMenuBody.appendChild(navCloned);
		});

		setTimeout(function() {
			var mobileMenu = document.querySelector('.site-mobile-menu');
			if (!mobileMenu) return;

			var hasChildrens = mobileMenu.querySelectorAll('.has-children');
			var counter = 0;

			hasChildrens.forEach(hasChild => {
				var refEl = hasChild.querySelector('a');
				if (!refEl) return; // a 태그가 없으면 패스

				// 이미 span이 들어가 있는지 확인 (중복 생성 방지)
				if (!hasChild.querySelector('.arrow-collapse')) {
					var newElSpan = document.createElement('span');
					newElSpan.setAttribute('class', 'arrow-collapse collapsed');
					hasChild.insertBefore(newElSpan, refEl);
				}

				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
				if (arrowCollapse) {
					arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
					arrowCollapse.setAttribute('data-bs-target', '#collapseItem' + counter);
				}

				var dropdown = hasChild.querySelector('.dropdown');

// dropdown이 존재할 때만 속성을 변경하도록 '반드시' 체크합니다.
				if (dropdown !== null && dropdown !== undefined) {
					dropdown.setAttribute('class', 'collapse');
					dropdown.setAttribute('id', 'collapseItem' + counter);
				} else {
					// 만약 드롭다운이 없다면 에러를 내지 않고 콘솔에 경고만 찍거나 그냥 넘어갑니다.
					console.warn(counter + "번째 .has-children 요소 내부에 .dropdown이 없습니다.");
				}

				counter++;
			});
		}, 1000);

		// ... 이하 메뉴 토글 로직 생략 (동일)
	};

	// React 환경을 위해 바로 실행하지 않고 약간의 텀을 줌
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', siteMenuClone);
	} else {
		siteMenuClone();
	}
})();