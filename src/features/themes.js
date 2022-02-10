import {createSlice} from "@reduxjs/toolkit";

   export const themesSlice = createSlice({
        name: 'themes',
        initialState: {
            value: {
                toggleLogo: true,
                logoUrl: 'https://cdn.logo.com/hotlink-ok/logo-social-sq.png',
                backgroundColor: '#1e1d1d',
                toolbarLink: [],
                toggleSidebar: true,
                sidebarLink: [],
                sidebarColor: '#837c7c',
                heroColor: 'orange',
                heroDirection: true
            }
        },
        reducers: {
            toggleLogo: (state, action) => {
                state.value.toggleLogo = action.payload
            },
            logoImg: (state, action) => {
                state.value.logoUrl = action.payload
            },
            toolbarColor: (state, action) => {
                state.value.backgroundColor = action.payload
            },
            toolbarLink: (state, action) => {
                state.value.toolbarLink.push(action.payload)
            },
            toggleSidebar: (state, action) => {
                state.value.toggleSidebar = action.payload
            },
            sidebarLink: (state, action) => {
                state.value.sidebarLink.push(action.payload)
            },
            sidebarColor: (state, action) => {
                state.value.sidebarColor = action.payload
            },
            heroColor: (state, action) => {
                state.value.heroColor = action.payload
            },
            heroDirection: (state, action) => {
                state.value.heroDirection = action.payload
            }
        }
    })

export const {toggleLogo, logoImg, toolbarColor, toolbarLink, toggleSidebar, sidebarLink, sidebarColor, heroColor, heroDirection} = themesSlice.actions

export default themesSlice.reducer