// eslint-disable-next-line
// ==UserScript==
// @name         ball4phone
// @namespace    https://dniness.github.io/
// @name:zh-CN   红裤衩の悬浮球
// @version      1.9
// @description  一个用于手机浏览器<自定义函数>的悬浮球。💚点击:选择并运行自定义js函数。💙拖拽:forward前进。💜长按:选中页面dom并进行处理后回显
// @author       Dniness
// @match        *://*/*
// @icon         data:image/svg+xml,<svg width='64' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='32' cy='32' r='32' fill='darkslateblue'/></svg>
// @grant        none
// @run-at       document-body
// @license      MPL2.0
// @compatible   Yandex for Android , etc
// @incompatible All Browser without Touch
// ==/UserScript==
// jshint esversion: 6

(function(pwd) {
    'use strict';
    Object.assign(pwd.$ball={
        // Your code here...
        Enter(e){return e&&e.textContent.replace(/[\r\n]+/g,"\n")},
        a(){alert('a')},
        A(){alert('a+')},
        $(){test.error},
        ' '(){return `blank space

        // OR,you could set Dniness.ball while document-start
        `},
        //your code here end
        ready(){
        location.origin.startsWith('https://m.')&&
        (document.body.style.zoom=2.25)},
    },(window.Dniness||'').ball);
    (pwd.Run={
        _($){
            try{
            $=($||0).nextSibling==this?false:$==this?this:
            ($&&this.$ball[$]||isFinite)(this.active)||'';
            }catch(e){
             $=e.message;
            }
            this.active = undefined;
            this.textContent="\n";
            (this.previousSibling||this).style.display=
                this.style.display='block';
            if($===''){
                this.style.display='none';
            }else if($===false){
                this.style.opacity=1/11;
            }else if($===this){
                this.style.opacity=0.2;
                this.previousSibling.style.display='none';
            }else{
                this.style.opacity=1;
                this.innerText+=$;
            }
        },
        on:e=>{pwd['on'+e[0]]=// eslint-disable-next-line
            eval('(function()'+(e.pop()+')').slice(3).replace(/\$/g,'this'))},
        $:e=>e[0].replace('$','-')+':'+e[1],
    })._.call(pwd,'ready');
    pwd.onmouseup = function(e){
        if(this.style.opacity==0.2){
            this.Run(this);
            this.style.display='none';
            e=document.elementFromPoint(e.clientX,e.clientY);
            this.Run(this.previousSibling);
            this.active=e;
            this.previousSibling.focus();
        }else this.Run(null);
    };
    pwd.style=Object.entries({
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        position:'fixed',
        font$weight:'bold',
        font$size:'4vw',
        line$height:'4vw',
        white$space:'pre-wrap',
        word$wrap:'break-word',
        display:'none',
        overflow:'auto',
        border:'none',
        text$align:'left',
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
    pwd.Run = pwd.nextSibling.Run;
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
        z$index:(9<<9)+9,
        opacity:1/4,
        font:'bold 3vh SANS-SERIF'
    }).map(pwd.Run.$).join(';');

    Object.entries({
        focus:$=>{$.type='password';$.value=~8},
        blur:$=>{$.type='text';$.value='Ctrl'},
        keyup:$=>{$.Run($)($);$.blur()},
        keydown:$=>{$.value=1-$.value},
        mousedown:$=>{clearTimeout($.rto);$.asyncRun($.rto=0,$);},
        touchend:$=>{$.rto=$.rto||setTimeout($.forward,500,$)},
        contextmenu:$=>{$.asyncRun($,$.nextSibling);return false}
    }).forEach(pwd.Run.on);
    pwd.nextSibling.Run=pwd.Run._;
    pwd.Run=c=>c[c.value[1]?'asyncRun':'jumpTop'];//jumpTop = key(back)
    pwd.jumpTop=a=>{(a=a.style).bottom=(8+a.bottom).slice(~3-~a.bottom[1])};
    pwd.asyncRun=(e,x)=>(e||x).nextSibling.Run(x||e.value[2]||'Enter');
    pwd.forward=o=>{o.blur();history.forward();o.rto=0};
    pwd=!pwd.onblur();
})(window!=top?null:document.createElement("div"));
