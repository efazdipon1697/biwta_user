import { Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Select from 'react-select';

const usesStyle = makeStyles((theme)=>({
    holder: {
        backgroundColor: "#F6F9FB",
        display: "flex",
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
    selectTag: {
        display: "flex",
        backgroundColor: "transparent",
        zIndex: 100,
    },

}));


const HydrographicSurveyChartScreen = () => {

    const classes = usesStyle();

    const [locationData, setLocationData] = useState(
        {
            area: '',
            river: '',
            fromLat: '',
            toLat: '',
            fromLong: '',
            toLong: '',
            scale: '',
            fromYear: '',
            toYear: '',
        }
    );

    const handleLocationDataChange = (e) => {
        setLocationData({ ...locationData, [e.target.name]: e.target.value });
    }

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const options = [
        { value: '1:1,000', label: '1:1,000' },
        { value: '1:2,500', label: '1:2,500' },
        { value: '1:5,000', label: '1:5,000' },
        { value: '1:10,000', label: '1:10,000' },
        { value: '1:25,000', label: '1:25,000' },
        { value: '1:50,000', label: '1:50,000' },
    ];


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
                                value={locationData.area}
                                placeholder="Area"
                                className={classes.inputField}
                                onChange={handleLocationDataChange}
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
                                value={locationData.river}
                                placeholder="River"
                                className={classes.inputField}
                                onChange={handleLocationDataChange}
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
                            value={locationData.fromLat}
                            placeholder="Latitude"
                            className={classes.inputField}
                            onChange={handleLocationDataChange}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <input
                            type="text"
                            label="Latitude"
                            name="toLat"
                            value={locationData.toLat}
                            placeholder="Latitude"
                            className={classes.inputField}
                            onChange={handleLocationDataChange}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <input
                            type="text"
                            label="Longitude"
                            name="fromLat"
                            value={locationData.fromLong}
                            placeholder="Longitude"
                            className={classes.inputField}
                            onChange={handleLocationDataChange}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <input
                            type="text"
                            label="Longitude"
                            name="toLong"
                            value={locationData.toLong}
                            placeholder="Longitude"
                            className={classes.inputField}
                            onChange={handleLocationDataChange}
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
                            <Select
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={locationData.scale}
                                fullWidth
                                placeholder="Ratio"
                                className={classes.selectTag}
                                options={options}
                                onChange={(e)=>{
                                    setLocationData({ ...locationData, scale: e.target });
                                }}
                            />
                        </Grid>

                    </Grid>

                </div>

            </div>


        </div>
    );
}

export default HydrographicSurveyChartScreen;