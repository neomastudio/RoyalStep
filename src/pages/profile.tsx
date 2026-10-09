import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import { setupProfile, type Profile } from "../slice/profileSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ButtonBack from "./buttonBack";

export default function Profile() {
  const dispatch = useDispatch();

  const savedProfile = localStorage.getItem("profile");
  const items = savedProfile ? JSON.parse(savedProfile) : null;

  const [enterProfile, setEnterProfile] = useState<boolean>(false);

  const [profile, setProfile] = useState<Profile>({
    fullname: "",
    phoneNumber: "",
    city: "",
    address: "",
    postal: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setupProfile(profile));
    localStorage.setItem("profile",JSON.stringify(profile))
    setEnterProfile(true);
    toast.success("Profile saved successfully!")
  };

  const handleSubmitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnterProfile(false);
    toast.warning("Profile updated successfully!")
  }

  useEffect(()=>{
    if ( savedProfile ) {
      setEnterProfile(true);
    } else {
      setEnterProfile(false);
    }
  },[])

  return (
    <>
      <div className="profilePage">
        <div className="headProfile">
          <span className="circle"></span>
          <h2>Your Profile</h2>
          <p>Keep your information up to date for faster checkout.</p>
        </div>
        {enterProfile ? (
          <form onSubmit={handleSubmitEdit}>
            <label htmlFor="fullName">Full-name</label>
            <input
              id="fullName"
              type="text"
              value={items?.fullname}
              disabled
            />

            <label htmlFor="phoneNum">Phone-number</label>
            <input
              id="phoneNum"
              type="tel"
              inputMode="numeric"
              value={items?.phoneNumber}
              disabled
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={items?.city}
              disabled
            />

            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              value={items?.address}
              disabled
            />

            <label htmlFor="postal">Postal-code</label>
            <input
              id="postal"
              type="text"
              inputMode="numeric"
              disabled
              value={items?.postal}
            />
            <button type="submit">Edit</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full-name</label>
            <input
              id="fullName"
              type="text"
              required
              onChange={(e) =>
                setProfile({ ...profile, fullname: e.target.value })
              }
            />

            <label htmlFor="phoneNum">Phone-number</label>
            <input
              id="phoneNum"
              type="tel"
              inputMode="numeric"
              value={profile.phoneNumber}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  phoneNumber: e.target.value.replace(/\D/g, ""),
                });
              }}
              required
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              required
              onChange={(e) => {
                setProfile({ ...profile, city: e.target.value });
              }}
            />

            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              required
              onChange={(e) => {
                setProfile({ ...profile, address: e.target.value });
              }}
            />

            <label htmlFor="postal">Postal-code</label>
            <input
              id="postal"
              type="text"
              inputMode="numeric"
              maxLength={10}
              value={profile.postal}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  postal: e.target.value.replace(/\D/g, ""),
                });
              }}
              required
            />
            <button type="submit">Save</button>
          </form>
        )}
        <ButtonBack/>
      </div>
    </>
  );
}


