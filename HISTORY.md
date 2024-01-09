# generated lunch-together
    nx g app lunch-together --routing --bundler=vite --unitTestRunner=vitest --linter=eslint --e2eTestRunner=playwright --compiler=swc 
# StoryBook
    nx g @nx/storybook:configuration lunchtime-react uiFramework=@storybook/react-vite
    nx g @nx/react:storybook-configuration lunchtime-react
## generate StoryBook for all components
    nx g @nx/react:stories --project=lunchtime-react
Choose `Yes` for adding interaction tests

# bootstrapped  by Nx
    npx create-nx-workspace@latest lunchtime-react --preset=react-standalone