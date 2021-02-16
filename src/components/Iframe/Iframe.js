import React from 'react';
import s from './Iframe.module.css'

export const IframeInside = () => {


  React.useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener("message", displayMessage, false);
    } else {
      // IE8
      window.attachEvent("onmessage", displayMessage);
    }

    function displayMessage(evt) {
      document.getElementById("received-message").innerHTML = evt.data;
    }
  }, []);

  return (
    <div className={s.iframeInside}>
      <h2 id="received-message" style={{ color: "white" }}>
        {'message'}
      </h2>
    </div>)
}

export const Iframe = () => {
  const iframeRef = React.useRef();

  const onload = () => {
    const form = document.getElementById("the-form");
    const myMessage = document.getElementById("my-message");

    form.onsubmit = function () {
      iframeRef.current.contentWindow.postMessage(myMessage.value, "*");
    };
  };

  React.useEffect(() => {
    window.onload = onload
  }, [])

  return (
    <div className={s.iframe}>
      <iframe ref={iframeRef} id="iframe" title="iframe" src="/#/iframeInside" frameBorder="0" scrolling="no"/>
      <form className={s.form} id="the-form">
        <input className={s.input} type="text" id="my-message"/>
        <input className={`${s.input} ${s.inputButton}`} type="submit" value="postMessage"/>
      </form>
    </div>
  )
}
