// eslint-disable-next-line no-unused-vars
import React from "react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";

const Comment = ({ name, comment, image }) => {
  return (
    <div className=" flex items-center mt-2 w-full">
      <div className="mx-2">
        <Avatar
        
          alt="avatar"
       
          className="rounded-full w-10"
          src={image || avatar}
        ></Avatar>
      </div>
      <div className="flex flex-col items-start bg-gray-100 rounded-2xl p-1 max-w-[200px]">
        <p className="font-roboto text-black text-[12px] no-underline tracking-normal leading-none p-1 font-medium">
          {name}
        </p>
        <p className="font-roboto text-black text-[14px] no-underline tracking-normal leading-none p-1 font-medium">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
