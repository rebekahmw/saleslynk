import { ChangeEvent } from "react";
import { IFormLocation } from "../../../../pages/search/index";
import searchStyle from "../../../../styles/forms/Form.module.scss"
import style from "../../../../utils/styles";

interface Props extends IFormLocation {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Location = ({ country, handleChange }: Props) => (
    <div className={style([searchStyle.section])}>
      <h2 className={style([searchStyle.heading])}>Finally, where is the client located?</h2>
      {/* needs to be a select/dropdown */}
      <input onChange={handleChange} className={style([searchStyle.inputField])} value={country} placeholder="Country *" type="text" name="country" id="country" required/>
    </div>
  );
export default Location;