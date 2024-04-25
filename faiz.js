
let emeyhaggi=2800;
let mebleg=39000;
let vaxt=12;
let faiz;
let ayligodenish;
if(mebleg>emeyhaggi*10){
    console.log('Size kredit vermey mumkun deyil')}
else{
if(vaxt>36){
    console.log('Bu serthtle size kredit dushmur');
}
else{
    if(ayligodenish>emeyhaggi*0.45){
        console.log('Size kredit vermey mumkun deyil');
    }
    else{
    
    if(0<vaxt && 12>vaxt){
     faiz = 13;
        ayligodenish=(mebleg+(mebleg*faiz)/100)/vaxt;
    }
    if(12<vaxt && 24>vaxt){
      faiz = 15;
        ayligodenish=(mebleg+(mebleg*faiz)/100)/vaxt;
         }
    if(24<vaxt && 36>vaxt){
      faiz = 17;
        ayligodenish=(mebleg+(mebleg*faiz)/100)/vaxt;
        } 
    
        console.log(mebleg + " AZN mebleg size " + faiz + " faizle " + vaxt + " ayliq " + ayligodenish + " odenis ile verilir.");
  }
}
} 
