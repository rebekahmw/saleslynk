import { ChangeEvent } from "react";
import { IFormCompany } from "../../../../pages/search/index";
import searchStyle from "../../../../styles/forms/Form.module.scss"
import style from "../../../../utils/styles";

interface Props extends IFormCompany {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Company = ({company, industry, handleChange}: Props) => (
    <div className={style([searchStyle.section])}>
      <h2 className={style([searchStyle.heading])}>Company information</h2>
      <input onChange={handleChange} className={style([searchStyle.inputField])} value={company} placeholder="Company name *" type="text" name="company" id="company" required/>
      {/* needs to be a select/dropdown */}
      <input onChange={handleChange} className={style([searchStyle.inputField])} value={industry} placeholder="Industry" type="text" name="industry" id="industry"/>
    </div>
)

export default Company;