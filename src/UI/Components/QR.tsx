import { TextField } from '@mui/material'
import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QR = () => {
  const [value, setvalue] = useState<any>('abc')

  return (
    <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
      <h1>Link QR</h1>
      <TextField id="outlined-basic" label="Text" variant="outlined" style={{margin: "20px 0px"}} onChange={(e:any) => setvalue(e.target.value)}/>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  )
}

export default QR
