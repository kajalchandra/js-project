//we want to display the first div
let flag = 0
//array = [1,2,3,4,5] // onclick 6
//num > array k length se to
//num ko wapas num = 1
//array = [1,2,3,4,5] //onclick -1
//num agar 0 se chota ho jaaye to uska value wapas array k last index ko de denge
//num = 5


function controller(x){
    flag = flag + x
    console.log("value of flag",flag)
    slideShow(flag)
}
function slideShow(num){
    const slides = document.getElementsByClassName("slide")
    console.log(slides)
    //abhi saare slides display ho jaarahe hai when we click on prev or next arrows
    //so we have to first hide all the slides 
    for(let slide of slides){
      slide.style.display = "none"
    }
        if(num > slides.length-1){
            num = 0
            slides[num].style.display = "block"
            //aise click krte krte flag value jo 5 hai ab 7 ho jaayega aur phir ye isi condition ko satisfy krte rahega 
            //isse overcome hone k liye flag ka value ko vapas se 0 set kr dete , aisa krne pe ye condition true nahi hoga
            flag = 0
        }else if(num < 0){
            num = slides.length-1
             slides[num].style.display = "block"
             flag = slides.length-1
        }else{
              slides[num].style.display = "block"
        }
      
    
    
}
slideShow(flag)