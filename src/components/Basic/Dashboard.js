import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => (
    <div>
      <center>
        <Link to="/contact">
          <input type="submit" value="Contacts" />
        </Link>

        <Link to="/todo">
          <input type="submit" value="Todos" />
        </Link>
      </center>
    </div>
  );

export default Dashboard;