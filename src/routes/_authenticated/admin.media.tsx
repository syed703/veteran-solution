import { createFileRoute } from '@tanstack/react-router';
import { adminHead } from '@/lib/admin-query';
import { AdminTitle } from '@/components/admin/admin-shared';
import { MediaLibrary } from '@/components/admin/media-library';
export const Route = createFileRoute('/_authenticated/admin/media')({ head: () => adminHead('Media library'), component: Media });
function Media() { return <><AdminTitle title="Media library" description="Website images" /><MediaLibrary /></>; }