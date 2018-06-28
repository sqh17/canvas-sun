// let sun = document.querySelector('#sun');
let sun = document.getElementById('sun');
sun.width = 600;
sun.height = 600;
sun.style.background = "#fff"
let context = sun.getContext('2d');
let centerX = sun.width / 2,   // Canvas中心点x轴坐标
    centerY = sun.height / 2,  // Canvas中心点y轴坐标
    path = 250;    // 半径

// 外圈
function outside() {
    context.save();
    context.beginPath(); //路径开始
    context.setLineDash([1, 2])   // 半圆弧线的形状
    context.strokeStyle = '#000'
    context.arc(centerX, centerY, path, 0, Math.PI, true);
    context.closePath()
    context.stroke(); //绘制
    context.restore();
}
// 太阳

function sunAnimate(a, b) {
    context.save();
    context.translate(centerX, centerY);  // 移动画布的x，y中心坐标
    context.beginPath(); //路径开始 
    context.lineWidth = 2
    //context.strokeStyle = '#000';
    context.shadowBlur=100;  // 添加阴影
    context.shadowColor="#fff";
    context.fillStyle = 'yellow'  
    let angle = a < 180 ? Math.PI * a / 180 : Math.PI;  // 
    let x = -path * Math.cos(angle);
    let y = -path * Math.sin(angle);
    context.arc(x, y, b, 0, 2 * Math.PI, true);
    context.closePath()
    context.fill();     
    context.restore();
}
//  阴影填充
function fillScreen(a) {
    context.save();
    context.translate(centerX, centerY);
    context.beginPath();
    context.fillStyle = '#ccc';
    let x = -path * Math.cos(a * Math.PI/180);  // 1度 = Math.PI/180
    context.arc(0, 0, path, Math.PI, Math.PI + a * Math.PI/180, false);
    context.lineTo(x, 0);
    context.stroke();
    context.fill();
    context.restore();
    

}
// 清除画布
function clear() {
    context.clearRect(0, 0, sun.width, sun.width)
}
// 运动
function animate() {
    let a = 0;
    let b = 10
    var timer = setInterval(function () {
        a += 1;
        if (a > 90) {
            b -= 1 / 3;
        } else {
            b += 1 / 3;
        }
        clear();
        fillScreen(a)
        outside()
        sunAnimate(a, b);
        if (a >= 180) {
            clearInterval(timer)
        }
    }, 1000/40);

}
animate()

