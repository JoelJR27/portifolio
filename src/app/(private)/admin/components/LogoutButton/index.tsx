import { DoorOpenIcon } from 'lucide-react';
import { logout } from '../../actions/logout';
import { Button } from '@/components/ui/button';

export default function LogoutButton() {
  return (
    <Button onClick={logout}>
      <DoorOpenIcon size={18} />
      Logout
    </Button>
  );
}
