import { Avatar, AvatarGroup } from "@mui/material";

export function People() {

return  <AvatarGroup className="justify-end" componentsProps={{additionalAvatar:{sx:{backgroundColor:'#FFB057'}}}} total={24} max={4}  >
  <Avatar sx={{backgroundColor:'#FFB057'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar sx={{backgroundColor:'#FFB057'}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar sx={{backgroundColor:'#FFB057'}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
</AvatarGroup>
  ;
}
