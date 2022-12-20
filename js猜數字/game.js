 //1 產生1-100的隨機整數：Math.Random 0~1 js 隨機產出為小數(所以要乘上100)
//封裝：隱藏細節，提取重點（語意)
//2 輸入數字
//3 數字顯示
//4把字串轉成數字
/*5 判斷使用者輸入的數字是否符合答案
按下按紐後
符合：遊戲結束
不符合：替換（輸入區間）
空白、數字不在區間、前面為0
min max
輸入數字小於答案：替換min
輸入數字大於答案：替換max
*/
// const inputdom =document.getElementById('password')
// const btn = document.querySelector('.enter');
// const p =document.querySelector('p')



// const initmin =1;
// const initmax =100;

let min = 1;
let max = 100;

let answer = GetAnswerNumber();

const p =document.querySelector('span')


// 數字按鈕顯示在input上
const input =document.getElementById('password');
const numbtns =document.querySelectorAll('.number');
numbtns.forEach(el => {
    el.addEventListener('click', function(e){
    console.log(e.target.innerText);
    input.value += e.target.innerText;
    })
})


// reset 
let reset =document.querySelector('.reset')
reset.addEventListener('click',function(){
    init();
})


// enter
let guessNumber = document.querySelector('.enter')
guessNumber.addEventListener('click',function(){
//取得輸入值
    let inputvalue = input.value
    guessNumber = parseInt(inputvalue,10);
if (isNaN(guessNumber)){
    alert('Error!! Please input again');
    input.value =' ';
    }
//判斷是否為答案
if(guessNumber===answer){
    alert('Congratulation!!');
    
}
else{
    //是否超過範圍
    if(guessNumber < min || guessNumber > max){
        alert('Out of range!!Please try again!');
        input.value=' ';
    }
    else{
        //替換最小值
        if(guessNumber < answer){
            min=guessNumber;

        }
        else if(guessNumber >answer){
            max=guessNumber;
        }
        p.innerText= `${min} ~${max}`;
        input.value=' '
    }
    }
 })

function GetAnswerNumber(){
    return Math.floor(Math.random()*100+1);
}

function init(){
    answer=GetAnswerNumber();
    input.value=' ';
    min=1;
    max=100;
    p.innerText=`${min} ~${max}`;
}





