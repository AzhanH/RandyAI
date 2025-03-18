import {authInitialvalues, AuthSchema} from '../../models';
import {navigate, screens} from '../../utilities';

const useCompleteController = () => {
  const handleOnSubmit = async () => {
 
    navigate(screens.bottomTabs);
  };
  const navigateToScreen = (name: string) => {
    navigate(name);
  };

  return {
    values: {
      schema: AuthSchema.CompleteProfileSchema,
      initialValues: authInitialvalues.CompleteProfile,
    },
    functions: {
      handleOnSubmit,
      navigateToScreen,
    },
  };
};

export default useCompleteController;
