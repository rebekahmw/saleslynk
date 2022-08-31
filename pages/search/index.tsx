import type { NextPage } from "next";
import Company from '../../components/forms/search/steps/Company';
import Individual from '../../components/forms/search/steps/Individual';
import Location from '../../components/forms/search/steps/Location';
import { useState } from 'react';

export interface IFormData {
    firstName: string;
    surname: string;
    email: string;
    role: string;
    company: string;
    industry: string;
    country: string;
}

const Search: NextPage = () => {
    const [page, setPage] = useState(0); 
    const [formData, setFormData] = useState<IFormData>({
        firstName: '',
        surname: '',
        email: '',
        role: '',
        company: '',
        industry: '',
        country: '',
    });

    function handleSubmit () {
        setPage(page + 1);
    };

    const conditionalComponent = () => {
        switch (page) {
        case 0:
            return <Individual {...formData} {...setFormData}/>;
        case 1:
            return <Company {...formData} {...setFormData}/>;
        case 2:
            return <Location {...formData} {...setFormData}/>;
        default:
            return <Individual {...formData} {...setFormData}/>;
        } 
    }; 

    return (
        <div>
            {conditionalComponent()}
            <button onClick={handleSubmit}>
                { page === 0 || page === 1 ? "Next" : "Submit" }
            </button>
            {
                page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>
            }
        </div>
    );
}
export default Search;
