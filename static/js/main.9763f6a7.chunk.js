(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{17:function(t,e,n){t.exports={carousel:"CarouselVerticalScrolling_carousel__160gG",formContainer:"CarouselVerticalScrolling_formContainer__2Yful",carousel__list:"CarouselVerticalScrolling_carousel__list__JtqtC",carousel__item:"CarouselVerticalScrolling_carousel__item__6mNdY"}},2:function(t,e,n){t.exports={carousel:"Carousel_carousel__33gtG",carousel__list:"Carousel_carousel__list__1Brmy",carousel__list_mobile:"Carousel_carousel__list_mobile__q1Zjh",carousel__item:"Carousel_carousel__item__3x9rg",carousel__itemImg:"Carousel_carousel__itemImg__38uTH",button:"Carousel_button__19FXV",button_left:"Carousel_button_left__3GnqF",button_right:"Carousel_button_right__34EFD"}},24:function(t,e,n){t.exports={containerTimer:"Timer_containerTimer__3ifJY"}},32:function(t,e,n){},33:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),o=n.n(s),c=n(23),r=n.n(c),l=n(16),i=(n(31),n(32),n(3)),u=(n(33),n(5)),m=n(2),h=n.n(m),d=["https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"],j=function(){var t=Object(s.useState)(0),e=Object(u.a)(t,2),n=e[0],o=e[1],c=Object(s.useState)(0),r=Object(u.a)(c,2),l=r[0],i=r[1],m=Object(s.useState)(0),j=Object(u.a)(m,2),p=j[0],b=j[1],f=Object(s.useState)(!1),_=Object(u.a)(f,2),v=_[0],O=_[1],x=Object(s.useState)(0),y=Object(u.a)(x,2),g=y[0],w=y[1],X=Object(s.useState)(!1),k=Object(u.a)(X,2),Y=k[0],T=k[1],z=Object(s.useRef)(0),N=function(){window.clearInterval(z.current)};Object(s.useEffect)((function(){return z.current=window.setInterval((function(){w((function(t){return t-1}))}),1e3),function(){return N()}}),[Y]),Object(s.useEffect)((function(){(g<=0||!Y)&&(N(),T(!1))}),[g,Y]);var M=function(){n<0&&o(n+100),b(0),T(!0),w(g+1)},S=function(){n>-100*(d.length-1)&&o(n-100),b(0),T(!0),w(g+1)},C=function(t){t.preventDefault(),"mousedown"===t.type?(i(t.nativeEvent.clientX),O(!0)):"touchstart"===t.type&&i(t.touches[0].clientX)},E=function(t){"mousemove"===t.type&&v?b(t.clientX-l):t.changedTouches&&"touchmove"===t.type&&b(t.changedTouches[0].clientX-l)},I=function(t){var e=0;("mouseup"===t.type&&v||"mouseout"===t.type&&v)&&(e=l-t.clientX,O(!1)),"touchend"===t.type&&(e=l-t.changedTouches[0].clientX),e>50?S():e<-50?M():b(0)};function D(t){"ArrowRight"===t.key&&S(),"ArrowLeft"===t.key&&M()}return Object(s.useEffect)((function(){return window.addEventListener("keydown",D),function(){window.removeEventListener("keydown",D)}})),Object(a.jsxs)("div",{className:h.a.carousel,children:[Object(a.jsx)("ul",{className:h.a.carousel__list,style:{transform:"translateX(calc(".concat(n,"vw + ").concat(p,"px))"),transition:Y?"all ".concat(1,"s ease 0s"):""},onMouseDown:C,onMouseMove:E,onMouseUp:I,onMouseOut:I,onTouchStart:C,onTouchMove:E,onTouchEnd:I,children:d.map((function(t,e){return Object(a.jsx)("li",{className:h.a.carousel__item,children:Object(a.jsx)("img",{className:h.a.carousel__itemImg,src:t,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})},e)}))}),Object(a.jsx)("div",{style:{marginTop:20},children:g}),Object(a.jsx)("button",{className:"".concat(h.a.button," ").concat(h.a.button_left),onClick:M,children:"\u2190"}),Object(a.jsx)("button",{className:"".concat(h.a.button," ").concat(h.a.button_right),onClick:S,children:"\u2192"})]})},p=n(11),b=n(12),f=n(14),_=n(13),v=n(20),O=n.n(v),x=100,y=["https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"],g=function(t){Object(f.a)(n,t);var e=Object(_.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).handleClickPrev=function(){a.state.x<0&&a.setState({x:a.state.x+x,offsetXY:0,timerTranslateXYGo:!0,timerTranslateXY:1})},a.handleClickNext=function(){a.state.x>-100*(y.length-1)&&a.setState({x:a.state.x-x,offsetXY:0,timerTranslateXYGo:!0,timerTranslateXY:1})},a.swipeKeyboard=function(t){"ArrowRight"===t.key&&a.handleClickNext(),"ArrowLeft"===t.key&&a.handleClickPrev()},a.handleStartMove=function(t){return function(e){e.preventDefault(),"mousedown"===e.type?t?a.setState({startXY:e.nativeEvent.clientY,mouseDown:!0}):a.setState({startXY:e.nativeEvent.clientX,mouseDown:!0}):"touchstart"===e.type&&(t?a.setState({startXY:e.touches[0].clientY}):a.setState({startXY:e.touches[0].clientX}))}},a.handleMove=function(t){return function(e){"mousemove"===e.type&&a.state.mouseDown?t?a.setState({offsetXY:e.clientY-a.state.startXY}):a.setState({offsetXY:e.clientX-a.state.startXY}):"touchmove"===e.type&&e.changedTouches&&(t?a.setState({offsetXY:e.changedTouches[0].clientY-a.state.startXY}):a.setState({offsetXY:e.changedTouches[0].clientX-a.state.startXY}))}},a.handleEndMove=function(t){return function(e){var n=0;"mouseup"===e.type&&a.state.mouseDown||"mouseout"===e.type&&a.state.mouseDown?(a.setState({mouseDown:!1}),n=t?a.state.startXY-e.clientY:a.state.startXY-e.clientX):"touchend"===e.type&&(n=t?a.state.startXY-e.changedTouches[0].clientY:a.state.startXY-e.changedTouches[0].clientX),a.handleMoveCommon(n)}},a.state={x:0,startXY:0,offsetXY:0,mouseDown:!1,timerTranslateXY:0,timerTranslateXYGo:!1},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.myInterval=setInterval((function(){t.state.timerTranslateXY>0?t.setState((function(t){return{timerTranslateXY:t.timerTranslateXY-1}})):t.setState({timerTranslateXYGo:!1})}),1e3),window.addEventListener("keydown",this.swipeKeyboard,!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval),window.removeEventListener("keydown",this.swipeKeyboard,!1)}},{key:"handleMoveCommon",value:function(t){t>50&&this.state.x>-100*(y.length-1)?this.handleClickNext():t<-50&&this.state.x<0?this.handleClickPrev():this.setState({offsetXY:0})}},{key:"render",value:function(){var t=this.state,e=t.x,n=t.offsetXY,s=t.timerTranslateXYGo,o=t.timerTranslateXY;return Object(a.jsxs)("div",{className:h.a.carousel,children:[Object(a.jsx)(O.a,{minWidth:600,children:Object(a.jsx)("ul",{className:h.a.carousel__list,style:{transform:"translateX(calc(".concat(e,"vw + ").concat(n,"px))"),transition:s?"all ".concat(1,"s ease 0s"):""},onMouseDown:this.handleStartMove(!1),onMouseMove:this.handleMove(!1),onMouseUp:this.handleEndMove(!1),onMouseOut:this.handleEndMove(!1),onTouchStart:this.handleStartMove(!1),onTouchMove:this.handleMove(!1),onTouchEnd:this.handleEndMove(!1),children:y.map((function(t,e){return Object(a.jsx)("li",{className:h.a.carousel__item,children:Object(a.jsx)("img",{className:h.a.carousel__itemImg,src:t,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})},e)}))})}),Object(a.jsx)(O.a,{maxWidth:600,children:Object(a.jsx)("ul",{className:"".concat(h.a.carousel__list," ").concat(h.a.carousel__list_mobile),style:{transform:"translateY(calc(".concat(e,"vh + ").concat(n,"px))"),transition:s?"all ".concat(1,"s ease 0s"):""},onMouseDown:this.handleStartMove(!0),onMouseMove:this.handleMove(!0),onMouseUp:this.handleEndMove(!0),onMouseOut:this.handleEndMove(!0),onTouchStart:this.handleStartMove(!0),onTouchMove:this.handleMove(!0),onTouchEnd:this.handleEndMove(!0),children:y.map((function(t,e){return Object(a.jsx)("li",{className:h.a.carousel__item,children:Object(a.jsx)("img",{className:h.a.carousel__itemImg,src:t,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})},e)}))})}),Object(a.jsx)("div",{style:{marginTop:10,marginLeft:10,position:"absolute",color:"white",backgroundColor:"grey"},children:o}),Object(a.jsx)("button",{className:"".concat(h.a.button," ").concat(h.a.button_left),onClick:this.handleClickPrev,children:"\u2190"}),Object(a.jsx)("button",{className:"".concat(h.a.button," ").concat(h.a.button_right),onClick:this.handleClickNext,children:"\u2192"})]})}}]),n}(o.a.Component),w=n(17),X=n.n(w),k=["\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430","\u041f\u0443\u0441\u0442\u044b\u0435 \u043f\u043e\u0435\u0437\u0434\u0430","\u041d\u0438 \u0431\u0435\u0440\u0435\u0433\u0430, \u043d\u0438 \u0434\u043d\u0430","\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430","\u0425\u043e\u043b\u043e\u0434\u043d\u0430\u044f \u0432\u043e\u0439\u043d\u0430","\u0418 \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u0432\u043e\u0434\u0430","\u041e\u043d \u043d\u0435 \u0441\u043e\u0448\u0435\u043b \u0441 \u0443\u043c\u0430","\u0422\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u043b\u0430","\u041f\u043e\u043b\u043a\u043e\u0432\u043d\u0438\u043a\u0443 \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u043f\u0438\u0448\u0435\u0442","\u041f\u043e\u043b\u043a\u043e\u0432\u043d\u0438\u043a\u0430 \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u0436\u0434\u0435\u0442","\u041d\u0430 \u043b\u0438\u043d\u0438\u0438 \u043e\u0433\u043d\u044f","\u041f\u0443\u0441\u0442\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430","\u0412 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0438\u043a\u043e\u0433\u0434\u0430","\u0422\u044b \u0440\u0430\u043d\u044c\u0448\u0435 \u043d\u0435 \u0431\u044b\u0432\u0430\u043b\u0430","\u0418 \u0440\u0432\u0443\u0442\u0441\u044f \u043f\u043e\u0435\u0437\u0434\u0430","\u041d\u0430 \u0442\u043e\u043d\u043a\u0438\u0435 \u0441\u043b\u043e\u0432\u0430","\u041e\u043d \u043d\u0435 \u0441\u043e\u0448\u0435\u043b \u0441 \u0443\u043c\u0430","\u0422\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u043b\u0430"],Y=function(t){Object(f.a)(n,t);var e=Object(_.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).handleClickNext=function(){a.state.x>-20*(k.length-1)&&a.setState({x:a.state.x-20,offsetXY:0,timerTranslateXYGo:!0,timerTranslateXY:1})},a.state={x:0,startXY:0,offsetXY:0,mouseDown:!1,timerTranslateXY:0,timerTranslateXYGo:!1},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.myInterval=setInterval((function(){t.state.timerTranslateXY>0?t.setState((function(t){return{timerTranslateXY:t.timerTranslateXY-1}})):t.setState({timerTranslateXYGo:!1})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){var t=this,e=this.state,n=e.x,s=e.offsetXY,o=e.timerTranslateXYGo,c=e.timerTranslateXY;return Object(a.jsxs)("div",{className:X.a.carousel,children:[Object(a.jsx)("ul",{className:X.a.carousel__list,style:{transform:"translateY(calc(".concat(n,"vh + ").concat(s,"px))"),transition:o?"all ".concat(1,"s ease 0s"):""},children:k.map((function(e,n){return Object(a.jsx)("li",{className:X.a.carousel__item,children:Object(a.jsx)("form",{className:X.a.formContainer,children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("p",{className:"alert alert-light",children:e}),Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-lg btn-block",onClick:t.handleClickNext,children:"\u0414\u0430\u043b\u044c\u0448\u0435"})]})})},n)}))}),Object(a.jsx)("div",{style:{marginTop:10,marginLeft:10,position:"absolute",color:"white",backgroundColor:"grey"},children:c})]})}}]),n}(o.a.Component),T=n(24),z=n.n(T),N=function(t){Object(f.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={seconds:3},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.myInterval=setInterval((function(){t.state.seconds>0&&t.setState((function(t){return{seconds:t.seconds-1}}))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){var t=this.state.seconds;return Object(a.jsx)("div",{className:z.a.containerTimer,children:Object(a.jsx)("h1",{children:t})})}}]),n}(o.a.Component),M=100/3,S=[{name:"\u0410\u0440\u0445\u044b\u0437",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"\u0418\u0432\u0430\u043d\u043e\u0432\u043e",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"\u041a\u0430\u043c\u0447\u0430\u0442\u043a\u0430",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"\u0425\u043e\u043b\u043c\u043e\u0433\u043e\u0440\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"\u0411\u0430\u0439\u043a\u0430\u043b",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],C=function(){var t=Object(s.useState)(0),e=Object(u.a)(t,2),n=e[0],o=e[1],c=Object(s.useState)(0),r=Object(u.a)(c,2),l=r[0],i=r[1],m=Object(s.useState)(0),d=Object(u.a)(m,2),j=d[0],p=d[1],b=Object(s.useState)(!1),f=Object(u.a)(b,2),_=f[0],v=f[1],O=Object(s.useState)(0),x=Object(u.a)(O,2),y=x[0],g=x[1],w=Object(s.useState)(!1),X=Object(u.a)(w,2),k=X[0],Y=X[1],T=Object(s.useRef)(0),z=function(){window.clearInterval(T.current)};Object(s.useEffect)((function(){return T.current=window.setInterval((function(){g((function(t){return t-1}))}),1e3),function(){return z()}}),[k]),Object(s.useEffect)((function(){(y<=0||!k)&&(z(),Y(!1))}),[y,k]);var N=function(){n<0&&o(n+M),p(0),Y(!0),g(y+1)},C=function(){n>-33.333333333333336*(S.length-1)&&o(n-M),p(0),Y(!0),g(y+1)},E=function(t){t.preventDefault(),"mousedown"===t.type?(i(t.nativeEvent.clientX),v(!0)):"touchstart"===t.type&&i(t.touches[0].clientX)},I=function(t){"mousemove"===t.type&&_?p(t.clientX-l):t.changedTouches&&"touchmove"===t.type&&p(t.changedTouches[0].clientX-l)},D=function(t){var e=0;("mouseup"===t.type&&_||"mouseout"===t.type&&_)&&(e=l-t.clientX,v(!1)),"touchend"===t.type&&(e=l-t.changedTouches[0].clientX),e>50?C():e<-50?N():p(0)};function G(t){"ArrowRight"===t.key&&C(),"ArrowLeft"===t.key&&N()}return Object(s.useEffect)((function(){return window.addEventListener("keydown",G),function(){window.removeEventListener("keydown",G)}})),Object(a.jsxs)("div",{className:h.a.carousel,children:[Object(a.jsx)("ul",{className:h.a.carousel__list,style:{transform:"translateX(calc(".concat(n,"vw + ").concat(j,"px))"),transition:k?"all ".concat(1,"s ease 0s"):""},onMouseDown:E,onMouseMove:I,onMouseUp:D,onMouseOut:D,onTouchStart:E,onTouchMove:I,onTouchEnd:D,children:S.map((function(t,e){return Object(a.jsx)("li",{className:h.a.carousel__item,children:Object(a.jsx)("img",{className:h.a.carousel__itemImg,src:t.link,alt:t.name})},e)}))}),Object(a.jsx)("button",{className:"".concat(h.a.button," ").concat(h.a.button_left),onClick:N,children:"\u2190"}),Object(a.jsx)("button",{className:"".concat(h.a.button," ").concat(h.a.button_right),onClick:C,children:"\u2192"})]})},E=n(9),I=n.n(E),D=function(){return Object(a.jsx)("form",{className:I.a.form,children:Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text"})})})},G=function(){return Object(a.jsx)("form",{className:I.a.form,children:Object(a.jsx)("ul",{className:I.a.form__ul,children:["\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430","\u041f\u0443\u0441\u0442\u044b\u0435 \u043f\u043e\u0435\u0437\u0434\u0430","\u041d\u0438 \u0431\u0435\u0440\u0435\u0433\u0430, \u043d\u0438 \u0434\u043d\u0430","\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430","\u0425\u043e\u043b\u043e\u0434\u043d\u0430\u044f \u0432\u043e\u0439\u043d\u0430","\u0418 \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u0432\u043e\u0434\u0430","\u041e\u043d \u043d\u0435 \u0441\u043e\u0448\u0435\u043b \u0441 \u0443\u043c\u0430","\u0422\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u043b\u0430"].map((function(t,e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("label",{className:I.a.form__label,htmlFor:e,children:t}),Object(a.jsx)("input",{className:I.a.form__input,id:e,type:"text"})]},e)}))})})};var L=function(){var t=[{component:Object(a.jsx)(j,{}),title:"\u043f\u0440\u043e\u0441\u0442\u0430\u044f \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u044c (hook)",path:"/#/carousel-hook",src:"/carousel-hook"},{component:Object(a.jsx)(g,{}),title:"\u043f\u0440\u043e\u0441\u0442\u0430\u044f \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u044c (class), \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u0430\u0439\u043f\u0430 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 600px ",path:"/#/carousel-class",src:"/carousel-class"},{component:Object(a.jsx)(Y,{}),title:"\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u0440\u043e\u043b\u043b (class)",path:"/#/carousel-vertical-scrolling",src:"/carousel-vertical-scrolling"},{component:Object(a.jsx)(C,{}),title:"\u0437\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u044c",path:"/#/carousel-infinity",src:"/carousel-infinity"},{component:Object(a.jsx)(N,{}),title:"\u0442\u0430\u0439\u043c\u0435\u0440 (class)",path:"/#/timer",src:"/timer"},{component:Object(a.jsx)(D,{}),title:"\u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430",path:"/#/one-input",src:"/one-input"},{component:Object(a.jsx)(G,{}),title:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0435\u0439 \u0432\u0432\u043e\u0434\u0430",path:"/#/multiple-input",src:"/multiple-input"}],e=Object(i.e)().pathname;return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(i.a,{exact:!0,path:"/",children:Object(a.jsx)("ul",{className:"app__list",children:t.map((function(t,e){return Object(a.jsxs)("li",{className:"app__item",children:[Object(a.jsx)("div",{className:"app__iframeWrap",children:Object(a.jsx)("iframe",{title:t.title,src:t.path,className:"app__iframe",scrolling:"no"})}),Object(a.jsx)(l.b,{exact:!0,className:"app__home-link",title:t.title,to:t.src,children:Object(a.jsx)("p",{className:"app__img-text",children:t.title})})]},e)}))})}),t.map((function(t,e){return Object(a.jsx)(i.a,{path:t.src,children:t.component},e)})),"/"!==e&&Object(a.jsx)(l.b,{exact:!0,to:"/",children:Object(a.jsx)("button",{className:"app__button-home-link",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(L,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports={form:"Input_form__12TRG",form__ul:"Input_form__ul__1u3Tq",form__li:"Input_form__li__32nW7",form__label:"Input_form__label__1guv0",form__input:"Input_form__input__1RDQJ"}}},[[42,1,2]]]);
//# sourceMappingURL=main.9763f6a7.chunk.js.map