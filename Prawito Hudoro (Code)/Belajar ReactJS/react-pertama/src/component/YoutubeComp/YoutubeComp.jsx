import React from 'react'
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://images.unsplash.com/photo-1547656807-9733c2b738c2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                <p className="time">{ props.time }</p>
            </div>
        <p className="tittle">{props.name}</p>
        <p className="desc">{props.desc}</p>
    </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    desc: 'Belum ditonton'
}

export default YoutubeComp;