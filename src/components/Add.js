import { makeStyles, Tooltip, Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

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
        }
    }
}));

function Add() {
    const classes = useStyles();
    const [open, setOpen] = useStyles(false);

    return (
    <>
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
            <Fab color="primary" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>

            </Container>
        </Modal>
    </>
    );
};

export default Add;