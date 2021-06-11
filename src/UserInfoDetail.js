export default function UserInfoDetail({ userInfo }) {
  console.log(userInfo);
  return (
    <>
      <h2 class="d-flex justify-content-center">User Information</h2>
      <div class="d-flex justify-content-center">
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">User name: {userInfo.name}</h5>
            <p class="card-text">Email: {userInfo.email}</p>
            <p class="card-text">Password: {userInfo.password}</p>
          </div>
        </div>
      </div>
    </>
  );
}
