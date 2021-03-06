import React, {useRef, useState} from "react";

const Modal = ({ visible, toggle, saveTemplate }) => {
  const name = useRef();
  const author = useRef();
  const [showError, setShowError] = useState(false)
  
  const onSave = () => {

    if(name.current.value === '' || author.current.value === ''){
      setShowError(true)
      return
    }
    saveTemplate(name.current.value, author.current.value)
    name.current.value = '';
    author.current.value = '';
    toggle()
  }
  const validate = () => {
    if(name.current.value !== '' && author.current.value !== '' && showError === true){
      setShowError(false)
    }
  }

  return (
    <div>
    { visible ?
      <div className="modal">
      <div className="modal-pop" role="dialog" aria-modal="true">
        <div onClick={toggle}>
        <img src="https://img.icons8.com/fluent-systems-filled/20/000000/x.png" alt="close" id="close"/>
        </div>
        <form>
            <label>Name</label>
            <input type="text" ref={name} onChange={()=>validate()}/>
            <label>Author</label>
            <input type="text" ref={author} onChange={()=>validate()}/>
            {showError ? <div>Name and author are required</div> : <div></div>}
            <input type="button" value="Save" onClick={() => onSave()}className="custom" />
        </form>
      </div>  
      <div className="modal-overlay"></div>    
    </div> : <div></div>
  }</div>
  )
}
//const Modal = ({ visible, toggle, saveTemplate }) => visible ? ReactDOM.createPortal(
//  <div className="modal">
//    <div className="modal-pop" role="dialog" aria-modal="true">
//      <div onClick={toggle}>
//      <img src="https://img.icons8.com/fluent-systems-filled/20/000000/x.png" alt="close"/>
//      </div>
//      <form>
//          <label>Name</label>
//          <input type="text"/>
//          <label>Author</label>
//          <input type="text"/>
//          <input type="submit" value="Save" onClick={saveTemplate()}/>
//      </form>
//    </div>  
//    <div className="modal-overlay"></div>    
//  </div>, document.body
//) : null;

export default Modal;