import SapHeader from '@/components/page-components/sap-consulting/sap-header'
import SapServices from '@/components/page-components/sap-consulting/sap-services'
import SapConsultingHeader from '@/components/page-components/sap-consulting/sapConsultig-hero'
import React from 'react'

const Page = () => {
  return (
    <div>
      <SapConsultingHeader />
      <SapHeader />
      <SapServices />
    </div>
  )
}

export default Page
