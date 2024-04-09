import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { children, textarea, label, id, ...props },
  ref
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  let input = (
    <p className="flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500"
        htmlFor={id}
      >
        {label}
      </label>

      {textarea ? (
        <textarea ref={ref} className={classes} name={id} id={id} {...props}>
          {children}
        </textarea>
      ) : (
        <input ref={ref} className={classes} id={id} type="text" {...props} />
      )}
    </p>
  );

  return input;
});

export default Input;
