import React from "react";

const HelloLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      this is hello HelloLayout
      {children}
    </div>
  );
};

export default HelloLayout;
