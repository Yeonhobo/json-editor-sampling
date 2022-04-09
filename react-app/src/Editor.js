import React, { useEffect, useRef } from "react";
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
    editor.on('change',() => {
      const value = editor.getValue();
      console.log(value)
    });
  })
  

  return (
  <div>
    <div style={{ width:"50vw"}}>
        <div ref={element}></div>
    </div>
  </div>

  );
}


