'use client';

import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useQuery } from '@tanstack/react-query';

async function fetchSpotifyProfile() {
  const res = await fetch('/api/spotify');
  const data = await res.json();
  return data;
}

async function fetchSpotifyAlbums() {
  const res = await fetch('/api/spotify/albums');
  const data = await res.json();
  return data;
}

export default function SpotifyProfile() {
  const { data: profile, error } = useQuery({
    queryKey: ['spotifyProfile'],
    queryFn: fetchSpotifyProfile,
    staleTime: 1000 * 60 * 5
  });

  const { data: albums } = useQuery({
    queryKey: ['spotifyAlbums'],
    queryFn: fetchSpotifyAlbums,
    staleTime: 1000 * 60 * 5
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome {profile?.display_name}!</CardTitle>
        <CardDescription>You are logged in!</CardDescription>
      </CardHeader>
    </Card>
  );
}
