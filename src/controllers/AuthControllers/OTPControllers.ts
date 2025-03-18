import {authInitialvalues, AuthSchema} from '../../models';
import { navigate, screens } from '../../utilities';

const useOTPControllers = () => {
  
  
    const handleonSubmit = async (forgotPassword: boolean) => {
      if(forgotPassword){
        navigate(screens.resetPass)
      }else{
      navigate(screens.login)
    }};
    const navigateToScreen = (name: string) =>{
      navigate(name)
    }
  
    return {
      values: {
       schema: AuthSchema.LoginSchema,
       initialValues: authInitialvalues.Login
      },
      functions: {
        handleonSubmit,
        navigateToScreen
      },
    };
  };
  
  export default useOTPControllers;