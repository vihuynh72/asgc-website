import { PrismaClient, UserRole, VoteChoice, RequestStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  if (process.env.NODE_ENV === 'production') {
    console.log('Skipping seed in production')
    return
  }

  console.log('Seeding database...')

  // Create users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@asgc.edu' },
    update: {},
    create: {
      email: 'admin@asgc.edu',
      name: 'ASGC Admin',
      role: UserRole.ADMIN,
    },
  })

  const officerUser = await prisma.user.upsert({
    where: { email: 'president@asgc.edu' },
    update: {},
    create: {
      email: 'president@asgc.edu',
      name: 'ASGC President',
      role: UserRole.OFFICER,
    },
  })

  const studentUser = await prisma.user.upsert({
    where: { email: 'student@asgc.edu' },
    update: {},
    create: {
      email: 'student@asgc.edu',
      name: 'Student Member',
      role: UserRole.STUDENT,
    },
  })

  // Create councils
  const executiveCouncil = await prisma.council.upsert({
    where: { name: 'Executive Council' },
    update: {},
    create: {
      name: 'Executive Council',
      description: 'ASGC Executive leadership team',
    },
  })

  const studentSenate = await prisma.council.upsert({
    where: { name: 'Student Senate' },
    update: {},
    create: {
      name: 'Student Senate',
      description: 'Student representative body',
    },
  })

  // Create meetings
  const meeting1 = await prisma.meeting.create({
    data: {
      councilId: executiveCouncil.id,
      date: new Date('2025-08-15T14:00:00Z'),
      location: 'Student Center Room 200',
      livestream: 'https://zoom.us/j/123456789',
      publicNote: 'Public comment period: 2:00-2:15 PM. Please register to speak at asgc.edu/speak',
    },
  })

  const meeting2 = await prisma.meeting.create({
    data: {
      councilId: studentSenate.id,
      date: new Date('2025-08-22T15:00:00Z'),
      location: 'Library Conference Room',
      publicNote: 'Open to all students. Public comment welcome.',
    },
  })

  // Create sample agendas and minutes
  await prisma.agenda.create({
    data: {
      meetingId: meeting1.id,
      title: 'Executive Council Meeting Agenda - August 15, 2025',
      s3Key: 'governance/agendas/exec-council-2025-08-15-agenda.pdf',
    },
  })

  await prisma.minutes.create({
    data: {
      meetingId: meeting1.id,
      title: 'Executive Council Meeting Minutes - August 15, 2025',
      s3Key: 'governance/minutes/exec-council-2025-08-15-minutes.pdf',
      summary: 'Council discussed budget allocations, upcoming events, and student feedback initiatives.',
    },
  })

  // Create resolutions
  const resolution1 = await prisma.resolution.create({
    data: {
      code: 'ASGC-2025-01',
      title: 'Resolution Supporting Student Mental Health Services',
      text: 'WHEREAS, student mental health is a priority...',
      adoptedOn: new Date('2025-08-15T14:30:00Z'),
    },
  })

  // Create votes
  await prisma.vote.create({
    data: {
      meetingId: meeting1.id,
      resolutionId: resolution1.id,
      memberName: 'John Smith',
      memberRole: 'President',
      vote: VoteChoice.YES,
    },
  })

  await prisma.vote.create({
    data: {
      meetingId: meeting1.id,
      resolutionId: resolution1.id,
      memberName: 'Jane Doe',
      memberRole: 'Vice President',
      vote: VoteChoice.YES,
    },
  })

  // Create committees
  await prisma.committee.createMany({
    data: [
      {
        name: 'Budget Committee',
        description: 'Oversees ASGC budget and funding allocations',
        cadence: 'Weekly',
        seats: 5,
        applyUrl: 'https://asgc.edu/apply/budget-committee',
      },
      {
        name: 'Student Life Committee',
        description: 'Plans events and student engagement initiatives',
        cadence: 'Biweekly',
        seats: 7,
        applyUrl: 'https://asgc.edu/apply/student-life',
      },
      {
        name: 'Academic Affairs Committee',
        description: 'Addresses academic policies and student concerns',
        cadence: 'Monthly',
        seats: 6,
        applyUrl: 'https://asgc.edu/apply/academic-affairs',
      },
    ],
  })

  // Create funding programs
  const studentOrgProgram = await prisma.fundingProgram.create({
    data: {
      name: 'Student Organization Funding',
      description: 'Support for registered student organizations',
      capAmount: 500000, // $5,000 in cents
    },
  })

  const eventProgram = await prisma.fundingProgram.create({
    data: {
      name: 'Event Funding',
      description: 'Funding for student events and activities',
      capAmount: 200000, // $2,000 in cents
    },
  })

  // Create sample funding requests
  await prisma.fundingRequest.create({
    data: {
      programId: studentOrgProgram.id,
      orgName: 'Environmental Club',
      contactEmail: 'enviro@students.edu',
      status: RequestStatus.SUBMITTED,
      amountCents: 75000, // $750
      submittedAt: new Date(),
      attachments: JSON.stringify([
        { filename: 'budget.pdf', s3Key: 'funding/environmental-club-budget.pdf' },
        { filename: 'proposal.docx', s3Key: 'funding/environmental-club-proposal.docx' },
      ]),
    },
  })

  // Create events
  await prisma.event.createMany({
    data: [
      {
        title: 'Welcome Week',
        description: 'Student orientation and activities',
        startsAt: new Date('2025-08-25T09:00:00Z'),
        endsAt: new Date('2025-08-29T17:00:00Z'),
        location: 'Student Center Plaza',
      },
      {
        title: 'ASGC Town Hall',
        description: 'Open forum for student questions and concerns',
        startsAt: new Date('2025-09-10T12:00:00Z'),
        endsAt: new Date('2025-09-10T13:00:00Z'),
        location: 'Main Auditorium',
      },
      {
        title: 'Career Fair',
        description: 'Connect with local employers and internship opportunities',
        startsAt: new Date('2025-09-15T10:00:00Z'),
        endsAt: new Date('2025-09-15T16:00:00Z'),
        location: 'Gymnasium',
      },
    ],
  })

  // Create jobs
  await prisma.job.createMany({
    data: [
      {
        title: 'Student Assistant - ASGC Office',
        department: 'Student Government',
        description: 'Support ASGC operations and student services',
        applyUrl: 'https://asgc.edu/jobs/student-assistant',
      },
      {
        title: 'Peer Tutor - Math Center',
        department: 'Academic Support',
        description: 'Provide tutoring support for math courses',
        applyUrl: 'https://asgc.edu/jobs/math-tutor',
      },
      {
        title: 'Event Coordinator Assistant',
        department: 'Student Life',
        description: 'Help plan and execute campus events',
        applyUrl: 'https://asgc.edu/jobs/event-coordinator',
      },
    ],
  })

  // Create news posts
  await prisma.newsPost.createMany({
    data: [
      {
        title: 'ASGC Welcomes New Student Senate Members',
        slug: 'welcome-new-senate-members',
        body: 'We are excited to announce our new Student Senate members for the 2025-26 academic year...',
        publishedAt: new Date(),
      },
      {
        title: 'New Mental Health Resources Available',
        slug: 'mental-health-resources',
        body: 'ASGC has partnered with the counseling center to expand mental health support...',
        publishedAt: new Date(),
      },
      {
        title: 'Student Organization Funding Applications Open',
        slug: 'funding-applications-open',
        body: 'Student organizations can now apply for funding for the fall semester...',
        publishedAt: new Date(),
      },
    ],
  })

  // Create funding policies
  await prisma.fundingPolicy.createMany({
    data: [
      {
        title: 'Student Organization Funding Guidelines',
        body: `# Student Organization Funding Guidelines

## Eligibility Requirements
- Must be a registered student organization
- Organization must be in good standing
- Request must align with ASGC mission

## Application Process
1. Submit complete application form
2. Provide detailed budget breakdown
3. Include supporting documentation
4. Attend funding committee presentation

## Review Process
Applications are reviewed monthly by the Budget Committee.`,
        effectiveOn: new Date('2025-08-01'),
      },
      {
        title: 'Event Funding Policy',
        body: `# Event Funding Policy

## Purpose
Support student-organized events that benefit the campus community.

## Funding Limits
- Maximum $2,000 per event
- One application per organization per semester

## Requirements
- Event must be open to all students
- Must comply with campus policies
- Post-event report required`,
        effectiveOn: new Date('2025-08-01'),
      },
    ],
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
