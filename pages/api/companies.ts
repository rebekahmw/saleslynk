import 'dotenv/config';
import type { NextApiRequest, NextApiResponse } from 'next';

export type CompanyResponse = {

};

const baseUrl = 'https://api.company-information.service.gov.uk/company/';
const apiKey = process.env.COMPANIES_HOUSE_API_KEY || '';

const getApiUrl = (endpoint: string, companyNumber: number) => {
  const url = new URL(`${baseUrl}${endpoint}`);
  url.searchParams.append('lat', `${companyNumber}`);
  url.searchParams.append('appid', apiKey);
  return url.href;
};

const getCompanyData = async (companyNumber: number) => {
  const href = getApiUrl('/companies', companyNumber);
  try {
    const resp = await fetch(href);
    const data: CompanyResponse = await resp.json();
    return data;
  } catch (error) {
    return null;
  }
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CompanyResponse>,
) => {
  const companyNumber = parseFloat(`${req.query?.companyNumber}`);
  if (isNaN(companyNumber)) return res.status(400);

  let data = await getCompanyData(companyNumber);
  if (data == null) return res.status(500);

  res.status(200).json(data);
};

export default handler;