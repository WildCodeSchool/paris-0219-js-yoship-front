const validatorAlpha = e => {
    const regex = /[a-zA-Z\-\ ]/gm
    const testhtml=  document.getElementById([e.target.name])
    const validatorCompare = !regex.test(e.target.value) 
    validatorCompare ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''
}

const validatorMail = e => {
const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    const testhtml=  document.getElementById([e.target.name])
    const validatorCompare = !regex.test(e.target.value)
    validatorCompare ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''
}

const validatorDate = e =>{
    const regex = /(\d{4})-(\d{2})-(\d{2})/

    const testhtml=  document.getElementById([e.target.name])
    const validatorCompare = !regex.test(e.target.value)
    validatorCompare ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''

}

const validatorNum = e => {
    const regex = /[0-9]{10}/gm

    const testhtml=  document.getElementById([e.target.name])
    const validatorCompare = !regex.test(e.target.value)
    validatorCompare ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''
}

const validatorEmpty = e => {

    const testhtml=  document.getElementById([e.target.name])
    e.target.value.length < 1 ? testhtml.innerHTML=`* Merci de remplir ce champ` : testhtml.innerHTML=''
}

export { validatorAlpha, validatorMail, validatorNum, validatorDate, validatorEmpty };