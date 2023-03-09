import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Select from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from '@mui/system';

const usesStyle = makeStyles((theme)=>({
    holder: {
        backgroundColor: "#F6F9FB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    formHolder: {
        margin: "20px",
        backgroundColor: "#FAFDFF"
    },
    surveyFormHolder: {
        backgroundColor: "white",
        borderRadius: "10px",
        border: "1px solid #F2EEEE",
        margin: "20px",
        padding: "20px",
        [theme.breakpoints.down("md")]: {
            width: "90%",
        },        
        [theme.breakpoints.up("md")]: {
            width: "70%",
        },
    },
    spacer: {
        width: "15px",
        height: "15px",
    },
    labelText: {
        color: "#1e1e1e", 
        fontSize: "16", 
        fontWeight: "400"
    },
    inputField: {
        display: "flex",
        width:"100%",
        padding: "10px 5px",
        border: "1px solid #cdcdcd",
        borderRadius: "5px",
        backgroundColor: "transparent"
    },
    submitButton: {
        display:"flex", 
        justifyContent: "center", 
        border: "1px solid #0077B6", 
        borderRadius: "25px", 
        padding: "10px 20px", 
        color: "#0077B6", 
        fontWeight: "bold", 
        cursor: "pointer"
    }
}));

const MyInfo = () => {

    const classes = usesStyle();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [org, setOrg] = useState('');
    const [deliveryAdds, setDeliveryAdds] = useState('');

    const submitButton = () => {

    }


    return (
        <div className={classes.holder}>

                <Container style={{backgroundColor: "white", fontSize:"32px", color: "#1e1e1e", width: "100%", padding: "10px" }}>
                    ACCOUNT INFORMATION
                </Container>

                <div className={classes.surveyFormHolder}>

                    <Grid container spacing={2}>

                        <Grid item xs={6} sm={6}>
                            <input
                                type="text"
                                label="name"
                                name="name"
                                value={name}
                                placeholder="Name"
                                className={classes.inputField}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <input
                                type="text"
                                label="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                className={classes.inputField}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={6} sm={6}>
                            <input
                                type="text"
                                label="phone"
                                name="phone"
                                value={phone}
                                placeholder="Phone"
                                className={classes.inputField}
                                onChange={(e)=>setPhone(e.target.value)}
                            />
                        </Grid>

                        
                        <Grid item xs={6} sm={6}>
                            <input
                                type="text"
                                label="org"
                                name="org"
                                value={org}
                                placeholder="Organization/ Profession"
                                className={classes.inputField}
                                onChange={(e)=>setOrg(e.target.value)}
                            />
                        </Grid>

                    </Grid>

                    <div className={classes.spacer} />

                    <TextField
                        id="outlined-textarea"
                        placeholder="Delivery Address"
                        multiline
                        name="deliveryAdds"
                        value={deliveryAdds}
                        className={classes.inputField}
                        onChange={(e)=>setDeliveryAdds(e.target.value)}
                    />

                </div>

                <div className={classes.submitButton} onClick={submitButton}>
                    OK
                </div>

                <div className={classes.spacer} />
                <div className={classes.spacer} />



        </div>
    );
}

export default MyInfo;