import { VStack, Button } from "@chakra-ui/react";
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from "react-icons/ri";
import { useLocation,Link } from "react-router-dom";

const Sidebar = () =>{
    const location = useLocation();
    return(
        <div>
          <VStack minH={"150vh"} spacing={'8'} p={'16'} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
            <LinkButton Icon={RiDashboardFill} text={"Dashboard"} url={'dashboard'} active={location.pathname==='/admin/dashboard'}/>
            <LinkButton Icon={RiAddCircleFill} text={"Create Course"} url={'createcourse'} active={location.pathname==='/admin/createcourse'}/>
            <LinkButton Icon={RiEyeFill} text={"Courses"} url={'courses'} active={location.pathname==='/admin/courses'}/>
            <LinkButton Icon={RiUser3Fill} text={"Users"} url={'users'} active={location.pathname==='/admin/users'} />
          </VStack>
        </div>
    )
}
export default Sidebar;

function LinkButton ({url,Icon,text,active}){
    return(
        <Link to={`/admin/${url}`}>
        <Button fontSize={'larger'} variant={'ghost'} colorScheme={active?'purple':""}>
         <Icon style={{margin:'4px'}}/>
         {text}</Button></Link>
    );
}