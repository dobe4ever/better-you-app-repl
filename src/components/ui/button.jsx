import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300",
      className
    )}
    {...props}
  />
));
Button.displayName = "Button";

export { Button };
