"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/src/lib/utils"
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react/dist/ssr"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring py-2.5 text-left text-sm font-medium data-[state=open]:font-bold focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary-800 text-primary-100 hover:bg-primary-700 data-[state=open]:bg-secondary-900 p-5 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        <CaretDownIcon data-slot="accordion-trigger-icon" className="
        pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" />
        <CaretUpIcon data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-open:animate-accordion-down data-closed:animate-accordion-up text-sm overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "pt-0 pb-5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4 bg-secondary-900 px-5 text-secondary-100",
          className
        )}
      >
        <div className="w-full pt-3 border-t border-secondary-100"/>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
