import "./globals.css";
import Providers from "./providers"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/layout/app-sidebar"

export const metadata = {
  title: "MetricForge",
  description: "Autonomous Metrics for Teams",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <SidebarTrigger />
            <Providers>{children}</Providers>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}