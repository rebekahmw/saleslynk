// Companies House API URL
export const apiUrlCH = (path: string) => {
	return `${process.env.CH_API_URL}${path}`
}