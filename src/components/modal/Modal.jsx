import React, {useRef} from "react";

const Modal = ({ visible, toggle, saveTemplate }) => {
  const name = useRef();
  const author = useRef();
  const onSave = () => {
    saveTemplate(name.current.value, author.current.value)
    name.current.value = '';
    author.current.value = '';
    toggle()
  }
  return (
    <div>
    { visible ?
      <div className="modal">
      <div className="modal-pop" role="dialog" aria-modal="true">
        <div onClick={toggle}>
        <img src="https://img.icons8.com/fluent-systems-filled/20/000000/x.png" alt="close"/>
        </div>
        <form>
            <label>Name</label>
            <input type="text" ref={name} />
            <label>Author</label>
            <input type="text" ref={author} />
            <input type="button" value="Save" onClick={() => onSave()}/>
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