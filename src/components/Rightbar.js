import { ClassNames } from '@emotion/react';
import { ImageList, ImageListItem, Typography, Avatar, makeStyles, AvatarGroup, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

function Rightbar() {
  const classes = useStyles();

  return (
    <Container className={ClassNames.container}>
      <Typography gutterBottom className={classes.title}>Online Friends</Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography gutterBottom className={classes.title}>Gallery</Typography>
        <ImageList rowHeight={100} className={classes.ImageList} cols={2}>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="gallery-image" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/morning.jpg" alt="gallery-image" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="gallery-image" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/hats.jpg" alt="gallery-image" />
          </ImageListItem>
        </ImageList>
        <Typography gutterBottom className={classes.title}>Categories</Typography>
        <Link className={classes.link} href="#" variant="body2">
          Food
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Travel
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Lifestyle
        </Link>
        <Divider flexItem style={{ marginBottom: 5 }} />
        <Link className={classes.link} href="#" variant="body2">
          Social
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Music
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Entertainment
        </Link>
    </Container>
  );
}

export default Rightbar;