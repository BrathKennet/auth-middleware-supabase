import Link from "next/link";

export default function AuthForm({
  action,
  nameButton,
  alterLink,
  labelLink,
}: {
  action: string;
  nameButton: string;
  alterLink: string;
  labelLink: string;
}) {
  return (
    <div className="sm:w-[400px] sm:mx-0 mx-10 w-full">
      <form
        action={action}
        method="post"
        className="bg-cyan-950 w-full px-5 py-8 text-gray-300"
      >
        <div className="mb-8">
          <div className="font-semibold text-xl mb-2">
            <label htmlFor="email">Email</label>
          </div>
          <input
            name="email"
            className="w-full px-3 py-1 font-semibold text-black text-sm"
            required
          />
        </div>
        <div className="mb-8">
          <div className="font-semibold text-xl mb-2">
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-1 font-semibold text-black text-sm"
            required
          />
        </div>
        <div className="text-center">
          <button className="bg-cyan-800 px-4 py-2 text-gray-200 font-bold rounded-md hover:scale-105 hover:bg-cyan-700 duration-500 mb-5">
            {nameButton}
          </button>
        </div>
        <div className="text-right">
          <Link
            href={alterLink}
            className="text-cyan-600 tracking-wider font-bold hover:text-cyan-500 duration-500"
          >
            {labelLink}
          </Link>
        </div>
      </form>
    </div>
  );
}
