import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Icons = {
  Swords: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" /><line x1="13" y1="19" x2="19" y2="13" /><line x1="16" y1="16" x2="20" y2="20" /><line x1="19" y1="21" x2="21" y2="19" /><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" /><line x1="5" y1="14" x2="9" y2="10" /><line x1="4" y1="16" x2="8" y2="20" /><line x1="3" y1="19" x2="5" y2="21" /></svg>
  ),
  Trophy: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
  ),
  Search: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
  ),
  ExternalLink: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
  ),
  Loader: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
  ),
  AlertCircle: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
  ),
  Refresh: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
  ),
  EyeOff: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" y1="2" x2="22" y2="22" /></svg>
  ),
  Info: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  ),
  X: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
  ),
  DoorExit: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
  ),
  Star: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
  ),
  Book: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  QuestionMark: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
  ),
  Leaf: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
  ),
};

const ANILIST_QUERY = `
  query ($userName: String, $type: MediaType, $status: MediaListStatus) {
    MediaListCollection(userName: $userName, type: $type, status: $status) {
      lists {
        entries {
          media {
            id
            title { romaji english }
            coverImage { extraLarge large color }
            episodes
            chapters
            genres
            averageScore
            startDate { year }
            studios(isMain: true) { nodes { name } }
            description(asHtml: true)
          }
        }
      }
    }
  }
`;

const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const getRoundName = (numPlayers) => {
  if (numPlayers === 32) return "Round of 32";
  if (numPlayers === 16) return "Round of 16";
  if (numPlayers === 8) return "Quarterfinals";
  if (numPlayers === 4) return "Semifinals";
  if (numPlayers === 2) return "Finals";
  return `Round of ${numPlayers}`;
};

