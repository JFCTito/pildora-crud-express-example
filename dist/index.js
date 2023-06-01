"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("HELLO THIS APP IS WORKING !!!");
});
app.post("/", (req, res) => {
    res.send('THIS APP IS WORKING YOU GOT A POST REQUEST !!!');
});
app.put("/user", (req, res) => {
    res.send("OMG I CAN'T BELIEVE THIS IS WORKING YOU GOT A PUT REQUEST >.< !!! ");
});
app.delete("/user", (req, res) => {
    res.send("WE'RE JUST INCREDIBLY AWESOME !!! WE JUST GOT A DELETE REQUEST (-.-) /,,/ ");
});
app.listen(port, () => {
    console.log(`THIS APP IS WORKING LISTENING ON PORT ${port}`);
});
