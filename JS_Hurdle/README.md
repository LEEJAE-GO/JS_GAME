### Javascript_Game

* 사람이 장애물을 피하는 게임을 만들어보고자 함.
* 준비물은 `HTML, Javascript, Canvas, Scss`

### Canvas

* javascript + HTML `<canvas>` 엘리먼트를 통해 그래픽을 그리기 위한 수단을 제공해줌.

```js
// canvas 엘리먼트를 참조
const canvas = document.getElementById('canvas');
// 엘리먼트의 컨텍스트를 가지고 옴.
const ctx = canvas.getContext('2d');

// fillStyle 사각형을 초록색으로 만듬.
ctx.fillStyle = 'green';
// 좌측 상단 코너를 (10, 10) 너비, 높이를 (150, 100)
ctx.fillRect(10, 10, 150, 100);
```

#### 미리보기
![image](https://user-images.githubusercontent.com/55069045/136756597-09722b5b-7271-40d9-91d2-1d0fddee07b3.png)
