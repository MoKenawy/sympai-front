"use client";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const SigninButton = () => {
  const session : any = null;
  if (session && session.user) {


    return (
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={session.user.name as string}
              size="sm"
              src={session.user.image as string}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{session.user.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    );
  }

  function signIn(): void {
    throw new Error("Function not implemented.");
  }
  function signOut(): void {
    throw new Error("Function not implemented.");
  }
  
  return (
    <button onClick={() => signIn()} className="flex gap-4 ml-auto text-black">
      Sign In
    </button>
  );
};

export default SigninButton;

