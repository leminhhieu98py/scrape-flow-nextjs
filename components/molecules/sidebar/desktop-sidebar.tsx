import Logo from '../logo';
import SidebarMenuItems from './sidebar-menu-items';

function DesktopSidebar() {
  return (
    <div className="hidden relative md:block w-[280px] h-screen overflow-hidden bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      {/* TODO: implement credits later */}
      {/* <div className="p-2">Credits</div> */}
      <div className="flex flex-col p-2">
        <SidebarMenuItems />
      </div>
    </div>
  );
}

export default DesktopSidebar;
