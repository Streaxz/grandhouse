import { useState } from "react";
import axios from "axios";
import { IUser } from "@/app/types/IUser";

export const useMe = () => {
  const [me, setMe] = useState<IUser | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const fetchMeRequest = async (jwtToken: string) =>
    await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    });

  const fetchMe = async (jwt: string) => {
    try {
      const fetchMeResponse = await fetchMeRequest(jwt);
      setMe(fetchMeResponse.data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  return { fetchMe, me, loading, error };
};
