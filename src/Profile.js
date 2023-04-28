import React,{Profiler, useState} from "react";
export const Profile=(props)=>{
    return(
        <div>
            <span>{props.state.name}</span>
            <span>{props.state.email}</span>
            <span>{props.state.pass}</span>
        </div>
    );
}
export default Profile;