import React from 'react'
import {connect} from "react-redux"
import * as actionCreators from "../state/action-creators"


function Message(props) {
const {infoMessage} = props;

  return <div id="message">{infoMessage && <p>{infoMessage}</p>}</div>
}

export default connect(state => state, actionCreators)(Message)