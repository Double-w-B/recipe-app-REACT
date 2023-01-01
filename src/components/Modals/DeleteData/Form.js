import React from "react";
import StyledDeleteDataModal from "./style";
import { BsFillEyeFill } from "react-icons/bs";

const Form = (props) => {
  const { password, setPassword, errorMsg } = props;
  const { isPasswordVisible, setIsPasswordVisible } = props;

  return (
    <StyledDeleteDataModal.Form {...props}>
      <label>
        Confirm your password:
        <input
          value={password}
          autoComplete="false"
          type={isPasswordVisible ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && (
          <BsFillEyeFill
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </label>

      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </StyledDeleteDataModal.Form>
  );
};

export default Form;
