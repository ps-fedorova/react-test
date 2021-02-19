import React from 'react';
import s from './Iframe.module.css'

export const IframeInside = () => {
  const [message, setMessage] = React.useState('message');

  // React.useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener("message", displayMessage, false);
    } else {
      // IE8
      window.attachEvent("onmessage", displayMessage);
    }

    function displayMessage(evt) {
      setMessage(evt.data)
      // document.getElementById("received-message").innerHTML = evt.data;
    }
  // }, []);

  return (
    <div className={s.iframeInside}>
      <h2 id="received-message" style={{ color: "white" }}>
        {message}
      </h2>
    </div>)
}

export const Iframe = () => {
  const iframeRef = React.useRef();
  const formRef = React.useRef();
  const messageRef = React.useRef();

  const onload = () => {
    formRef.current.onsubmit = function () {
      iframeRef.current.contentWindow.postMessage(messageRef.current.value, "*");
    };
  };

  // React.useEffect(() => {
    window.onload = onload
  // }, [])

  return (
    <div className={s.iframe}>
      <iframe ref={iframeRef} title="iframe" src="/#/iframeInside" frameBorder="0" scrolling="no"/>
      <form ref={formRef} className={s.form} >
        <input ref={messageRef} className={s.input} type="text" />
        <button className={`${s.input} ${s.inputButton}`} type="submit">postMessage</button>
      </form>
    </div>
  )
}
