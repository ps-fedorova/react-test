import React, { useState } from 'react';
import s from './Iframe.module.css'

export const IframeInside = ({ message }) => {
  return (
    <div className={s.iframeInside}>
      <h2 id="received-message" style={{ color: "white" }}>{message}</h2>
    </div>
  )
}

export const Iframe = ({ message, handleChangeMessage }) => {
  const [firstLoad, setFirstLoad] = useState(true)

  const iframeRef = React.useRef();
  const handleSubmit = () => {
    const time = firstLoad ? 1000 : 0
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(message, "*")
      setFirstLoad(false)
    }, time)
  }

  const onChange = (evt) => {
    handleChangeMessage(evt.target.value);
  };

  React.useEffect(() => {
    handleSubmit();
  }, [handleSubmit, message])


  return (
    <div className={s.iframe}>
      <iframe ref={iframeRef} title="iframe" src="/#/iframeInside" frameBorder="0" scrolling="no"/>
      <div className={s.form}>
        <input className={s.input} type="text" value={message} onChange={onChange}/>
      </div>
    </div>
  )
}
