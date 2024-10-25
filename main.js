const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const logo = $('#logo');
const logo_icon = $('i');
const nav_tabs = $$('.nav-tab')
const sections = $$('.section-container')
const wrapper = $('.wrapper')
const wrapper2 = $('.wrapper.active')
const loginBtn = $('#login-button')
const closeBtn = $('#close-btn')
const closeBtn2 = $('#close-btn2')
const closeBtn3 = $('#close-btn3')
const a_login = $('#a-login')
const a_register = $('#a-register')
const form_box1 = $('.form-box')
const form_box2 = $('.form-box2')
const form_box3 = $('.form-box3')
const open_btn = $('#open')
const blur_screen = $('.blur-screen')
const ex_tabs = $$('.ex-tab')
const title = $('#title')
const type_container = $('.type-container')
const submitBtn = $('#submit-code')
const submitAns = $('.submit-answer')
const textArea = $('textarea')
const closeAnsBtn = $('#close-ans')
const a_forgot = $('#a-forgot')
const a_backLogin = $('#backLogin')
let cnt = 0
const input = $$('input')

const clearValue = function()
{
    input.forEach(inp =>
    {
        inp.value = ''
    }
    )
}



closeAnsBtn.addEventListener('click', ()=>
{
    submitAns.classList.remove('active')
    type_container.classList.add('active')
})


submitBtn.addEventListener('click', ()=>
{
    type_container.classList.remove('active')
    submitAns.classList.add('active')
})



ex_tabs.forEach((tab)=>
{
    tab.addEventListener('click', function()
    {
        if($('.ex-tab.active'))
        {
            $('.ex-tab.active').classList.remove('active')
            type_container.classList.remove('active')
            submitAns.classList.remove('active')
            textArea.value = ''
        }
        this.classList.add('active')
        title.innerText = this.innerText
        type_container.classList.add('active')

    })
})



open_btn.addEventListener('click', ()=>
{
    blur_screen.classList.add('active')
})

blur_screen.addEventListener('click',()=>
{
    blur_screen.classList.remove('active')
})

a_register.addEventListener('click', (e)=>
{
    e.preventDefault()
    form_box1.style.display = 'none'
    form_box2.style.display = 'flex'
    form_box3.style.display = 'none'
    wrapper.style.height = "500px"
    clearValue()
   
})

a_login.addEventListener('click', (e)=>
{
    e.preventDefault();
    form_box1.style.display = 'flex'
    form_box2.style.display = 'none'
    form_box3.style.display = 'none'
    wrapper.style.height = "400px"
    clearValue()
})
a_forgot.addEventListener('click', (e)=>
{
    e.preventDefault();
    form_box1.style.display = 'none'
    form_box2.style.display = 'none'
    form_box3.style.display = 'flex'
    wrapper.style.height = "300px"
    clearValue()
})

a_backLogin.addEventListener('click', (e)=>
    {
        e.preventDefault();
        form_box1.style.display = 'flex'
        form_box2.style.display = 'none'
        form_box3.style.display = 'none'
        wrapper.style.height = "400px"
        clearValue()
    })

closeBtn.addEventListener('click', ()=>
{
    wrapper.classList.add('hide');
    cnt=0
    clearValue()
})
closeBtn2.addEventListener('click', ()=>
{
    wrapper.classList.add('hide');
    cnt=0
    clearValue()
})
closeBtn3.addEventListener('click', ()=>
{
    wrapper.classList.add('hide');
    cnt=0
    clearValue()
})


loginBtn.addEventListener('click', (e)=>
{
    e.preventDefault()
   if(cnt===0)
   {
        wrapper.classList.remove('hide')
        wrapper.classList.remove('active')
        wrapper.classList.add('active')
        form_box1.style.display = 'flex'
        form_box2.style.display = 'none'
        form_box3.style.display = 'none'
        wrapper.style.height = "400px"
   }
   cnt++;
   if(cnt===2)
   {
        wrapper.classList.add('hide')
        cnt=0
   }
    
})


logo.addEventListener('click', ()=> window.location.reload())
logo_icon.addEventListener('click', ()=> window.location.reload())

nav_tabs.forEach((tab, index)=>
{
    const section = sections[index]
    tab.addEventListener('click', function()
    {
        $('.section-container.active').classList.remove('active');
        $('.nav-tab.active').classList.remove('active')

        section.classList.add('active');
        this.classList.add('active');
    })
})









