const db = require("../repo/db")
const crypto = require('crypto');
//const apiSecret = 'uqylaMsjmKdTbVW1yyUqKWSCRGGfEE3MCmfRCyfVRWHKeXR56TtpDLSPgQmPtAfl';
//X-MBX-APIKEY': 'PbuPNy6G1dcZHBkVg1vZfoMynrasEV6eblgNEQh1HDXZe6tOV2S7OiSJ0ROLDa4r',
import { ploterRow, naprawaRow, dodatkoweRow } from "../models/plotery"


export async function czescilist(): Promise<ploterRow> {


    let sql = `Select * from ploteryCzesci`;
    let czesci = await db.execute(sql).then((result: any) => {
        return result[0]

    }).catch((err: any) => { console.log(err) })
    console.log(czesci)
    return await czesci


}
export async function naprawalist(): Promise<naprawaRow> {


    let sql = `Select * from ploteryNaprawa`;
    let naprawa = await db.execute(sql).then((result: any) => {
        return result[0]

    }).catch((err: any) => { console.log(err) })

    return await naprawa

}
export async function dodatkowelsit(): Promise<dodatkoweRow> {


    let sql = `Select * from ploteryDodatkowe`;
    let dodatkowe = await db.execute(sql).then((result: any) => {
        return result[0]

    }).catch((err: any) => { console.log(err) })

    return await dodatkowe

}