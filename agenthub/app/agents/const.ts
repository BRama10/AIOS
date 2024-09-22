import { AgentItem, DatasetItem, DatasetsTabItem } from './type'

export const DatasetList: DatasetItem[] = [...Array(30)].map(() => ({
  title: 'fka/awesome-chatgpt-prompts',
  tableType: 'viewer',
  dateTime: '2023-03-07T10:04:18',
  timeTitle: 'Tue, 07 Mar 2023 10:04:18 GMT',
  date: 'Mar 7',
  downloads: '2.05k',
  favorites: '2.81k',
}))

export const AgentList: AgentItem[] = [];
// export const AgentList = 

export const AgentListGenerator: () => Promise<AgentItem[]> = async () => {
    const res = await fetch('/api/get_all_agents/light');
    const res_ = await res.json();

    const values: AgentItem[] = Object.values(res_);

    return values;
}

export const DatasetsTabList: DatasetsTabItem[] = ['Tasks', 'Sizes', 'Sub-tasks', 'Languages', 'Licenses', 'Other']

export const DatasetOther = [
  'Trained with AutoTrain',
  'art',
  'code',
  'finance',
  'medical',
  'music',
  'biology',
  'legal',
  'chemistry',
  'climate',
]

export const DatasetSubTasks = [
  'language-modeling',
  'multi-class-classification',
  'extractive-qa',
  'named-entity-recognition',
  'sentiment-classification',
  'natural-language-inference',
  'open-domain-qa',
  'masked-language-modeling',
  'multi-label-classification',
  'multiple-choice-qa',
  'topic-classification',
  'closed-domain-qa',
  'document-retrieval',
  'text-scoring',
  'closed-book-qa',
  'open-book-qa',
  'tabular-multi-class-classification',
  'tabular-multi-label-classification',
  'entity-linking-retrieval',
  'fact-checking-retrieval',
  'semantic-similarity-scoring',
  'multi-class-image-classification',
  'semantic-similarity-classification',
  'news-articles-summarization',
  'intent-classification',
  'dialogue-modeling',
  'fact-checking',
  'part-of-speech',
  'hate-speech-detection',
  'image-captioning',
  'text-simplification',
  'parsing',
  'sentiment-analysis',
  'sentiment-scoring',
  'multi-input-text-classification',
  'acceptability-classification',
  'dialogue-generation',
  'abstractive-qa',
  'speaker-identification',
  'visual-question-answering',
  'slot-filling',
  'explanation-generation',
  'coreference-resolution',
  'semantic-segmentation',
  'multi-label-image-classification',
  'instance-segmentation',
  'lemmatization',
  'word-sense-disambiguation',
  'entity-linking-classification',
  'open-domain-abstractive-qa',
  'news-articles-headline-generation',
  'keyword-spotting',
  'rdf-to-text',
  'multivariate-time-series-forecasting',
  'audio-emotion-recognition',
  'multiple-choice-coreference-resolution',
  'utterance-retrieval',
  'univariate-time-series-forecasting',
  'face-detection',
  'tabular-single-column-regression',
  'audio-intent-classification',
  'task-planning',
  'language-identification',
  'document-question-answering',
]

export const DatasetsLicense = [
  'mit',
  'apache-2.0',
  'cc-by-4.0',
  'openrail',
  'other',
  'cc-by-sa-4.0',
  'afl-3.0',
  'cc',
  'cc0-1.0',
  'cc-by-sa-3.0',
  'cc-by-nc-sa-4.0',
  'cc-by-nc-4.0',
  'creativeml-openrail-m',
  'gpl-3.0',
  'cc-by-nc-nd-4.0',
  'bigscience-openrail-m',
  'cc-by-2.0',
  'cc-by-3.0',
  'artistic-2.0',
  'wtfpl',
  'unlicense',
  'odc-by',
  'bsd',
  'gpl',
  'agpl-3.0',
  'c-uda',
  'gfdl',
  'odbl',
  'cc-by-nc-sa-3.0',
  'cc-by-nd-4.0',
  'cc-by-nc-3.0',
  'bsd-3-clause',
  'gpl-2.0',
  'bigscience-bloom-rail-1.0',
  'pddl',
  'lgpl-3.0',
  'cc-by-nc-2.0',
  'bsd-2-clause',
  'openrail++',
  'llama2',
  'cc-by-2.5',
  'ms-pl',
  'mpl-2.0',
  'cc-by-nc-sa-2.0',
  'bigcode-openrail-m',
  'bsl-1.0',
  'Apache License 2.0',
  'eupl-1.1',
  'cc-by-nc-nd-3.0',
  'bsd-3-clause-clear',
  'cdla-permissive-2.0',
  'ecl-2.0',
  'isc',
  'lgpl',
  'cdla-permissive-1.0',
  'lgpl-lr',
  'zlib',
  'postgresql',
  'ofl-1.1',
  'osl-3.0',
  'epl-2.0',
  'cdla-sharing-1.0',
  'cc-by-2-0',
  'lgpl-2.1',
  'ncsa',
  'deepfloyd-if-license',
]

