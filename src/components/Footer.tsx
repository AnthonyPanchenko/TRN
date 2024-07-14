import { appName } from '../config';

export default function Footer() {
  return (
    <footer className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <p className="text-sm text-center text-gray-900">
        © {new Date().getFullYear()} <strong className="font-semibold">{appName}</strong>. All rights reserved.
      </p>
    </footer>
  )
}
