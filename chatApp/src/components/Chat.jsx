import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src="" alt="Cam" />
          <img src="" alt="Add" />
          <img src="" alt="More" />
        </div>
      </div>     
        <Messages/>
        <Input/>
    </div>

  )
}

export default Chat