export const DatasetLanguages = [
  'English',
  'Chinese',
  'French',
  'Spanish',
  'German',
  'Russian',
  'Portuguese',
  'Japanese',
  'Italian',
  'Arabic',
  'Polish',
  'Korean',
  'Dutch',
  'Vietnamese',
  'Indonesian',
  'Hindi',
  'Turkish',
  'Swedish',
  'Danish',
  'Thai',
  'Bengali',
  'Romanian',
  'Finnish',
  'Catalan',
  'Czech',
  'Hungarian',
  'Slovenian',
  'Greek',
  'Tamil',
  'Persian',
  'Ukrainian',
  'Bulgarian',
  'Telugu',
  'code',
  'Estonian',
  'Urdu',
  'Malayalam',
  'Croatian',
  'Lithuanian',
  'Marathi',
  'Latvian',
  'Swahili',
  'Slovak',
  'Hebrew',
  'Gujarati',
  'Kannada',
  'Norwegian',
  'Basque',
  'Panjabi',
  'Serbian',
  'Maltese',
  'Icelandic',
  'Malay',
  'Afrikaans',
  'Oriya',
  'Tagalog',
  'Irish',
  'Sinhala',
  'Albanian',
  'Welsh',
  'Yoruba',
  'Assamese',
  'Khmer',
  'Nepali',
  'Galician',
  'Amharic',
  'Burmese',
  'Armenian',
  'Kazakh',
  'Georgian',
  'Belarusian',
  'Macedonian',
  'Hausa',
  'Esperanto',
  'Azerbaijani',
  'Igbo',
  'Kinyarwanda',
  'Somali',
  'Xhosa',
  'Kyrgyz',
  'Norwegian Nynorsk',
  'Norwegian Bokmål',
  'Zulu',
  'Uzbek',
  'Breton',
  'Latin',
  'Mongolian',
  'Pashto',
  'Tajik',
  'Kurdish',
  'Tatar',
  'Javanese',
  'Luxembourgish',
  'Ganda',
  'Bosnian',
  'Uyghur',
  'Faroese',
  'Western Frisian',
  'Scottish Gaelic',
  'Sanskrit',
  'Wolof',
  'Lao',
  'Sindhi',
  'Tibetan',
  'Occitan',
  'Yiddish',
  'Haitian',
  'Divehi',
  'Shona',
  'Turkmen',
  'Tswana',
  'Chichewa',
  'Bashkir',
  'Bambara',
  'Malagasy',
  'Māori',
  'Southern Sotho',
  'multilingual',
  'Chuvash',
  'Guaraní',
  'Lingala',
  'Quechua',
  'Sundanese',
  'Interlingua',
  'Kirundi',
  'Tsonga',
  'Twi',
  'Romansh',
  'Akan',
  'Ido',
  'Limburgish',
  'Oromo',
  'sh',
  'Tigrinya',
  'Aragonese',
  'Chamorro',
  'Volapük',
  'Afar',
  'Walloon',
  'Chechen',
  'Kikuyu',
  'Ossetian',
  'Sardinian',
  'Ewe',
  'Cornish',
  'Swati',
  'Abkhaz',
  'Samoan',
  'Dzongkha',
  'Manx',
  'Kongo',
  'Corsican',
  'Interlingue',
  'Kashmiri',
  'Venda',
  'Fijian',
  'Sango',
  'Aymara',
  'Bihari',
  'Bislama',
  'Fula',
  'Northern Sami',
  'Avaric',
  'Inuktitut',
  'Komi',
  'Navajo',
  'Kalaallisut',
  'Tonga',
  'Old Church Slavonic',
  'Marshallese',
  'Nuosu',
  'Pāli',
  'Tahitian',
  'Zhuang',
  'Cree',
  'Hiri Motu',
  'Inupiaq',
  'Kwanyama',
  'Ndonga',
  'iw',
  'Kanuri',
  'Avestan',
  'Nauru',
  'Ojibwe',
  'ns',
  'Southern Ndebele',
  'in',
  'jp',
  'py',
  'me',
  'cn',
  'at',
  '中文',
  'Herero',
  'Luba-Katanga',
  'Northern Ndebele',
  'ji',
  'cz',
  'jb',
  'xx',
  'us',
  'ua',
]