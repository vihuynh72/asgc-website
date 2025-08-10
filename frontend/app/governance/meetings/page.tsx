import { MeetingList } from '../../../components/governance/MeetingList';
import { upcomingMeetings } from '../../../lib/content/data';

export default function MeetingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">ASGC Meetings</h1>
        <p className="text-gray-600 max-w-3xl">
          Stay informed about ASGC meetings. All meetings are open to students unless otherwise noted.
          Public comment periods are available at most meetings.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Public Participation</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• All students welcome to attend meetings</li>
          <li>• Public comment periods typically 2-3 minutes per speaker</li>
          <li>• Register to speak at meetings in advance when possible</li>
          <li>• ADA accommodations available - contact us 48 hours in advance</li>
        </ul>
      </div>

      <MeetingList meetings={upcomingMeetings} />
    </div>
  )
}
