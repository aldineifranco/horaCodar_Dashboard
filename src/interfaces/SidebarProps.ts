import React from "react";

export interface SidebarProps {
  name: string;
  icon?: any;
  path: string;
  children: React.ReactNode;
}
