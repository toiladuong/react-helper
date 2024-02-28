// import InfinityScroller from "../publishLib/component/InfinityScroller"

import { InfinityScroller } from "../publishLib"

export default {
    title: 'Example/InfinityScroller',
    component: InfinityScroller,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
}

export const LoggedIn = {}

export const LoggedOut = {}
