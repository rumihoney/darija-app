// Arabic script alongside common Latin/Arabizi equivalents
// and IPA pronunciation in Moroccan Darija

export const units = {

  unit1: {
    name: "Alphabet",

    letters: [
      {
        arabic: "ا",
        latin: ["a"],
        ipa: ["/aː/"]
      },

      {
        arabic: "ب",
        latin: ["b"],
        ipa: ["/b/"]
      },

      {
        arabic: "ت",
        latin: ["t"],
        ipa: ["/t/"]
      },

      {
        arabic: "ث",
        latin: ["th", "t", "s"],
        ipa: ["/t/", "/s/"],
        note: "Not part of the core Moroccan Arabic consonant inventory; pronunciation depends on the word or borrowing."
      },

      {
        arabic: "ج",
        latin: ["j", "dj"],
        ipa: ["/ʒ/", "/ɡ/", "/d/"]
      },

      {
        arabic: "ح",
        latin: ["7", "h"],
        ipa: ["/ħ/"]
      },

      {
        arabic: "خ",
        latin: ["kh", "5", "x"],
        ipa: ["/χ/"]
      },

      {
        arabic: "د",
        latin: ["d"],
        ipa: ["/d/"]
      },

      {
        arabic: "ذ",
        latin: ["dh", "d", "z"],
        ipa: ["/d/", "/z/"],
        note: "Not part of the core Moroccan Arabic consonant inventory; pronunciation varies by word and register."
      },

      {
        arabic: "ر",
        latin: ["r"],
        ipa: ["/ɾ/", "/r/", "/rˤ/"]
      },

      {
        arabic: "ز",
        latin: ["z"],
        ipa: ["/z/"]
      },

      {
        arabic: "س",
        latin: ["s"],
        ipa: ["/s/"]
      },

      {
        arabic: "ش",
        latin: ["ch", "sh"],
        ipa: ["/ʃ/"]
      },

      {
        arabic: "ص",
        latin: ["s", "ṣ"],
        ipa: ["/sˤ/"]
      },

      {
        arabic: "ض",
        latin: ["d", "ḍ"],
        ipa: ["/dˤ/"]
      },

      {
        arabic: "ط",
        latin: ["t", "ṭ"],
        ipa: ["/tˤ/"]
      },

      {
        arabic: "ظ",
        latin: ["d", "z", "dh", "ẓ"],
        ipa: ["/zˤ/", "/dˤ/"]
      },

      {
        arabic: "ع",
        latin: ["7", "3", "3a"],
        ipa: ["/ʕ/"]
      },

      {
        arabic: "غ",
        latin: ["gh", "8"],
        ipa: ["/ʁ/"]
      },

      {
        arabic: "ف",
        latin: ["f"],
        ipa: ["/f/"]
      },

      {
        arabic: "ق",
        latin: ["2", "q", "g"],
        ipa: ["/q/", "/ɡ/"]
      },

      {
        arabic: "ك",
        latin: ["k"],
        ipa: ["/k/"]
      },

      {
        arabic: "ل",
        latin: ["l"],
        ipa: ["/l/", "/lˤ/"]
      },

      {
        arabic: "م",
        latin: ["m"],
        ipa: ["/m/"]
      },

      {
        arabic: "ن",
        latin: ["n"],
        ipa: ["/n/"]
      },

      {
        arabic: "ه",
        latin: ["h"],
        ipa: ["/h/"]
      },

      {
        arabic: "و",
        latin: ["w", "ou", "u", "o"],
        ipa: ["/w/", "/uː/"]
      },

      {
        arabic: "ي",
        latin: ["y", "i", "ee"],
        ipa: ["/j/", "/iː/"]
      },

      {
        arabic: "ء",
        latin: ["9", "'", "2"],
        ipa: ["/ʔ/"]
      }
    ]
  }

};


/*
Darija does not have one universally standardized Latin/Arabizi
writing system. Spellings can vary depending on region, speaker,
and influence from Amazigh languages, French, English, or Spanish.

The documented number convention used as the primary
mapping in this dataset is:

2 = ق
3 = ح
7 = ع
9 = ء

Alternative spellings are included so that learners
are exposed to variation rather than being taught that only one
Latin spelling is valid. This is not a prescriptivist app

IPA represents Moroccan Darija pronunciation rather than simply
copying Modern Standard Arabic pronunciation.
*/