import React from 'react'
import { useCookies } from 'react-cookie'
import { useAuth } from './AuthContext'
import { AppBar, Grid, Link, Paper, Typography, createTheme } from '@mui/material'

const UserDashboard = () => {
    const auth = useAuth()

    const appbarStyle = { flexDirection: 'column', justifyContent: 'center', textAlign: 'center', marginTop: 'auto', background: '#757de8' }
    const gridStyleCentered = { margin: '10px auto', direction: 'column', alignItems: 'center' }
    const paperStyle = { padding: '40px 40px', width: 400, margin: '40px auto', textAlign: 'center', flexDirection: 'column', justifyContent: 'center' }
    const customTypography = createTheme({ typography: { h6: { fontWeight: 600 } } })
    // eslint-disable-next-line no-unused-vars
    const [cookies, getCookie] = useCookies(['user'])

    return(
        <Grid>
            <AppBar position='static' style={appbarStyle}>
                <Typography variant='h6' theme={customTypography} style={{ margin: 10 }}>Bibliotech</Typography>
            </AppBar>
            <Paper style={paperStyle} elevation={5} sx={{borderRadius: '15px'}}>
                <Grid style={gridStyleCentered}>
                {
                    auth.user !== undefined ?
                    <Typography>
                        <u>Bun venit, {cookies.Name}</u>!
                    </Typography> :
                    <Link style={{ fontSize: '25px' }} href='/login' underline='always'>
                        Conectează-te la cont.
                    </Link>
                }
                </Grid>
            </Paper>
        </Grid>
    )
}

export default UserDashboard