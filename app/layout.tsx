/**
 * Root layout for MetricForge: sidebar shell, sticky nav, and query providers.
 * Reads the `siderbar_state` cookie to restore sidebar open/closed default.
 */
import "./globals.css";
import { cookies } from "next/headers";
import Providers from "./providers"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/layout/sidebar"
import { NavigationBar } from "./components/layout/navbar";

/** Site-wide HTML metadata for the MetricForge dashboard. */
/**
 * Static document metadata for MetricForge.
 */
export const metadata = {
  title: "MetricForge",
  description: "Autonomous Metrics for Teams",
}

/**
 * Async root layout that hydrates sidebar default state from cookies.
 * @param children - Nested App Router pages rendered inside the shell.
 * @returns Full HTML document with sidebar + header chrome.
 */
export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("siderbar_state")?.value == "true";

  return (
    <html lang="en">
      <body>
        <SidebarProvider defaultOpen={defaultOpen}>

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
