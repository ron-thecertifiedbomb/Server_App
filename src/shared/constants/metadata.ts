import { Metadata } from 'next';

import { AppInfo } from '.';

export const metadata: Metadata = {
  title: AppInfo.name,
  description: AppInfo.description,
};
