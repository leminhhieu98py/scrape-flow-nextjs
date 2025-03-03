import { waitFor } from '@/lib/helpers/waitFor';

async function UserWorkflows() {
  await waitFor(3);

  return <div>Hello</div>;
}

export default UserWorkflows;
