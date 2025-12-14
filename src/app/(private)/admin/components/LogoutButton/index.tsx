import { DoorOpenIcon } from 'lucide-react';
import { logout } from '../../actions/logout';

export default function LogoutButton() {
  return (
    <button
      className="flex cursor-pointer items-center gap-2 border border-gray/10 p-2 text-sm font-semibold transition-colors duration-300 hover:bg-gray hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-gray"
      onClick={logout}
    >
      <DoorOpenIcon size={18} />
      Logout
    </button>
  );
}
