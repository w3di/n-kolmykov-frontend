import type { Metadata } from 'next';

import { Defaults } from '@/components/layout';
import { NotFoundContent } from '@/src/components/pages/not-found/not-found';

export const metadata: Metadata = {
  title: 'Страница не найдена — 404',
  description:
    'Запрашиваемая страница не найдена. Возможно, она была удалена или вы перешли по неверной ссылке.'
};

const NotFound = () => {
  return (
    <Defaults>
      <NotFoundContent />
    </Defaults>
  );
};

export default NotFound;
