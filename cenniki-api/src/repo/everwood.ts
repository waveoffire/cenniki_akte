const db = require("../repo/db")
const crypto = require('crypto');
//const apiSecret = 'uqylaMsjmKdTbVW1yyUqKWSCRGGfEE3MCmfRCyfVRWHKeXR56TtpDLSPgQmPtAfl';
//X-MBX-APIKEY': 'PbuPNy6G1dcZHBkVg1vZfoMynrasEV6eblgNEQh1HDXZe6tOV2S7OiSJ0ROLDa4r',
import { everwoodRow } from "../models/everwood"


export async function everwoodlist(): Promise<everwoodRow> {


    let sql = `Select f.id, f.wymiary, f.netto,f.waga, f.idWzoru,ogrodzeniaEverwoodWzory.nazwa,ogrodzeniaEverwoodWzory.obrazek  from ogrodzeniaEverwoodWymiary f LEFT JOIN ogrodzeniaEverwoodWzory ON f.idWzoru=ogrodzeniaEverwoodWzory.id`;
    let everwood = await db.execute(sql).then((result: any) => {
        return result[0]

    }).catch((err: any) => { console.log(err) })
    console.log(everwood)
    return await everwood


}
