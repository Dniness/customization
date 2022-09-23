// ==UserScript==
// @name         ball4phone
// @namespace    https://dniness.github.io/
// @name:zh-CN   红裤衩の悬浮球
// @version      0.8
// @description  一个用于手机浏览器<自定义函数>的悬浮球
// @author       Dniness
// @match        *://*/*
// @icon         data:image/svg+xml;charset=utf-8,<svg width='64' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='32' cy='32' r='32' fill='darkslateblue'/></svg>
// @grant        none
// @run-at       document-body
// @license      MPL2.0
// ==/UserScript==
/* jshint esversion: 6 */ 
 
(function(pwd) {
    'use strict';
    setTimeout($=>{pwd=Object.assign($,(window.Dniness||'').ball)},
    0,{
        // Your code here...
        Enter(e){alert(e)},
        a(){alert('a')},
        A(){alert('a+')},
        ' '(){alert('blank space')},
        // Your code here end
    });
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
    }).map(e=>e[0].replace('$','-')+':'+e[1]).join(';');
    Object.entries({
        focus:"this.type='password',this.value=~8",
        blur:"this.type='text',this.value='Ctrl'",
        keyup:"this.Run(this)(this),this.blur()",
        keydown:"this.value=1-this.value",
    }).forEach(e=>pwd.setAttribute('on'+e[0],e[1]));
    window != top || document.body.appendChild(pwd).onblur();
    pwd.Run=c=>c[c.value[1]?'asyncRun':'jumpTop'];//jumpTop = key(back)
    pwd.jumpTop=a=>{(a=a.style).bottom=(8+a.bottom).slice(~3-~a.bottom[1])};
    pwd.asyncRun=e=>pwd[e.value[2]||'Enter'](document.body);
})(document.createElement("input"));
