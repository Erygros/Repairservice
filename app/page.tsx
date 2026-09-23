'use client'

import Hero from '../components/Hero'
import RepairCategories from '../components/RepairCategories'
import RepairList from '../components/RepairList'
import RepairExamples from '../components/RepairExamples'
import RepairProcess from '../components/RepairProcess'
import Pricing from '../components/Pricing'
import Shipping from '../components/Shipping'
import FAQ from '../components/FAQ'

export default function Page(){
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="what-we-repair"><RepairCategories /></section>
      <section id="repairs"><RepairList /></section>
      <section id="examples"><RepairExamples /></section>
      <section id="process"><RepairProcess /></section>
      <section id="pricing"><Pricing /></section>
      <section id="shipping"><Shipping /></section>
      <section id="faq"><FAQ /></section>
    </>
  )
}
