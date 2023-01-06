import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllItems, getAllItemsPromise } from "../services/itemService";
import { Row, Col, Card, Button } from "react-bootstrap";
import DataFetching from "../Components/DataFetching";

function Shop() {
  return (
    <div className="Shop">
      <DataFetching />
    </div>
  );
}

export default Shop;
