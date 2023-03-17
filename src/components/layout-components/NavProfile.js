import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  EditOutlined,
  SettingOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Icon from "components/util-components/Icon";
import { signOut } from "store/slices/authSlice";

const MenuItem = (props) => (
  <a className="d-flex align-items-center" href={props.path}>
    <Icon className="font-size-md" type={props.icon} />
    <span className="font-weight-normal mx-2">{props.label}</span>
  </a>
);

const MenuItemSignOut = (props) => (
  <span className="d-flex align-items-center">
    <LogoutOutlined className="font-size-md" />
    <span className="font-weight-normal mx-2">{props.label}</span>
  </span>
);

export const NavProfile = () => {
  const dispatch = useDispatch();
  const user  = useSelector((state) => state.auth.user);

  const handleClick = ({ key }) => {
    if (key === "Sign Out") {
      handleSignOut();
    }
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const menu = (
    <Menu
      onClick={handleClick}
      items={[
        {
          key: "Sign Out",
          label: <MenuItemSignOut label="Sign Out" />,
        },
      ]}
    />
  );

  return (
    <Dropdown placement="bottomRight" overlay={menu} trigger={["click"]}>
      <div className="nav-item">
        <div className="d-flex align-items-center">
          <Avatar src="/img/avatars/thumb-1.jpg" />
          
          <div className="pl-2 d-none d-sm-block profile-text">
            <div className="font-size-base font-weight-bold">
              {user && user.name}
            </div>
            <span className="opacity-0-8">{user && user.email}</span>
          </div>
        </div>
      </div>
    </Dropdown>
  );
};

export default NavProfile;
