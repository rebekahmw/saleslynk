import type { NextPage } from "next";
import { IFormData } from "../../../../pages/search/index";

const Company: NextPage<IFormData> = (props) => {
  return (
    <div>
      <h2>Company information</h2>
      <input value={props.company} placeholder="Company name *" type="text" name="company" id="company" required/>
      {/* needs to be a select/dropdown */}
      <input value={props.industry} placeholder="Industry" type="text" name="industry" id="industry"/>
    </div>
  );
}
export default Company;