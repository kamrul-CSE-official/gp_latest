"use client"

import React from "react"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import { ProfileCard, ProfileCardSkeleton } from "@/components/profile-card"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const ProfilePage: React.FC = () => {
  const userDetails = useAppSelector((state: RootState) => state.user.userData)
  const loading = useAppSelector((state: RootState) => state.user.loading)
  const error = useAppSelector((state: RootState) => state.user.error)

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      {loading ? (
        <ProfileCardSkeleton />
      ) : error ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      ) : userDetails ? (
        <ProfileCard userDetails={userDetails} />
      ) : (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No Data</AlertTitle>
          <AlertDescription>
            No user information available.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default ProfilePage

