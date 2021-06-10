import UserInfoDetail from "./UserInfoDetail";

export default function UserInfo({ userInfo }) {
  return (
    <section>
      {userInfo.map((userinfo) => {
        return <UserInfoDetail userinfo={userinfo}></UserInfoDetail>;
      })}
    </section>
  );
}
