import React from 'react'
import SectionTitle from '../SectionTitle'
import FeatureCard from './FeatureCard'
import { features } from '../../Constants'

const FeaturesSection = () => {
  return (<div className='mt-36 container flex flex-col gap-20'>
    <SectionTitle title="Features" description="Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness." />
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
    {features.map((feature, index) => (
      <FeatureCard key={index}  title={feature.title} description={feature.description} />
    ))}

    </div>
    </div>
  )
}

export default FeaturesSection