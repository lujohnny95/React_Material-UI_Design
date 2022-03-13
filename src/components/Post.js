import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image=""
          title="New Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">My First Post</Typography>
          <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">Learn More</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default Post;