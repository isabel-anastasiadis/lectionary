import { styled } from "../../stitches.config";

interface SettingsProps {}

const StyledSettings = styled("div", {
  color: "$foreground",
});

const SettingsPage = (props: SettingsProps) => {
  return (
    <StyledSettings>
      <h1>Settings!!</h1>
    </StyledSettings>
  );
};

export default SettingsPage;
