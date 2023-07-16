import React, { useState } from 'react'
import "./style.scss"

const SwitchTab = ({data,onSwitchChange}) => {
    const [tabSelected,setTabSelected]=useState(0);
    const [left,setLeft]=useState(0);

    const activeTab=(tab,index)=>{//tab==day,month or week
        setLeft(index *100)//seting styleof moving bg
        setTimeout(() => {
            setTabSelected(index)
        }, 300);
        onSwitchChange(tab);
    }
  return (
    <div className="switchingTabs">
        <div className="tabItems">
            {data.map((tab,index)=>(
                <span key={index} className={`tabItem ${tabSelected===index?"active":""}`} onClick={()=>activeTab(tab,index)}>
                    {tab}
                </span>
            ))}
            <span className="movingBg"style={{left}}/>
        </div>
    </div>
  )
}

export default SwitchTab