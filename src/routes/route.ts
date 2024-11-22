import express from 'express';
import { hlsProxy, qualityProxy, segmentProxy } from '../controllers/proxy';

export const router = express.Router();

router.get('/hls-proxy', hlsProxy);

router.get('/quality-proxy', qualityProxy);

router.get('/segment-proxy', segmentProxy);