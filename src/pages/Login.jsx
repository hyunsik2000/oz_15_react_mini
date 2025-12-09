import { UserInputField } from "@/components/SignInput/UserInput";
import { useState } from "react";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="mx-auto max-w-md py-20">
      <h2 className="flex-center mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
        로그인
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
        <button
          type="submit"
          className="mt-2 rounded-lg bg-red-600 py-2.5 text-white"
        >
          로그인
        </button>
      </form>
    </section>
  );
}
