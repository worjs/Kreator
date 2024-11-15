import { cn } from "utils/cn";

const Wrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="bg-primary min-h-screen w-screen">
      <div
        className={cn("bg-white min-h-screen mx-auto max-w-3xl", className)}
        {...props}
      />
    </div>
  );
};

export default Wrapper;
