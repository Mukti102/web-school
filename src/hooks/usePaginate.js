import React, { useState } from 'react'

export default function usePaginate() {
const [linksPaginate,setLinksPaginate] = useState({});
const [metaPaginate,setMetaPaginate] = useState({});
  return {
    linksPaginate,
    setLinksPaginate,
    metaPaginate,setMetaPaginate
  }
}
