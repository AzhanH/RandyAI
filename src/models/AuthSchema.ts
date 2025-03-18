import * as Yup from 'yup';
import CompleteProfile from '../screens/auth/CompleteProfile';

export const AuthSchema = {
  LoginSchema: Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  }),
  SignupSchema: Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone is required'),
  }),

  editProfileSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone is required'),
    signature: Yup.string().required('signature is required'),
    country: Yup.string().required('Country is required'),
    gender: Yup.string().required('Gender is required'),
  }),
  CompleteProfile: Yup.object().shape({
    signature: Yup.string().required('signature is required'),
    country: Yup.string().required('Country is required'),
    gender: Yup.string().required('Gender is required'),
  }),
};

export const authInitialvalues = {
  Login: {
    email: 'james@mailinator.com',
    password: 'Admin@123',
  },
  Signup: {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  CompleteProfile: {
    username: '',
    bio: '',
    location: '',
    career: '',
    education: '',
    language: '',
  },
};
