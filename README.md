![글 작성](https://github.com/user-attachments/assets/ab91da06-fe5e-45d4-9c88-f8365670773e)# DeepVelop | 블로그 작성 사이트
<p><img src="https://github.com/user-attachments/assets/fd76b379-9761-4cf2-ae66-23d829158417"></p>

# 프로젝트 소개
+ Deepvelop는 자기개발을 위해 블로그를 작성하는 사람들을 위해 작성한 글을 공유하는 사이트 입니다.
+ 글을 작성하고 사람들과 공유해 보세요!

# 사용기술
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/nextdotjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">


# 개발내용
| 메인 페이지 |
|---------|
| ![mainpage](https://github.com/user-attachments/assets/e2bac275-3984-4470-a771-f1484d7bf322)|

[메인페이지]
+ 구인 중인 회사의 공고를 확인 할 수 있는 swiper라이브러리를 사용해서 슬라이더를 구현
+ 내 게시글과 다른사람들의 게시글을 한곳에서 공유 할 수 있는 구역을 구현
  

| 설명 페이지 |
|---------|
|<img src="https://github.com/user-attachments/assets/fd76b379-9761-4cf2-ae66-23d829158417">|

[설명 페이지]
+ 스크롤을 내릴 시 DeepVelop에 대해서 설명을 해주는 세션들이 하나씩 나오게 구현
+ 오늘 하루 보지 않기를 누르면 로컬 스토리지에 쿠키를 만들고 쿠키가 존재하면 새로 고침해도 메인 화면이 먼저 보이게 구현


| 블로그 페이지 |
|---------|
| ![ezgif-5-8dbd88c002](https://github.com/user-attachments/assets/12b4ecfa-4040-4849-b701-32cdb13ceab7)|

[블로그 페이지]
+ Quill 라이브러리를 사용해서 글 작성 편집기를 구현
+ 작성된 게시글은 css를 사용해서 책 디자인으로 구현


| 글작성 - 유효성 검사 | 글작성 - 저장하기 |
|---------|---------|
|![유효성검사](https://github.com/user-attachments/assets/77f1f67f-764c-4ce0-8e3e-29d359910222)|![글 작성](https://github.com/user-attachments/assets/5bc5b412-0c71-48ff-85ca-2f907dac41fe)|

[글작성]
+ useFormik과 yup으로 유효성 검사에 제목, 부제목, 내용이 다 작성이 된 경우에만 저장이 가능



