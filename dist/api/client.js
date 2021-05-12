"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    url: "https://mw.freepay.dk/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
exports.default = api;
