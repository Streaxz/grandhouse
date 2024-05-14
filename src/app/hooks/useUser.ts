"use client";
import { useEffect, useState } from "react";

import {useMe} from "./useMe";
import axios from "axios";

export const useUser = ()  => {
	const [jwt, setJwt] = useState<string | undefined>();
	const [refreshToken, setRefreshToken] = useState<string | undefined>();
	const [auth, setAuth] = useState<boolean>(false);
	const {fetchMe, me, loading, error} = useMe();

	const fetchRefreshToken = async (expiredJwt: string): Promise<{accessToken: string, refreshToken: string}> => {
		return axios(`${process.env.NEXT_PUBLIC_API_URL}/refresh`, {
			headers: {
				authorization: `Bearer ${expiredJwt}`
			}
		});
	}

	useEffect(() => {
		const savedJwt = localStorage.getItem("jwt");
		const savedRefreshToken = localStorage.getItem("refreshToken");

		if (savedJwt && savedRefreshToken) {
			setJwt(savedJwt);
			setRefreshToken(savedRefreshToken);
		} else {
			localStorage.clear();
		}
	}, []);

	useEffect(() => {
		if (jwt) {
			fetchMe(jwt)
				.catch(() => fetchRefreshToken(refreshToken!).then((value) => {
						if (value) {
							setJwt(value.accessToken);
							localStorage.setItem("jwt", JSON.stringify(value.accessToken));
							localStorage.setItem("refreshToken", JSON.stringify(value.refreshToken));
							return fetchMe(jwt).then(()=>{setAuth(true)});
						} else {
							localStorage.clear();
						}
					})
						.catch((e) => {
							console.log(e);
							localStorage.clear();
						})
				)
				.then(() => {
					setAuth(true);
				})
		} else {
			setAuth(false);
		}
	}, [jwt]);

	useEffect(() => {
		if (error) {
			localStorage.clear();
		}
	}, [error]);

	return {auth, me, jwt, setJwt}
};
