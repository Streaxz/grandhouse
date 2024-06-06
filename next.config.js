
module.exports = {
    // output: "export",
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
    },
    transpilePackages: ['@mdxeditor/editor'],
    reactStrictMode: true,
    webpack: (config) => {
        // this will override the experiments
        config.experiments = { ...config.experiments, topLevelAwait: true }
        // this will just update topLevelAwait property of config.experiments
        // config.experiments.topLevelAwait = true
        return config
    }
}

