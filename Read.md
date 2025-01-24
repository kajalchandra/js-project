# how to proceed?
we will first crate a slider-container which is a div and in that container, we will add different div which will have a image and a caption

we need only one image at a time, so we will to dispalay so we will comment out the rest div

//css part
now in styling we will move the arrow in vertically center of the image
and we will move the caption horizontally center of the image

after styling we will hide the slide and will display it with the help of js
and we will create a function which show slides
to move prev or next we need a controller function which will either increament or decrement on clicking right and left arrow respectively

to sabse pehle hum log ek function k help se image ko display karenge . jo flag ka value hoga uske anusaar num pass hoga aur vo value diplay hoga
now flag k value ko increment aur decremt krna hai on click of arrows aur vaha function call karenge us present value k saath

fir saare slided ko function k angar hide karenge aur jo num ka val hai sirf usi slide ko display karenge

phir value ko reset karenge jo array k index se zayada ya kam ho jata hai
