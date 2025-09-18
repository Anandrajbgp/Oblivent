import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface CheckoutProps {
  title: string
  description: string
  price: number
  platform: string
  features: string[]
}

export function Checkout({ title, description, price, platform, features }: CheckoutProps) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">
            {price === 0 ? "Free" : `₹${price.toLocaleString()}`}
          </div>
          <div className="text-sm text-gray-600">{platform}</div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium">What&apos;s included:</h4>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full">
          {price === 0 ? "Book Free Consultation" : "Get Started"}
        </Button>
      </CardContent>
    </Card>
  )
}
