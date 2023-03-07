import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
// import Select from 'react-select';
import Select from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    purposeFormHolder: {
        margin: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        border: "1px solid #F2EEEE",
        margin: "20px",
        padding: "20px"
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
    selectTag: {
        display: "flex",
        backgroundColor: "transparent",
        zIndex: 100,
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


const HydrographicSurveyChartScreen = () => {

    const classes = usesStyle();

    const [area, setArea] = useState('');
    const [river, setRiver] = useState('');
    const [fromLat, setFromLat] = useState('');
    const [toLat, setToLat] = useState('');
    const [fromLong, setFromLong] = useState('');
    const [toLong, setToLong] = useState('');
    const [scale, setScale] = useState('');
    const [fromYear, setFromYear] = useState('');
    const [toYear, setToYear] = useState('');
    const [purpose, setPurpose] = useState('');
    const [otherPurpose, setOtherPurpose] = useState('');

    const [period, setPeriod] = useState("Latest");

    const addToRequest = () => {
        if(area === ""){
            alert("Please provide the area to continue");
            return;
        } if(river === ""){
            alert("Please provide the river to continue");
            return;
        } if(scale === ""){
            alert("Please select the scale to continue");
            return;
        } if(period === "Yearly"){
            if(fromYear === ""){
                alert("Please select the start time to continue");
                return;    
            } if(toYear === ""){
                alert("Please select the end time to continue");
                return;    
            }
        } if(purpose === ""){
            alert("Please select the purpose to continue");
            return;
        } if(purpose === "Others"){
            if(otherPurpose === "") {
                alert("Please provide the other purpose to continue");
                return;
            }
        } 



    }

    return (
        <div className={classes.holder}>

            <div className={classes.formHolder}>
                
                <div className={classes.surveyFormHolder}>
                
                    <Typography className={classes.labelText}>Survey Location</Typography>
                    <div className={classes.spacer} />

                    <div style={{border: "1px solid black", borderColor: "#D9D9D9", borderRadius: "5px", padding: "10px 20px"}}>

                        <Grid container spacing={2}>

                            <Grid item xs={2} sm={3} style={{display: "flex", alignItems: "center"}}>
                                <Typography className={classes.labelText}>Area</Typography>
                            </Grid>

                            <Grid item xs={10} sm={9}>
                                <input
                                    type="text"
                                    label="Area"
                                    name="area"
                                    value={area}
                                    placeholder="Area"
                                    className={classes.inputField}
                                    onChange={(e)=>setArea(e.target.value)}
                                />
                            </Grid>

                        </Grid>

                        <div className={classes.spacer} />
                        <Grid container spacing={2}>

                            <Grid item xs={2} sm={3} style={{display: "flex", alignItems: "center"}}>
                                <Typography className={classes.labelText}>River</Typography>
                            </Grid>

                            <Grid item xs={10} sm={9}>
                                <input
                                    type="text"
                                    label="River"
                                    name="river"
                                    value={river}
                                    placeholder="River"
                                    className={classes.inputField}
                                    onChange={(e)=>setRiver(e.target.value)}
                                />
                            </Grid>

                        </Grid>


                    </div>

                    <div className={classes.spacer} />
                    <Typography className={classes.labelText}>Lat-Long (Optional)</Typography>
                    <div className={classes.spacer} />

                    <Grid container spacing={2} style={{padding: "0px 20px"}}>

                        <Grid item xs={6} sm={6}>
                            <Typography className={classes.labelText}>From</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Typography className={classes.labelText}>To</Typography>
                        </Grid>


                        <Grid item xs={6} sm={6}>
                            <input
                                type="text"
                                label="Latitude"
                                name="fromLat"
                                value={fromLat}
                                placeholder="Latitude"
                                className={classes.inputField}
                                onChange={(e)=>setFromLat(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <input
                                type="text"
                                label="Latitude"
                                name="toLat"
                                value={toLat}
                                placeholder="Latitude"
                                className={classes.inputField}
                                onChange={(e)=>setToLat(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <input
                                type="text"
                                label="Longitude"
                                name="fromLat"
                                value={fromLong}
                                placeholder="Longitude"
                                className={classes.inputField}
                                onChange={(e)=>setFromLong(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <input
                                type="text"
                                label="Longitude"
                                name="toLong"
                                value={toLong}
                                placeholder="Longitude"
                                className={classes.inputField}
                                onChange={(e)=>setToLong(e.target.value)}
                            />
                        </Grid>

                    </Grid>


                </div>

                <div className={classes.surveyFormHolder}>
                    <Grid container spacing={2}>

                        <Grid item xs={2} sm={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography className={classes.labelText}>Scale</Typography>
                        </Grid>

                        <Grid item xs={10} sm={9}>
                            <FormControl fullWidth  size="small">
                                <InputLabel id="demo-simple-select-label">Ratio</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={scale}
                                    label="Scale"
                                    onChange={(e)=> setScale(e.target.value)}
                                    size="small"
                                >
                                    <MenuItem value={"1:1,000"}>1:1,000</MenuItem>
                                    <MenuItem value={"1:2,500"}>1:2,500</MenuItem>
                                    <MenuItem value={"1:5,000"}>1:5,000</MenuItem>
                                    <MenuItem value={"1:10,000"}>1:10,000</MenuItem>
                                    <MenuItem value={"1:25,000"}>1:25,000</MenuItem>
                                    <MenuItem value={"1:50,000"}>1:50,000</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>

                    </Grid>

                </div>

                <div className={classes.surveyFormHolder}>
                    <Grid container spacing={2}>

                        <Grid item xs={4} sm={4} style={{display: "flex", alignItems: "center"}}>
                            <Typography className={classes.labelText}>Period</Typography>
                        </Grid>

                        <Grid item xs={8} sm={8}>
                            
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={period}
                                onChange={(e)=>setPeriod(e.target.value)}
                            >
                                <FormControlLabel value="Latest" control={<Radio />} label="Latest" />
                                <FormControlLabel value="Yearly" control={<Radio />} label="Yearly" />
                            </RadioGroup>
                            
                        </Grid>

                    </Grid>

                    {
                        period === "Yearly" && 
                        <div>

                            <Typography className={classes.labelText}>Year</Typography>
                            <div className={classes.spacer} />

                            <Grid container spacing={10}>

                                <Grid item xs={4} sm={4}>
                                    <DatePicker 
                                        placeholderText="Year"
                                        className={classes.inputField}
                                        selected={fromYear}
                                        onChange={(date)=> setFromYear(date)}
                                    />
                                </Grid>
                                
                                <Grid item xs={2} sm={2}>
                                    <Typography className={classes.labelText}>To</Typography>
                                </Grid>

                                <Grid item xs={4} sm={4}>
                                    <DatePicker 
                                        placeholderText="Year"
                                        className={classes.inputField}
                                        selected={toYear}
                                        onChange={(date)=> setToYear(date)}
                                    />
                                </Grid>

                            </Grid>

                        </div>
                    }

                </div>

                <div className={classes.surveyFormHolder}>

                    <Grid container spacing={2}>

                        <Grid item xs={2} sm={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography className={classes.labelText}>Purpose</Typography>
                        </Grid>

                        <Grid item xs={10} sm={9}>
                            <FormControl fullWidth  size="small">
                                <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={purpose}
                                    label="Purpose"
                                    onChange={(e)=> setPurpose(e.target.value)}
                                    size="small"
                                >
                                    <MenuItem value={"Navigational Clearance"}>Navigational Clearance</MenuItem>
                                    <MenuItem value={"Bridge Clearance"}>Bridge Clearance</MenuItem>
                                    <MenuItem value={"River Depth"}>River Depth</MenuItem>
                                    <MenuItem value={"For Research"}>For Research</MenuItem>
                                    <MenuItem value={"Using bank of river"}>Using bank of river</MenuItem>
                                    <MenuItem value={"Building Jetty"}>Building Jetty</MenuItem>
                                    <MenuItem value={"Placing Floating Pump"}>Placing Floating Pump</MenuItem>
                                    <MenuItem value={"Using Foreshore"}>Using Foreshore</MenuItem>
                                    <MenuItem value={"For Dockyard"}>For Dockyard</MenuItem>
                                    <MenuItem value={"Approval for creating Basin in land"}>Approval for creating Basin in land</MenuItem>
                                    <MenuItem value={"Others"}>Others</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>



                    <div className={classes.spacer} />
                    {
                        purpose == "Others" 
                        && <TextField
                            id="outlined-textarea"
                            placeholder="Describe your purpose"
                            multiline
                            name="otherPurpose"
                            value={otherPurpose}
                            className={classes.inputField}
                            onChange={(e)=>setOtherPurpose(e.target.value)}
                        />
                    }

                </div>

            </div>

            <div className={classes.submitButton} onClick={addToRequest}>
                ADD TO MY REQUEST
            </div>

            <div className={classes.spacer} />
            <div className={classes.spacer} />

        </div>
    );
}

export default HydrographicSurveyChartScreen;