import React, { useState, useEffect } from "react";
import { Button, Typography, IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { FaHeart } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const InstallCardComponent = () => {
  const [installationEvent, setInstallationEvent] = useState(null);
  const installApp = () => {
    installationEvent.prompt();
    installationEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") setInstallationEvent(null);
    });
  };

  const showInstalattionPainel = (event) => {
    event.preventDefault();
    setInstallationEvent(event);
  };

  const closePainel = () => {
    setInstallationEvent(null);
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) =>
      showInstalattionPainel(e)
    );
  }, []);

  return (
    installationEvent && (
      <Card
        style={{
          left: 10,
          right: 10,
          bottom: 10,
          padding: 10,
          display: "flex",
          position: "fixed",
          alignItems: "center",
        }}
      >
        <FiX color="secondary" onClick={closePainel} />
        <Typography
          style={{
            flex: 1,
            fontSize: 10,
            textAlign: "end",
            marginRight: 20,
          }}
        >
          Tenha uma experiência mobile completa
        </Typography>
        <Button
          variant="outlined"
          startIcon={
            <IconButton size="small" color="secondary">
              <FaHeart />
            </IconButton>
          }
          onClick={installApp}
        >
          Instalar
        </Button>
      </Card>
    )
  );
};

export default InstallCardComponent;
