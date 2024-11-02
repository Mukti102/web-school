import { useState } from "react"

export const limit = (desc,limit=100) => {
    if (desc.length > limit) {
        return desc.slice(0, limit) + '...'
    } else {
        return desc
    }
}



export const nomorRegistasiGenerate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const first = year.toString().slice(2, 4);
    const second = date.getMonth() + 1;
    const third = date.getDate();
    const fourth = date.getHours();
    const fifth = Math.floor(Math.random() * 100);
    const mix = `${first}${second}${third}${fourth}${fifth}`;
    return mix;
  };


export const limitTitle = (title) => {
    if (title.length > 50) {
        return title.slice(0, 35) + '...'
    } else {
        return title
    }
}

export const formatTime = (time) => {
    return `${time.split(":")[0]}:${time.split(":")[1]}`;
  };

export const getCurrentEndpoint = () => {
    // get url href location
  const url = window.location.href;
  return url.split("/").slice(-2)[0];
}


export const convertYtToEmbed = (youtubeUrl) => {
    const url = new URL(youtubeUrl);
    let videoId;
  
    // Check for different YouTube URL formats
    if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
      // For standard YouTube link formats
      videoId = url.searchParams.get('v');
    } else if (url.hostname === 'youtu.be') {
      // For shortened youtu.be links
      videoId = url.pathname.slice(1);
    }
  
    // Return the embed URL if videoId exists
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      return null; // Invalid YouTube URL
    }
}