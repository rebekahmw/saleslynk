import { useEffect, useState } from 'react';
import { apiUrlCH } from "../../../../config/endpoints";
import style from "../../../../utils/styles";
import axios from "axios";

// registered_office_address:
// address_line_1: "Clavering House Business Centre Newcastle"
// address_line_2: "Clavering Place"
// country: "England"
// locality: "Newcastle Upon Tyne"
// postal_code: "NE1 3NG"
// region: "Tyne And Wear"

// type AddressProps = {
//     lineOne: string,
//     lineTwo?: string, 
//     country: string,
//     city: string,
//     postcode: string,
//     region: string
// } 

const Address = () => {

    const [address, setAddress] = useState({
        lineOne: "",
        lineTwo: "", 
        city: "",
        postcode: "",
        region: "",
        country: "",
    });

    // const apiKey = Buffer.from(`${process.env.COMPANIES_HOUSE_API_KEY}`, 'utf8').toString('base64')

    useEffect(() => {

		const addressFunc = async () => {
			const { data: response } = await axios
                .get(('https://api.companieshouse.gov.uk/company/06929210'), {
                    headers: {
                        'Authorization': `Basic N2ExYjdiOTYtZGQzMC00M2EzLWIzMDgtZDYwNTc5Y2Q3NzVl`
                    }
                })
			setAddress(response);
		}

		addressFunc();

	}, []);

    
    console.log(`address:`, address)

    return (
        <div >
        
        </div>
    );
};

export default Address;