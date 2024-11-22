"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const proxy_1 = require("../controllers/proxy");
exports.router = express_1.default.Router();
exports.router.get('/hls-proxy', proxy_1.hlsProxy);
exports.router.get('/quality-proxy', proxy_1.qualityProxy);
exports.router.get('/segment-proxy', proxy_1.segmentProxy);
