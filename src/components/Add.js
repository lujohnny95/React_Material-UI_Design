import { makeStyles, Tooltip, Fab, FormLabel, Button, Container, TextField, Modal, MenuItem, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 25,
        right: 25,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            height: "100vh",
            width: "100vw",
        },
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Add() {
    const classes = useStyles();
    const [open, setOpen] = useStyles(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        
        setOpenAlert(false);
    };

    return (
    <>
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
            <Fab color="primary" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                        <TextField 
                            id="standard-basic" 
                            label="Title" 
                            size="small" 
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField 
                            id="outlined-multiline-static"
                            multiline
                            rows={5}
                            defaultValue="Tell your story..."
                            variant="outlined"
                            label="Description" 
                            size="small" 
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField select label="Visibility" value="Public">
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormLabel component="legend">Who can comment?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel 
                                value="Everybody"
                                label="Everybody"
                                control={<Radio size="small" />}
                            />
                             <FormControlLabel 
                                value="Friends Only"
                                label="Friends Only"
                                control={<Radio size="small" />}
                            />
                             <FormControlLabel 
                                value="Only Me"
                                label="Only Me"
                                control={<Radio size="small" />}
                            />
                        </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ marginRight: 20 }}
                            onClick={() => setOpenAlert(true)}
                        >
                            Create
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar
            open={openAlert}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
        <Alert onClose={handleClose} severity="success">
            This is a success message!
        </Alert>
      </Snackbar>
    </>
    );
};

export default Add;