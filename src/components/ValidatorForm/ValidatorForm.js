const validatorAlpha = e => {
    const regex = /[a-zA-Z\-\ ]/gm
    // if(!regex.test(e.target.value && e.target.value.length < 0)) {
    //     const testhtml=  document.getElementById('test') 
    //     testhtml.innerHTML=`Merci de remplir votre ${e.target.name}`
      
    // }else{
    //     const testhtml=  document.getElementById('test')
    //     testhtml.innerHTML=''
    // }
    const testhtml=  document.getElementById([e.target.name])
    const validatorCompare = !regex.test(e.target.value && e.target.value.length < 0)
    validatorCompare ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''
}

const validatorMail = e => {
const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    // if(!regex.test(e.target.value)) {
    //    alert(`Merci de remplir votre ${e.target.name}`);
    // }
    const testhtml=  document.getElementById([e.target.name])
    const validatorCompare = !regex.test(e.target.value && e.target.value.length < 0)
    validatorCompare ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''
}

const validatorDate = e =>{
    const regex = /(\d{4})-(\d{2})-(\d{2})/

    const testhtml=  document.getElementById([e.target.name])
    const validatorCompare = !regex.test(e.target.value && e.target.value.length < 0)
    validatorCompare ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''

}

const validatorNum = e => {
    const regex = /[0-9]{10}/gm
    // if(!regex.test(e.target.value)) {        
    //     alert(`Merci de remplir votre ${e.target.name}`);
    //  }
    const testhtml=  document.getElementById([e.target.name])
    const validatorCompare = !regex.test(e.target.value && e.target.value.length < 0)
    validatorCompare ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''
}

export { validatorAlpha, validatorMail, validatorNum, validatorDate };