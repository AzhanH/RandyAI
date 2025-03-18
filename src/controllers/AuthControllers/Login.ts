import {authInitialvalues, AuthSchema} from '../../models';
import {navigate, screens} from '../../utilities';

const useLoginController = () => {
  const handleSignIn = async (values: {email: string; password: string}) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    navigate(screens.bottomTabs);
  };
  const navigateToScreen = (name: string) => {
    navigate(name);
  };

  return {
    values: {
      schema: AuthSchema.LoginSchema,
      initialValues: authInitialvalues.Login,
    },
    functions: {
      handleSignIn,
      navigateToScreen,
    },
  };
};

export default useLoginController;
