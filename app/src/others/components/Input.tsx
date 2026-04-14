import type { ControllerRenderProps } from 'react-hook-form';
import type { RegisterSchemaType } from '../../auth/schemas/user.schema';
import ErrorInput from '../../auth/components/ErrorInput';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = ({
  name,
  id,
  placeholder,
  type,
  field,
  span = '1',
  error,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={`flex  flex-col gap-2 w-full ${span === '1' ? 'col-span-1' : span === '2' ? 'col-span-2' : ''}`}
    >
      <label
        htmlFor={id}
        className={`transition-all duration-300 uppercase text-xs px-2  ${field.value !== '' ? (error.conditional ? 'text-red-500' : 'text-purple-500/50') : 'text-white/50'}`}
      >
        {name}
      </label>
      <div className="relative w-full">
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        id={id}
        placeholder={placeholder}
        {...field}
        value={(field.value as string) || ''}
        className={`bg-black/70 w-full rounded-lg py-2 px-4 text-sm text-white placeholder:text-sm border border-transparent transition-all duration-300 focus:outline-none  ${error.conditional ? 'focus:border-red-500 placeholder:text-red-500 ' : 'focus:border-purple-500 focus:ring-blue-500'}`}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
          className="absolute cursor-pointer right-4 -translate-y-1/2 top-1/2  text-white/50 hover:text-white transition-colors duration-300"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
      </div>

      <ErrorInput message={error.message} conditional={error.conditional} />
    </div>
  );
};

interface InputProps {
  name: string;
  id: string;
  span?: '1' | '2';
  placeholder: string;
  type: 'text' | 'email' | 'password';
  error: {
    message: string;
    conditional: boolean;
  };
  field: ControllerRenderProps<
    RegisterSchemaType,
    'name' | 'email' | 'password' | 'lastName' | 'confirmPassword'
  >;
}

export default Input;
