import { UserInputField } from "@/components/SignInput/UserInput";
import { useState } from "react";

export function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="mx-auto max-w-md py-20">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
        회원가입
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <UserInputField
          id="name"
          label="이름"
          placeholder="이름을 입력하세요"
          value={form.name}
          onChange={handleChange("name")}
          error={errors.name}
        />
        <UserInputField
          id="email"
          label="이메일"
          type="email"
          placeholder="ozCoding@email.com"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />

        <UserInputField
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={form.password}
          onChange={handleChange("password")}
          error={errors.password}
        />
        <UserInputField
          id="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          value={form.passwordConfirm}
          onChange={handleChange("passwordConfirm")}
          error={errors.passwordConfirm}
        />
        <button
          type="submit"
          className="mt-4 rounded-lg bg-blue-600 py-2.5 text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          회원가입
        </button>
      </form>
    </section>
  );
}
