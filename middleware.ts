import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
    pages: {
        signIn: "/auth/signin",
    },
});

export const config = {
    matcher: [
        // Exclude all API routes, auth pages, static files, and home page
        "/((?!api|auth|_next|favicon.ico|contact|about).*)",
    ],
};
