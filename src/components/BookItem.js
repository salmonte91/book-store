import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Paper,
} from "@mui/material";

const BookItem = ({ book }) => {
  return (
    <Card
      sx={{
        width: "300px",
        height: "400px",
        margin: "10px",
        bgcolor: "rgba(255, 255, 255, 0.75)",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.70)",
      }}
    >
      <CardHeader title={book.volumeInfo.title} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          <strong>Author:</strong>{" "}
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : "Unknown"}
        </Typography>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography variant="body2" color="text.secondary">
          <strong>description:</strong>{" "}
          {book.volumeInfo.description || "Unknown"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Page Count:</strong> {book.volumeInfo.pageCount || "Unknown"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookItem;
