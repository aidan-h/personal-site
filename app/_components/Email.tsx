"use client"

import { useState } from "react";

export default function Email({ email }: { email: string }) {
	const [clicked, setClicked] = useState(false);
	if (clicked) return <a href={"mailto:" + email}>{email}</a>
	return <button className="email" onClick={() => setClicked(true)}>show email</button>
}

