import React, { useEffect, useState } from "react";

import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Processing.scss'
const theme = createTheme();
export const Processing = () => {
    const acNo = useSelector(state => state?.bankDetails?.acNo)
    const ifsc = useSelector(state => state?.bankDetails?.ifsc)
    const navigate = useNavigate();
    const [displayLoader, setDisplayLoader] = useState(true);
    const [displayDialog, setDialog] = useState(false);
    useEffect(() => {
        setTimeout(changeLoader, 3000);
    }, [])
    function changeLoader() {
        setDisplayLoader(false)
        setDialog(true);
    }
    return (
        <div style={{ top: "50%" }}>
            {displayDialog == true &&
                <Card style={{ marginTop: "30%" }}>
                    <CardContent>
                        <Typography>Please Confirm If You Received the Funds</Typography>
                        <Button

                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: "black" }}
                            onClick={() => navigate('/Bank-Details')}

                        >
                            Received
                        </Button>
                        <Button

                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: "black" }}
                            onClick={() => navigate('/Bank-Details')}


                        >
                            Not Received
                        </Button>
                    </CardContent>
                </Card>

            }
            <div className="ProcessingMainContainer">

                {displayLoader == true &&
                    <div>
                        <Grid container alignItems="stretch">

                            <Grid item component={Card} xs>
                                <CardContent>
                                    <h3>Account Number</h3>
                                    <Typography>{acNo}</Typography>
                                </CardContent>

                            </Grid>

                            <Grid item component={Card} xs>
                                <CardContent>
                                    <h3>IFSC CODE</h3>
                                    <Typography>{ifsc}</Typography>
                                </CardContent>

                            </Grid>

                        </Grid>

                        <div className="loader">
                            <Typography sx={{ fontSize: "10px", marginRight: "10px" }}>Processing your Request</Typography>
                            <span></span>
                            <span ></span>
                            <span ></span>
                            <span ></span>
                            <span></span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}