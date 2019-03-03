// Import Phoenix's Socket Library
  // This imports the Socket as a class we can reference in the code file
import {Socket} from "phoenix";

// Create a new Phoenix Socket to reuse
  // The following variable stores the user socket we're creating on the backend
  // This opens up the line of real-time communication to listen to and send msgs
const socket = new Socket("/socket");

// Connect to the socket
socket.connect();

// Only connect to the socket if the polls channel actually exists
if (document.getElementById("enable-polls-channel")) {
  // Create a channel to handle joining/sending/receiving
    // Specify which topic the client should be listening to
  const channel = socket.channel("polls:lobby", {});

  // Join the topic on the channel
  channel
    .join()
    .receive("ok", res =>
  console.log("Joined channel:", res))
    .receive("error", res =>
  console.log("Failed to join channel:", res));

  document.getElementById("polls-ping").addEventListener("click", () =>
  {
    channel
      .push("ping")
      .receive("ok", res =>
    console.log("Receiced PING response: ", res))
      .receive("Error sending PING:", res);
  });

  channel.on("pong", payload => {
    console.log("The server has been PONG'd and all is well:", payload);
  });
}
// Export the socket to be imported in app.js
export default socket;
