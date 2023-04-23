import SignUp from "../../components/sign-up/sign-up.component";
import { db, signInWithPopup } from "../../utils/storageLocal";

const SignIn = () => {
  const logUser = async () => {
    const response = await signInWithPopup();
    db.create(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logUser}>Sign in</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
