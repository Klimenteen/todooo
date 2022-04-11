import React from "react";
import  classNames  from "classnames";
import Badge from "../Badge/";
import removeSVG from '../../assets/img/remove.svg'

import "./ListStyle.scss";

function List({ items, isRemovable, onClick, onRemove }) {
const removeList=(item)=>{
  if (window.confirm('А может не надо?((((')) {
    onRemove(item)
  }
}
  return (
    <div>
      <ul onClick={onClick} className="list">
        {items.map((item, index) => (
          <li
            key={index}
            className={classNames(item.className, { active: item.active })}
          >
            <i>
              {item.icon ? (
                item.icon
              ) : (
               <Badge color={item.color}/>
              )}
            </i>
            <span>{item.name} </span> 
            {isRemovable && <img className="list__remove-icon" src={removeSVG} alt="" onClick={()=> removeList(item)}/>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
