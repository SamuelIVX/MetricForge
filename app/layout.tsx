import "./globals.css";
import Providers from "./providers"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/layout/app-sidebar"
import { NavigationBar } from "./components/layout/app-navbar";

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

            <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
              <SidebarTrigger className="-ml-1" />
              <NavigationBar />
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4">
              <Providers>{children}</Providers>
            </div>

          </SidebarInset>

        </SidebarProvider>
      </body>
    </html>
  )
}