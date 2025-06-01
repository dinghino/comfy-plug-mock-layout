import Link from 'next/link'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import React from "react"
import { cn } from '@/lib/utils'

type Item = {href?: string, label: string }

export type AppBreadcrumbsProps = {
links: Item[]
className?: string
}

const defaultLinks = [{
    href: '/',
    label: 'Home'
}]

export const AppBreadcrumbs: React.FC<AppBreadcrumbsProps> = ({links, className}) => {
    const items = [...defaultLinks, ...links]
    return (
        <Breadcrumb className={cn(className)}>
        <BreadcrumbList>
            {items.map(({href, label}, idx) => (
                <><BreadcrumbItem >
                    <BreadcrumbLink asChild={!!href}>
                    {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {idx < items.length -1 ? <BreadcrumbSeparator /> : null}
                </>

            ))}
        </BreadcrumbList>
    </Breadcrumb>
    )
}

export default AppBreadcrumbs