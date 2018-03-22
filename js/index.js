 // let sun = document.querySelector('#sun');
 let sun = document.getElementById('sun');
 sun.width = 600;
 sun.height = 600;
 sun.style.background="#ccc"
 let context = sun.getContext('2d');
 let centerX = sun.width/2,   //Canvas中心点x轴坐标
 centerY = sun.height/2,
 path = 250;

 // 外圈
 function outside(){
     context.save();
     context.beginPath(); //路径开始
     context.setLineDash([1,2])
     context.strokeStyle = '#f0f0f0'
     context.arc(centerX,centerY,path,0,Math.PI,true);
     context.closePath()
     context.stroke(); //绘制
     context.restore();
 }
 // 太阳
 function sunAnimate(a,b){
     context.save();           
     context.translate( centerX, centerY )            
     context.beginPath(); //路径开始           
     context.fillStyle = 'yellow'
     let angle = a < 180 ? Math.PI * a/180 : Math.PI;
     let x = -path * Math.cos(angle);
     let y = -path * Math.sin(angle);
     let sunPath = b
     context.arc(x, y, sunPath, 0, 2 * Math.PI, true);           
     context.closePath()   
     context.fill();        
     // context.stroke(); //绘制            
     context.restore();
 }
 // 清除画布
 function clear() {
     context.clearRect(0, 0, sun.width,sun.width)  
 }
 // 运动
 function animate() {                 
     let a = 0;
     let b = 10
     var timer = setInterval(function () {
         a += 1;
         if(a > 90){
             b -= 1/3;
         }else{
             b += 1/3;
         }
         clear();
         outside()
         sunAnimate(a,b);
         if( a >= 180 ){
             clearInterval(timer)
         }
     }, 1000 / 60);
             
 }       
 animate()