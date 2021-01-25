import { setUncaughtExceptionCaptureCallback } from "process";
import { useState } from "react";

interface Props {
	defaultValue?: number;
}

const Counter = ({ defaultValue }: Props) => {
	const [count, setCount] = useState<number | undefined>(defaultValue);

	const increment = (): any => {
		console.log(count);
		setCount((count ? count : 0) + 1);
	};

	const decrement = (): any => {
		console.log(count);
		setCount((count ? count : 0) - 1);
	};
	return (
		<>
			<div>
				<span>
					<label>Current Value:{count}</label>
				</span>
			</div>
			<div>
				<span>
					<button onClick={increment}>+ 1</button>
					<button onClick={decrement}>- 1</button>
				</span>
			</div>
		</>
	);
};

export default Counter;
