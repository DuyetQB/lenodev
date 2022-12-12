import styles from "./login.module.scss";
import Layout from "../core/layout/layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../core/components/button/button";

const LogIn = () => {
  // const router = useRouter();

  // // form validation rules
  // const validationSchema = Yup.object().shape({
  //     username: Yup.string().required('Username is required'),
  //     password: Yup.string().required('Password is required')
  // });
  // const formOptions = { resolver: yupResolver(validationSchema) };

  // // get functions to build form with useForm() hook
  // const { register, handleSubmit, formState } = useForm(formOptions);
  // const { errors } = formState;

  // function onSubmit({ username, password }) {

  // }

  const handleSubmit = (payload: any) => {
    console.log("payload", payload);
  };

  return (
    <>
      <Head>
        <title>Lenodev - Login</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Lenodev" />
        <meta name="description" content="Login page " />
        <meta
          property="og:image"
          content="https://cdn.dribbble.com/userupload/3772457/file/original-aba22003bdf9b02fa070c8e123c7a8c2.jpg?compress=1&resize=1024x768"
        />
      </Head>

      <div className={styles.login}>
        <div className="container">
          <form onSubmit={() => handleSubmit} className={styles.form}>
            <Link href="/" className={styles.logo}>
              Lenodev
            </Link>
            <h5>Đăng nhập vào Lenodev</h5>
            <div className="form-group">
              <label>Username</label>
              <input name="username" type="text" />
              {/* <div className="invalid-feedback">{errors.username?.message}</div> */}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" />
              {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
            </div>
            {/* <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button> */}

            <Button>Login</Button>
            <Link href="/register" className="btn btn-link">
              Register
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
