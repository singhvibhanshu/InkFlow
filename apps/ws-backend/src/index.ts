import { WebSocketServer } from "ws";
import jwt, {JwtPayLoad} from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, request) {
  const url = request.url;
  if (!url) {
    return
  }

  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || '';
  const decoded = jwt.verify(token, JWT_SECRET);

  if (!decoded || !(decoded as JwtPayLoad).userID) {
    ws.close();
    return;
  }

  ws.on("message", function message(data) {
    ws.send('pong');
  });

});  