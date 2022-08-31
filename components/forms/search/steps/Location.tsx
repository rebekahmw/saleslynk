import type { NextPage } from "next";
import { IFormData } from "../../../../pages/search/index";

const Location: NextPage<IFormData> = (props) => {
  return (
    <div>
      <h2>Finally, where is the client located?</h2>
      {/* needs to be a select/dropdown */}
      <input value={props.country} placeholder="Country *" type="text" name="country" id="country" required/>
    </div>
  );
}
export default Location;