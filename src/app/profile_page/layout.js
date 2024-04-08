import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";

const ProfileLayout = ({children}) => {
    return (
        <div className={`container `}>
            <ProfileSideBar childrens={children} />
        </div>
    );
};

export default ProfileLayout;
