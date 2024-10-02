## AI코딩 - 랜딩페이지 만들기
이 강의는 AI로 랜딩페이지를 만들어보는 과정입니다.

더 자세한 강의는 [AI코딩-랜딩페이지 만들기(체험코딩)](https://try.tera.co.kr/courses/ai%ec%bd%94%eb%94%a9-%eb%9e%9c%eb%94%a9%ed%8e%98%ec%9d%b4%ec%a7%80-%eb%a7%8c%eb%93%a4%ea%b8%b0/) 사이트를 참고해주세요.


이 과정에서는 [ChatGPT](https://chat.openai.com/)를 이용하여 [Next.js](https://nextjs.org) 기반의 홈페이지를 만들어 봅니다.

Next.js의 서버사이드 기능을 활용하여 '문의하기' 기능을 구현하고, 문의 내용을 이메일로 발송을 포함합니다.

그리고 마지막으로 vercel.com의 무료 호스팅을 이용하여 홈페이지를 무료로 배포해 봅니다.


## 가장 먼저 할 일

먼저 env.example 파일을 열어 여러분의 gmail 계정과 *앱 비밀번호*를 입력하여 `.env.local`로 이름을 바꿔서 저장하세요.

앱 비밀번호는 gmail 계정 비밀번호가 아니고, [구글 계정관리에 들어가서 생성한 '앱 전용 비밀번호'](https://myaccount.google.com/apppasswords)입니다.

2단계 인증을 해야 설정할 수 있습니다.

## 시작하기


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

실행되면 [http://localhost:3000](http://localhost:3000)를 여러분의 브라우저에서 열어보세요.

## 강의로 보기

더 자세한 강의는 [AI코딩-랜딩페이지 만들기(체험코딩)](https://try.tera.co.kr/courses/ai%ec%bd%94%eb%94%a9-%eb%9e%9c%eb%94%a9%ed%8e%98%ec%9d%b4%ec%a7%80-%eb%a7%8c%eb%93%a4%ea%b8%b0/) 사이트를 참고해주세요.
