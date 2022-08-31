import type { NextPage } from "next";
import { IFormData } from "../../../../pages/search/index";

const Individual: NextPage<IFormData> = (props) => {

  // const updateForm = (e: any) => {
  //   setFormData({
  //     ...formData,
  //     name: e.target.value,
  //   });
  // }};onChange={updateForm()}

  return (
    <div>
      <h2>Client information</h2>
      <input value={props.firstName} placeholder="First name *" type="text" name="firstName" id="firstName" required />
      <input value={props.surname} placeholder="Last name *" type="text" name="surname" id="surname" required />
      <input value={props.email} placeholder="Email Address" type="email" name="email" id="email" />
      <input value={props.role} placeholder="Job role" type="text" name="role" id="role" />

    </div>
  );
}
export default Individual;
