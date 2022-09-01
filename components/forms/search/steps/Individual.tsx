import { ChangeEvent } from "react";
import { IFormClient } from "../../../../pages/search/index";
import searchStyle from "../../../../styles/forms/Form.module.scss"
import style from "../../../../utils/styles";

interface Props extends IFormClient {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Individual = ({firstName, surname, email, role, handleChange}: Props) => (
    <div className={style([searchStyle.section])}>
      <h2 className={style([searchStyle.heading])}>Client information</h2>
      <input onChange={handleChange} className={style([searchStyle.inputField])} value={firstName} placeholder="First name *" type="text" name="firstName" id="firstName" required />
      <input onChange={handleChange} className={style([searchStyle.inputField])}  value={surname} placeholder="Last name *" type="text" name="surname" id="surname" required />
      <input onChange={handleChange} className={style([searchStyle.inputField])} value={email} placeholder="Email Address" type="email" name="email" id="email" />
      <input onChange={handleChange} className={style([searchStyle.inputField])} value={role} placeholder="Job role" type="text" name="role" id="role" />
    </div>
);

export default Individual;
