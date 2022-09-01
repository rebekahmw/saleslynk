import type { NextPage } from "next";
import Company from '../../components/forms/search/steps/Company';
import Individual from '../../components/forms/search/steps/Individual';
import Location from '../../components/forms/search/steps/Location';
import { useState, ChangeEvent, useEffect } from 'react';
import searchStyle from "../../styles/forms/Form.module.scss";
import style from "../../utils/styles";
import Logo from "../../components/icons/logoLight";

export interface IFormClient {
    firstName: string;
    surname: string;
    email: string;
    role: string;
}

export interface IFormCompany {
    company: string;
    industry: string;
}

export interface IFormLocation {
    country: string;
}

export interface IFormData extends IFormClient, IFormCompany, IFormLocation {}

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
    console.log(formData)

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit () {
        setPage(page + 1);
    };

    const conditionalComponent = () => {
        switch (page) {
        case 0:
            return <Individual {...formData} handleChange={handleChange}/>;
        case 1:
            return <Company {...formData} handleChange={handleChange}/>;
        case 2:
            return <Location {...formData} handleChange={handleChange}/>;
        default:
            return <Individual {...formData} handleChange={handleChange}/>;
        } 
    }; 

    return (
        <div className={style([searchStyle.container])}>
            <div>
                <Logo />
            </div>
            <div className={style([searchStyle.searchBox])}>
                {conditionalComponent()}
                <button onClick={handleSubmit}>
                    { page === 0 || page === 1 ? "Next" : "Submit" }
                </button>
                {
                    page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>
                }
            </div>
        </div>
    );
}
export default Search;
