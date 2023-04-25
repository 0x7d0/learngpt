const Button = ({ children, secondary, disabled, ...props }) => {
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";
  const variant = secondary
    ? "border-2 border-blue-700 bg-white hover:bg-blue-100 text-blue-700"
    : "bg-blue-500 hover:bg-blue-700 text-white";
  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg ${variant} ${disabledClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
