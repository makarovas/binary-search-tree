import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function ExibeOrdem({ array }) {
  console.log("ExibeOrdem");
  return (
    <div className="numbers-container">
      <ul className="numbers-list">
        <TransitionGroup component={null}>
          {array.map((num, index) => (
            <CSSTransition key={index} timeout={500} classNames="fade">
              <li className="numbers-list-item" key={index}>
                {num}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
}
