/**
 * Static AWS service usage table shown on task detail (mock cost/usage rows).
 */
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
        placeholder: "lore ipsum"
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
        placeholder: "lore ipsum"
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
        placeholder: "lore ipsum"
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
        placeholder: "lore ipsum"
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
        placeholder: "lore ipsum"
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
        placeholder: "lore ipsum"
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
        placeholder: "lore ipsum"
    },
]

/**
 * Service usage card/table with hardcoded demo rows.
 * @returns Usage table inside a card.
 */
export function ServiceUsageTable() {
    return (

        <Card className="bg-[#0b0b0d]">

            <CardHeader>
                <CardTitle className="text-white">Service Usage Breakdown</CardTitle>
                <CardDescription>Detailed metrics and usage patterns</CardDescription>
            </CardHeader>

            <CardContent>
                <Table>

                    <TableHeader>

                        <TableRow>
                            <TableHead className="w-25">Instance Type</TableHead>
                            <TableHead>Month 1</TableHead>
                            <TableHead>Month 2</TableHead>
                            <TableHead>Month 3</TableHead>
                            <TableHead>Month 4</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>

                    </TableHeader>

                    <TableBody className="text-white">

                        {invoices.map((invoice) => (

                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.placeholder}</TableCell>
                                <TableCell>{invoice.placeholder}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>

                        ))}

                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={5}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>

                </Table>
            </CardContent>

        </Card>
    )
}
