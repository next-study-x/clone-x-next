margin: 0 auto 상하 0 좌우 auto < 좌우 중앙 유지
justify-content: center : 가운데로 모음
flex-grow 부모 이씋때 1을 주면 600까지 늘려줌 부모 크기까지
flex flex-col
justify-between 멀어짐

# following 
backdrop-filter: blur(20px)

# body 8px margin
pages/_document.js로 성능상의 손실 없이
Html, Head, Main, NextScript는 Next.js에서 기본적으로 제공하는 컴포넌트로, 이를 사용해 HTML 구조를 정의합니다.
<style>{body { margin: 0; padding: 0; }}</style>: 이 인라인 스타일은 Head 태그 내부에서 body에 적용될 스타일을 정의합니다. 이 방식으로 전역적인 body 스타일을 적용할 수 있습니다.
이 방식은 브라우저에서 페이지가 처음 로드될 때만 HTML 문서를 커스터마이즈하는 것이기 때문에 페이지가 다시 렌더링되더라도 body 태그에 스타일이 이미 적용되어 있으며, 추가적인 리렌더링이나 성능 이슈가 발생하지 않습니다.
 body 태그에 스타일을 적용하면 재렌더링 문제가 발생하지 않으면서 전역적으로 스타일을 적용할 수 있습니다.
