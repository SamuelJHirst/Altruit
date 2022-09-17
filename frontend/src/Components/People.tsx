import { Avatar, AvatarGroup } from "@mui/material";
import P1 from '../resources/people/Ellipse 1.png'
import P2 from '../resources/people/Ellipse 2.png'
import P3 from '../resources/people/Ellipse 4.png'

export function People() {

return  <AvatarGroup className="justify-end" componentsProps={{additionalAvatar:{sx:{backgroundColor:'#FFB057'}}}} total={24} max={4}  >
  <Avatar  sx={{backgroundColor:'#FFB057'}} alt="Remy Sharp" src={P1} />
  <Avatar sx={{backgroundColor:'#FFB057'}} alt="Travis Howard" src={P2} />
  <Avatar sx={{backgroundColor:'#FFB057'}} alt="Travis Howard" src={P3} />
</AvatarGroup>
  ;
}
