"use client";
import { useState } from 'react';
import { SlClose } from 'react-icons/sl';

const AnnouncementCard = () => {
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    const handleClose = () => {
        setShowAnnouncement(false);
    };

    return (
        <>
            {showAnnouncement && (
                <div className="shadow-sm bg-yellow-500 py-2 px-4 w-full  z-50">  {/*fixed top-0 left-0 right-0*/}
                    <div className="flex items-center justify-between">
                        <p className="text-white font-medium text-center m-auto">
                            This Page is Under Work So, Some Features May Not Work
                        </p>
                        <button
                            onClick={handleClose}
                            className="text-white hover:text-gray-200 focus:outline-none"
                        >
                            <SlClose className="h-5 w-5" />
                            {/* <XIcon className="h-5 w-5" /> */}
                        </button>
                    </div>
                </div>
            )}
            {/* The rest of your application */}
        </>
    );
};

export default AnnouncementCard;
