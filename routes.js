'use strict';
import { readFile } from './api1/controller';
import { enterProductInfo, getProductInfo, findProduct } from './api2_3/controller';
import { firstNonRepeatingChar } from './api4/controller';
import {writeFile } from './api5/controller'
import { Router } from 'express'
const router = Router();

router.post('/readFile', readFile);

router.post('/enterProductInfo', enterProductInfo);

router.post('/getProductInfo', getProductInfo);

router.get('/findProduct', findProduct);

router.post('/getFirstNonRepeatingChar', firstNonRepeatingChar);

router.post('/writeFileContents', writeFile);


export { router }