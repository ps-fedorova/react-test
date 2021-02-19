import React from 'react';
import s from './Iframe.module.css'

export const IframeInside = ({ message }) => {
  console.log(`IframeInside: ${message}`)
  return (
    <div className={s.iframeInside}>
      <h2 id="received-message" style={{ color: "white" }}>
        {message}
      </h2>
    </div>)
}

export const Iframe = ({ message, onload }) => {
  const iframeRef = React.useRef();

  const handleSubmit = () => iframeRef.current.contentWindow.postMessage(message, "*");

  const onChange = (evt) => {
    onload(evt.target.value);
    handleSubmit();
  };

  console.log(`Iframe: ${message}`)
  return (
    <div className={s.iframe}>
      <iframe ref={iframeRef} title="iframe" src="/#/iframeInside" frameBorder="0" scrolling="no"/>
      <form onSubmit={handleSubmit} className={s.form}>
        <input className={s.input} type="text" value={message} onChange={onChange}/>
      </form>
    </div>
  )
}
