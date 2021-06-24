import React, { useState } from "react";
import getTemplates from "../../services/getTemplates";



const Collapse = ({loadTemplate}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [data, setData] = useState([]);
  
  const onClickGetTemplates = async () => {
    if(!isCollapsed){
      setIsCollapsed(true)
      return
    }
  
    setData(await getTemplates())
    setIsCollapsed(false)
  }

  return (
    <div>
      <button
        className="collapse-button"
        onClick={() => onClickGetTemplates()}
      > Templates
      {isCollapsed ?  <img src="https://img.icons8.com/ios-glyphs/15/000000/chevron-down.png" alt="expand"/> : <img src="https://img.icons8.com/ios-glyphs/15/000000/chevron-up.png" alt="collapse"/> }
      </button>
      <div
        className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}
      >
        {!isCollapsed ? data.map(template =>(      
               <div key={template.id} onClick={() => loadTemplate(template)}>
                  <span className="template-list">{template.name} by {template.author}</span>
               </div>
      )) : <div></div>}
      </div>
    </div>
  );
};

export default Collapse;
