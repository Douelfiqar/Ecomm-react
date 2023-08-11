import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wraper>
        <div className="lds-dual-ring"></div>
    </Wraper>
  )
}

export default Loading

const Wraper = styled.div`
display: flex;
justify-content: center;
.lds-dual-ring {
  display: inline-block;
  width: 180px;
  height: 180px;
}
.lds-dual-ring:after {

  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid hsl(22, 31%, 88%);
  border-color: hsl(22, 31%, 88%) transparent hsl(22, 31%, 88%) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`