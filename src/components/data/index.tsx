import { getUser } from "@/services/auth";

export default async function Data() {
  const user = await getUser();

  return (
    <div>
      <p className="mb-3 font-semibold text-lg">Datos</p>
      {user && (
        <div>
          <p>
            <span className="font-semibold">Id: </span>
            {user.id}
          </p>
          <p>
            <span className="font-semibold">Aud: </span>
            {user.aud}
          </p>
          <p>
            <span className="font-semibold">Role: </span>
            {user.role}
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            {user.email}
          </p>
          <p>
            <span className="font-semibold">Email Confirmed At: </span>
            {user.email_confirmed_at}
          </p>
          <p>
            <span className="font-semibold">Last Sign In At: </span>
            {user.last_sign_in_at}
          </p>
        </div>
      )}
    </div>
  );
}