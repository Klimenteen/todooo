import React from "react";
import  classNames  from "classnames";
import Badge from "../Badge/";

import "./ListStyle.scss";

function List({ items, isRemovable, onClick }) {
  console.log(items, isRemovable);
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
