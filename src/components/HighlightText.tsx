import classNames from 'classnames';
import React from 'react'

/* 
    Component source: https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
 */
export default function HighlightText({text='', highlight=''}) {
    if(!highlight){
        return <p>{text}</p>
    }

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    
    return <p> { parts.map((part, i) => 
        <span
            key={i} 
            className={classNames({
                'font-semibold':part.toLowerCase() === highlight.toLowerCase()
            })}
        >
            {part}
        </span>
    )
    } </p>;
}