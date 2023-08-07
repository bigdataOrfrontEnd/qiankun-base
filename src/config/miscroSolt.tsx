import React, { useRef } from "react";

export function MiscroSolt() {
  const miscroList = [{ id: "microSlot" }, { id: "microSlot1" }];
  
  return (
    <div className="solt">
      {/* <div id="microSlot"></div>
      <div id="microSlot1"></div>
      <div id="microSlot2"></div> */}
      {miscroList.map((item) => {
        return <div key={item.id} id={item.id}></div>;
      })}
    </div>
    // <div>
    //   {miscroList.map((item) => {
    //     return (
    //       <div
    //         key={item.id}
    //         ref={(r) => {
    //           refObje.current[item.id] = r;
    //         }}
    //       ></div>
    //     );
    //   })}
    // </div>
  );
}
