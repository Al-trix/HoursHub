import { MdErrorOutline } from 'react-icons/md';

const ErrorInput = ({ message, conditional }: ErrorInputProps) => {
  return (
    conditional && (
      <span className="text-red-500 text-xs flex items-center px-1 gap-2 w-60  wrap-balance">
        <MdErrorOutline />
        {message}
      </span>
    )
  );
};

interface ErrorInputProps {
  message: string;
  conditional: boolean;
}

export default ErrorInput;
