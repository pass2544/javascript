function capToFront(sentence){
    let w1 = "";
    let w2 = "";
    let starr = sentence.split("");
    st=sentence.toUpperCase();
    let starr2 = st.split("");
    st.toUpperCase();
    for(i=0;i < starr.length;i++){
        if(starr[i] == starr2[i]){
            w1 += sentence[i];
        }
        else{
            w2 += sentence[i];
        }

    }
    return[w1+w2];
}
console.log(capToFront("hApPy"));
/*function capToFront(sp) {
    let upperRgx = /[A-Z]/g;
    let upperLetters = sp.match(upperRgx);
    for(let i=0; i < upperLetters.length;i++) {
        let indx = sp.indexOf(upperLetters[i]);
      sp = sp.substring(0,indx)+sp.substring(indx+1,sp.length);
    }
    sp = upperLetters.join("")+sp;

    return sp;
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))*/