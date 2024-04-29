import { Check, CreditCard, DollarSign, PersonStanding } from "lucide-react";
import { DashboardCard } from "./_components/dashboard-card";

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-5 w-full">
            <h1 className="font-bold text-4xl mx-6 text-center">Dashboard</h1>
            <div className="container mx-auto py-8">
                <div className="flex flex-col gap-5 w-full">
                    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                        <DashboardCard
                            label="Revenue"
                            Icon={DollarSign}
                            amount="$12,000"
                            description="All time"
                        />
                        <DashboardCard
                            label="Customers"
                            Icon={PersonStanding}
                            amount="+225"
                            description="+22 this month"
                        />
                        <DashboardCard
                            label="Profit"
                            Icon={CreditCard}
                            amount="$8,000"
                            description="All time"
                        />
                        <DashboardCard
                            label="Sales"
                            Icon={Check}
                            amount="+40"
                            description="From the last month"
                        />
                    </section>
                </div>
            </div>
        </div>
    )
}