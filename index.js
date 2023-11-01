var http = require("http");

http
  .createServer(function (req, res) {
    console.log("Server is running on port 4300 \n");
    res.write("Server is running \n");

    if (req.url === "/users") {
      res.write(
        JSON.stringify({
          userId: 1,
          userName: "Manikanta",
        })
      );
    }

    if (req.url === "/employee") {
      res.write(
        JSON.stringify({
          empId: 1,
          empName: "Manikanta",
        })
      );
    }

    if (req.url === "/birds") {
      res.write(
        JSON.stringify({
          id: 1,
          birdName: "Parrot",
        })
      );
    }

    if (req.url === "/cats") {
      res.write(
        JSON.stringify({
          id: 1,
          name: "Cat1",
        })
      );
    }

    if (req.url === "/rats") {
      res.write(
        JSON.stringify({
          id: 1,
          name: "Rat1",
        })
      );
    }

    if (req.url === "/bats") {
      res.write(
        JSON.stringify({
          id: 1,
          name: "Bat1",
        })
      );
    }

    res.end();
  })
  .listen(8000);
