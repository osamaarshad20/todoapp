import {
    Link
} from "react-router-dom";
import {
    Button
} from "../styles";

const Dashboard = (props) => (
        <div>
            <center>
                <Link to="/contact">
                    <Button>
                        Contacts
                    </Button>
                </Link>

                <Link to="/todo">
                    <Button>
                        Todos
                    </Button>
                </Link>

            </center>
        </div>
    );

export default Dashboard;