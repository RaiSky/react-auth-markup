import React  from "react";
// Actions
// Models
// Components
import SignUpComponent from "../components/signUpComponent/SignUpComponent";

export interface SignUpContainerProps {
}

function SignUpContainer({ }: SignUpContainerProps): JSX.Element {
 
  return (
    <>
      <SignUpComponent />
    </>
  );
}

export default SignUpContainer