import React from 'react';
import ReactDOM from 'react-dom';
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLarge from '@material-ui/icons/DonutLarge';
import { Button } from '@material-ui/core';
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';


export default function Sidebar () {
    return (
        <div className='sidebar'>
            <div className='Sidebar_header'>
                <Avatar src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
                <div className='sidebar_header_right'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchcontainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />

                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    );
}


