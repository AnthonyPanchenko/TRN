import { redirect } from 'next/navigation';

import { LocaleCodes } from '../constants/localization';

// This page only renders when the app is built statically (output: 'export')
export default function RootLocalePage() {
  redirect(`/${LocaleCodes.EN}`);
}
