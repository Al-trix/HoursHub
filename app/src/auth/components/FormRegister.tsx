import { RiAdminLine } from 'react-icons/ri';
import { LuUser } from 'react-icons/lu';
import {
  type RegisterSchemaType,
  registerSchema,
} from '../schemas/user.schema';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectUser from '../../others/components/SelectUser';
import Input from '../../others/components/Input';

const FormRegister = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    defaultValues: {
      typeUser: 'user',
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
  });

  //! logica al servidor
  const onSubmit = (data: Omit<RegisterSchemaType, 'confirmPassword'>) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 mt-8">
        <h5 className="text-white/50 uppercase text-xs px-2">
          Select your role
        </h5>
        <Controller
          name="typeUser"
          control={control}
          render={({ field }) => (
            <SelectUser
              field={field}
              options={[
                { name: 'User', value: 'user', icon: <LuUser /> },
                { name: 'Admin', value: 'admin', icon: <RiAdminLine /> },
              ]}
              error={{
                message: errors.typeUser?.message || '',
                conditional: !!errors.typeUser,
              }}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-7">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              name="Name"
              id="name"
              placeholder="Name"
              type="text"
              error={{
                message: errors.name?.message || '',
                conditional: !!errors.name,
              }}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              name="Last Name"
              id="lastName"
              placeholder="Last Name"
              type="text"
              error={{
                message: errors.lastName?.message || '',
                conditional: !!errors.lastName,
              }}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              name="Email"
              id="email"
              placeholder="email"
              type="email"
              span="2"
              error={{
                message: errors.email?.message || '',
                conditional: !!errors.email,
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              name="Password"
              id="password"
              placeholder="password"
              type="password"
              error={{
                message: errors.password?.message || '',
                conditional: !!errors.password,
              }}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              name="Confirm Password"
              id="confirmPassword"
              placeholder="confirmPassword"
              type="password"
              error={{
                message: errors.confirmPassword?.message || '',
                conditional: !!errors.confirmPassword,
              }}
            />
          )}
        />
      </div>

      <button
        className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg mt-5"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default FormRegister;
