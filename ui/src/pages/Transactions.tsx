import { Box, Typography, IconButton } from "@mui/material";
import React from "react";
import { CreateAccountForm } from "../components/CreateAccountForm/CreateAccountForm";
import { usePageStyles } from "./AssetProfilePage";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { isMobile } from "../platform/platform";
import {useGetMyTransactionsByAssetType} from "../ledgerHooks/ledgerHooks"




import { useLocation } from "react-router-dom";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  Avatar,
  Card,
  CardContent,
  
  LinearProgress,
  
} from "@mui/material";
import { AssetDetails } from "../components/AssetDetails/AssetDetails";
import SendIcon from "@mui/icons-material/Send";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";

import { chipColors } from "../components/RowChip/RowChip";
import { numberWithCommas } from "../utils/numberWithCommas";
import { useGetMyOwnedAssetsByAssetType } from "../ledgerHooks/ledgerHooks";
import { getAssetSum } from "../utils/getAssetSum";
import ReportIcon from "@mui/icons-material/Report";
import { userContext } from "../App";
import { useCustomAdminParty } from "../hooks/useCustomAdminParty";
import { useGetUrlParams } from "../hooks/useGetAllUrlParams";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";

export const Transactions: React.FC = () => {
  const nav = useNavigate();

  const classes = usePageStyles();
  const onClick = () => {
    nav(-1);
  };
  const params = useGetUrlParams();
  const { search } = useLocation();
  const party = userContext.useParty();
  const reference = params.reference as string | null;
  const issuer = params.issuer as string;
  const symbol = params.symbol as string;
  const owner = params.owner as string;
  const isShareable = params.isShareable as boolean;
  const isAirdroppable = params.isAirdroppable as boolean;
  const isFungible = params.isFungible as boolean;
  const { loading, contracts } = useGetMyTransactionsByAssetType({
    reference,
    issuer,
    symbol,
    isFungible,
    owner,
});

  console.log("Here" , contracts);

  return (
    <div className={classes.root}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          margin={1}
          width="100%"
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent="start"
        >
          {isMobile() && (
            <Box position="absolute">
              <IconButton color="primary" onClick={onClick}>
                <ArrowBackIosNewIcon />
              </IconButton>
            </Box>
          )}
          <Box flexGrow="1" textAlign="center">
            <Typography
              color="primary"
              variant="h5"
              sx={{ flexGrow: 1, marginLeft: "auto" }}
            >
              Transaction History
            </Typography>
          </Box>
        </Box>
        <div className={classes.cardContent}>
          
        </div>
      </Box>
    </div>
  );
};
