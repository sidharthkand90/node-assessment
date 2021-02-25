import { Request, Response } from "express";

/**
 * Home page.
 * @route POST /
 */
export const indexV1 = (req: Request, res: Response) => {
  const delimiterFirstName = "0000";
  const delimiterSecondName = "000";

  console.log("V1");
  try {
  let reqData: String = req.body.data;
  let response: any = extractStrData(reqData);
  response.firstName = response.firstName + delimiterFirstName;
  response.lastName = response.lastName + delimiterSecondName;
  return res.json({ statusCode: 200, data: response });
  }
  catch(e) {
     return res.json({ statusCode: 500, data : "Something went wrong !"});
  }
};

/**
 * Home page.
 * @route POST /
 */
export const indexV2 = (req: Request, res: Response) => {
  const delimeterPhoneIndex = 3;
  const delimeterPhone = "-";
  console.log("V2");
 try {
  let reqData: String = req.body.data;
  let response: any = extractStrData(reqData);
  let clientId: String = response.clientId;
  response.clientId =
    clientId.substring(0, delimeterPhoneIndex) +
    delimeterPhone +
    clientId.substring(delimeterPhoneIndex);
  return res.json({ statusCode: 200, data: response });
 }
 catch(e) {
     console.log(e);
    return res.json({ statusCode: 500, data : "Something went wrong !"});
}
};

function extractStrData(reqData: String): any {
  const response: any = {
    firstName: String,
    lastName: String,
    clientId: String,
  };
  let firstIndex = reqData.indexOf("0000");
  // let secondIndex = reqData.indexOf('000');
  response.firstName = reqData.substring(0, firstIndex);
  let secondNameStr = reqData.substring(firstIndex + 4);
  console.log(secondNameStr);
  let secondIndex = secondNameStr.indexOf("000");
  response.lastName = secondNameStr.substring(0, secondIndex);
  response.clientId = secondNameStr.substring(secondIndex + 3);
  console.log(response);
  return response;
}
