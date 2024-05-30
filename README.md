## 시작전

모든 패키지를 설치하고, migration.js을 진행하여 주세요.

## 상황

우리가 만들 애플리케이션의 이름은 "어휘력 측정기" 입니다.  
"어휘력 측정기"는 사용자 핸드폰의 통화 기록, 문자 기록 등을 분석하여 사용자의 어휘력을 보여줍니다.  
동료 개발자가 핸드폰의 통화 기록, 문자 기록을 클라이언트 사이드에서 단어 단위로 파싱하는데 성공하였다고 합니다.  
그리고 모든 파싱 결과들이 `POST /users/word`로 전달되게 구현했다고 합니다.  
그리고 하는김에 서버의 큰틀도 만들어 놓았다고 합니다.  
하지만 최적화에는 실패하였다고 합니다.  
백엔드 개발자로써 당신의 업무는 `최적화`입니다.  
(서버의 응답시간을 줄이기)

## 조건

1. 라이브러리 사용은 금지합니다.
2. user_word 테이블을 수정하지 마세요. 데이터베이스 변경이 있다면 다른 환경에서도 실행할 수 있게 꼭 migration.js에도 내용을 추가해주세요
3. `POST /users/word` 업데이트가 곧바로 적용되야 합니다.
4. 대용량 데이터를 메모리에 저장하여 관리하지 마세요.

## Before starting

Please install all packages and run migration.js.

## situation

The name of the application we will create is “Vocabulary Meter”.  
"Vocabulary Meter" shows the user's vocabulary by analyzing call records, text records, etc. on the user's cell phone.  
A fellow developer said he succeeded in parsing a cell phone's call and text records word by word on the client side.  
And it is said that all parsing results are delivered as `POST /users/word`.  
he said that while doing so, he also created a frame for the server.  
However, he said that optimization failed.  
As a backend developer, your job is 'optimization'.  
(Reduce server response time)  

## condition

1. Use of the library is prohibited.
2. Do not modify the user_word table. If there are changes to the database, be sure to add content to migration.js so that it can be executed in a different environment.
3. `POST /users/word` The update should be applied immediately.
4. Do not manage large amounts of data by storing them in memory.
