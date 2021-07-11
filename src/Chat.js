import React, { useState } from 'react'
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from "@material-ui/icons";
import axios from "./axios";

function Chat ({ messages }) {

    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Shubham",
            timestamp: new Date().toUTCString(),
            received: true,

        })
        setInput('');
    };
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerinfo">
                    <h3>Group Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerright">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chatbody">
                {messages.map((message) => (
                    <p className={`chatmessage ${message.received && "chatreceiver"}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">{message.timestamp}</span>
                    </p>

                ))}


            </div>
            <div className="chatfooter">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
