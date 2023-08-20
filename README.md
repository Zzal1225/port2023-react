# 리액트를 이용한 반응형 사이트 만들기

##완성작 보기
주소 : 

## 사용 스택
- react(https://ko.legacy.reactjs.org/) 를 사용하여 사이트를 번들링하고 관리합니다.
- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- lenis(https://lenis.studiofreight.com/) 를 이용하여 스므스 효과를 구현합니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.

1. 셋팅하기

터미널을 열고 작성한다.
$ npx create-react-app port2023-react

아래와 같은 메세지가 뜨면 cd port2023-react를 입력한 후 npm start를 입력한다.
- Success! Created port2023-react at /Users/webstoryboy/Desktop/port2023/port2023-react
  Inside that directory, you can run several commands:

      npm start
      Starts the development server.

      npm run build
      Bundles the app into static files for production.

      npm test
      Starts the test runner.

      npm run eject
      Removes this tool and copies build dependencies, configuration files
      and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

    cd port2023-react
    npm start

Happy hacking!

필요한 라이브러리 설치하기
$ npm install react-router-dom
$ npm install gsap
$ npm install sass
$ npm install @studio-freight/lenis

