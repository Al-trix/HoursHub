import axiosInstance from '../../axios';

const registerApi = async (data: RegisterSchemaType) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};