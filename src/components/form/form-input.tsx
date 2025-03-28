import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {forwardRef} from 'react';

interface FormInputProps {
	name: string;
	label?: string;
	type?: string;
	placeholder?: string;
	form: any;
	value?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
	({name, label, type = 'text', placeholder, form, value,}, ref) => {
		return (
			<FormField
				control={form.control}
				name={name}
				render={({field}) => (
					<FormItem>
						{label && <FormLabel>{label}</FormLabel>}
						<FormControl>
							<Input
								{...field}
								type={type}
								placeholder={placeholder}
								ref={ref}
								value={value}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	},
);
