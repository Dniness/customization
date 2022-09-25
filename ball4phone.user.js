// eslint-disable-next-line
// ==UserScript==
// @name         ball4phone
// @namespace    https://dniness.github.io/
// @name:zh-CN   红裤衩の悬浮球
// @version      1.5
// @description  一个用于手机浏览器<自定义函数>的悬浮球
// @author       Dniness
// @match        *://*/*
// @icon         data:image/svg+xml,<svg width='64' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='32' cy='32' r='32' fill='darkslateblue'/></svg>
// @grant        none
// @run-at       document-body
// @license      MPL2.0
// ==/UserScript==
// jshint esversion: 6 

(function(pwd) {
    'use strict';
    Object.assign(pwd.$ball={
        // Your code here...
        Enter(e){alert(e)},
        a(){alert('a')},
        A(){alert('a+')},
        ' '(){alert('blank space')},
        // Your code here end.
        // OR,you could set Dniness.ball while document-start
    },(window.Dniness||'').ball);
    pwd.Run={
        _($){
            $ = this==$ ? '':
            (this.$ball[$]||isNaN)(this.active)||this;
            if($==this){
                this.style.display='none';
                this.textContent='';
            }else{
                this.style.display='block';
                this.textContent=''+$;
            }
            this.active = undefined;
        },
        on:e=>{pwd['on'+e[0]]=// eslint-disable-next-line
            eval('(function()'+(e.pop()+')').slice(3).replace(/\$/g,'this'))},
        $:e=>e[0].replace('$','-')+':'+e[1],
    }
    pwd.style=Object.entries({
        top:0,
        left:0,
        width:'100vw',
        height:'100vh',
        position:'fixed',
        font$weight:'bold',
        font$size:'4vw',
        white$space:'pre-line',
        word$wrap:'break-word',
        display:'none',
        border:'none',
        background:'darkslateblue',
        color:'white',
        caret$color:'transparent',
        position:'Fixed',
        z$index:9<<9,
        opacity:1/4,
    }).map(pwd.Run.$).join(';');


    //main ball
    pwd = document.body.appendChild(pwd).parentElement
        .insertBefore(document.createElement("input"),pwd);
    pwd.Run = pwd.nextElementSibling.Run;
    pwd.style=Object.entries({
        bottom:'5%',
        right:'2%',
        width:'6vh',
        height:'6vh',
        border$radius:'50%',
        border:'none',
        text$align:'center',
        background:'darkslateblue',
        color:'white',
        caret$color:'transparent',
        position:'Fixed',
        z$index:9<<9,
        opacity:1/4,
        font:'bold 3vh SANS-SERIF'
    }).map(pwd.Run.$).join(';');

    Object.entries({
        focus:$=>{$.type='password';$.value=~8},
        blur:$=>{$.type='text';$.value='Ctrl'},
        keyup:$=>{$.Run($)($);$.blur()},
        keydown:$=>{$.value=1-$.value},
        mousedown:$=>{clearTimeout($.rto);$.rto=0},
        touchend:$=>{$.rto=$.rto||setTimeout($.forward,500,$)},
        contextmenu:$=>{return false;}
    }).forEach(pwd.Run.on);
    pwd.nextElementSibling.Run=pwd.Run._;
    pwd.Run=c=>c[c.value[1]?'asyncRun':'jumpTop'];//jumpTop = key(back)
    pwd.jumpTop=a=>{(a=a.style).bottom=(8+a.bottom).slice(~3-~a.bottom[1])};
    pwd.asyncRun=e=>e.nextElementSibling.Run(e.value[2]||'Enter');
    pwd.forward=o=>{o.blur();history.forward();o.rto=0};
    pwd=!pwd.onblur();
})(window!=top?null:document.createElement("div"));
