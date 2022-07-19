import React from "react";
import { useForm } from "react-hook-form";
import "./App.scss";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => console.log(data);
  console.log(errors);
  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-title">Hidden Layer 에 로그인 하세요</div>
        <div className="Login-input">
          <form onSubmit={handleSubmit(onValid)}>
            <div className="input">
              <label className="input-title">아이디 입력</label>
              <input
                type="text"
                placeholder="이메일을 입력하세요"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@gm.gist.ac.kr$/,
                    message: "Your id form should be 'example@gm.gist.ac.kr'",
                  },
                })}
              />
              {/*<span>{errors.} </span>*/}
            </div>
            <div className="input">
              <label className="input-title">비밀번호 입력</label>
              <input
                type="text"
                placeholder="비밀번호를 입력하세요"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Your password is too short",
                  },
                })}
              />
            </div>
            <div className="Login-button">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
