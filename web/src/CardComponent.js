import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {List, ListItem, ListItemText} from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: '0',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent() {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
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
        title="Sopaipillas con zapallo"
        subheader="17 de octubre 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://d320djwtwnl5uo.cloudfront.net/recetas/cover/sopai_VZmb5XouA9qT1i3aUPGks8x7OD0C2J.png"
        alt="Sopaipillas con zapallo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <p>Las sopaipillas con zapallo son un clásico <strong>pan frito chileno consumido en cualquier temporada</strong>, principalmente en la zona centro del país, muy versátiles y populares.</p>
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
            <List sx={{ listStyleType: 'disc', pl: 4 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="500 g de harina" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="200 ml de leche o agua caliente" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="200 g de zapallo amarillo cocidol" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="100 g de manteca derretida" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="1 cucharadita de aceite vegetal para freír" />
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Collapse>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Receta:</Typography>
          <Typography paragraph>
            <List sx={{ listStyleType: 'decimal', pl: 4 }}>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Pelar el zapallo, retirar las pepas, reservar en una olla pequeña, cubrir con agua, llevar a hervor y mantener la cocción por unos 10 minutos o hasta que esté bien cocido, reservar la cantidad necesaria en una fuente amplia y moler el zapallo con un tenedor o minipimer hasta formar una pasta suave y homogénea. Reservar." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Cernir el harina en un bol grande y abrir un volcán invertido en el centro, añadir la manteca derretida, el agua, la sal y el zapallo molido, mezclar todo con una cuchara de madera grande o las manos limpias hasta formar una masa suave y elástica, sin grumos, que no se pegue en los bordes." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Trasladar la masa a una superficie lisa y estirar con un uslero hasta alcanzar ½ centímetro de espesor, pinchar la superficie con un tenedor y cortar en círculos de unos 10 centímetros de diámetro con un plato o un molde." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Pre-calentar el aceite a fuego alto en un sartén profundo hasta unos 160°C (320°F) y sumergir las sopaipillas cuidadosamente, sin que se superpongan y freír por aproximadamente 1 minuto por lado, sin que se doren demasiado. Reservar y estilar sobre papel absorbente.a" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Servir las sopaipillas frías o calientes, opcionalmente acompañadas con pebre chileno, queso mantecoso o el aderezo de tu gusto." />
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
