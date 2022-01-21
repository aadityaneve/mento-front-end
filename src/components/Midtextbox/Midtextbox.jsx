import React from 'react';
import {Box} from "@mui/material";

function Midtextbox() {
  return <div>
        <Box
        component="img"
        sx={{
          height: "650px",
          width: "85%",
          maxHeight: { xs: 310, sm: 460, md: 560, lg:660 },
          maxWidth: { xs: "100%", sm:"100%", md: "100%", lg:"100%" },
        }}
        alt="The house from the offer."
        src="https://d1tthr7pv14hhy.cloudfront.net/Images/general/midcover3.png"
      />
  </div>;
}

export default Midtextbox;
