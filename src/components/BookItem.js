import React from "react";
import { Card, CardContent, CardHeader, Typography, Paper } from "@mui/material";

const BookItem = ({ book }) => {
  return (
    <Card container>
      <Card item lg={4}>
        <CardHeader title={book.volumeInfo.title} />
        <Paper>
            <strong>Author:</strong>{" "}
            {book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "Unknown"}
        </Paper>
      </Card>
    </Card>
  );
};

export default BookItem;
