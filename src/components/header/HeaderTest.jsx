import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

import Typewriter from 'typewriter-effect';

const HeaderTest = () => {
    return (
        <header>
            <div>
                <Grid container >
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h5" align='center'> Hello I'm </Typography>
                        <Typography variant="h1" align='center'> Camila Bertolani </Typography>
                        <Grid item className="dev">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Full Stack Developer',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 20,
                                    // delay: 55,
                                    pauseFor: 50
                                }}
                            />
                        </Grid>

                    </Grid>

                </Grid>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default HeaderTest