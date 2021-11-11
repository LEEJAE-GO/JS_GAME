# JavaScript

1. [JavaScript 란?](#JavaScript-란?)
2. [JavaScript 문법](#JavaScript-문법)
3. [JavaScript 출력](#JavaScript-출력)
4. [JavaScript 기본 타입](#JavaScript-기본-타입)
5. [JavaScript 타입 변환](#JavaScript-타입-변환)
6. [JavaScript 변수](#JavaScript-변수)
7. [JavaScript 함수](function.md)

### JavaScript 란?
- 객체 지향의 프로그래밍 언어
  - 객체(object)는 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합이다.
  - 말이 너무 어렵다. 객체 안에 객체에 대한 정보, 내용으로 이루어져있다.
  - 여기서 프로퍼티의 값을 함수로 만들었을 때 그것을 메소드라 한다.
  
- 어디서 사용되는가
  - 웹의 동작(`HTML`의 내용, 속성, 스타일, 동작)을 구현
  - `Node.js`를 이용한 서버 프로그래밍
  
- JavaScript를 하기 전에 `HTML`과 `CSS`에 대한 기초 지식이 있는 것이 좋다.
  
### JavaScript 문법
- 내용 끝에는 세미콜론 `;` 을 붙인다;
- 대소문자를 구분하기 때문에 변수나 함수, 예약어 등 작성하거나 사용 시에 구분을 잘해야한다.
- literal; 직접 표현되는 값 그 자체
- 식별자는 영문(대소문자), 숫자, 언더바;언더스코어(`_`) 또는 달러(`$`)만을 사용할 수 있다.
- 식별자 작성
  - Camel Case 방식이란 식별자가 여러 단어로 이루어질 경우에 첫 번째 단어는 모두 소문자로 작성하고, 그다음 단어부터는 첫 문자만 대문자로 작성하는 방식
  - Underscore Case 방식은 식별자를 이루는 단어들을 소문자로만 작성하고, 그 단어들은 언더스코어(_)로 연결하는 방식
  - 가독성 때문에 알아두는 것이 좋을 듯하다.
- 주석이란 코드 내에 일종의 설명문이다. `//`, `/*......*/`

### JavaScript 출력
- 출력 방법
  1. `window.alert()` 메소드
    - `<script>` 내에 `alert()` 메소드를 이용하여 경고창을 출력
  2. `HTML DOM` 요소를 이용한 `innerHTML` 프로퍼티
    - 실제 자바스크립트 코드에서 출력을 위해 가장 많이 사용되는 방법
    - `HTML Parsing`이 필요한 문자열에만 사용하고 되도록 `textContent`나 `innerText`를 사용하는 것을 권장한다.
  3. `document.write()` 메소드
    - 웹 페이지가 로딩될 때 실행되면, 웹 페이지에 가장 먼저 데이터를 출력
  4. `console.log()` 메소드
    - 웹 브라우저의 콘솔을 통해 데이터를 출력

### JavaScript 기본 타입
- 원시 타입
  1. 숫자(number)
    - 정수,실수를 따로 구분하지 않고, 모든 수를 실수 하나로만 표현하고 매우 큰 수나 매우 작은 수를 표현할 경우 e 표기법을 사용한다.
  2. 문자열(string)
    - 큰따옴표("")나 작은따옴표('')로 둘러싸인 문자의 집합을 의미한다. ; 가시성을 위해 사용 순서를 하나로 정의하는 것이 좋다.
  3. 불리언(boolean)
    - 참과 거짓을 나타낸다.
  4. 심볼(symbol)
    - ECMAScript 6부터 새롭게 추가된 타입으로 유일하게 변경할 수 없는 타입, 객체의 프로퍼티를 위한 식별자로 사용할 수 있다.
    - 잘 모르겠다.. 아 익스플로어는 지원하지 않는다고 한다.
  5. `undefined`, `unll`, `typeof`
    - `null`이란 `object` 타입이며, 아직 '값'이 정해지지 않은 것을 의미한다.
    - `undefined`란 `null`과는 달리 '타입'이 정해지지 않은 것을 의미한다.
    - 자바스크립트에서 `undefined`는 초기화되지 않은 변수나 존재하지 않는 값에 접근할 때 반환된다.
    - `typeof`는 피연산자의 타입을 반환한다.
- 객체 타입
  - 객체(object)
  
### JavaScript 타입 변환
  - JavaScript는 변수에 대한 타입을 정하지 않아 같은 변수에 다른 타입의 값을 대입할 수 있다.
  - 묵시적 타입 변환
    - 특정 타입의 값을 기다리고 있는데 다른 타입의 값이 들어오면 자동으로 타입을 변환한다.
    - 의미가 맞지않는 경우 타입 변환은 이루어지지 않으면 `NaN` 값으로 반환된다.
  - 명시적 타입 변환
  1. Number() : 숫자로 변환
  2. String() : 문자로 변환
  3. Boolean() : 참 거짓으로 변환
  4. Object() : 객체형으로 변환(?) 잘 모르겠음. 찾아보기
  5. parseInt() : 정수형으로 변환
  6. parseFloat() : 실수형으로 변환

### JavaScript 변수
  - 변수란 데이터를 저장할 수 있는 공간으로 선언과 초기화로 이루어진다.
  - 선언되지 않은 변수를 사용하려고 하거나 접근하려고 하면 오류가 발생한다.
  - 단, 선언되지 않은 변수를 초기화할 경우에는 자동으로 선언을 먼저 한 후 초기화를 진행한다.
  - 변수에 값을 대입하는 것은 여러 번 진행되도 괜찮지만 재선언은 할 수 없다.
  - 변수의 이름은 영문(대소문자), 숫자, 언더스코어(`_`) 또는 달러(`$`)로만 구성하며 숫자와 구분하기 위해 숫자를 처음에 사용할 수 없다.