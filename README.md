create-react-app .
npm install styled-components // css in js
npm install react-router-dom // 라우터



배포

github에 npm run build 한 결과 업로드   
및 ec2에서 다운   
ec2 생성 시 ppk를 생성하도록 함(ssh는 ppk로 함)   
ec2는 https://victorydntmd.tistory.com/62 를 참고,    
login 아이디는 블로그에 나온 ec2-user가 아니고, ec2 인스턴스 - 연결 들어가면 '사용자 이름' 에 나옴   
putty 에서 위 블로그 참조해 ec2 열면 됨   
ec2에 tmux 다운    
sudo apt-get install tmux (실행은 tmux)   
   
ubuntu16.04에 npm 다운 방법   
(참고 : https://itstory.tk/entry/Ubuntu-1604-nodejs-%EC%99%80-npm-%EC%84%A4%EC%B9%98)   
1. sudo apt-get update    
2. sudo apt-get install nodejs   
3. sudo apt-get install npm   
// 아래는 nodejs 여러 버전 다운 및 사용을 위함   
4. sudo apt-get update    
5. sudo apt-get install build-essential libssl-dev   
6. curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh    
7. bash install_nvm.sh    
8. source ~/.profile   
9. nvm install 14.16.0   
10. nvm use 14.16.0   
   
// react FE 실행   
11. npm i serve   
12. nohup serve -s build -p 80 & => 80번 포트 permission denied 됨   
   
13. 8080포트 이용 nohup serve -s build -p 8080 &   
14. 8080포트를 80포트 처럼 숨기는 것은 직접은 못 하고, 80포트를 8080포트로 리다이렉션 해야 함   
https://goddaehee.tistory.com/193(ec2에서 root사용할 수 있도록 하기)와   
(sudo passwd root   
root 모드는 su 로,   
root 에서 일반사용자 모드로는 su - 사용자명(ex)ubuntu)로   
)   
https://askubuntu.com/questions/444729/redirect-port-80-to-8080-and-make-it-work-on-local-machine 를 참조(갓텍킹버플로우....)   
=>    
iptables -A INPUT -i eth0 -p tcp --dport 80 -j ACCEPT   
iptables -A INPUT -i eth0 -p tcp --dport 8080 -j ACCEPT   
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080   
   
검색어 노출   
(킹갓 아임넷)   
구글 => https://imweb.me/faq?mode=view&category=29&category2=35&idx=15573   
네이버 => https://imweb.me/faq?mode=view&category=29&category2=35&idx=7607   
다음 => https://register.search.daum.net/index.daum   