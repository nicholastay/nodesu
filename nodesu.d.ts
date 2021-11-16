declare module 'nodesu' {
    /**
     * Options for a Client instance.
     */
    export interface ClientOptions {
        /**
         * Disabled ratelimiting through the client instance. Default: false
         */
        disableRateLimiting?: boolean
        /**
         * Requests per minute for the main limiting bucket if ratelimiting is enabled (note that the replay endpoint has a special 10/minute bucket). Default: 60
         */
        requestsPerMinute?: number
        /**
         * If data should be parsed into our custom nodesu classes (experimental and could be subject to break). Default: false
         */
        parseData?: boolean
        /**
         * osu! API base URL. May be changed for mocking purposes, or for using a rate-limiting proxy.
         */
        baseUrl?: string
    }

    /**
     * The main osu! API client.
     */
    export class Client {
        /**
         * The set of functions that are related to the User section.
         */
        user: UserComponent;
        /**
         * The set of functions that are related to the Beatmap section.
         */
        beatmaps: BeatmapsComponent;
        /**
         * The set of functions that are related to the Score section.
         */
        scores: ScoresComponent;
        /**
         * The set of functions that are related to the Replay section.
         */
        replay: ReplayComponent;
        /**
         * The set of functions that are related to the Multiplayer section.
         */
        multi: MultiComponent;
        /**
         * The osu! API key in use.
         */
        apiKey: string;
        /**
         * Should ratelimiting be used throughout the client instance.
         */
        disableRateLimiting: boolean;
        /**
         * How many requests per minute are allowed if ratelimiting is used.
         */
        requestsPerMinute: number;
        /**
         * If data should be parsed into our custom nodesu classes. (experimental and could be subject to break)
         */
        parseData: boolean;

        /**
         * Creates the osu! API client instance
         * 
         * @param apiKey The osu! API key. - available from https://osu.ppy.sh/p/api
         * @param options Options for the instance.
         */
        constructor(apiKey: string, options?: ClientOptions);

        /**
         * A direct raw API request with a payload of query string options.
         * 
         * @param endpoint The API endpoint.
         * @param options An object of query string options.
         * @return The object returned from the API.
         */
        raw(endpoint: string, options?: object): Promise<object>;
    }

    /**
     * User-related API component
     */
    class UserComponent {
        /**
         * Gets general user information.
         * @param user The username or id to lookup.
         * @param mode The gamemode.
         * @param eventDays The max number of event days.
         * @param lookupType The lookup type, id/string to lookup the user.
         * @return The object from the API, or User object if parsing is enabled.
         */
        get(user: string | number, mode?: ModeType, eventDays?: number, lookupType?: LookupTypeType): Promise<object | User>;

        /**
         * Gets the top scores for the user specified.
         * @param user The username or id to lookup.
         * @param mode The gamemode.
         * @param limit Amount of results to limit to.
         * @param lookupType The lookup type, id/string to lookup the user.
         * @return The object array from the API, or UserScore object array if parsing is enabled.
         */
        getBest(user: string | number, mode?: ModeType, limit?: number, lookupType?: LookupTypeType): Promise<object[] | UserScore[]>;

        /**
         * Gets the recent plays for the user specified.
         * @param user The username or id to lookup.
         * @param mode The gamemode.
         * @param limit Amount of results to limit to.
         * @param lookupType The lookup type, id/string to lookup the user.
         * @return The object array from the API, or UserScore object array if parsing is enabled.
         */
        getRecent(user: string | number, mode?: ModeType, limit?: number, lookupType?: LookupTypeType): Promise<object[] | UserScore[]>;
    }

    /**
     * Beatmap-related API component
     */
    class BeatmapsComponent {
        /**
         * Get beatmaps via beatmap set ID.
         * @param setId The set ID to lookup beatmaps from.
         * @param mode The gamemode of maps to find.
         * @param limit The limit of maps to find.
         * @param includeConverts If converts should be included in the lookup.
         * @param mods Applied mods.
         * @return The object array from the API, or Beatmap object array if parsing is enabled.
         */
        getBySetId(setId: string | number, mode?: ModeType, limit?: number, includeConverts?: ConvertsType, mods?: ModsType): Promise<object[] | Beatmap[]>;

        /**
         * Get beatmaps via beatmap ID.
         * @param beatmapId The set ID to lookup beatmaps from.
         * @param mode The gamemode of maps to find.
         * @param limit The limit of maps to find.
         * @param includeConverts If converts should be included in the lookup.
         * @param mods Applied mods.
         * @return The object array from the API, or Beatmap object array if parsing is enabled.
         */
        getByBeatmapId(beatmapId: string | number, mode?: ModeType, limit?: number, includeConverts?: ConvertsType, mods?: ModsType): Promise<object[] | Beatmap[]>;

        /**
         * Get beatmaps via beatmap ID.
         * @param beatmapId The set ID to lookup beatmaps from.
         * @param mode The gamemode of maps to find.
         * @param limit The limit of maps to find.
         * @param includeConverts If converts should be included in the lookup.
         * @param lookupType The type of lookup of the user.
         * @param mods Applied mods.
         * @return The object array from the API, or Beatmap object array if parsing is enabled.
         */
        getByUser(user: string | number, mode?: ModeType, limit?: number, includeConverts?: ConvertsType, lookupType?: LookupTypeType, mods?: ModsType): Promise<object[] | Beatmap[]>;

        /**
         * Get beatmaps via the hash of a beatmap.
         * @param hash The hash of the beatmap to lookup.
         * @param mode The gamemode of maps to find.
         * @param limit The limit of maps to find.
         * @param includeConverts If converts should be included in the lookup.
         * @param mods Applied mods.
         * @return The object array from the API, or Beatmap object array if parsing is enabled.
         */
        getByBeatmapHash(hash: string, mode?: ModeType, limit?: number, includeConverts?: ConvertsType, mods?: ModsType): Promise<object[] | Beatmap[]>;

        /**
         * Get beatmaps via their ranked/approval date.
         * @param since Minimum approved_date. Date object or MySQL date.
         * @param mode The gamemode of maps to find.
         * @param limit The limit of maps to find.
         * @param includeConverts If converts should be included in the lookup.
         * @param mods Applied mods.
         * @return The object array from the API, or Beatmap object array if parsing is enabled.
         */
         getSince(since: Date | string, mode?: ModeType, limit?: number, includeConverts?: ConvertsType, mods?: ModsType): Promise<object[] | Beatmap[]>;
    }

    /**
     * Scores-related API component
     */
    class ScoresComponent {
        /**
         * Gets scores for a specific beatmap
         * @param beatmapId The beatmap ID.
         * @param mods The bitwise combination for the mods.
         * @param mode The gamemode.
         * @param limit The limit of scores to get.
         * @param user User to lookup.
         * @param lookupType Only for if user is given, the lookup mode for it.
         * @return The object array from the API, or BeatmapScore object array if parsing is enabled.
         */
        get(beatmapId: number, mods?: ModsType, mode?: ModeType, limit?: number, user?: string | number, lookupType?: LookupTypeType): Promise<object[] | BeatmapScore[]>;
    }

    /**
     * Replay-related API component
     */
    class ReplayComponent {
        /**
         * Gets the replay. - If ratelimiting is enabled in the Client, this is rate limited under a different bucket with the more stricter conditions that is forced upon this endpoint!
         * @param beatmapId The beatmap ID of the map.
         * @param userId The user that played that beatmap.
         * @param mode The gamemode of the play.
         * @param lookupType The lookup type, id/string to lookup the user.
         * @param mods The bitwise combination for the mods.
         * @return Base64 replay file string.
         */
        get(beatmapId: number, user: string | number, mode: ModeType, lookupType?: LookupTypeType, mods?: ModsType): Promise<object | ReplayData>;
    }

    /**
     * Multi-related API component
     */
    class MultiComponent {
        /**
         * Gets the info for a multi match
         * @param matchId The ID of the match
         * @return The object from the API, or Multi object if parsing is enabled.
         */
        getMatch(matchId: number): Promise<object | Multi>;
    }

    /**
     * Beatmap class
     */
    export class Beatmap {
        /**
         * Constructs a Beatmap object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        /**
         * Approval status [alias: rankedStatus]
         */
        approved: ApprovalStatusType;
        rankedStatus: ApprovalStatusType;
        /**
         * Date it was first submitted
         */
        submitDate: Date;
        /**
         * Date it was approved
         */
        approvedDate: Date;
        /**
         * The date the map was last updated
         */
        lastUpdate: Date;
        /**
         * The song artist
         */
        artist: string;
        /**
         * Beatmap id [alias: beatmapId]
         */
        id: number;
        /**
         * Beatmap id [alias of: id]
         */
        beatmapId: number;
        /**
         * Beatmap set id [alias: beatmapSetId]
         */
        setId: number;
        /**
         * Beatmap set id [alias of: setId]
         */
        beatmapSetId: number;
        /**
         * Song BPM
         */
        bpm: number;
        /**
         * The beatmap creator [alias: mapper]
         */
        creator: string;
        /**
         * The beatmap creator [alias of: creator]
         */
        mapper: string;
        /**
         * The user id of the beatmap creator [alias: mapperId]
         */
        creatorId: number;
        /**
         * The user id of the beatmap creator [alias of: creatorId]
         */
        mapperId: number;
        /**
         * The difficulty rating [alias: stars]
         */
        difficultyRating: number;
        /**
         * The difficulty rating [alias of: difficultyRating]
         */
        stars: number;
        /**
         * Difficulty size (aka CS) [alias: circleSize, CS]
         */
        diffSize: number;
        /**
         * Difficulty size (aka CS) [alias of: diffSize]
         */
        circleSize: number;
        /**
         * Difficulty size (aka CS) [alias of: diffSize]
         */
        CS: number;
        /**
         * Difficulty overall (aka OD) [alias: overallDifficulty, OD]
         */
        diffOverall: number;
        /**
         * Difficulty overall (aka OD) [alias of: diffOverall]
         */
        overallDifficulty: number;
        /**
         * Difficulty overall (aka OD) [alias of: diffOverall]
         */
        OD: number;
        /**
         * Difficulty approach (aka AR) [alias: approachRate, AR]
         */
        diffApproach: number;
        /**
         * Difficulty approach (aka AR) [alias of: diffApproach]
         */
        approachRate: number;
        /**
         * Difficulty approach (aka AR) [alias of: diffApproach]
         */
        AR: number;
        /**
         * Difficulty drain (aka HP) [alias: hpDrain, HP]
         */
        diffDrain: number;
        /**
         * Difficulty drain (aka HP) [alias of: diffDrain]
         */
        hpDrain: number;
        /**
         * Difficulty drain (aka HP) [alias of: diffDrain]
         */
        HP: number;
        /**
         * Amount of normal notes (hitcircles).
         */
        countNormal: number;
        /**
         * Amount of slider notes.
         */
        countSlider: number;
        /**
         * Amount of spinners.
         */
        countSpinner: number;
        /**
         * Drain length
         */
        hitLength: number;
        /**
         * source The source data
         */
        source: string | null;
        /**
         * Genre metadata
         */
        genre: GenreType;
        /**
         * Language metadata
         */
        language: LanguageType;
        /**
         * Title
         */
        title: string;
        /**
         * Total length of song
         */
        totalLength: number;
        /**
         * Version (aka diffname) [alias: difficultyName]
         */
        version: string;
        /**
         * Version (aka diffname) [alias of: version]
         */
        difficultyName: string;
        /**
         * The MD5 of the file
         */
        fileMd5: string;
        /**
         * The gamemode
         */
        mode: ModeType;
        /**
         * Tags
         */
        tags: string[];
        /**
         * number of favorites on the map [alias: favoriteCount]
         */
        favouriteCount: number;
        /**
         * number of favorites on the map [alias of: favouriteCount]
         */
        favoriteCount: number;
        /**
         * User rating (1-10) [alias: userRating]
         */
        rating: number;
        /**
         * User rating (1-10) [alias of: rating]
         */
        userRating: number;
        /**
         * If beatmap is not downloadable [reverse alias: downloadAvailable]
         */
        downloadUnavailable: boolean;
        /**
         * If beatmap is downloadable [reverse alias of: downloadUnavailable]
         */
        downloadAvailable: boolean;
        /**
         * If beatmap is downloadable but has no audio [reverse alias: audioAvailable]
         */
        audioUnavailable: boolean;
        /**
         * If beatmap is downloadable and has audio [reverse alias of: audioUnavailable]
         */
        audioAvailable: boolean;
        /**
         * number of playcounts
         */
        playcount: number;
        /**
         * number of passcount
         */
        passcount: number;
        /**
         * number of map max combo
         */
        maxCombo: number;
        /**
         * Aim difficulty rated by ppv2
         */
        diffAim: number;
        /**
         * Speed difficulty rated by ppv2
         */
        diffSpeed: number;
        /**
         * Beatmap packs including this beatmap
         */
        packs: string[];
        /**
         * True if this beatmap contains a video
         */
        video: boolean;
        /**
         * True if this beatmap contains a storyboard
         */
        storyboard: boolean;
    }

    /**
     * Score for an beatmap class
     */
    export class BeatmapScore extends Score {
        /**
         * Constructs a BeatmapScore object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        /**
         * Username of player
         */
        username: string;
        /**
         * Player's user ID
         */
        userId: number;
        /**
         * Date score set
         */
        date: Date;
        /**
         * Rank of play, e.g. SS
         */
        rank: string;
        /**
         * PP value achieved
         */
        pp: number;
        /**
         * Is replay inputs data available (via /get_replay endpoint)
         */
        replayAvailable: boolean;
    }

    /**
     * Multi lobby class
     */
    export class Multi {
        /**
         * Constructs a Multi object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        /**
         * Information about the multi match
         */
        match: MultiMatch;
        /**
         * The games played within the multi
         */
        games: MultiGame[];
    }

    /**
     * Multi game info class
     */
    export class MultiGame {
        /**
         * Constructs a MultiGame object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        /**
         * Match ID [alias: gameId]
         */
        id: number;
        /**
         * Match id [alias of: id]
         */
        gameId: number;
        /**
         * Game start time
         */
        startTime: Date;
        /**
         * Game end time
         */
        endTime: Date;
        /**
         * ID of beatmap played
         */
        beatmapId: number;
        /**
         * Game mode the beatmap was played in
         */
        playMode: ModeType;
        /**
         * Winning condition
         */
        scoringType: MultiScoringTypeType;
        /**
         * Team type
         */
        teamType: MultiTeamTypeType;
        /**
         * Bitwise flag of mods used generated by the C#
         */
        mods: ModsType;
        /**
         * Scores in the game
         */
        scores: MultiScore[];
    }

    /**
     * Information about a multi match class
     */
    export class MultiMatch {
        /**
         * Constructs a MultiMatch object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        /**
         * The match ID [alias: matchId]
         */
        id: number;
        /**
         * The match ID [alias of: id]
         */
        matchId: number;
        /**
         * The name of the multi lobby
         */
        name: string;
        /**
         * The time the match was started
         */
        startTime: Date;
        /**
         * The time the match was ended
         */
        endTime: Date;
    }

    /**
     * Scores in multi match data class
     */
    export class MultiScore extends Score {
        /**
         * Constructs a MultiScore object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        /**
         * 0-based index of the player's slot in the lobby
         */
        slot: number;
        /**
         * The team the player is on if relevant
         */
        team: MultiTeamType_ | null;
        /**
         * If the player passed (i.e. played through, no fails/revives)
         */
        pass: boolean;
        /**
         * User who set the score
         */
        userId: number;
    }

    /**
     * Replay data class
     */
    export class ReplayData {
        /**
         * Constructs a ReplayData object from API data
         * @param data Parsed API result
         */
         constructor(data: object);

         /**
          * The LZMA-stream part of the .osr file's replay data parsed as a buffer
          */
         content: Buffer;
    }

    /**
     * General Score class
     */
    export class Score {
        /**
         * Constructs a Score object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        /**
         * Score ID
         */
        scoreId: number;
        /**
         * Score achieved
         */
        score: number;
        count300: number;
        count100: number;
        count50: number;
        countMiss: number;
        maxCombo: number;
        countKatu: number;
        countGeki: number;
        /**
         * True if maximum combo reached of map
         */
        perfect: boolean;
        /**
         * Bitwise flag of mods used generated by the C#
         */
        enabledMods?: number;
    }

    /**
     * User class.
     */
    export class User {
        /**
         * Constructs a User object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        /**
         * User's ID [alias: userId]
         */
        id: number;
        /**
         * User's ID [alias of: id]
         */
        userId: number;
        /**
         * Username [alias: name]
         */
        username: string;
        /**
         * Username [alias of: username]
         */
        name: string;
        /**
         * Date the user registered on osu!
         */
        joinDate: Date;
        count300: number;
        count100: number;
        count50: number;
        playcount: number;
        rankedScore: number;
        totalScore: number;
        /**
         * [alias: rank]
         */
        ppRank: number;
        /**
         * [alias of: ppRank]
         */
        rank: number;
        level: number;
        /**
         * [alias: pp]
         */
        ppRaw: number;
        /**
         * [alias of: ppRaw]
         */
        pp: number;
        accuracy: number;
        countRankSSH: number;
        countRankSS: number;
        countRankSH: number;
        countRankS: number;
        countRankA: number;
        country: string;
        /**
         * [alias: playTime]
         */
        totalSecondsPlayed: number;
        /**
         * [alias of: totalSecondsPlayed]
         */
        playTime: number;
        /**
         * [alias: countryRank]
         */
        ppCountryRank: number;
        /**
         * [alias of: ppCountryRank]
         */
        countryRank: number;
        /**
         * Array of user events
         */
        events: UserEvent[];
    }

    /**
     * Events for User class.
     */
    export class UserEvent {
        /**
         * Constructs a UserEvent object from API data
         * @param data Parsed API result
         */
        constructor(data: object);

        displayHtml: string;
        beatmapId: number;
        beatmapSetId: number;
        date: Date;
        epicfactor: number;
    }

    /**
     * Score for an user class
     */
    export class UserScore extends BeatmapScore {
        /**
         * Constructs a UserScore object from API data
         * @param data Parsed API result
         */
        constructor(data: object);
        /**
         * The beatmap ID of the song played
         */
        beatmapId: number;
    }
    
    export const Constants: {
        API: {
            HOST: string;
            BASE_PATH: string;

            USER_GET: string;
            USER_GET_BEST: string;
            USER_GET_RECENT: string;

            BEATMAPS_GET: string;

            SCORES_GET: string;

            REPLAY_GET: string;

            MULTI_MATCH_GET: string;
        }
    };

    type LookupTypeType = string;
    /**
     * Enum for the user lookup types
     */
    export const LookupType: {
        string: LookupTypeType;
        id: LookupTypeType;
    };

    type ModeType = number | undefined;
    /**
     * Enum for the gamemodes. - Note that the 'all' mode CANNOT be used for all functions (it is a shortcut for undefined), please consult the osu!api wiki for more clear information. (eg, replay data MUST give the mode, where as it is provided as convenience when getting beatmaps and wanting to specify the 'limit' value.)
     */
    export const Mode: {
        osu: ModeType;
        taiko: ModeType;
        ctb: ModeType;
        mania: ModeType;
        all: ModeType;
    };

    type ConvertsType = number;
    /**
     * Enum if converts should be returned (for beatmap queries)
     */
    export const Converts: {
        include: ConvertsType;
        exclude: ConvertsType;
    };

    type ModsType = number;
    /**
     * Enum for the mods - fresh off the wiki. Combine using bitwise combines, eg Mods.Hidden | Mods.Easy
     */
    export const Mods: {
        None: number;
        NoFail: number;
        Easy: number;
        Hidden: number;
        HardRock: number;
        SuddenDeath: number;
        DoubleTime: number;
        Relax: number;
        HalfTime: number;
        Nightcore: number;
        Flashlight: number;
        Autoplay: number;
        SpunOut: number;
        Relax2: number;
        Perfect: number;
        Key4: number;
        Key5: number;
        Key6: number;
        Key7: number;
        Key8: number;
        FadeIn: number;
        Random: number;
        LastMod: number;
        Key9: number;
        Key10: number;
        Key1: number;
        Key3: number;
        Key2: number;

        keyMod: number;
        FreeModAllowed: number;
    };

    type ApprovalStatusType = number;
    /**
     * Enum if converts should be returned (for beatmap queries)
     */
    export const ApprovalStatus: {
        loved: ApprovalStatusType;
        qualified: ApprovalStatusType;
        approved: ApprovalStatusType;
        ranked: ApprovalStatusType;
        pending: ApprovalStatusType;
        wip: ApprovalStatusType;
        graveyard: ApprovalStatusType;
    };

    type GenreType = number;
    /**
     * Enum for API genre data
     */
    export const Genre: {
        any: GenreType;
        unspecified: GenreType;
        videoGame: GenreType;
        anime: GenreType;
        rock: GenreType;
        pop: GenreType;
        other: GenreType;
        novelty: GenreType;
        hiphop: GenreType;
        electronic: GenreType;
    };

    type LanguageType = number;
    /**
     * Enum for API language data
     */
    export const Language: {
        any: LanguageType;
        other: LanguageType;
        english: LanguageType;
        japanese: LanguageType;
        chinese: LanguageType;
        instrumental: LanguageType;
        korean: LanguageType;
        french: LanguageType;
        german: LanguageType;
        swedish: LanguageType;
        spanish: LanguageType;
        italian: LanguageType;
    };

    type MultiScoringTypeType = number;
    /**
     * Enum for the scoring type used in a multi match
     */
    export const MultiScoringType: {
        scoreV2: MultiScoringTypeType;
        combo: MultiScoringTypeType;
        accuracy: MultiScoringTypeType;
        score: MultiScoringTypeType;
    };

    type MultiTeamType_ = number;
    /**
     * Enum for the team type for multi team
     */
    export const MultiTeam: {
        red: MultiTeamType_;
        blue: MultiTeamType_;
    };

    type MultiTeamTypeType = number;
    /**
     * Enum for the multi team type
     */
    export const MultiTeamType: {
        tagTeamVs: MultiTeamTypeType;
        teamVs: MultiTeamTypeType;
        tagCoop: MultiTeamTypeType;
        headToHead: MultiTeamTypeType;
    };
}
