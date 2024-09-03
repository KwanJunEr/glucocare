'use client'
import React from 'react'
import { Button } from 'antd'
import { FaArrowRightLong } from "react-icons/fa6";

const GotoButton = () => {
  return (
    <Button>
       Go  <span><FaArrowRightLong /></span>
    </Button>
  )
}

export default GotoButton
