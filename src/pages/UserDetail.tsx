import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/ui/loading";
import useFetchUser from "@/hooks/useFetchUser";
import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react";
import React, { useEffect } from "react";
import { useParams } from "react-router";

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { fetchUserDetail, users, isLoading } = useFetchUser();

  const user = users[0];

  useEffect(() => {
    fetchUserDetail(Number(id));
  }, [id]);

  if (isLoading) {
    return <Loading show={isLoading} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name}`} />
              <AvatarFallback>{user?.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{user?.name}</CardTitle>
              <p className="text-muted-foreground">@{user?.username}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${user?.email}`} className="hover:underline">
                    {user?.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{user?.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://${user?.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {user?.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Address</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {user?.address.suite}, {user?.address.street}
                    <br />
                    {user?.address.city}, {user?.address.zipcode}
                  </span>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{user?.company.name}</span>
                </div>
                <p className="italic text-muted-foreground">"{user?.company.catchPhrase}"</p>
                <p className="text-sm text-muted-foreground">{user?.company.bs}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetailPage;
