(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),o=a(4),i=a.n(o),r=(a(12),a(2)),l=a.p+"static/media/logo.a307e1c4.svg";var p=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{src:l,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})},u=a(5),d=a(6),j=new(function(){function e(t){var a=t.baseUrl,n=t.token;Object(u.a)(this,e),this._baseUrl=a,this._token=n}return Object(d.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._handleOriginalResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._handleOriginalResponse)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"changeUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",token:"05a9c3f8-8fc7-415a-8994-abcd561520ba"});var h=function(e){return Object(n.jsxs)("article",{className:"card",children:[Object(n.jsx)("img",{src:e.card.link,alt:e.card.name,className:"card__photo",onClick:function(){e.onCardClick(e.card)}}),Object(n.jsx)("button",{className:"card__delete",type:"button"}),Object(n.jsxs)("div",{className:"card__group",children:[Object(n.jsx)("h2",{className:"card__place",children:e.card.name}),Object(n.jsxs)("div",{className:"card__likes",children:[Object(n.jsx)("button",{className:"card__like",type:"button"}),Object(n.jsx)("p",{className:"card__likes-counter",children:e.card.likes.length})]})]})]},e.card_id)};var m=function(e){var t=s.a.useState(""),a=Object(r.a)(t,2),c=a[0],o=a[1],i=s.a.useState(""),l=Object(r.a)(i,2),p=l[0],u=l[1],d=s.a.useState(""),m=Object(r.a)(d,2),_=m[0],b=m[1],O=s.a.useState([]),f=Object(r.a)(O,2),x=f[0],k=f[1];return s.a.useEffect((function(){j.getUserData().then((function(e){o(e.name),u(e.about),b(e.avatar)})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){j.getInitialCards().then((function(e){k(e)})).catch((function(e){console.log(e)}))}),[]),Object(n.jsxs)("main",{className:"content",children:[Object(n.jsxs)("section",{className:"profile page__profile",children:[Object(n.jsx)("img",{src:_,alt:c,className:"profile__avatar",onClick:e.onEditAvatar}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h1",{className:"profile__name",children:c}),Object(n.jsx)("button",{className:"profile__edit-button","aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c",onClick:e.onEditProfile}),Object(n.jsx)("p",{className:"profile__profession",children:p})]}),Object(n.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(n.jsx)("section",{className:"cards page__cards",children:x.map((function(t){return Object(n.jsx)(h,{card:t,onCardClick:e.onCardClick},t._id)}))})]})};var _=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},b=a.p+"static/media/close-icon.118074ba.svg";var O=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("button",{className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",children:Object(n.jsx)("img",{src:b,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__icon",onClick:e.onClose})}),Object(n.jsxs)("form",{className:"popup__form",name:"".concat(e.name),noValidate:!0,children:[Object(n.jsx)("h3",{className:"popup__title",children:"".concat(e.title)}),e.children]})]})})})};var f=function(e){return Object(n.jsx)("section",{className:"popup popup-photo ".concat(e.isOpen?"popup_opened":""),children:Object(n.jsxs)("div",{className:"popup-photo__container",children:[Object(n.jsx)("button",{className:"popup-photo__close popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",children:Object(n.jsx)("img",{src:b,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__icon",onClick:e.onClose})}),Object(n.jsx)("img",{src:e.card?e.card.link:"#",alt:e.card.name,className:"popup-photo__img"}),Object(n.jsx)("p",{className:"popup-photo__caption",children:e.card.name})]})})};var x=function(){var e=s.a.useState(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],o=s.a.useState(!1),i=Object(r.a)(o,2),l=i[0],u=i[1],d=s.a.useState(!1),j=Object(r.a)(d,2),h=j[0],b=j[1],x=s.a.useState(!1),k=Object(r.a)(x,2),N=k[0],g=k[1],v=s.a.useState({}),C=Object(r.a)(v,2),y=C[0],P=C[1];function U(){c(!1),u(!1),b(!1),P({}),g(!1)}return Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)(p,{}),Object(n.jsx)(m,{onEditAvatar:function(){c(!0)},onEditProfile:function(){u(!0)},onAddPlace:function(){b(!0)},onCardClick:function(e){P(e),g(!0)}}),Object(n.jsx)(_,{}),Object(n.jsxs)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:l,onClose:U,children:[Object(n.jsx)("input",{id:"name-input",className:"popup__input popup__input_name",type:"text",name:"edit-name",minLength:"2",maxLength:"40",placeholder:"\u0418\u043c\u044f",required:!0}),Object(n.jsx)("span",{id:"name-input-error",className:"error"}),Object(n.jsx)("input",{id:"profession-input",type:"text",name:"edit-profession",className:"popup__input popup__input_profession",minLength:"2",maxLength:"200",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",required:!0}),Object(n.jsx)("span",{id:"profession-input-error",className:"error"}),Object(n.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(n.jsxs)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",isOpen:h,onClose:U,children:[Object(n.jsx)("input",{id:"place-input",minLength:"2",maxLength:"30",type:"text",name:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_place",required:!0}),Object(n.jsx)("span",{id:"place-input-error",className:"error"}),Object(n.jsx)("input",{id:"link-input",type:"url",name:"img-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_link",required:!0}),Object(n.jsx)("span",{id:"link-input-error",className:"error"}),Object(n.jsx)("button",{type:"submit",className:"popup__submit popup__submit_add",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]}),Object(n.jsxs)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"change-avatar",isOpen:a,onClose:U,children:[Object(n.jsx)("input",{id:"link-avatar",type:"url",name:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input popup__input_link",required:!0}),Object(n.jsx)("span",{id:"link-avatar-error",className:"error"}),Object(n.jsx)("button",{type:"submit",className:"popup__submit popup__submit_avatar",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(n.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-place",isOpen:!1,onClose:U,children:Object(n.jsx)("button",{type:"submit",className:"popup__submit popup__submit_delete",children:"\u0414\u0430"})}),Object(n.jsx)(f,{card:y,isOpen:N,onClose:U})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),k()}},[[13,1,2]]]);
//# sourceMappingURL=main.f90901e7.chunk.js.map