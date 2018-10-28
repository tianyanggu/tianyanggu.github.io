import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../styles/messagebox.css';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <div>
                <CSSTransition
                    in={!this.state.active}
                    classNames="messageTab"
                    timeout={1650}>
                    <div className="message-us-container">
                        <div className="message-us-body" onClick={this.handleClick}>
                            <div className="message-us-title">
                                Contact Info<i className="message-icon far fa-window-maximize"></i>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={this.state.active}
                    classNames="messageForm"
                    timeout={900}>
                    <div className="message-us-form">
                        <div className="message-us-popup-container">
                            <div className="message-us-title" onClick={this.handleClick}>
                                Say Hello! <i className="message-icon far fa-window-minimize"></i>
                            </div>
                        </div>
                        <div className="message-us-text">
                            <div style={{ padding: "2px"}}>
                                Messages are sent to <a href="mailto:tyler.y.gu@gmail.com" target="_top">tyler.y.gu@gmail.com</a>.
                            </div>
                            <form action="https://www.enformed.io/zoiau2oo" method="POST" id="message">
                                <div className="form-group">
                                    <label>Name: (Optional)</label>
                                    <input name="name" type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Email: <span className="required-input">*</span></label>
                                    <input name="email" type="email" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Message: <span className="required-input">*</span></label>
                                    <textarea name="message" type="text" className="form-control" rows="5" maxLength="500" required/>
                                </div>
                                <input type="hidden" name="*redirect" value={this.props.location} />
                                <input type="hidden" name="*honeypot" />
                            </form>
                            <button type="submit" className="message-submit" form="message">Leave a message</button>
                        </div>
                    </div>
                </CSSTransition>
            </div >
        );
    }
}

export default Message;