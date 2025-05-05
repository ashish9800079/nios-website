import Image from 'next/image';
import Link from 'next/link';

const announcements = [
  {
    id: 1,
    title: 'Admission Open for 2024-25 Session',
    description: 'Last date for submission: 31st March 2024',
    href: '/admission',
  },
  {
    id: 2,
    title: 'New Course Launched: Digital Marketing',
    description: 'Enroll now for the upcoming batch',
    href: '/courses',
  },
  {
    id: 3,
    title: 'Exam Schedule Released',
    description: 'Check your exam dates and centers',
    href: '/exams',
  },
];

const featuredCourses = [
  {
    id: 1,
    name: 'Secondary (Class 10)',
    description: 'Complete your secondary education with NIOS',
    href: '/courses/secondary',
  },
  {
    id: 2,
    name: 'Senior Secondary (Class 12)',
    description: 'Pursue higher secondary education',
    href: '/courses/senior-secondary',
  },
  {
    id: 3,
    name: 'Vocational Courses',
    description: 'Skill-based courses for career development',
    href: '/courses/vocational',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to National Institute of Open Schooling
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empowering learners through open and distance education. Join us to achieve your academic goals with flexible learning options.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/admission"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Apply Now
              </Link>
              <Link href="/courses" className="text-sm font-semibold leading-6 text-gray-900">
                Explore Courses <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/images/hero-image.jpg"
                alt="Students studying"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Announcements section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Announcements</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay updated with the latest news and important dates.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {announcements.map((announcement) => (
            <article key={announcement.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2024-03-01" className="text-gray-500">
                  Mar 1, 2024
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={announcement.href}>
                    <span className="absolute inset-0" />
                    {announcement.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{announcement.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Featured courses */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Featured Courses</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Path to Success
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our wide range of courses designed to help you achieve your academic and career goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <div key={course.id} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {course.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{course.description}</p>
                    <p className="mt-6">
                      <Link
                        href={course.href}
                        className="text-sm font-semibold leading-6 text-blue-600"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 