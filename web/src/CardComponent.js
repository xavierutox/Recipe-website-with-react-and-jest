import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { List, ListItem, ListItemText } from "@mui/material";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "0",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const recipe = props.recipe;

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            X
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.Title}
        subheader={recipe.Date}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.Image}
        alt={recipe.Title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recipe.Description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Ingredients"
        >
          <ReceiptLongIcon />
        </ExpandMore>
        <ExpandMore
          expand={expanded2}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="Recipe"
        >
          <FormatListNumberedIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredientes:</Typography>
          <Typography paragraph>
            <List sx={{ listStyleType: "disc", pl: 4 }}>
              {recipe.Ingredients.map((ingredient) => (
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Collapse>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Receta:</Typography>
          <Typography paragraph>
            <List sx={{ listStyleType: "decimal", pl: 4 }}>
              {recipe.Recipe.map((step) => (
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText primary={step} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
