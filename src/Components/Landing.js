import { Card, Paper } from "@mui/material"
import React from "react"
import PublicIcon from '@mui/icons-material/Public';
import { LockClockOutlined } from "@mui/icons-material";

class Landing extends React.Component {

    render() {
        return (
            <div className="public">
                <Card variant="outlined" className="card">
                    <h2>Landing <PublicIcon />  (Public: anyone can access this page) </h2>
                    <Paper className="warning">
                        <p>Sign-in to continue</p> <LockClockOutlined sx={{ color: 'white' }} />
                    </Paper>
                </Card>
            </div>
        )
    }
}
export default Landing
