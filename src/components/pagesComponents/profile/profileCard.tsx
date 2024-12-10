import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { IUserinfo } from "@/types/globelTypes"

interface ProfileCardProps {
  userDetails: IUserinfo
}

const ProfileField: React.FC<{ label: string; value: string }> = React.memo(
  ({ label, value }) => (
    <div className="space-y-1">
      <Label className="text-sm font-medium text-muted-foreground">{label}</Label>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  )
)

export const ProfileCard: React.FC<ProfileCardProps> = React.memo(({ userDetails }) => {
  const avatarSrc = userDetails.ImageBase64 || userDetails.Image
    ? `data:image/png;base64,${userDetails.ImageBase64 || userDetails.Image}`
    : undefined

  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={avatarSrc} alt={userDetails.FullName} />
          <AvatarFallback>
            {userDetails.FullName ? userDetails.FullName.charAt(0) : "U"}
          </AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <CardTitle className="text-2xl font-bold">{userDetails.FullName}</CardTitle>
          <CardDescription className="text-lg">
            @{userDetails.UserName}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <ProfileField label="Employee ID" value={userDetails.EmpID} />
        <ProfileField label="Company" value={userDetails.Company} />
        <ProfileField label="Cost Center" value={userDetails.CostCenter} />
        <ProfileField label="Section Name" value={userDetails.SectionName} />
        <ProfileField label="Location" value={userDetails.Location} />
        <ProfileField label="Service Department ID" value={userDetails.ServiceDepartmentID} />
        <ProfileField label="Sub Cost Center ID" value={userDetails.SubCostCenterID} />
        <ProfileField label="User ID" value={userDetails.UserID} />
      </CardContent>
    </Card>
  )
})

ProfileCard.displayName = "ProfileCard"

export const ProfileCardSkeleton: React.FC = () => (
  <Card className="w-full max-w-2xl shadow-lg">
    <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Skeleton className="w-24 h-24 rounded-full" />
      <div className="space-y-2 w-full sm:w-auto">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </CardHeader>
    <CardContent className="grid gap-4 sm:grid-cols-2">
      {Array(8).fill(0).map((_, i) => (
        <div key={i} className="space-y-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      ))}
    </CardContent>
  </Card>
)

