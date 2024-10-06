import React from 'react';
import {FaRegEdit} from "react-icons/fa";
import moment from "moment";

const UserInfo = ({tweet}) => {

    const userNickName = tweet?.user.name?.toLowerCase().replaceAll(" ", "_");

    let date = tweet.createAt?.toDate();
    date = moment(date).fromNow()

    return (
        <div className="user-info flex gap-3 items-center whitespace-nowrap text-gray-500">
            <p className='text-white max-sm:text-sm'>{tweet.user.name}</p>
            <p className='text-sm max-sm:text-[12px]'>@{userNickName}</p>
            <p className='text-sm max-sm:text-[12px]'>{date}</p>

            {
                tweet.isEdited && <p className='text-xs'>
                    <FaRegEdit size={18} className='md:hidden'/>
                    <span className='max-md:hidden'>* duzenlendi</span>
                </p>
            }

        </div>
    );
};

export default UserInfo;
