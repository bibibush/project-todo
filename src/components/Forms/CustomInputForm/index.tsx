"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

interface CustomInputFormProps<T extends FieldValues> {
  className?: string;
  control: Control<T>;
  name: Path<T>;
  label?: string;
  rules?: RegisterOptions<T>;
  isPassword?: boolean;
  placeholder?: string;
}

function CustomInputForm<T extends FieldValues>({
  className,
  control,
  name,
  label,
  rules,
  isPassword,
  placeholder,
}: CustomInputFormProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={isPassword ? "password" : "text"}
              className={cn("bg-white", className)}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomInputForm;
