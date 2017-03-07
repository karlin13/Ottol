# Ottol
# ~~lottO~~
## Demo
https://karlin13.github.io/ottol

## 기능
1. 고민 없이 로또를 사고 싶은 분들을 위해 랜덤으로 숫자 6개를 생성해줍니다.
2. 유저의 도박 중독을 예방하기 위해 번호는 1주일에 1번 생성해줍니다.
3. PWA이기 때문에 오프라인이어도 편하게 사용하실 수 있습니다.

## 현재 문제점
1. 인덱스 페이지 렌더링 속도가 너무 느립니다.(AMD 때문인 것으로 추정)
2. 디자인이 별로입니다.

## 추후 계획
1. 속도 개선(번들링...?)
2. 디자인 예쁘게
3. 새로운 로또 번호 생성 시 푸시 일림 주기

## 사용한 플러그인
1. jquery downcount plugin:  https://github.com/sonnyt/downCount

## 로컬에서 실행하기
 필요한 node module들을 설치합니다.
```
  npm install
```
 jquery downcount plugin을 node_modules에 clone 합니다.
```
  cd {{your/project/src}}/node_modules
  git clone https://github.com/sonnyt/downCount
```
 http-server을 설치합니다.
```
  npm install -g http-server
```
 로컬 서버를 실행합니다.
```
  http-server ./ -p 8080
```
 localhost:8080으로 접속하면 Ottol을 이용하실 수 있습니다.
