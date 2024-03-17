const img=document.getElementById("img")
let selectors = document.querySelectorAll(".select");

selectors.forEach(function (selector) {
    selector.addEventListener("click", function () {






        let store=selector.innerHTML;
        console.log(store);

        if(store == "Default"){

img.style.filter="none";

        }


        else if(store == "Blur"){

            img.style.filter="blur(2px)";




            }

   

            else if(store == "Grayscale"){

                img.style.filter="grayscale(100%)";
    
    
    
    
                }

                else if(store == "Brightness"){

                    img.style.filter="brightness(1.75)";


                }
                else if(store == "Contrast"){

                    img.style.filter="contrast(1.50)";


                }

                else if(store == "Saturation"){

                    img.style.filter="saturate(2)";


                }

                else if(store == "sepia"){

                    img.style.filter="sepia(100%)";


                }
                
                else if(store == "Hue-Rotate"){

                    img.style.filter="hue-rotate(90deg)";


                }
   
                else if(store == "Invert"){

                    img.style.filter="invert(100%)";


                }

                else if(store == "Drop-shadow"){

                    img.style.filter=" drop-shadow(8px 8px 10px gray)";


                }
   
   
       
    });
});
