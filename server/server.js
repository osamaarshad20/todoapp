import { readFileSync } from "fs";
import { urlencoded, json } from "body-parser";
import { create, router as _router, defaults } from "json-server";

const server = create();
const router = _router("./database.json");
const userdb = JSON.parse(readFileSync("./users.json", "UTF-8"));

server.use(
  urlencoded({
    extended: true,
  })
);
server.use(json());
server.use(defaults());

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

// Login to one of the users from ./users.json
server.post("/auth/login", (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { email, password } = req.body;
  if (
    isAuthenticated({
      email,
      password,
    }) === false
  ) {
    const authorized = false;
    res.status(401).json({
      authorized,
    });
    return;
  }
  const authorized = true;
  res.status(200).json({
    authorized,
  });
});

server.use(router);

server.listen(8000, () => {
  console.log("Run Auth API Server");
});
