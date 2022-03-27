import React, { useEffect, useState, useRef } from "react";
import Schema from "./Schema"
import { JSONEditor } from "@json-editor/json-editor"

export default function Editor() {
  const element = useRef(null);

  // Schema Info
  const updateSchema = Schema["Schema"];

  // Editor State

  useEffect(() => {
    const editor = new JSONEditor(element.current, {
      schema: updateSchema,
      theme: 'bootstrap4',
    });
  })
  

  return (
  <div>
    <div style={{ margin:"100px", width:"80vw"}}>
        <div ref={element}></div>
    </div>
  </div>

  );
}


