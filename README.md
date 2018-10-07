# dubluve
PIR센서를 이용한 RNN기반 물체 감지 및 구별 시스템



# Web Server
기본으로 index.html에 app.js가 연결되어있다. 이는 Web page의 Real-Time 기능에서 각 특성에대한 반응을 따로 따로 실행해서 보는 코드이다. 
즉, 현재 존재 여부에 대한 결과만 나타나고 app.js의 첫번째 함수와 두번재함수의 주석에는 distacne, direction, speed에 대한 코드가 존재한다.
따라서 distance에대한 결과를 보고싶으면 존재 여부에 대한 코드를 주석처리한 후 distance 코드를 주석 해제한다. 
이때, 함수가 2개가 존재하므로 2개 다 주석 처리/주석처리 해제 해야한다. 

추가로 app_all.js 코드가 존재하는데 이는 차후에 라벨링 파일의 형태나 인공신경망 학습코드 형태가 바꼈다는 가정하에 4가지(존재유무, 거리, 방향, 속도) 특성에대한 결과를 한번에 볼 수 있는 코드이다. index.html의 app.js를 선언한 코드 부분 밑에 주석처리로 app_html.js를 선언한 부분이 존재한다. 
사용하려면 app.js를 주석처리한 후 app_all.js 부분의 주석을 해제한다. 
만일 app.js을 주석처리하지 않으면 js 파일에서 변수 이름의 충돌이 발생한다. 




