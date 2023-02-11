import React from 'react'
import Footer from '../components/footer/Footer'
import Messages from '../components/messages/Messages'
import { StyledMessagePage } from './MessagePage.style'

function MessagePage() {
  return (
    <StyledMessagePage>
      <Messages />
      <hr />
      <Footer />
    </StyledMessagePage>
  )
}

export default MessagePage