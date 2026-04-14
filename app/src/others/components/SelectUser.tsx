import type { ControllerRenderProps } from 'react-hook-form';
import type { RegisterSchemaType } from '../../auth/schemas/user.schema';
import ErrorInput from '../../auth/components/ErrorInput';

const SelectUser = ({ field, options, error }: SelectUserProps) => {
  console.log(field);
  return (
    <>
      <div className="grid grid-cols-2 relative items-center gap-2 uppercase bg-black/70 rounded-lg p-1.5 w-full">
        <span
          className={`w-[46%] min-h-[75%] bg-linear-to-r from-gray-500/30 to-white/30 rounded-lg absolute  flex transition-all duration-300 ${field.value === 'user' ? 'left-2' : 'left-[52%]'}`}
        ></span>
        {options.map((option) => (
          <label
            key={option.value}
            htmlFor={option.value}
            className={`flex cursor-pointer transition-all duration-300 hover:bg-white/5 items-center  rounded-lg p-2 justify-center gap-2 `}
          >
            <input
              type="radio"
              value={option.value}
              name={field.name}
              checked={field.value === option.value}
              onChange={(e) => field.onChange(e.target.value)}
              onBlur={field.onBlur}
              id={option.value}
              className="hidden"
            />
            <span className="text-white flex text-sm items-center gap-2">
              {option.icon} {option.name}
            </span>
          </label>
        ))}
      </div>
      <ErrorInput message={error.message} conditional={error.conditional} />
    </>
  );
};

interface SelectUserProps {
  options: {
    name: string;
    value: string;
    icon: React.ReactNode;
  }[];
  field: ControllerRenderProps<RegisterSchemaType, 'typeUser'>;
  error: {
    message: string;
    conditional: boolean;
  };
}
export default SelectUser;
