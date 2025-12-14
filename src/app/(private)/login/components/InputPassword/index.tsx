'use client';
import { useState } from 'react';
import ShowPasswordButton from './ShowPasswordButton';
import Input from '../Input';

export default function InputPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      <Input
        name="password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        placeholder='********'
      />

      <ShowPasswordButton
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </div>
  );
}
