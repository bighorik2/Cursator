import React from "react";

export type ButtonProps =
  React.PropsWithChildren<{ onClick?: () => void }>

export type TakeTestProps = React.PropsWithChildren<{ onClick?: () => void; href: string }> 