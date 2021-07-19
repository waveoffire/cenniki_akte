import { Router } from 'express';


import { kornerlist } from '../repo/korner'

const router = Router();
router.post('/ogrodzenia/korner', async function (req, res, next) {

    await res.status(200).json(await kornerlist())

})


export default router