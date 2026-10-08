/**
 * ============================================================================
 * FURNIVO - MASTER PRODUCTS DATABASE
 * Contains structured catalogue data for store products
 * ============================================================================
 */

var FURNIVO_CATALOG_LIST = [
  {
    id: 'oslo-modular-sofa',
    name: 'Oslo Lounge Modular Sofa',
    category: 'sofa',
    categoryLabel: 'Sofas & Sectionals',
    price: 84999,
    originalPrice: 94999,
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Bestseller',
    badgeClass: 'badge-bestseller',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD37fqBm9G7nGpEmZH7hpWlmUYnrgIWM6aqpEkA27fDZwRCOQ31453MwqRYohulNDd5X-HoEzpxF8kr7cnh6_I12OtsDcoDfp8HD2Ki0FflRZ2K82j6O-J_ZBLLIiECPMHvUkf_7022LmIHPiptsxr0ETEhAtASwPv1WlyqrasLE8uqFLuaRpxUrehrn274zaw6A3pltqjIHkl1JR5FW-6IC9QoWCv7mOoC0L_G-AZaepVmJZijm5eY',
    finishes: [
      { name: 'Olive Bouclé', color: '#485340' },
      { name: 'Warm Sand', color: '#E3DAC9' },
      { name: 'Oatmeal Wool', color: '#D5CBBF' }
    ]
  },
  {
    id: 'nova-oak-dining-table',
    name: 'Nova Oak Dining Table',
    category: 'dining',
    categoryLabel: 'Dining',
    price: 58499,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 94,
    badge: 'Solid Oak',
    badgeClass: 'badge-oak',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrYtx8_KbMdaXoL949HmMBroo4m08zmxpp_S-gmv12CLID_kqO3g1UtQhoubB0EDxa5WOBM0KC_kZ1dsVnwvTBhnl_sVu2d5scaF8bnDZwT7wLGXCwu7s1Qjw5BjtpndUhEdetEx2F4GYnVfzACWQC8coqzuzkhF95qZkJaHGVS5bnUDaUycJXiUJHObtIOBwdQt2G-XX5kO6eTr2Y_Zp2vb_vPXD3JQ7CREE_Gt_uqZrm6u6qkg5x',
    finishes: [
      { name: 'Natural European Oak', color: '#C8A168' },
      { name: 'Smoked Dark Walnut', color: '#523A28' }
    ]
  },
  {
    id: 'haven-boucle-chair',
    name: 'Haven Bouclé Lounge Chair',
    category: 'sofa',
    categoryLabel: 'Chairs',
    price: 34999,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 82,
    badge: 'New Arrival',
    badgeClass: 'badge-new',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUh29_S-ozUZX6GXFbyiCK0JUtP1AWs_83JjJf2Vwlk6zPQrePRLeISmQ-cpQTjuclq7KmA6qgHV21BjOmxDS3OoybG9FEe4CPKIMzxSm2qFY0obH-kmKx3IEL1P05KFSM_QQMFlbdHOKKirnqhwT7DgmiSVq5VfjkttsrYwJcI6A72ED6cdJA-U4ABLLkJtqMkaeGS8ihF6IKtzGrL5M08kTA_BbqeVcaqrLTWyG33WA9i3OXN4qI',
    finishes: [
      { name: 'Bouclé Ivory', color: '#EAE7DF' },
      { name: 'Charcoal Wool', color: '#3B3A36' }
    ]
  },
  {
    id: 'aria-japandi-king-bed',
    name: 'Aria Japandi King Platform Bed',
    category: 'bed',
    categoryLabel: 'Beds & Mattresses',
    price: 72999,
    originalPrice: null,
    rating: 5.0,
    reviewsCount: 64,
    badge: 'Japandi Platform',
    badgeClass: 'badge-platform',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjp3IBEZ5W_1kEDA_dCjaU7YMDJXsRBSaChVuvKPDCu-8BG9ynInYN1CjDp4GIGqlhz76yWT69tokbwU2cRn_fwICieLaqBkVlEzulnXZ9GoRoLxZXd8XtYsP-xQnkmxo3OriQOvbdtT6Tho_b1Mf-PArXSkSC99l2rsp-y09bmbQWl9SBEMs0aZa2NhBdl_lvL4sNF5iN5FLvVEhMTXkgc4-98a6nHAZOMH_UsNjt0QpiB-KbcVUA',
    finishes: [
      { name: 'Muted Natural Linen', color: '#D1C7BD' },
      { name: 'Honey Teak', color: '#9E6E38' }
    ]
  },
  {
    id: 'forma-heritage-wardrobe',
    name: 'Forma Heritage Double Wardrobe',
    category: 'bed',
    categoryLabel: 'Wardrobes & Armoires',
    price: 112000,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 41,
    badge: 'Master Crafted',
    badgeClass: 'badge-crafted',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjan1Ow7GH1J604gENMWITWbArFosw2JW2-aBTZ4tpB7wQs1habGZNx1CGTJ7X-d9hvIHwMktf_6B05OgvxZyuH6MvnE-wDmyh6XoUdgT40irInzoUlBM-X_A9qKIu6LvowOEJrwg0j4wjBVVefWvVH75cmWKoVbI2TpxxVDtvoWBO1QN8WPj2S7pWIqOoYkUwDFMcbr6CqlZ6utWgHPqW_A_IYcAHnyVq-w5Qpl8J7jtg2mI7XYgE',
    finishes: [
      { name: 'Smoked Walnut', color: '#4E382A' },
      { name: 'Natural White Ash', color: '#E2D8CC' }
    ]
  },
  {
    id: 'luna-fluted-coffee-table',
    name: 'Luna Fluted Round Coffee Table',
    category: 'dining',
    categoryLabel: 'Tables',
    price: 22499,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 110,
    badge: 'Fluted Oak',
    badgeClass: 'badge-fluted',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-KrgN6duwaqukl8A7RVUBX69bRqxleyCC_fA00nkETCvjeMPzN-9VKBkUBcr87XdczdoHDlbgcXMGXoy2JmGvAk25xPp219Yn_2OJJoK406Hu0iPkhanp58lJlkhyo_OVSA9VMXys1DQ6faaV1yAsXNu5ERwa-8YtYRsXk8_ClLfWAmluSgHUW08bvkziGTG_8vUL58HyDVmyGdyqGTGZVoT8m9VsUUUX5gke49FyrBiOrHnzIzDo',
    finishes: [
      { name: 'Natural Oak', color: '#C29B62' },
      { name: 'Deep Espresso', color: '#271E18' }
    ]
  },
  {
    id: 'smaland-sectional',
    name: 'Smaland Curved Modular Sectional',
    category: 'sofa',
    categoryLabel: 'Living Room Sets',
    price: 124000,
    originalPrice: 139000,
    rating: 4.96,
    reviewsCount: 39,
    badge: 'Curated Set',
    badgeClass: 'badge-curated',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VxT6_TRqitGjnatfh-g1hiRgFVounQ6f3A00XHP48ok94Jm7L1eQ5KUbES8Xh225kKN-Rkxr9-S9K2vUDS_dLFlDsa7QVr_xFpwNAb1M3UI-si0dL4ZVS2PvD1X9QZAnufr4LERRTcKWppDOs2nyaj4zWixq2oYp1ETkvp9UsCRTISQQMa_N2B6u_4e_DDFfXHBw-MzgBwqKP1YeozhVdM1o19qTFdb0aEFrSAbufXRpeW9bhYjvkgZgU',
    finishes: [
      { name: 'Cream Linen', color: '#F4F1EA' },
      { name: 'Sand Tan', color: '#D0C1AF' },
      { name: 'Sage Bouclé', color: '#838F7E' }
    ]
  },
  {
    id: 'koben-armchair',
    name: 'Koben Low-Slung Armchair',
    category: 'chairs',
    categoryLabel: 'Chairs',
    price: 29999,
    originalPrice: 34999,
    rating: 4.87,
    reviewsCount: 28,
    badge: 'Handwoven',
    badgeClass: 'badge-handwoven',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XatnYdDEVUAhOU-ax-Hr4EbGMbD7xDrsh8r-deWQ4HvX2JBomDiHjoNLLaC6Y4lpZ88Wl-nE508yeJd_lST-y8TNMP7HF7QoW69aj45LdK0jAEhXd2HSY_64VDGSR2sCMhee5SstQLYJrR4a-rRyakQs-QbADov5SqEc1aLVa8BrD304RMbD6XjZ9MBhGexxHjdK0b8Ydme2-cikF_stQNnFa-zE2ROUWlWbnzNP8t4mOx7zpfonGNENw',
    finishes: [
      { name: 'Ash / Linen', color: '#D2C9BD' },
      { name: 'Walnut / Wool', color: '#4F3F33' }
    ]
  },
  {
    id: 'komorebi-tables',
    name: 'Komorebi Travertine Nesting Tables',
    category: 'tables',
    categoryLabel: 'Tables',
    price: 38500,
    originalPrice: 42000,
    rating: 4.93,
    reviewsCount: 51,
    badge: 'Organic Form',
    badgeClass: 'badge-organic',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1UfevZh0-dndFSWXgsSmfWjpUmotTzfKUQr3L1OCzclpYTXX0eWip8Ey38Si3lok_HhpFAVENJsKrhu-da61sDVCrQYuyPsFYXvedB0mIWkRVUDQkrYnRBHwkEVkJq8-v0C3LVeH3tFYu3ETgK6OdyM0WpYUD7nhBJzI5FvK8YShDVa04fZeNyDtnQhBXAicuru4vVuFQjB4HeT-9oINYgMATRRq3HLLVM6pbBsjvz2X8GH2SMpJ7bMBhU',
    finishes: [
      { name: 'Warm Travertine', color: '#EAE3D2' },
      { name: 'Honed Limestone', color: '#C9C5BD' }
    ]
  }
];