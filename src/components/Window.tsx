import React from "react";
import { Area } from "./Area";
import { Toolbar } from "./Toolbar";
import "./Window.css";

interface WindowProps {
  name: string;
  text: string;
  hideSelf: boolean;
  hideOther: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleHideOther:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const Window: React.FC<WindowProps> = ({
  name,
  text,
  hideSelf,
  hideOther,
  handleChange,
  handleHideOther,
}) => {
  if (hideSelf) {
    return <></>;
  }
  return (
    <div
      className={`float-right px-1 pt-2 animate-width`}
      key={`window-${name}`}
      style={{ width: hideOther ? "100%" : "50%" }}
    >
      <form>
        <div className="form-group m-0">
          <Toolbar
            name={name}
            hideOther={hideOther}
            handleHideOther={handleHideOther}
          />
          <Area text={text} type={name} handleChange={handleChange} />
        </div>
      </form>
    </div>
  );
};
