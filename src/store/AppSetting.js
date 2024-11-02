import { create } from 'zustand'
const AppSetting = create((set) => ({
    heroImage :"https://www.dochipo.com/wp-content/uploads/2022/08/YouTube-Thumbnail-_-Education-3-scaled.jpg",
    setHeroImage: (string) => set((state) => ({ heroImage: string })),
}))

export default AppSetting