const chunkArray = (arr, size) => {
  const chunks = [];
  for(let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const renderHTML = (htmlString) => {
  if (!htmlString) return "No synopsis available.";
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

const getTitle = (media) => media?.title?.english || media?.title?.romaji || "Unknown Title";

const getTheme = (type) => ({
  appBg: type === 'ANIME' ? 'bg-[#F7F8F3]' : 'bg-[#F4EFE6]',
  textMain: type === 'ANIME' ? 'text-[#1C2E24]' : 'text-[#2C2421]',
  textMuted: type === 'ANIME' ? 'text-[#607466]' : 'text-[#8C7A6B]',
  cardBg: type === 'ANIME' ? 'bg-[#FCFDF9]' : 'bg-[#FDFBF7]',
  cardBgOverlay: type === 'ANIME' ? 'bg-[#FCFDF9]/80' : 'bg-[#FDFBF7]/80',
  border: type === 'ANIME' ? 'border-[#E2E8DC]' : 'border-[#E6DCD1]',
  borderHover: type === 'ANIME' ? 'hover:border-[#D8E6D3]' : 'hover:border-[#E3D1C1]',
  primaryBg: type === 'ANIME' ? 'bg-[#D8E6D3]' : 'bg-[#E3D1C1]',
  primaryHover: type === 'ANIME' ? 'hover:bg-[#c8d9c2]' : 'hover:bg-[#D5C1AE]',
  primaryText: type === 'ANIME' ? 'text-[#1C2E24]' : 'text-[#2C2421]',
  inputBg: type === 'ANIME' ? 'bg-[#EEF3EA]' : 'bg-[#EFE9E0]',
  shadow: type === 'ANIME' ? 'shadow-[0_15px_30px_-10px_rgba(28,46,36,0.08)]' : 'shadow-[0_15px_30px_-10px_rgba(44,36,33,0.08)]',
  cardHoverShadow: type === 'ANIME' ? 'hover:shadow-[0_25px_50px_-12px_rgba(28,46,36,0.15)]' : 'hover:shadow-[0_25px_50px_-12px_rgba(44,36,33,0.15)]',
  primaryShadow: type === 'ANIME' ? 'shadow-[0_5px_15px_-5px_rgba(216,230,211,0.5)]' : 'shadow-[0_5px_15px_-5px_rgba(227,209,193,0.5)]',
  ring: type === 'ANIME' ? 'focus:ring-[#D8E6D3]' : 'focus:ring-[#E3D1C1]',
  pillBg: type === 'ANIME' ? 'bg-[#EEF3EA]' : 'bg-[#EFE9E0]',
  pillText: type === 'ANIME' ? 'text-[#485B4E]' : 'text-[#5C4F4A]',
  frostBg: type === 'ANIME' ? 'bg-[#EEF3EA]/95' : 'bg-[#EFE9E0]/95',
  scrollThumb: type === 'ANIME' ? '#C3D2BF' : '#D5C1AE',
  scrollThumbHover: type === 'ANIME' ? '#607466' : '#8C7A6B',
  pattern: type === 'ANIME' ? 'none' : 'radial-gradient(circle, rgba(44,36,33,0.03) 1.5px, transparent 1.5px)',
  bloom: type === 'ANIME' ? 'rgba(216,230,211,0.8)' : 'rgba(227,209,193,0.8)',
  leafColor: type === 'ANIME' ? 'text-[#607466]' : 'text-[#8C7A6B]',
  blindGradient: type === 'ANIME' ? 'bg-gradient-to-b from-[#2B3A32] to-[#1C2E24]' : 'bg-gradient-to-b from-[#3E322C] to-[#2C2421]',
  blindIconColor: type === 'ANIME' ? 'text-[#607466]' : 'text-[#8C7A6B]',
  bookmarkBg: type === 'ANIME' ? 'bg-[#D8E6D3]' : 'bg-[#E3D1C1]',
  bookmarkText: type === 'ANIME' ? 'text-[#1C2E24]' : 'text-[#2C2421]',
});

const CombatantCard = React.forwardRef(({ media, isCombatant1, onVote, isBlind, gameMode, theme, mediaType }, ref) => {
  const [showInfo, setShowInfo] = useState(false);
  const displayTitle = isBlind ? `Mystery Entry ${isCombatant1 ? 'A' : 'B'}` : getTitle(media);
  const statLabel = mediaType === 'ANIME' ? (media.episodes ? `${media.episodes} EPS` : 'TBA EPS') : (media.chapters ? `${media.chapters} CH` : 'TBA CH');

  // Reset info drawer when the card completely changes media ID
  useEffect(() => { setShowInfo(false); }, [media.id]);

  const cardVariants = {
    initial: (custom) => {
      if (custom.gameMode === 'GAUNTLET' && !custom.isCombatant1) return { opacity: 0, x: 40 }; 
      return { opacity: 0, scale: 0.98 };
    },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: (custom) => {
      if (custom.gameMode === 'GAUNTLET') return { opacity: 0, y: 30 }; 
      return { opacity: 0, scale: 0.98 }; 
    }
  };

  return (
    <motion.div
      ref={ref}
      custom={{ gameMode, isCombatant1 }}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeOut" }} // Slightly faster for snappier feel without lag
      className={`relative w-full h-[42vh] sm:h-[45vh] md:h-[70vh] rounded-[2rem] overflow-hidden ${theme.cardBg} border ${theme.border} ${theme.shadow} ${theme.cardHoverShadow} transition-all duration-300 ease-out hover:scale-[1.02] group cursor-pointer ${theme.borderHover}`}
      onClick={() => !showInfo && onVote(media)}
    >
      {/* Top Center Hover Bookmark Ribbon */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 z-20 ${theme.bookmarkBg} ${theme.bookmarkText} px-5 py-2.5 rounded-b-xl shadow-md font-black transition-all duration-300 ease-out opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center`}>
        {mediaType === 'ANIME' ? <Icons.Swords className="w-5 h-5" /> : <Icons.Book className="w-5 h-5" />}
      </div>

      {isBlind ? (
        <div className={`absolute inset-0 flex items-center justify-center ${theme.blindGradient}`}>
          <Icons.QuestionMark className={`w-32 h-32 opacity-20 ${theme.blindIconColor}`} />
        </div>
      ) : (
        <img 
          src={media.coverImage.extraLarge || media.coverImage.large} 
          alt={displayTitle}
          className="w-full h-full object-cover" 
        />
      )}
      
      {/* Info Drawer Trigger */}
      <button
        onClick={(e) => { e.stopPropagation(); setShowInfo(true); }}
        className={`absolute top-4 right-4 ${theme.pillBg} backdrop-blur-md p-3 rounded-full ${theme.textMain} ${theme.primaryHover} transition-all z-20 shadow-sm border ${theme.border} hover:scale-110`}
        title="View Details"
      >
        <Icons.Info className="w-5 h-5" />
      </button>

      {/* Bottom Text Gradient */}
      <div className="absolute bottom-0 left-0 right-0 pt-32 pb-8 px-6 bg-gradient-to-t from-[#12100E]/90 via-[#12100E]/60 to-transparent flex flex-col justify-end pointer-events-none">
        <h3 className={`text-2xl md:text-3xl font-black text-[#F7F8F3] leading-tight mb-1 font-['Zen_Maru_Gothic',sans-serif] ${isBlind ? 'italic opacity-90' : ''}`}>
          {displayTitle}
        </h3>
        {!isBlind && (
          <div className={`flex flex-wrap gap-x-4 gap-y-2 text-[#D8E6D3] text-sm font-bold mt-2 ${mediaType === 'MANGA' ? 'text-[#E3D1C1]' : ''}`}>
            <span className="flex items-center gap-1"><Icons.Star className="w-4 h-4 opacity-80" /> {media.averageScore ? (media.averageScore/10).toFixed(1) : 'N/A'}</span>
            <span>{media.startDate?.year || 'TBA'}</span>
            <span>{statLabel}</span>
          </div>
        )}
      </div>

      {/* Slide-Up Info Drawer */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`absolute inset-0 z-40 ${theme.frostBg} backdrop-blur-md flex flex-col p-6 md:p-8 cursor-default`}
            onClick={(e) => e.stopPropagation()} 
          >
            <div className={`flex items-center justify-between mb-4 pb-4 border-b ${theme.border}`}>
                <h4 className={`font-black ${theme.textMain} text-lg font-['Zen_Maru_Gothic',sans-serif]`}>Synopsis</h4>
                <button
                  onClick={(e) => { e.stopPropagation(); setShowInfo(false); }}
                  className={`bg-transparent p-2 rounded-full border border-black/10 ${theme.textMuted} hover:bg-black/5 hover:${theme.textMain} transition-colors`}
                >
                  <Icons.X className="w-5 h-5" />
                </button>
            </div>
            
            <div className={`flex-1 overflow-y-auto custom-scrollbar ${theme.textMuted} text-sm leading-relaxed pr-3 font-medium`}>
                {renderHTML(media.description)}
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2 pt-4">
                {isBlind && (
                  <span className={`${theme.pillBg} ${theme.textMain} border ${theme.border} text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
                    {statLabel}
                  </span>
                )}
                {media.genres.map(g => (
                  <span key={g} className={`${theme.pillBg} ${theme.pillText} border ${theme.border} text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
                    {g}
                  </span>
                ))}
            </div>
            <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold ${theme.textMuted} opacity-50 uppercase tracking-widest pointer-events-none`}>
              Close to Vote
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
CombatantCard.displayName = "CombatantCard";

export default function WatchClashApp() {
  const [screen, setScreen] = useState('LANDING'); 
  
  // Settings
  const [username, setUsername] = useState('');
  const [mediaType, setMediaType] = useState('ANIME');
  const [listStatus, setListStatus] = useState('PLANNING');
  const [gameMode, setGameMode] = useState('TOURNAMENT'); 
  const [bracketSize, setBracketSize] = useState(8);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [gauntletSizeStr, setGauntletSizeStr] = useState('ALL'); 
  const [gauntletError, setGauntletError] = useState(false);
  const [blindMode, setBlindMode] = useState(false);
  
  const theme = getTheme(mediaType);

  // Core Data
  const [fullList, setFullList] = useState([]);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const [revealedIds, setRevealedIds] = useState(new Set()); 
  const [winner, setWinner] = useState(null);

  // Tournament State
  const [currentRound, setCurrentRound] = useState([]);
  const [nextRound, setNextRound] = useState([]);
  const [matchIndex, setMatchIndex] = useState(0); 

  // Gauntlet State
  const [gauntletChampion, setGauntletChampion] = useState(null);
  const [gauntletChallenger, setGauntletChallenger] = useState(null);
  const [gauntletQueue, setGauntletQueue] = useState([]);

  const fetchAniListAndStart = async (isRestart = false) => {
    if (!username.trim() && !isRestart) {
      setError("Please enter an AniList username.");
      return;
    }

    if (gameMode === 'GAUNTLET' && gauntletSizeStr !== 'ALL') {
      const parsed = parseInt(gauntletSizeStr, 10);
      if (isNaN(parsed) || parsed < 3) {
         setGauntletError(true);
         return;
      }
    }

    setGauntletError(false);
    setScreen('LOADING');
    setError('');
    
    try {
      let listToUse = fullList;
      
      if (!isRestart || fullList.length === 0) {
        const response = await fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ 
            query: ANILIST_QUERY, 
            variables: { userName: username, type: mediaType, status: listStatus } 
          })
        });

        const json = await response.json();
        if (json.errors) throw new Error(json.errors[0].message || "Failed to fetch from AniList.");

        const lists = json.data.MediaListCollection.lists;
        const listLabel = listStatus === 'PLANNING' ? (mediaType === 'ANIME' ? 'Plan to Watch' : 'Plan to Read') : (mediaType === 'ANIME' ? 'Currently Watching' : 'Currently Reading');
        if (!lists || lists.length === 0) throw new Error(`No '${listLabel}' list found.`);

        const entries = lists.flatMap(list => list.entries).map(entry => entry.media);
        listToUse = entries;
        setFullList(entries);
      }

      setRevealedIds(new Set());
      setWinner(null);

      if (gameMode === 'TOURNAMENT') {
        setupTournament(listToUse);
      } else {
        setupGauntlet(listToUse);
      }

    } catch (err) {
      setError(err.message);
      setScreen('LANDING');
    }
  };

  const setupTournament = (entries) => {
    const possibleSizes = [32, 16, 8, 4];
    let actualSize = possibleSizes.find(s => entries.length >= s);
    
    if (!actualSize) {
      setError(`You need at least 4 entries. You have ${entries.length}.`);
      setScreen('LANDING');
      return;
    }
    
    if (actualSize < bracketSize) {
      setBracketSize(actualSize);
      showToast(`Not enough entries for ${bracketSize}. Adjusted to ${actualSize}.`);
    }

    const shuffled = shuffleArray(entries);
    setCurrentRound(shuffled.slice(0, actualSize));
    setNextRound([]);
    setMatchIndex(0);
    setScreen('BRACKET_OVERVIEW');
  };

  const setupGauntlet = (entries) => {
    if (entries.length < 3) {
      setError(`Gauntlet requires at least 3 entries. You have ${entries.length}.`);
      setScreen('LANDING');
      return;
    }

    const shuffled = shuffleArray(entries);
    let size = entries.length;
    
    if (gauntletSizeStr !== 'ALL') {
      const parsed = parseInt(gauntletSizeStr, 10);
      if (parsed > entries.length) {
        size = entries.length;
        showToast(`Only ${entries.length} items found. Adjusted to maximum.`);
      } else {
        size = parsed;
      }
    }

    const selectedEntries = shuffled.slice(0, size);
    setGauntletChampion(selectedEntries[0]);
    setGauntletChallenger(selectedEntries[1]);
    setGauntletQueue(selectedEntries.slice(2));
    setScreen('ARENA');
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 5000);
  };

  const handleEscape = () => {
    setScreen('LANDING');
    setWinner(null);
  };

  const handleVote = (selectedMedia) => {
    setRevealedIds(prev => new Set(prev).add(selectedMedia.id));

    if (gameMode === 'TOURNAMENT') {
      const updatedNextRound = [...nextRound, selectedMedia];
      if (matchIndex + 2 >= currentRound.length) {
        if (updatedNextRound.length === 1) {
          setWinner(updatedNextRound[0]);
          setScreen('WINNER');
        } else {
          setCurrentRound(updatedNextRound);
          setNextRound([]);
          setMatchIndex(0);
        }
      } else {
        setNextRound(updatedNextRound);
        setMatchIndex(matchIndex + 2);
      }
    } else {
      setGauntletChampion(selectedMedia);
      if (gauntletQueue.length === 0) {
        setWinner(selectedMedia);
        setScreen('WINNER');
      } else {
        setGauntletChallenger(gauntletQueue[0]);
        setGauntletQueue(gauntletQueue.slice(1));
      }
    }
  };

  const EscapeHatchNav = ({ title, subtitle }) => (
    <motion.header 
      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center justify-between w-full py-4 mb-4 shrink-0 border-b ${theme.border}`}
    >
      <div>
        <h1 className={`text-2xl font-black ${theme.textMain} uppercase font-['Zen_Maru_Gothic',sans-serif] tracking-tight`}>
          {mediaType === 'ANIME' ? 'Watch Clash' : 'Read Clash'}
        </h1>
        {subtitle && <p className={`${theme.textMuted} text-sm font-bold mt-0.5`}>{subtitle}</p>}
      </div>
      <button 
        onClick={handleEscape}
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border ${theme.border} ${theme.textMuted} hover:bg-black/5 hover:${theme.textMain} transition-colors text-sm font-bold shadow-sm`}
      >
        <Icons.DoorExit className="w-4 h-4" /> End Clash
      </button>
    </motion.header>
  );

  const inputBaseClass = `w-full ${theme.inputBg} border border-transparent rounded-full px-4 py-3 ${theme.textMain} font-bold text-sm focus:outline-none focus:ring-4 ${theme.ring} shadow-inner transition-all h-[48px]`;

  const renderLanding = () => (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[80vh] relative z-10 w-full max-w-md mx-auto">
      <div className="text-center mb-10 w-full">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className={`inline-flex justify-center mb-6 ${theme.primaryBg} p-4 rounded-full shadow-sm border ${theme.border}`}>
          {mediaType === 'ANIME' ? <Icons.Swords className={`w-10 h-10 ${theme.primaryText}`} /> : <Icons.Book className={`w-10 h-10 ${theme.primaryText}`} />}
        </motion.div>
        <h1 className={`text-4xl md:text-5xl font-black ${theme.textMain} tracking-tight font-['Zen_Maru_Gothic',sans-serif] mb-3 transition-colors`}>
          {mediaType === 'ANIME' ? 'Watch Clash' : 'Read Clash'}
        </h1>
        <p className={`${theme.textMuted} font-medium`}>
          {mediaType === 'ANIME' ? 'Cure your watchlist paralysis. Let them battle it out.' : 'Cure your reading list paralysis. Let them battle it out.'}
        </p>
      </div>

      <div className={`w-full ${theme.cardBg} border ${theme.border} rounded-3xl p-6 md:p-8 ${theme.shadow} relative z-10`}>
        {error && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={`mb-6 ${theme.cardBg} border border-[#D97757]/50 text-[#D97757] p-4 rounded-2xl flex items-start gap-3 text-sm shadow-sm`}>
            <Icons.AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="font-bold">{error}</p>
          </motion.div>
        )}

        <div className="space-y-6 relative">
          <div className="space-y-2">
            <label className={`text-xs font-black ${theme.textMuted} block tracking-widest uppercase`}>AniList Username</label>
            <div className="relative">
              <input
                type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g., your_username"
                className={`${inputBaseClass} pl-12`}
                onKeyDown={(e) => e.key === 'Enter' && fetchAniListAndStart()}
              />
              <Icons.Search className={`w-5 h-5 ${theme.textMuted} absolute left-5 top-1/2 -translate-y-1/2`} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className={`text-xs font-black ${theme.textMuted} block tracking-widest uppercase`}>Media</label>
              <div className={`flex ${theme.inputBg} p-1 rounded-full shadow-inner`}>
                {['ANIME', 'MANGA'].map(type => (
                  <button
                    key={type} onClick={() => setMediaType(type)}
                    className={`flex-1 py-2 rounded-full text-[10px] sm:text-xs font-black transition-colors duration-300 ${mediaType === type ? `${theme.cardBg} ${theme.textMain} shadow-sm border ${theme.border}` : `${theme.textMuted} hover:${theme.pillText}`}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-xs font-black ${theme.textMuted} block tracking-widest uppercase`}>List Type</label>
              <div className={`flex ${theme.inputBg} p-1 rounded-full shadow-inner`}>
                {[
                  { value: 'PLANNING', label: 'PLANNED' },
                  { value: 'CURRENT', label: 'CURRENT' }
                ].map(status => (
                  <button
                    key={status.value} onClick={() => setListStatus(status.value)}
                    className={`flex-1 py-2 rounded-full text-[10px] sm:text-xs font-black transition-colors duration-300 ${listStatus === status.value ? `${theme.cardBg} ${theme.textMain} shadow-sm border ${theme.border}` : `${theme.textMuted} hover:${theme.pillText}`}`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-xs font-black ${theme.textMuted} block tracking-widest uppercase`}>Game Mode</label>
              <div className={`flex ${theme.inputBg} p-1 rounded-full shadow-inner`}>
                {['TOURNAMENT', 'GAUNTLET'].map(mode => (
                  <button
                    key={mode} onClick={() => setGameMode(mode)}
                    className={`flex-1 py-2 rounded-full text-[10px] sm:text-xs font-black transition-colors duration-300 ${gameMode === mode ? `${theme.cardBg} ${theme.textMain} shadow-sm border ${theme.border}` : `${theme.textMuted} hover:${theme.pillText}`}`}
                  >
                    {mode === 'TOURNAMENT' ? 'BRACKET' : 'SURVIVAL'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 relative">
              <label className={`text-xs font-black ${theme.textMuted} block tracking-widest uppercase truncate`}>
                {gameMode === 'TOURNAMENT' ? 'Bracket Size' : 'Challengers'}
              </label>
              {gameMode === 'TOURNAMENT' ? (
                <div className="relative h-[48px]">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`${inputBaseClass} flex items-center justify-between cursor-pointer w-full text-left`}
                  >
                    <span>{bracketSize} Entries</span>
                    <span className={`${theme.textMuted} text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-40 cursor-default" onClick={() => setIsDropdownOpen(false)} />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className={`absolute top-[52px] left-0 w-full ${theme.cardBg} border ${theme.border} rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col p-1`}
                        >
                          {[4, 8, 16, 32].map(size => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => { setBracketSize(size); setIsDropdownOpen(false); }}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                                bracketSize === size ? `${theme.primaryBg} ${theme.textMain}` : `${theme.textMuted} hover:${theme.primaryBg} hover:${theme.textMain}`
                              }`}
                            >
                              {size} Entries
                            </button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex gap-1 relative h-[48px]">
                  <input
                    type="text" value={gauntletSizeStr} onChange={(e) => { setGauntletSizeStr(e.target.value); setGauntletError(false); }}
                    placeholder="e.g. 10"
                    className={`${inputBaseClass} ${gauntletError ? 'border-[#D97757]' : 'border-transparent'}`}
                  />
                  <button 
                    onClick={() => { setGauntletSizeStr('ALL'); setGauntletError(false); }}
                    className={`px-3 rounded-full ${theme.primaryBg} ${theme.textMain} font-black text-[10px] ${theme.primaryHover} transition-colors border ${theme.border}`}
                  >
                    ALL
                  </button>
                  {gauntletError && (
                    <p className="absolute -bottom-5 left-1 text-[9px] font-bold text-[#D97757] whitespace-nowrap">Minimum 3 needed!</p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className={`flex items-center justify-between p-4 ${theme.inputBg} rounded-3xl border border-transparent ${theme.borderHover} transition-colors cursor-pointer shadow-inner mt-4`} onClick={() => setBlindMode(!blindMode)}>
             <div>
               <span className={`font-bold ${theme.textMain} flex items-center gap-2`}>
                 <Icons.EyeOff className={`w-4 h-4 ${theme.textMuted}`} /> Blind Clash
               </span>
               <span className={`text-xs font-medium ${theme.textMuted}`}>Hide cover art until match is won</span>
             </div>
             <div className={`w-14 h-7 rounded-full relative transition-colors duration-300 shrink-0 ${blindMode ? (mediaType === 'ANIME' ? 'bg-[#1C2E24]' : 'bg-[#2C2421]') : 'bg-gray-300/50'}`}>
               <motion.div layout className={`w-5 h-5 rounded-full ${theme.cardBg} absolute top-1 left-1 shadow-sm`} animate={{ x: blindMode ? 28 : 0 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />
             </div>
          </div>
        </div>

        <button
          onClick={() => fetchAniListAndStart(false)}
          className={`w-full mt-8 ${theme.primaryBg} ${theme.primaryHover} ${theme.primaryText} font-black text-lg py-4 rounded-full transition-transform hover:-translate-y-0.5 ${theme.primaryShadow} flex items-center justify-center gap-2 border ${theme.border}`}
        >
          {mediaType === 'ANIME' ? <Icons.Swords className="w-6 h-6" /> : <Icons.Book className="w-6 h-6" />} 
          Begin Clash
        </button>
      </div>
    </div>
  );

  const renderBracketOverview = () => {
    const half = currentRound.length / 2;
    const leftMatches = chunkArray(currentRound.slice(0, half), 2);
    const rightMatches = chunkArray(currentRound.slice(half), 2);

    const renderMiniCard = (media) => {
      const isMystery = blindMode && !revealedIds.has(media.id);
      return (
        <div key={media.id} className={`flex items-center gap-3 p-2 ${theme.cardBg} border ${theme.border} rounded-2xl shadow-sm`}>
          <div className={`w-10 h-10 shrink-0 overflow-hidden rounded-xl ${theme.inputBg} flex items-center justify-center relative`}>
            {isMystery ? (
               <div className={`absolute inset-0 flex items-center justify-center ${theme.blindGradient}`}>
                 <Icons.QuestionMark className={`w-6 h-6 opacity-30 ${theme.blindIconColor}`} />
               </div>
            ) : (
               <img src={media.coverImage.large} alt="cover" className="w-full h-full object-cover" />
            )}
          </div>
          <span className={`text-xs font-bold truncate w-24 md:w-32 font-['Zen_Maru_Gothic',sans-serif] ${isMystery ? `${theme.textMuted} italic` : theme.textMain}`}>
            {isMystery ? 'Mystery Entry' : getTitle(media)}
          </span>
        </div>
      );
    };

    return (
      <div className="flex-1 flex flex-col w-full h-full relative pb-24">
        <EscapeHatchNav subtitle="Tournament Setup" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-center mb-6">
          <h2 className={`text-2xl font-black ${theme.textMain} font-['Zen_Maru_Gothic',sans-serif]`}>The Bracket is Set!</h2>
          <p className={`${theme.textMuted} text-sm font-medium`}>Review the matchups before the clash begins.</p>
        </motion.div>
        
        <div className="flex-1 overflow-auto custom-scrollbar -mx-4 px-4 pb-4">
          <div className="min-w-[700px] h-full flex items-stretch justify-between relative">
            <div className="absolute inset-0 pointer-events-none opacity-40 flex justify-center items-center">
               <div className={`w-1/2 h-full border-t border-b ${theme.border} rounded-[40px]`} />
               <div className={`w-px h-full bg-current ${theme.textMuted} absolute left-1/2 -translate-x-1/2 opacity-20`} />
            </div>
            <div className="flex flex-col justify-around gap-4 w-1/3 z-10 py-4">{leftMatches.map((m, i) => <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, ease: "easeOut" }} className={`flex flex-col gap-2 relative ${theme.cardBgOverlay} backdrop-blur-sm p-2 rounded-2xl`}>{m.map(renderMiniCard)}</motion.div>)}</div>
            <div className="flex flex-col items-center justify-center w-1/3 z-20">
              {/* Decorative center spacing */}
            </div>
            <div className="flex flex-col justify-around gap-4 w-1/3 z-10 py-4">{rightMatches.map((m, i) => <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, ease: "easeOut" }} className={`flex flex-col gap-2 relative ${theme.cardBgOverlay} backdrop-blur-sm p-2 rounded-2xl`}>{m.map(renderMiniCard)}</motion.div>)}</div>
          </div>
        </div>

        {/* Floating Start Button Fixed to Bottom */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => setScreen('ARENA')}
            className={`${theme.primaryBg} ${theme.primaryHover} ${theme.textMain} font-black px-8 py-4 rounded-full shadow-2xl flex items-center gap-2 border ${theme.border} transition-transform hover:-translate-y-1 backdrop-blur-md bg-opacity-95`}
          >
            Start Round 1 {mediaType === 'ANIME' ? <Icons.Swords className="w-5 h-5" /> : <Icons.Book className="w-5 h-5" />}
          </button>
        </div>
      </div>
    );
  };

  const renderArena = () => {
    let combatant1, combatant2, headerTitle, headerSubtitle, progressUI;

    if (gameMode === 'TOURNAMENT') {
      combatant1 = currentRound[matchIndex];
      combatant2 = currentRound[matchIndex + 1];
      const totalMatches = currentRound.length / 2;
      const currentNum = (matchIndex / 2) + 1;
      headerTitle = getRoundName(currentRound.length);
      headerSubtitle = `Match ${currentNum} of ${totalMatches}`;
      progressUI = (
        <div className="flex gap-1.5">
          {Array.from({ length: totalMatches }).map((_, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full transition-colors duration-500 ${idx < currentNum - 1 ? 'bg-opacity-40 ' + theme.primaryBg : idx === currentNum - 1 ? `${theme.primaryBg} ring-2 ring-offset-1 ring-offset-transparent ${theme.ring}` : 'bg-black/5'}`} />
          ))}
        </div>
      );
    } else {
      combatant1 = gauntletChampion;
      combatant2 = gauntletChallenger;
      const remaining = gauntletQueue.length;
      headerTitle = "Survival Gauntlet";
      headerSubtitle = remaining === 0 ? "Final Challenger!" : `${remaining} Challenger${remaining > 1 ? 's' : ''} Remaining`;
      
      const maxDots = 15;
      const displayDots = Math.min(remaining, maxDots);
      
      progressUI = (
        <div className="flex items-center gap-1.5">
          <span className={`text-xs font-bold ${theme.textMuted} mr-2`}>Queue:</span>
          {Array.from({ length: displayDots }).map((_, idx) => (
            <div key={idx} className={`w-1.5 h-1.5 rounded-full ${theme.primaryBg} opacity-50`} />
          ))}
          {remaining > maxDots && <span className={`text-xs font-bold ${theme.textMuted} ml-1`}>+{remaining - maxDots}</span>}
        </div>
      );
    }

    const blind1 = blindMode && !revealedIds.has(combatant1.id);
    const blind2 = blindMode && !revealedIds.has(combatant2.id);

    return (
      <div className="flex-1 flex flex-col w-full h-full relative">
        <EscapeHatchNav title={headerTitle} subtitle={headerSubtitle} />
        
        <div className="flex items-center justify-between mb-4 md:mb-6 px-4">
           <div>
             <h2 className={`text-xl font-black ${theme.textMain} uppercase font-['Zen_Maru_Gothic',sans-serif]`}>{headerTitle}</h2>
             <p className={`${theme.textMuted} text-sm font-bold`}>{headerSubtitle}</p>
           </div>
           {progressUI}
        </div>

        {/* Stable grid container with mode="wait" to prevent layout collapse */}
        <div className="flex-1 relative w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-4 px-2 min-h-[60vh] md:min-h-[70vh]">
            <AnimatePresence mode="wait">
               <CombatantCard 
                 key={`c1-${combatant1.id}`} 
                 media={combatant1} 
                 isCombatant1={true} 
                 onVote={handleVote} 
                 isBlind={blind1} 
                 gameMode={gameMode}
                 theme={theme}
                 mediaType={mediaType}
               />
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
               <CombatantCard 
                 key={`c2-${combatant2.id}`} 
                 media={combatant2} 
                 isCombatant1={false} 
                 onVote={handleVote} 
                 isBlind={blind2} 
                 gameMode={gameMode}
                 theme={theme}
                 mediaType={mediaType}
               />
            </AnimatePresence>
        </div>
      </div>
    );
  };

  const BotanicalBloom = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      <motion.div
         initial={{ scale: 0, opacity: 0 }} animate={{ scale: [0, 1.5, 3], opacity: [0, 1, 0] }} transition={{ duration: 3, ease: "easeInOut" }}
         className="absolute w-[40vw] h-[40vw] rounded-full blur-[60px]"
         style={{ background: `radial-gradient(circle, ${theme.bloom} 0%, transparent 70%)` }}
      />
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '20vh', x: `${(Math.random() - 0.5) * 80}vw`, opacity: 0, rotate: Math.random() * 360, scale: Math.random() * 0.4 + 0.4 }}
          animate={{ y: '-80vh', x: `${(Math.random() - 0.5) * 120}vw`, opacity: [0, 1, 1, 0], rotate: Math.random() * 360 + 360 }}
          transition={{ duration: 2.5 + Math.random() * 1.5, ease: "easeInOut", delay: Math.random() * 0.3 }}
          className={`absolute bottom-1/4 ${theme.leafColor}`}
        >
          {mediaType === 'ANIME' ? <Icons.Leaf className="w-8 h-8 opacity-60" /> : <Icons.Book className="w-6 h-6 opacity-40" />}
        </motion.div>
      ))}
    </div>
  );

  const renderWinner = () => {
    const title = getTitle(winner);
    const winnerHeading = mediaType === 'ANIME' ? 'S-Tier Pick' : 'The Masterwork';
    
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-8 relative w-full h-full">
        <BotanicalBloom />
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full flex flex-col items-center relative z-10"
        >
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 ${theme.primaryBg} rounded-full mb-4 ring-8 ring-white/50 shadow-lg`}>
              <Icons.Trophy className={`w-12 h-12 ${theme.primaryText}`} />
            </div>
            <h2 className={`text-4xl md:text-5xl font-black ${theme.textMain} mb-2 tracking-tighter font-['Zen_Maru_Gothic',sans-serif]`}>{winnerHeading}</h2>
            <p className={`${theme.textMuted} text-lg font-bold`}>The definitive next {mediaType.toLowerCase()} is decided.</p>
          </div>

          <div className={`max-w-4xl w-full ${theme.cardBg} border ${theme.border} rounded-[2rem] overflow-hidden ${theme.shadow} relative z-20 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-stretch`}>
            <div className={`w-full md:w-2/5 shrink-0 rounded-2xl overflow-hidden shadow-sm border ${theme.border}`}>
              <img src={winner.coverImage.extraLarge || winner.coverImage.large} alt={title} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full md:w-3/5 flex flex-col">
              <h3 className={`text-3xl md:text-4xl font-black ${theme.textMain} mb-4 leading-tight tracking-tight font-['Zen_Maru_Gothic',sans-serif]`}>{title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {winner.genres.slice(0, 4).map(genre => <span key={genre} className={`text-xs font-bold ${theme.pillText} ${theme.pillBg} px-4 py-1.5 rounded-full uppercase tracking-wider`}>{genre}</span>)}
              </div>
              
              <div className={`max-h-48 overflow-y-auto custom-scrollbar text-sm font-medium ${theme.textMuted} pr-4 mb-8 flex-1 leading-relaxed`}>
                {renderHTML(winner.description)}
              </div>
              
              <a 
                href={`https://anilist.co/${mediaType.toLowerCase()}/${winner.id}`} target="_blank" rel="noopener noreferrer"
                className={`inline-flex mt-auto items-center justify-center gap-2 w-full ${theme.primaryBg} ${theme.primaryHover} ${theme.textMain} font-black text-lg py-4 rounded-full transition-transform hover:-translate-y-0.5 shadow-sm border ${theme.border}`}
              >
                View on AniList <Icons.ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-xl z-20">
            <button onClick={() => fetchAniListAndStart(true)} className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full ${theme.cardBg} hover:${theme.inputBg.replace('bg-', '')} ${theme.textMain} font-black transition-colors border ${theme.border} shadow-sm`}>
              <Icons.Refresh className="w-5 h-5" /> Re-run Clash
            </button>
            <button onClick={handleEscape} className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent border border-black/10 hover:bg-black/5 ${theme.textMuted} font-bold transition-colors`}>
              <Icons.Search className="w-5 h-5" /> New Search
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <div className={`min-h-screen ${theme.appBg} ${theme.textMain} font-['Plus_Jakarta_Sans',sans-serif] selection:${theme.primaryBg} overflow-x-hidden flex flex-col relative transition-colors duration-700`}>
        {mediaType === 'MANGA' && (
          <div className="absolute inset-0 pointer-events-none z-0 opacity-100 mix-blend-multiply" style={{ backgroundImage: theme.pattern, backgroundSize: '12px 12px' }} />
        )}

        <AnimatePresence>
          {toast && (
            <motion.div initial={{ opacity: 0, y: -50, x: '-50%' }} animate={{ opacity: 1, y: 24, x: '-50%' }} exit={{ opacity: 0, y: -50, x: '-50%' }} transition={{ ease: "easeOut", duration: 0.3 }} className="fixed top-0 left-1/2 z-50 bg-[#E2D2C1] text-[#2B2927] border border-[#D5C5B5] px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <Icons.Info className="w-5 h-5 opacity-80" /> <span className="font-bold text-sm tracking-wide">{toast}</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        <main className="max-w-6xl w-full mx-auto p-4 md:p-6 lg:p-8 flex-1 flex flex-col relative z-10">
          <AnimatePresence mode="wait">
            <motion.div key={screen} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="flex-1 flex flex-col w-full h-full relative">
              {screen === 'LANDING' && renderLanding()}
              {screen === 'LOADING' && (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                  <div className="relative"><div className={`absolute inset-0 ${theme.primaryBg} rounded-full blur-xl opacity-50 animate-pulse`} /><Icons.Loader className={`w-12 h-12 ${theme.textMuted} animate-spin relative z-10`} /></div>
                  <div className="text-center space-y-2"><h3 className={`text-xl font-black ${theme.textMain} font-['Zen_Maru_Gothic',sans-serif]`}>Gathering {mediaType === 'ANIME' ? 'Anime' : 'Manga'}</h3><p className={`${theme.textMuted} text-sm font-medium`}>Consulting the botanical archives...</p></div>
                </div>
              )}
              {screen === 'BRACKET_OVERVIEW' && renderBracketOverview()}
              {screen === 'ARENA' && renderArena()}
              {screen === 'WINNER' && winner && renderWinner()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800;900&family=Zen+Maru+Gothic:wght@500;700;900&display=swap');
        
        :root {
          --scroll-thumb: ${theme.scrollThumb};
          --scroll-hover: ${theme.scrollThumbHover};
        }
        
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--scroll-thumb); border-radius: 6px; transition: background 0.3s; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: var(--scroll-hover); }
      `}} />
    </>
  );
}