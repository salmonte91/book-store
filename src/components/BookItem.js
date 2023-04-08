import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Paper,
  Collapse,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const BookItem = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ width: '300px', height: '400px', overflow: 'auto', margin: '10px' }}>
      <Card sx={{ bgcolor: "rgba(255, 255, 255, 0.75)", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.70)" }}>
        <CardHeader
          title={book.volumeInfo.title}
          subheader={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown"}
        />
        <img
          src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          style={{ width: "100%", height: "auto", maxHeight: "250px", objectFit: "contain" }}
        />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{book.volumeInfo.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default BookItem;
