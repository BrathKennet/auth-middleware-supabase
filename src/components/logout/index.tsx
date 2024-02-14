export default function ButtonLogout() {
  return (
    <form action="/auth-route/logout" method="post">
      <button className="bg-cyan-800 px-4 py-2 text-gray-200 font-bold rounded-md hover:scale-105 hover:bg-cyan-700 duration-500 mb-5">
        Logout
      </button>
    </form>
  );
}
