import UserInfoDetail from "./UserInfoDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserInfo({ userInfo, fetchData }) {
  // console.log(userInfo);
  const { id } = useParams();
  console.log(id);
  console.log(userInfo.filter((user) => console.log(user._id == id)));
  return (
    <section>
      {userInfo
        .filter((user) => {
          return user._id == id;
        })
        .map((user) => {
          return (
            <UserInfoDetail
              key={user._id}
              userInfo={user}
              fetchData={fetchData}
            ></UserInfoDetail>
          );
        })}
    </section>
  );
}
