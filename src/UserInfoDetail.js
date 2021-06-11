export default function UserInfoDetail({ userinfo }) {
    return (
        <>
            <h2 class="d-flex justify-content-center">User Information</h2>
            <div class="d-flex justify-content-center">
                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">User name: {userinfo.name}</h5>
                        <p class="card-text">Email: {userinfo.email}</p>
                        <p class="card-text">Password: {userinfo.password}</p>
                    </div>
                </div>
            </div>
        </>
    );
}