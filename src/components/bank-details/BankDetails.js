import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validateIfscCode } from "../../services/bankService";
import { Card } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { saveData } from '../../redux/actions/index'
const theme = createTheme();
export const BankDetails = () => {
    const [proceedState, setProceedState] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [details, setDetails] = React.useState({
        acNo: "",
        ifsc: ""
    })
    const [error, setError] = React.useState({
        accountError: "",
        ifscError: "",
        validate: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "acNo":
                setDetails(prevState => ({
                    ...prevState,
                    acNo: value
                }))

                setError(prevState => ({
                    ...prevState,
                    accountError: value?.length < 15 ? "Account Number Should Be Atleast 15 Digits" : value?.length > 15 ? "Account Number Should Be 15 Digits" : ""
                }))

                break;
            case "ifsc":
                setDetails(prevState => ({
                    ...prevState,
                    ifsc: value
                }))
                setError(prevState => ({
                    ...prevState,
                    ifscError: value?.length < 11 ? "IFSC Should Be Atleast 11 Digits" : value?.length > 11 ? "IFSC Should Be 11 Digits" : ""
                }))

                break;
            default:
                break;

        }
    }
    const validateIFSC = () => {
        if (error?.ifscError == "") {
            validateIfscCode(details?.ifsc).then(resp => {
                setError(prevState => ({
                    ...prevState,
                    validate: "IFSC is Valid"
                }))
                if (error?.accountError === "" && error?.ifscError === "") {
                    setProceedState(false)
                }
            }).catch(function (error) {
                setError(prevState => ({
                    ...prevState,
                    validate: "IFSC is In - Valid"
                }))
            })
        }
    }
    const navigateProcessing = () => {
        dispatch(saveData(details))
        navigate('/Processing')
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Bank Details
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="acNo"
                            label="Account Number"
                            name="acNo"
                            value={details?.acNo}
                            onChange={(e) => handleChange(e)}
                            autoFocus
                        />
                        <Typography sx={{ color: "gray", fontSize: "10px" }}>{error?.accountError}</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="ifsc"
                            label="IFSC"
                            name="ifsc"
                            value={details?.ifsc}
                            onChange={(e) => handleChange(e)}
                            autoFocus
                        />
                       
                        <Typography sx={{ color: "gray", fontSize: "10px" }}>{error?.ifscError}</Typography>
                        <Button variant="text" onClick={() => validateIFSC()}>Validate IFSC
                            {error?.validate !== "" &&
                                <Card sx={{ marginLeft: "10px" }}><Typography sx={{ fontSize: "8px", margin: "7px" }}>{error?.validate}</Typography></Card>
                            }
                        </Button>
                        
                        <br></br>
                      <Typography sx={{fontSize:"10px"}}>Dont Have IFSC? <a href="https://www.bankbazaar.com/ifsc-code.html">Click here</a></Typography>
                        <Button

                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: "black" }}
                            disabled={proceedState}
                            onClick={() => navigateProcessing()}
                        >
                            PROCEED
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}