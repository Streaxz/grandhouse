
module.exports = {
    output: "export",
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
    }
}

