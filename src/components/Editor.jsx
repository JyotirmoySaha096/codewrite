import React from 'react';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { material } from '@uiw/codemirror-theme-material';
import { StreamLanguage } from '@codemirror/language';
import {BsArrowsAngleExpand,BsArrowsAngleContract} from 'react-icons/bs'
// import { xml } from '@codemirror/legacy-modes/mode/xml';
// import { javascript } from '@codemirror/legacy-modes/mode/javascript';
// import { css } from '@codemirror/legacy-modes/mode/css';
// import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';

// const goLang = `package main
// import "fmt"

// func main() {
//   fmt.Println("Hello, 世界")
// }`;

const Editor = (props) => {
    const {displayName,code,lang,onChange}=props;
    const handleChange = (value)=>{
      onChange(value);
      // console.log(value,"\n",x,"\n",y);
    }
    const [open,setOpen]=useState(true);

  return (
    <div className={`editor-container ${open ? '' : "collapsed"}`}>
        <div className="editor-title">
            {displayName}
            <button onClick={()=>setOpen(prev => !prev)}>
            {!open?<BsArrowsAngleExpand />:<BsArrowsAngleContract />}
            </button>
        </div>
            <CodeMirror 
              height='100%'
              onChange={handleChange}
                className='code-mirror-wrapper'
                value={code}
                theme={material}
                extensions={
                  [StreamLanguage.define(lang)]}
            />
        
    </div>
  )
}

export default Editor;