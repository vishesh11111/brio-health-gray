"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { Button } from "<components>/components/ui/button"
import { Input } from "<components>/components/ui/input"
import { Badge } from "<components>/components/ui/badge"
import { PencilIcon, CheckIcon } from "lucide-react"
import ContainerBox from "<components>/components/ui/container/ContainerBox"
import { TypographyH2, TypographyH4, TypographyP } from "<components>/components/ui/typography"
import { CameraIcon } from "<components>/components/ui/icons/plan"

interface ProfileFormData {
  firstName: string
  lastName: string
  college: string
  city: string
  state: string
  country: string
}

interface ProfileData extends ProfileFormData {
  interests: string[]
  profilePicture: string
}

export default function ProfileSettings() {
  const [isEditing, setIsEditing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "Jacob Harmsworth",
    lastName: "Singh",
    college: "Massachusetts Institute of Technology (MIT)",
    city: "San Diego",
    state: "California",
    country: "United States",
    interests: ["Brain Surgery", "Operations", "Virus Antidotes", "Topic 1", "Topic 2"],
    profilePicture: "/placeholder.svg?height=96&width=96",
  })

  const { register, handleSubmit, reset } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      college: profileData.college,
      city: profileData.city,
      state: profileData.state,
      country: profileData.country,
    },
  })

  const toggleEdit = () => {
    if (!isEditing) {
      // Reset form with current values when entering edit mode
      reset({
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        college: profileData.college,
        city: profileData.city,
        state: profileData.state,
        country: profileData.country,
      })
    }
    setIsEditing(!isEditing)
  }

  const onSubmit = (data: ProfileFormData) => {
    // Update profile data with form values
    setProfileData((prev) => ({
      ...prev,
      ...data,
    }))
    setIsEditing(false)
  }

  const handleProfilePictureClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file)
      setProfileData((prev) => ({
        ...prev,
        profilePicture: imageUrl,
      }))
    }
  }

  return (
    <ContainerBox>
      <div className="mb-3">
        <TypographyH2 className="text-[#00285D] dark:text-slate-200">Settings</TypographyH2>
      </div>
      <div className="h-full w-full rounded-2xl bg-[#fff] dark:bg-slate-800 p-5">
        <div className="mb-6 flex items-center justify-between">
          <TypographyH2 className="text-primary text-2xl font-bold dark:text-white">Profile Settings</TypographyH2>
          {isEditing ? (
            <Button
              variant="outline"
              size="sm"
              onClick={handleSubmit(onSubmit)}
              className="text-primary flex items-center gap-[6px] border-[#A4B7D1] dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-white"
            >
              <CheckIcon className="h-4 w-4" />
              Save
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={toggleEdit}
              className="text-primary flex items-center gap-[6px] border-[#A4B7D1] dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-white"
            >
              <PencilIcon className="h-2 w-2" />
              Edit
            </Button>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <div>
              <TypographyH4 className="mb-2 text-[12px] font-[600] text-[#052326] dark:text-slate-300">
                Profile Picture
              </TypographyH4>
              <div
                className="relative h-[110px] w-[110px] cursor-pointer overflow-hidden rounded-md border border-gray-200 dark:border-slate-600"
                onClick={handleProfilePictureClick}
              >
                <Image
                  src={profileData.profilePicture || "/placeholder.svg"}
                  alt="Profile picture"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center bg-black/50 p-1">
                  <CameraIcon />
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
              </div>
            </div>

            <div className="grid grid-cols-7 gap-x-8 gap-y-4">
              <div className="col-span-2">
                <div className="flex items-center">
                  <TypographyP className="mr-1 font-[700] whitespace-nowrap my-0 text-[#052326] dark:text-slate-200">
                    First Name :
                  </TypographyP>
                  {isEditing ? (
                    <Input
                      {...register("firstName")}
                      className="ml-1 h-7 w-full max-w-[150px] dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    />
                  ) : (
                    <TypographyP className="ml-1 mt-0 font-[400] my-0 text-[#596084] dark:text-slate-300 truncate">
                      {profileData.firstName}
                    </TypographyP>
                  )}
                </div>
              </div>

              <div className="col-span-2">
                <div className="flex items-center">
                  <TypographyP className="mr-1 text-[16px] font-[700] whitespace-nowrap text-[#052326] dark:text-slate-200">
                    Last Name :
                  </TypographyP>
                  {isEditing ? (
                    <Input
                      {...register("lastName")}
                      className="ml-1 h-7 w-full max-w-[150px] dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    />
                  ) : (
                    <TypographyP className="ml-1 text-[16px] font-[400] text-[#596084] dark:text-slate-300 truncate">
                      {profileData.lastName}
                    </TypographyP>
                  )}
                </div>
              </div>

              <div className="col-span-3">
                <div className="flex items-center">
                  <TypographyP className="mr-1 text-[16px] font-[700] whitespace-nowrap text-[#052326] dark:text-slate-200">
                    College/University :
                  </TypographyP>
                  {isEditing ? (
                    <Input
                      {...register("college")}
                      className="ml-1 h-7 w-full max-w-[150px] dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    />
                  ) : (
                    <TypographyP className="ml-1 text-[16px] font-[400] text-[#596084] dark:text-slate-300 truncate">
                      {profileData.college}
                    </TypographyP>
                  )}
                </div>
              </div>

              <div className="col-span-2">
                <div className="flex items-center">
                  <TypographyP className="mr-1 text-[16px] font-[700] whitespace-nowrap text-[#052326] dark:text-slate-200">
                    City :
                  </TypographyP>
                  {isEditing ? (
                    <Input
                      {...register("city")}
                      className="ml-1 h-7 w-full max-w-[150px] dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    />
                  ) : (
                    <TypographyP className="ml-1 text-[16px] font-[400] text-[#596084] dark:text-slate-300 truncate">
                      {profileData.city}
                    </TypographyP>
                  )}
                </div>
              </div>

              <div className="col-span-2">
                <div className="flex items-center">
                  <TypographyP className="mr-1 text-[16px] font-[700] whitespace-nowrap text-[#052326] dark:text-slate-200">
                    State :
                  </TypographyP>
                  {isEditing ? (
                    <Input
                      {...register("state")}
                      className="ml-1 h-7 w-full max-w-[150px] dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    />
                  ) : (
                    <TypographyP className="ml-1 text-[16px] font-[400] text-[#596084] dark:text-slate-300 truncate">
                      {profileData.state}
                    </TypographyP>
                  )}
                </div>
              </div>

              <div className="col-span-3">
                <div className="flex items-center">
                  <TypographyP className="mr-1 text-[16px] font-[700] whitespace-nowrap text-[#052326] dark:text-slate-200">
                    Country :
                  </TypographyP>
                  {isEditing ? (
                    <Input
                      {...register("country")}
                      className="ml-1 h-7 w-full max-w-[150px] dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    />
                  ) : (
                    <TypographyP className="ml-1 text-[16px] font-[400] text-[#596084] dark:text-slate-300 truncate">
                      {profileData.country}
                    </TypographyP>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-4 rounded-sm bg-[#F7FAFF] dark:bg-slate-700 p-4">
              <div className="mb-2 flex">
                <TypographyH4 className="font-[600] text-[#052326] dark:text-slate-200">Interest :</TypographyH4>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-primary rounded-sm bg-[#D0DDF2] dark:bg-slate-600 dark:text-white px-3 py-1"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </ContainerBox>
  )
}
