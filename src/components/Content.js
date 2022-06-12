import React from 'react'
import parse,{ domToReact,attributesToProps  } from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark,prism,coldarkDark,vscDarkPlus,oneLight ,oneDark,materialDark,tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { docco ,atelierDuneDark, dracula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { html } from './Data.js';


export default function Content() {
 
    const options2 = {
      replace: domNode => {
        if (domNode.attribs && domNode.name === 'pre') {
          const props = attributesToProps(domNode.attribs);
          const props3 =attributesToProps(domNode.children);
          const {data} = attributesToProps(props3[0])
          return <SyntaxHighlighter language="php" style={tomorrow} {...props}>{data}</SyntaxHighlighter>;
        }
      }
    };
  return (
    <>
        <div className='w-full'>
            <div>
                <div className='w-full max-w-2xl mx-auto'>
                    <h1 className='w-full text-center text-white block py-5 text-3xl capitalize'>Form handling doesn't have to be painful. React Hook Form will help you write less code while achieving</h1>
                </div>
			        	<div className='w-full max-w-5xl mx-auto py-5 content'>
                  
                       {parse(html,options2)}
                      
                </div>	 			
            </div>
        </div>
    </>
  )
}
