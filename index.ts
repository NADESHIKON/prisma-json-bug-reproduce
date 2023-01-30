export * from '@prisma/client';

declare global {
  namespace PrismaJson {
    type EpisodeTitle = {
      english: string | null;
      romaji: string | null;
      native: string | null;
    }

    type AnimeTitle = {
      english: string | null;
      romaji: string | null;
      native: string | null;
      userPreferred: string | null;
    }

    type AnimeExternalMapping = MetaSitesMetric & {
      gogoanime: SubdubMapping | null;
      zoro: SubdubMapping | null;
      thetvdb: TvdbOrTmdbMapping | null;
      tmdb: TvdbOrTmdbMapping | null;
    }

    type CheckedSourceTimestamps = {
      gogoanime: number,
      zoro: number
    }

    type AnimeRating = MetaSitesMetric;
    type AnimePopularity = MetaSitesMetric;

    type MetaSitesMetric = {
      anilist: number | null;
      mal: number | null;
      kitsu: number | null;
      anidb: number | null;
    }

    type SubdubMapping = {
      sub: string | number | null;
      dub: string | number | null;
    }

    type TvdbOrTmdbMapping = `${number}@${number | "absolute"}@${string | "none"}`;
  }
}