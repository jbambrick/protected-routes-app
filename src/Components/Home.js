import React from "react"
import { Card, Paper } from "@mui/material";
import VpnLockIcon from '@mui/icons-material/VpnLock';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Home = () => {

    return (
        <div className="private">
            <Card variant="outlined" className="card">
                <h2>Home <VpnLockIcon /> (Protected: authenticated user required)  </h2>
                <Paper className="welcome">
                    <p>You're logged in and viewing protected information</p> <InsertEmoticonIcon /> <ThumbUpIcon />
                </Paper>
            </Card>
        </div>
    )
};
export default Home
