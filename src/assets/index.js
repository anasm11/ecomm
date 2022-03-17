import banner from "./speaker2.jpg"
import product from "./speaker2.jpg"


const productsData=[
    {
        img:{
            source:product,
            alt:"speaker"
        }
    },
    {
        img:{
            source:product,
            alt:"earphones"
        }
    },
    {
        img:{
            source:product,
            alt:"phone-cases"
        }
    },
    {
        img:{
            source:product,
            alt:"wireless earphones"
        }
    }
]

const categoriesData=[
  {
      img:{
          source:banner,
          alt:"speaker"
      }
  },
  {
      img:{
          source:banner,
          alt:"earphones"
      }
  },
  {
      img:{
          source:banner,
          alt:"phone-cases"
      }
  },
  {
      img:{
          source:banner,
          alt:"wireless earphones"
      }
  }
]

const bannerData={
        img:{
            source:banner,
            alt:"banner"
        }
}


function IcRoundAccountCircle(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08c1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"></path></svg>
    )
  }



function IcRoundFavoriteBorder(props) {
    return (
      <svg width="1rem" height="1rem" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1c-1.76-2.06-5.02-2.91-7.66-1.1c-1.4.96-2.28 2.58-2.34 4.29c-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75c-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
    )
  }



function IcRoundFavorite(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="red" d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29c2.64-1.8 5.9-.96 7.66 1.1c1.76-2.06 5.02-2.91 7.66-1.1c1.41.96 2.28 2.59 2.34 4.29c.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"></path></svg>
    )
  }


function IcRoundShare(props) {
    return (
      <svg width="1rem" height="1rem" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg>
    )
  }


function IcSharpMoreVert(props) {
    return (
      <svg width="1rem" height="1rem" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"></path></svg>
    )
  }

export {bannerData,categoriesData,productsData,IcRoundAccountCircle,IcRoundFavorite,IcRoundFavoriteBorder,IcRoundShare,IcSharpMoreVert}