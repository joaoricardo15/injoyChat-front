import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Fab } from "@material-ui/core";
import { FiX } from "react-icons/fi";
import "./loadingPainel.style.css";

const LoadingPainelComponent = ({ imageSource, onAction, onActionTitle }) => {
  return (
    <div className="loadingContainer">
      <img src={imageSource} width="100%" alt="loading" />
      <div className="loadingTitleContainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <div className="loadingTitle">procurando sala no espaço...</div>
            <ScaleLoader height={18} color="#f50057" loading={true} />
          </div>
          {onAction && (
            <div className="actionButtonContainer">
              <Fab
                size="small"
                color="secondary"
                variant="extended"
                onClick={onAction}
              >
                <FiX />
                <div className={"actionButtonTitle"}>{onActionTitle}</div>
              </Fab>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingPainelComponent;
