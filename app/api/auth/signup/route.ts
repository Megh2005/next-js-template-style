import { NextResponse } from "next/server";
import { validateEmail, validatePassword } from "@/lib/validations/auth";
import { createUser, getUserByEmail, hashPassword } from "@/lib/services/user";
import { connectToDatabase } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );  
        }

        const emailError = validateEmail(email);
        if (emailError) {
            return NextResponse.json({ message: emailError }, { status: 400 });
        }

        const passwordError = validatePassword(password);
        if (passwordError) {
            return NextResponse.json({ message: passwordError }, { status: 400 });
        }

        // Ensure DB connection (service handles it, but robust practice)
        await connectToDatabase();

        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await createUser({
            name,
            email,
            password: hashedPassword,
            avatar: `https://robohash.org/${email}`,
        });

        return NextResponse.json(
            { message: "User created successfully", user: newUser },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
