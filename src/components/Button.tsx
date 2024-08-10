const Button = ({ title }: { title: string }) => {
  return (
    <button className="font-semibold m-2 px-5 py-2 bg-gray-800 text-gray-50 rounded-lg flex justify-center items-center">
      {title}
    </button>
  );
};

export default Button;
