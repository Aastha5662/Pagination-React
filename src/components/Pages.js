import React from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "./../hooks/pagination";

const Pages = ({ data }) => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = usePagination(10, data.length);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User Posts</h1>
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
           
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </div>
  );
};

export default Pages;
