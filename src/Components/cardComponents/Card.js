import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <>
        <div className="ticket-card-container">
            <div className="ticket-card-id-wrapper">
                <div className="ticket-card-id">{props.cardDetails.id}</div>
                <div className="ticket-card-profile">
                    <div className="ticket-card-profile-initial">
                        {props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}
                    </div>
                    <div className={props.cardDetails.userObj.available ? "ticket-card-profile-available ticket-card-profile-available-true" : "ticket-card-profile-available"}></div>
                </div>
            </div>
            <div className="ticket-card-title">
                {props.cardDetails.title}
            </div>
            <div className="ticket-card-tag">
                {
                    {
                        0: <div className="ticket-card-tag-icon"><img src='/assets/No-priority.svg' alt='priority'/></div>,
                        1: <div className="ticket-card-tag-icon">
                            <img src='/assets/Img - Low Priority.svg' alt='priority'/>
                        </div>,
                        2: <div className="ticket-card-tag-icon"><img src='/assets/Img - Medium Priority.svg' alt='priority'/></div>,
                        3: <div className="ticket-card-tag-icon"><img src='/assets/Img - High Priority.svg' alt='priority'/></div>,
                        4: <div className="ticket-card-tag-icon"><img src='/assets/SVG - Urgent Priority colour.svg' alt='priority'/></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="ticket-card-tag-box">
                                <div className="ticket-card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
