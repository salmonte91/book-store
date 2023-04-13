import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Collapse,
    IconButton,
    CardActions,
    Button,
    CommentIcon,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CommentInput } from '../CommentInput'
import StarRating from "./StarRating";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const BookItem = ({ book, rating }) => {
    const [expanded, setExpanded] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [comments, setComments] = useState([]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSubmitComment = (text) => {
        setComments([...comments, text]);
    };

    return (
        <div
            style={{
                width: "300px",
                height: "400px",
                overflow: "auto",
                margin: "10px",
                zIndex: "1",
            }}
        >
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: "rgba(255, 255, 255, 0.75)",
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.70)",
                }}
            >
                <CardHeader
                    title={book.volumeInfo.title}
                    subheader={
                        book.volumeInfo.authors
                            ? book.volumeInfo.authors.join(", ")
                            : "Unknown"
                    }
                />
                <img
                    src={
                        book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                            ? book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail : 'https://i1.sndcdn.com/artworks-000215633454-hy5qb5-t500x500.jpg'
                    }
                    alt={book.volumeInfo.title}
                    style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "250px",
                        objectFit: "contain",
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    {showComment && (
                        <CommentInput onSubmit={handleSubmitComment} />
                    )}
                    {comments.map((comment) => (
                        <Typography key={comment}>{comment}</Typography>
                    ))}
                    <StarRating
                        rating={rating}
                    />
                </CardContent>
                <CardActions disableSpacing>
                    <Button
                        onClick={() => setShowComment(!showComment)}
                        variant="contained"
                    >
                        {showComment ? "Hide comments" : "Show comments"}
                    </Button>
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
