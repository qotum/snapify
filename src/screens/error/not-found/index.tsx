import type { NextPage } from "next";
import React from "react";

import Button from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

const NotFoundPage: NextPage = () => {
  return (
    <div className={"h-[100vh] flex flex-col items-center justify-center"}>
      <h1
        className={"text-white font-bold text-[70px] uppercase leading-[65px]"}
      >
        {"Erreur 404"}
      </h1>

      <h2 className={"text-gradient font-semibold text-extraTitle"}>
        {"GG! Mais ce n'est pas le bon chemin :("}
      </h2>

      <Button className={"mt-[20px]"} color={"secondary"} href={ROUTES.HOME}>
        {"Retour à l'accueil"}
      </Button>
    </div>
  );
};

export default NotFoundPage;
