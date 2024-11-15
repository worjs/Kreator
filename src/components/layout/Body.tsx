import { cn } from "utils/cn";

const Body = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  // consider header height 72px;
  return <div className={cn("min-h-[calc(100vh-72px)]", className)} {...props} />;
};

export default Body;
