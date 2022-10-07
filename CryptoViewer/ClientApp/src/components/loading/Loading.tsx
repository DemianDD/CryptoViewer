import React from "react";
import { NavLink } from "react-router-dom";
import Spinner from "./Spinner";

interface IProps {
    children: JSX.Element | JSX.Element[];
    isLoading: boolean;
}

export const Loading = (props: IProps) => { 
    return (
        <>
            {
                props.isLoading ? (
                    <Spinner />
                ) : (
                    props.children
                )
            }
        </>
    );
}