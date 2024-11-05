import React from "react";

import "./List.css";
import Card from "../cardComponents/Card";

let cardCount = 0;

export default function List(props) {
  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            {
              {
                status: (
                  <>
                    {
                      {
                        Backlog: (
                          <div className="list-icon">
                            <img src="/assets/Backlog.svg" alt="type" />
                          </div>
                        ),
                        Todo: (
                          <div className="list-icon">
                            <img src="/assets/To-do.svg" alt="type" />
                          </div>
                        ),
                        "In progress": (
                          <div className="list-icon">
                            <img src="/assets/in-progress.svg" alt="type" />
                          </div>
                        ),
                        Done: (
                          <div className="list-icon">
                            <img src="/assets/Done.svg" alt="type" />
                          </div>
                        ),
                        Cancelled: (
                          <div className="list-icon">
                            <img src="/assets/Cancelled.svg" alt="type" />
                          </div>
                        ),
                      }[props.listTitle]
                    }
                  </>
                ),
                user: <></>,
                priority: (
                  <>
                    {
                      {
                        0: (
                          <div className="ticket-card-tag-icon">
                            <img src="/assets/No-priority.svg" alt="tag" />
                          </div>
                        ),
                        1: (
                          <div className="ticket-card-tag-icon">
                            <img
                              src="/assets/Img - Low Priority.svg"
                              alt="tag"
                            />
                          </div>
                        ),
                        2: (
                          <div className="ticket-card-tag-icon">
                            <img
                              src="/assets/Img - Medium Priority.svg"
                              alt="tag"
                            />
                          </div>
                        ),
                        3: (
                          <div className="ticket-card-tag-icon">
                            <img
                              src="/assets/Img - High Priority.svg"
                              alt="tag"
                            />
                          </div>
                        ),
                        4: (
                          <div className="ticket-card-tag-icon">
                            <img
                              src="/assets/SVG - Urgent Priority colour.svg"
                              alt="tag"
                            />
                          </div>
                        ),
                      }[props.listTitle]
                    }
                  </>
                ),
              }[props.groupValue]
            }

            <div className="list-title">
              {
                {
                  priority: (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityProperty) =>
                            priorityProperty.priority === props.listTitle ? (
                              <>{priorityProperty.name}</>
                            ) : null
                          )
                        : null}
                    </>
                  ),
                  status: <>{props.listTitle}</>,
                  user: <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item">
              <img src="/assets/add.svg" alt="symbol" />
            </div>
            <div className="list-option-item">
              <img src="/assets/3 dot menu.svg" alt="symbol" />
            </div>
          </div>
        </div>

        <div className="list-card-items">
          {props.ticketDetails.map((ticket) => {
            if (ticket.status === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.priority === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.userObj.name === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            }
            return null;
          }, (cardCount = 0))}
        </div>
      </div>
    </>
  );
}
