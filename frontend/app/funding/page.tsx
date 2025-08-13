import { redirect } from 'next/navigation';

// Redirect funding page to the new organizations resource page
export default function FundingPage() {
  redirect('/services/organizations');
}
