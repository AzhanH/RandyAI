import useToggle from '../../hooks/useToggle';
import {authInitialvalues, AuthSchema} from '../../models';
import {navigate, screens} from '../../utilities';

const useLoginController = () => {
  const [rememberMeVisible, setRememberMeVisible, toggleRememberMe] =
    useToggle();

  const handleSignIn = async (values: {email: string; password: string}) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    navigate(screens.bottomTabs);
  };

  const handleForgotPassword = () => {
    navigate(screens.forgotPass);
  };
  const navigateToScreen = (name: string) => {
    navigate(name);
  };

  return {
    values: {
      schema: AuthSchema.LoginSchema,
      initialValues: authInitialvalues.Login,
      rememberMeVisible,
    },
    functions: {
      handleSignIn,
      navigateToScreen,
      toggleRememberMe,
      handleForgotPassword,
    },
  };
};

export default useLoginController;
