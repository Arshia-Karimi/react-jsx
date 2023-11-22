import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const SubmitFrom = () => {
  const schema = yup.object().shape({
    name: yup.string().required("فیلد نام اجباری است"),
    email: yup
      .string()
      .email(".ایمیل نا معتبر است")
      .required(".ایمیل اجباری است"),
    age: yup.number().positive().min(18).max(100).required(),
    password: yup
      .string()
      .min(4)
      .max(15)
      .matches(/[a-z]+/)
      .matches(/[A-Z]+/)
      .matches(/\d+/),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "رمز یکی نیست")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onFormSubmit = (date) => {
    console.log("the form is submit");
    console.log(date);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="Name ..." {...register("name")} /> <br />
      <br />
      {errors.name && <p>{errors.name?.message}</p>}
      <input type="text" placeholder="Email ..." {...register("email")} />
      <br /> <br />
      <p>{errors.email?.message}</p>
      <input
        type="number"
        placeholder="Age ..."
        {...register("age")}
      /> <br /> <br />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password ..."
        {...register("password")}
      />{" "}
      <br /> <br />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password ..."
        {...register("confirmPassword")}
      />{" "}
      <br /> <br />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
export default SubmitFrom;
