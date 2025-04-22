import React from "react";
import { useForm } from "react-hook-form";
export const SimpleForm = () => {
    const {register,handleSubmit,watch,formState:{errors}} = useForm();
    const onSubmit=(data)=>{
        

    }
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <label >First Name</label>
            <input {...register("firstName", { required: true })} />
            {errors.firstName && <span>This field is required</span>}
            <label >Last Name</label>
            <input {...register("lastName", { required: true })} />
            {errors.lastName && <span>This field is required</span>}
            <label >Email</label>
            <input {...register("email",{required:true})} />"
            {errors.email && <span>This field is required</span>}
            <input type="submit" />
        </form>
    )
}