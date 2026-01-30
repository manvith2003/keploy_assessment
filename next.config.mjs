import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const options = {
  theme: 'one-dark-pro',
  keepBackground: true,
}

const withMDX = createMDX({
})

export default withMDX(nextConfig)
