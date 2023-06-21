let input        =  document.getElementById('InputValue')
let btnGenerate  =  document.getElementById('GeneretPassword')
let CopyPassword = document.getElementById('CopyPassword')
let ErrorMsg     = document.getElementById('alert-wrong')
let msgFirst     = document.getElementById('msg-first')
let MsgCopiedAlert = document.getElementById('Msg-copied-Alert')
CopyPassword.addEventListener('click', e => {
    let  msg = 'You need to generet a password if you whant to copy jus click on generate password'
    if(input.value == ''){
        ErrorMsg.style.display = 'block'
        ErrorMsg.textContent = msg;
        setTimeout(() =>  {ErrorMsg.style.display = 'none'}, 7000)

    }else {
        MsgCopiedAlert.style.display = 'block'
        setTimeout(() => {MsgCopiedAlert.style.display = 'none'},1000)
        input.select()
        document.execCommand('copy')

    }
})




function generatesPasswordBtn(){
    msgFirst.style.display = 'none'
    let chars = 'QWERTYU#$%^&*()_+IOPAS234567890DFGHJKLZXCVBNM1234567890!@#$%^&*()_+'
    var charsLength = 23;
    var password = ''
    for(var i = 0; i <= charsLength; i++){
        var random = chars[Math.floor(Math.random() *  charsLength)]
        password += random.toLowerCase()
        
    }
    document.getElementById('InputValue').value = password;

   
}






