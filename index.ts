import express, { Express, Request, Response } from "express";
const port = 3000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("HELLO THIS APP IS WORKING !!!");
});

app.post("/", (req: Request, res: Response) => {
    res.send('THIS APP IS WORKING YOU GOT A POST REQUEST !!!');
});

app.put("/user", (req: Request, res: Response) => {
    res.send("OMG I CAN'T BELIEVE THIS IS WORKING YOU GOT A PUT REQUEST >.< !!! ");
});

app.delete("/user", (req: Request, res: Response) => {
    res.send("WE'RE JUST INCREDIBLY AWESOME !!! WE JUST GOT A DELETE REQUEST (-.-) /,,/ ");
});

app.listen(port, () => {
    console.log(`THIS APP IS WORKING LISTENING ON PORT ${port}`);
});
