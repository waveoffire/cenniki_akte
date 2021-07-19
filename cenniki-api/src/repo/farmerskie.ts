const db = require("../repo/db")
const crypto = require('crypto');
//const apiSecret = 'uqylaMsjmKdTbVW1yyUqKWSCRGGfEE3MCmfRCyfVRWHKeXR56TtpDLSPgQmPtAfl';
//X-MBX-APIKEY': 'PbuPNy6G1dcZHBkVg1vZfoMynrasEV6eblgNEQh1HDXZe6tOV2S7OiSJ0ROLDa4r',
import { farmerskieRow } from "../models/farmerskie"


export async function farmerskielist(): Promise<farmerskieRow> {


    let sql = `Select * from ogrodzeniaFarmerskie`;
    let farmerskie = await db.execute(sql).then((result: any) => {
        return result[0]

    }).catch((err: any) => { console.log(err) })
    console.log(farmerskie)
    return await farmerskie


}
