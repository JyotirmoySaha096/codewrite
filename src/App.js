import './App.css';
import Editor from "./components/Editor.jsx";
import { xml } from '@codemirror/legacy-modes/mode/xml';
import { javascript } from '@codemirror/legacy-modes/mode/javascript';
import { css } from '@codemirror/legacy-modes/mode/css';
import { useState, useEffect } from 'react';
function App() {
  const [html,setHtml] = useState('');
  const [CSS,setCSS] = useState('');
  const [js,setJs] = useState('');
  const [srcDoc,setSrcDoc] = useState(``);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${CSS}</style>
    <script>${js}</script>
    <html>
  `)
    }, 350);
  return ()=>clearTimeout(timeout);
  },[html,CSS,js])

  
  return (
    <>
      <div className="pane top-pane">
        <Editor displayName={"HTML"} code={html} lang={xml} onChange={setHtml}/>
        <Editor displayName={"CSS"} code={CSS} lang={css} onChange={setCSS}/>
        <Editor displayName={"Javascript"} code={js} lang={javascript} onChange={setJs}/>
      </div>
      <div className="pane">
        <iframe 
        srcDoc={srcDoc}
          title='output' 
          frameBorder="0" 
          sandbox='allow-scripts'
          width='100%'
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
