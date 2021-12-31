
## 반응형 코딩

부모에게 flex 속성 부여후
자식에게 order:우선번호 를 매김으로써
배치순서를 정할수있다.

flex-direction 의 reverse 속성으로도 바꿀수있음.

pointer-events:none; 을 이용해서 클릭이벤트를 없앨수있다.

label 과 input 라디오 박스 , 그리고 형제선택자를 이용하여
script 없이 아코디언 탭메뉴를 구현할수있다.
라디오박스를 숨겨주고
maxheight 값 0 과 overflow:hidden 을 준상태에서
라디오박스 체크시 maxheight 를 여유있게 늘려주고
트랜지션 효과를 준다면 슬라이드다운이 구현된다.
(덮여있는 요소를 무시하고 아래객체를선택해야할때 사용)

input[type=""] // input[name=""] // input[id=""] 등등
인풋의 특정 속성을 이용해 인풋엘리먼트를 각자 선택할수있다.

## 반응형

미디어 쿼리를 이용해
width가 px로 고정된 요소들을 100%로 바꿔주고
여백은 패딩으로 조절하였다. 
text-align:center 속성으로 텍스트 가운데배치를 해서
모바일 환경에서 읽기 편하게 하였다.

