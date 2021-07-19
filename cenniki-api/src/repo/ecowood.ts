const db = require("../repo/db")
const crypto = require('crypto');
//const apiSecret = 'uqylaMsjmKdTbVW1yyUqKWSCRGGfEE3MCmfRCyfVRWHKeXR56TtpDLSPgQmPtAfl';
//X-MBX-APIKEY': 'PbuPNy6G1dcZHBkVg1vZfoMynrasEV6eblgNEQh1HDXZe6tOV2S7OiSJ0ROLDa4r',
import { ecowoodRow } from "../models/ecowood"


export async function ecowoodlist(): Promise<ecowoodRow> {


    let sql = `Select * from ogrodzeniaEcowood`;
    let ecowood = await db.execute(sql).then((result: any) => {
        return result[0]

    }).catch((err: any) => { console.log(err) })
    console.log(ecowood)
    return await ecowood


}
